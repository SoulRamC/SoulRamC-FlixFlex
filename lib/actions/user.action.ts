// File: userUtils.ts

/**
 * @fileOverview
 * This file contains utility functions for managing user data, including CRUD operations for updating, retrieving, and deleting favorite movies and series.
 */

"use server";

// Importing necessary modules and dependencies
import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";
import User from "../models/user.model";
import { connectToDB } from "../mongoose";

// Defining interface for updateUser function parameters
interface Params {
  userId: string;
}

/**
 * Updates or creates a user in the database with the provided userId.
 * @param {Params} params - Object containing the userId.
 * @returns {Promise<void>} - Promise indicating the success or failure of the operation.
 * @throws {Error} - Throws an error if the operation fails.
 */
export async function updateUser({ userId }: Params): Promise<void> {
  try {
    connectToDB();

    // Find and update user in the database
    await User.findOneAndUpdate(
      { id: userId },
      { id: userId },
      { upsert: true, setDefaultsOnInsert: true },
    );
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

// Defining interface for media item parameters
interface MediaParams {
  id: number;
  rating: number;
  imagePath: string | null;
}

/**
 * Updates the user's list of favorite movies or series in the database.
 * @param {Object} params - Object containing userId, mediaItem, and mediaType.
 * @param {string} params.userId - User ID.
 * @param {MediaParams} params.mediaItem - Object containing media item details.
 * @param {"favoriteMovies" | "favoriteSeries"} params.mediaType - Type of media (movies or series).
 * @returns {Promise<void>} - Promise indicating the success or failure of the operation.
 * @throws {Error} - Throws an error if the operation fails.
 */
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

    // Update user's favorite movies or series list in the database
    await User.findOneAndUpdate(
      { id: userId },
      { $push: { [mediaType]: mediaItem } },
      { upsert: true, setDefaultsOnInsert: true },
    );

    // Revalidate the cache for the updated media item path
    revalidatePath(`/${mediaType}/${mediaItem.id}`);
  } catch (error: any) {
    throw new Error(`Failed to update media list: ${error.message}`);
  }
}

/**
 * Updates the user's list of favorite movies in the database.
 * @param {Object} params - Object containing userId and movie.
 * @param {string} params.userId - User ID.
 * @param {MediaParams} params.movie - Object containing movie details.
 * @returns {Promise<void>} - Promise indicating the success or failure of the operation.
 * @throws {Error} - Throws an error if the operation fails.
 */
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

/**
 * Updates the user's list of favorite series in the database.
 * @param {Object} params - Object containing userId and series.
 * @param {string} params.userId - User ID.
 * @param {MediaParams} params.series - Object containing series details.
 * @returns {Promise<void>} - Promise indicating the success or failure of the operation.
 * @throws {Error} - Throws an error if the operation fails.
 */
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

// Interface for favorite media item
interface FavoriteMedia {
  id: number;
  rating: number;
  imagePath: string | null;
}

// Interface for parameters to get favorite media items
interface GetFavoriteParams {
  userId: string;
}

/**
 * Retrieves the user's list of favorite movies from the database.
 * @param {GetFavoriteParams} params - Object containing userId.
 * @returns {Promise<FavoriteMedia[]>} - Promise containing an array of favorite movies.
 * @throws {Error} - Throws an error if the operation fails.
 */
export async function getFavoriteMovies({
  userId,
}: GetFavoriteParams): Promise<FavoriteMedia[]> {
  try {
    connectToDB();

    // Find user in the database and return favorite movies or an empty array if user not found
    const user = await User.findOne({ id: userId });
    return user ? user.favoriteMovies || [] : [];
  } catch (error: any) {
    throw new Error(`Failed to get favorite movies: ${error.message}`);
  }
}

/**
 * Retrieves the user's list of favorite series from the database.
 * @param {GetFavoriteParams} params - Object containing userId.
 * @returns {Promise<FavoriteMedia[]>} - Promise containing an array of favorite series.
 * @throws {Error} - Throws an error if the operation fails.
 */
export async function getFavoriteSeries({
  userId,
}: GetFavoriteParams): Promise<FavoriteMedia[]> {
  try {
    connectToDB();

    // Find user in the database and return favorite series or an empty array if user not found
    const user = await User.findOne({ id: userId });
    return user ? user.favoriteSeries || [] : [];
  } catch (error: any) {
    throw new Error(`Failed to get favorite series: ${error.message}`);
  }
}

// Interface for parameters to delete media from the list
interface DeleteMediaParams {
  userId: string;
  mediaId: number;
  mediaType: "favoriteMovies" | "favoriteSeries";
}

/**
 * Deletes a media item from the user's list of favorite movies or series in the database.
 * @param {DeleteMediaParams} params - Object containing userId, mediaId, and mediaType.
 * @returns {Promise<void>} - Promise indicating the success or failure of the operation.
 * @throws {Error} - Throws an error if the operation fails.
 */
export async function deleteMediaFromList({
  userId,
  mediaId,
  mediaType,
}: DeleteMediaParams): Promise<void> {
  try {
    connectToDB();

    // Delete media item from user's favorite movies or series list in the database
    await User.findOneAndUpdate(
      { id: userId },
      { $pull: { [mediaType]: { id: mediaId } } },
    );

    // Revalidate the cache for the deleted media item path
    revalidatePath(`/${mediaType}/${mediaId}`);
  } catch (error: any) {
    throw new Error(`Failed to delete media from list: ${error.message}`);
  }
}

/**
 * Deletes a favorite movie from the user's list in the database.
 * @param {Object} params - Object containing userId and movieId.
 * @param {string} params.userId - User ID.
 * @param {number} params.movieId - ID of the movie to be deleted.
 * @returns {Promise<void>} - Promise indicating the success or failure of the operation.
 * @throws {Error} - Throws an error if the operation fails.
 */
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

/**
 * Deletes a favorite series from the user's list in the database.
 * @param {Object} params - Object containing userId and seriesId.
 * @param {string} params.userId - User ID.
 * @param {number} params.seriesId - ID of the series to be deleted.
 * @returns {Promise<void>} - Promise indicating the success or failure of the operation.
 * @throws {Error} - Throws an error if the operation fails.
 */
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

// Interface for parameters to check if media is in the favorite list for a specific user
interface CheckUserFavoriteParams {
  userId: string;
  mediaId: number;
  mediaType: "favoriteMovies" | "favoriteSeries";
}

/**
 * Checks if a media item with the provided ID is present in the user's favorite list in the database.
 * @param {CheckUserFavoriteParams} params - Object containing userId, mediaId, and mediaType.
 * @returns {Promise<boolean>} - Promise indicating whether the media item is in the user's favorite list.
 * @throws {Error} - Throws an error if the operation fails.
 */
export async function isMediaInUserFavorites({
  userId,
  mediaId,
  mediaType,
}: CheckUserFavoriteParams): Promise<boolean> {
  try {
    connectToDB();

    // Count the number of users with the provided media item ID in the specified user's favorite list
    const userCount = await User.countDocuments({
      id: userId,
      [mediaType]: { $elemMatch: { id: mediaId } },
    });

    return userCount > 0;
  } catch (error: any) {
    throw new Error(
      `Failed to check if media is in the user's favorites: ${error.message}`,
    );
  }
}

/**
 * Checks if a favorite movie with the provided ID is present in the user's favorite list in the database.
 * @param {Object} params - Object containing userId and movieId.
 * @param {string} params.userId - User ID.
 * @param {number} params.movieId - ID of the movie.
 * @returns {Promise<boolean>} - Promise indicating whether the movie is in the user's favorite list.
 * @throws {Error} - Throws an error if the operation fails.
 */
export async function isMovieInUserFavorites({
  userId,
  movieId,
}: {
  userId: string;
  movieId: number;
}): Promise<boolean> {
  return await isMediaInUserFavorites({
    userId,
    mediaId: movieId,
    mediaType: "favoriteMovies",
  });
}

/**
 * Checks if a favorite series with the provided ID is present in the user's favorite list in the database.
 * @param {Object} params - Object containing userId and seriesId.
 * @param {string} params.userId - User ID.
 * @param {number} params.seriesId - ID of the series.
 * @returns {Promise<boolean>} - Promise indicating whether the series is in the user's favorite list.
 * @throws {Error} - Throws an error if the operation fails.
 */
export async function isSeriesInUserFavorites({
  userId,
  seriesId,
}: {
  userId: string;
  seriesId: number;
}): Promise<boolean> {
  return await isMediaInUserFavorites({
    userId,
    mediaId: seriesId,
    mediaType: "favoriteSeries",
  });
}
