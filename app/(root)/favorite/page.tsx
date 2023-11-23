import FavorieMediaWrapper from "@/components/favorite/FavorieMediaWrapper";
import {
  getFavoriteMovies,
  getFavoriteSeries,
} from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs";
import React from "react";
import { FiHeart } from "react-icons/fi";

async function page() {
  const user = await currentUser();
  if (!user) return null;
  const favoriteMovies = await getFavoriteMovies({ userId: user?.id });
  const favoriteSeries = await getFavoriteSeries({ userId: user?.id });

  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <section className="flex items-center justify-center h-[40vh] w-full">
        <h1 className="text-6xl flex text-center bold">
          Favorites
          <FiHeart className="ml-2 text-red-600" />
        </h1>
      </section>
      <div className="w-1/2 h-1 border-t border-gray-700"></div>
      <section className="flex flex-col gap-3 items-center justify-center h-full w-full px-4">
        <FavorieMediaWrapper
          mediaList={favoriteMovies}
          mediaType="movie"
        ></FavorieMediaWrapper>
        <FavorieMediaWrapper
          mediaList={favoriteSeries}
          mediaType="tv"
        ></FavorieMediaWrapper>
      </section>
    </div>
  );
}

export default page;
