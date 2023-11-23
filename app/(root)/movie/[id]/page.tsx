import DetailsBanner from "@/components/details/DetailsBanner";
import FavoriteButton from "@/components/shared/FavoriteButton";
import fetchMoviesTvData from "@/lib/actions/movies.action";

import {
  deleteFavoriteMovie,
  getFavoriteMovies,
  isMovieInDatabase,
  updateFavoriteMovies,
} from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const user = await currentUser();
  const endpoint = `movie/${params.id}`;
  const query = "append_to_response=videos";
  const movieData = (await fetchMoviesTvData({ endpoint, query })) || [];
  const backgroundImage = `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`;
  const movieItem = {
    id: params.id,
    rating: movieData.vote_average,
    imagePath: movieData.poster_path,
  };

  const isFavorite = await isMovieInDatabase(parseInt(params.id));
  console.log(isFavorite);
  const addToFavorites = async () => {
    "use server";
    if (!isFavorite) {
      ("use server");
      await updateFavoriteMovies({ userId: user?.id, movie: movieItem });
    } else {
      ("use server");
      await deleteFavoriteMovie({ userId: user?.id, movieId: params.id });
    }
  };
  return (
    <div className="w-[100vw] relative h-full flex flex-col justify-center items-center">
      <div
        className="w-full bg-cover inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-10 fixed h-full z-[-1]"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <section className="h-[80vh] max-sm:pt-20 max-sm:h-full relative w-full flex items-center justify-start">
        <DetailsBanner mediaType="movie" movieData={movieData}>
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
