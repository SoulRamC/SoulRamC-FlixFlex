"use server";

import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";

import User from "../models/user.model";

import { connectToDB } from "../mongoose";

interface Params {
  userId: string;
}

export async function updateUser({ userId }: Params): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId }, // Search for the user with the provided userId
      { id: userId }, // Update the id field with the provided userId
      { upsert: true, setDefaultsOnInsert: true },
    );
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

interface MediaParams {
  id: number;
  rating: number;
  imagePath: string | null;
}

async function updateMediaList({
  userId,
  mediaItem,
  mediaType,
}: {
  userId: string;
  mediaItem: MediaParams;
  mediaType: "favoriteMovies" | "favoriteSeries";
}): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      { $push: { [mediaType]: mediaItem } },
      { upsert: true, setDefaultsOnInsert: true },
    );
    revalidatePath(`/${mediaType}/${mediaItem.id}`);
  } catch (error: any) {
    throw new Error(`Failed to update media list: ${error.message}`);
  }
}

export async function updateFavoriteMovies({
  userId,
  movie,
}: {
  userId: string;
  movie: MediaParams;
}): Promise<void> {
  await updateMediaList({
    userId,
    mediaItem: movie,
    mediaType: "favoriteMovies",
  });
}

export async function updateFavoriteSeries({
  userId,
  series,
}: {
  userId: string;
  series: MediaParams;
}): Promise<void> {
  await updateMediaList({
    userId,
    mediaItem: series,
    mediaType: "favoriteSeries",
  });
}

interface FavoriteMedia {
  id: number;
  rating: number;
  imagePath: string | null;
}

interface GetFavoriteParams {
  userId: string;
}

export async function getFavoriteMovies({
  userId,
}: GetFavoriteParams): Promise<FavoriteMedia[]> {
  try {
    connectToDB();

    const user = await User.findOne({ id: userId });

    if (user) {
      return user.favoriteMovies || [];
    }

    return [];
  } catch (error: any) {
    throw new Error(`Failed to get favorite movies: ${error.message}`);
  }
}

export async function getFavoriteSeries({
  userId,
}: GetFavoriteParams): Promise<FavoriteMedia[]> {
  try {
    connectToDB();

    const user = await User.findOne({ id: userId });

    if (user) {
      return user.favoriteSeries || [];
    }

    return [];
  } catch (error: any) {
    throw new Error(`Failed to get favorite series: ${error.message}`);
  }
}

interface DeleteMediaParams {
  userId: string;
  mediaId: number;
  mediaType: "favoriteMovies" | "favoriteSeries";
}

export async function deleteMediaFromList({
  userId,
  mediaId,
  mediaType,
}: DeleteMediaParams): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      { $pull: { [mediaType]: { id: mediaId } } },
    );
    revalidatePath(`/${mediaType}/${mediaId}`);
  } catch (error: any) {
    throw new Error(`Failed to delete media from list: ${error.message}`);
  }
}

export async function deleteFavoriteMovie({
  userId,
  movieId,
}: {
  userId: string;
  movieId: number;
}): Promise<void> {
  await deleteMediaFromList({
    userId,
    mediaId: movieId,
    mediaType: "favoriteMovies",
  });
}

export async function deleteFavoriteSeries({
  userId,
  seriesId,
}: {
  userId: string;
  seriesId: number;
}): Promise<void> {
  await deleteMediaFromList({
    userId,
    mediaId: seriesId,
    mediaType: "favoriteSeries",
  });
}

interface CheckMediaParams {
  mediaId: number;
  mediaType: "favoriteMovies" | "favoriteSeries";
}

export async function isMediaInDatabase({
  mediaId,
  mediaType,
}: CheckMediaParams): Promise<boolean> {
  try {
    connectToDB();

    const userCount = await User.countDocuments({
      [mediaType]: { $elemMatch: { id: mediaId } },
    });

    return userCount > 0;
  } catch (error: any) {
    throw new Error(
      `Failed to check if media is in the database: ${error.message}`,
    );
  }
}

export async function isMovieInDatabase(movieId: number): Promise<boolean> {
  return await isMediaInDatabase({
    mediaId: movieId,
    mediaType: "favoriteMovies",
  });
}

export async function isSeriesInDatabase(seriesId: number): Promise<boolean> {
  return await isMediaInDatabase({
    mediaId: seriesId,
    mediaType: "favoriteSeries",
  });
}
