"use client";
import React, { useState } from "react";
import Card from "../shared/Card";
import TrailerAndRating from "./TrailerAndRating";
import MovieStatus from "./MovieStatus";
import dynamic from "next/dynamic";
interface Props {
  movieData: any;
  mediaType: "movie" | "tv";
}

function DetailsBanner({ movieData, mediaType }: Props) {
  const VideoPlayer = dynamic(() => import("../videoplayer/VideoPlayerPopUp"), {
    ssr: false,
  });
  const videoUrl = movieData?.videos?.results[0]?.key;
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="flex relative w-full h-3/4 pt-10 justify-center text-ellipsis gap-10 items-center">
      <Card
        cardMedia="movie"
        imagePath={movieData?.poster_path}
        cardType={`details`}
      />
      <div className="flex h-full gap-3 flex-col justify-start items-start">
        <h1 className="text-4xl w-[30vw] italic font-bold">
          {mediaType === "tv" ? movieData?.name : movieData?.title}
        </h1>
        <span className="text-lg text-gray-500">{movieData?.tagline}</span>
        <div className="flex gap-3">
          {movieData.genres?.map((genre: any) => (
            <span
              className="text-sm rounded-lg flex items-center h-6 py-1 px-3 text-gray-50 bg-red-500"
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </div>
        <TrailerAndRating
          setShowVideo={setShowVideo}
          rating={movieData.vote_average}
        />
        <div className="flex gap-3 flex-col w-[30vw]">
          <h2 className="text-2xl font-bold">Overview</h2>
          <span className="text-lg text-gray-500">{movieData.overview}</span>
        </div>
        <MovieStatus
          status={movieData.status}
          mediaType={mediaType}
          releaseDate={
            mediaType === "movie"
              ? movieData.release_date
              : movieData.last_air_date
          }
          RunTime={
            mediaType === "movie"
              ? movieData.runtime
              : movieData?.seasons.length
          }
        ></MovieStatus>
        <div
          className={`absolute top-10 left-96 h-full w-1/2 flex justify-center items-center ${
            !showVideo && "hidden"
          } `}
        >
          <VideoPlayer
            setShowVideo={setShowVideo}
            videoKeyId={videoUrl}
          ></VideoPlayer>
        </div>
      </div>
    </div>
  );
}

export default DetailsBanner;
