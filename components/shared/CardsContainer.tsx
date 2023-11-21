import fetchMoviesTvData from "@/lib/actions/movies.action";
import React from "react";
interface Props {
  header: string;
  endpoint: string;
  query: string;
}
import Card from "./Card";

async function CardContainer({ header, endpoint, query }: Props) {
  let moviesData = await fetchMoviesTvData({ endpoint, query });

  let movies = Array.isArray(moviesData.results)
    ? moviesData.results.slice(0, 6)
    : [];

  return (
    <section className="flex flex-col gap-5 max-w-[90vw] w-[90vw]">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-200">{`${header}`}</h1>
      </div>
      <div className="flex flex-row gap-5 flex-wrap justify-center">
        {movies.length === 0 ? (
          <p>No movies found, please try again later</p>
        ) : (
          movies.map((movie: any) => (
            <Card key={movie.id} imagePath={movie.poster_path} />
          ))
        )}
      </div>
    </section>
  );
}
export default CardContainer;
