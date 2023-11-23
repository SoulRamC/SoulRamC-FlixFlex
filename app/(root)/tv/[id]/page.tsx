import DetailsBanner from "@/components/details/DetailsBanner";
import FavoriteButton from "@/components/shared/FavoriteButton";
import fetchMoviesTvData from "@/lib/actions/tmdb.action";
import {
  deleteFavoriteSeries,
  isSeriesInUserFavorites,
  updateFavoriteSeries,
} from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const endpoint = `tv/${params.id}`;
  const user = await currentUser();
  if (!user) return null;
  const query = "append_to_response=videos";
  const movieData = (await fetchMoviesTvData({ endpoint, query })) || [];
  const backgroundImage = `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`;

  const seriesItem: any = {
    id: params.id,
    rating: movieData.vote_average,
    imagePath: movieData.poster_path,
  };

  const isFavorite = await isSeriesInUserFavorites({
    userId: user?.id,
    seriesId: parseInt(params.id),
  });
  const addToFavorites = async () => {
    "use server";
    if (!isFavorite) {
      ("use server");
      await updateFavoriteSeries({ userId: user?.id, series: seriesItem });
    } else {
      ("use server");
      await deleteFavoriteSeries({
        userId: user?.id,
        seriesId: parseInt(params.id),
      });
    }
  };

  return (
    <div className="w-[100vw] relative h-full flex flex-col justify-center items-center">
      <div
        className="w-full bg-cover inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-10 fixed h-full z-[-1]"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <section className="h-[80vh] relative w-full flex items-center justify-start">
        <DetailsBanner movieData={movieData} mediaType="tv">
          <FavoriteButton
            isFavorite={isFavorite}
            handleAddToFavorites={addToFavorites}
          ></FavoriteButton>
        </DetailsBanner>
      </section>
    </div>
  );
}

export default page;
