import React from "react";
import Card from "../shared/Card";
interface MoviesWrapperProps {
  movies: any[];
  mediaType: "movie" | "tv";
}
function MoviesWrapper({ movies, mediaType }: MoviesWrapperProps) {
  return (
    <section className="flex flex-col gap-5 max-w-[90vw] w-[90vw]">
      <div className="flex flex-row gap-5 flex-wrap justify-center">
        {movies.length === 0 ? (
          <p>No movies found, please try again later</p>
        ) : (
          movies.map((movie: any) => (
            <Card
              key={movie.id}
              id={movie.id}
              rating={movie.vote_average}
              imagePath={movie.poster_path}
              cardType="display"
              cardMedia={mediaType}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default MoviesWrapper;
