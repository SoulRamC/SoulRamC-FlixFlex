import DetailsBanner from "@/components/details/DetailsBanner";
import Card from "@/components/shared/Card";
import fetchMoviesTvData from "@/lib/actions/movies.action";
import React from "react";

async function page({ params }: { params: { id: string } }) {
  const endpoint = `movie/${params.id}`;
  const query = "append_to_response=videos";
  const movieData = (await fetchMoviesTvData({ endpoint, query })) || [];
  const backgroundImage = `https://image.tmdb.org/t/p/original${movieData.backdrop_path}`;

  return (
    <div className="w-[100vw] relative h-full flex flex-col justify-center items-center">
      <div
        className="w-full bg-cover inset-0 bg-gradient-to-t from-transparent to-gray-900 opacity-10 fixed h-full z-[-1]"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      ></div>
      <section className="h-[80vh] relative w-full flex items-center justify-start">
        <DetailsBanner mediaType="movie" movieData={movieData}></DetailsBanner>
      </section>
    </div>
  );
}

export default page;
