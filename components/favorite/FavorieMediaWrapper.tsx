import React from "react";
import Card from "../shared/Card";
import FavoriteMovieContainer from "./FavoriteMovieContainer";

interface FavorieMediaWrapperProps {
  mediaList: any[];
  mediaType: "movie" | "tv";
}

function FavorieMediaWrapper({
  mediaList,
  mediaType,
}: FavorieMediaWrapperProps) {
  return (
    <div className="flex flex-col gap-4 w-full px-5 justify-center overflow-y-scroll h-full items-start">
      <h2 className="text-center text-2xl font-bold my-2">Favorite Movies</h2>
      <div className="flex flex-wrap gap-4 max-w-[80vw]">
        {mediaList.length > 0 ? (
          mediaList.map((media: any) => (
            <FavoriteMovieContainer
              key={media.id}
              movie={media}
              mediaType={mediaType}
            ></FavoriteMovieContainer>
          ))
        ) : (
          <p>
            No {mediaType === "movie" ? "movies" : "TV shows"} in favorites.
          </p>
        )}
      </div>
    </div>
  );
}

export default FavorieMediaWrapper;
