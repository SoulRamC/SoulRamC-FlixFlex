"use client";
import React, { useEffect, useState } from "react";
import MediaWrapper from "./MediaWrapper";
import SearchBar from "../shared/SearchBar";
import ClipLoader from "react-spinners/ClipLoader";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import PaginationButtons from "../shared/PaginationButtons";

interface MoviesContainerProps {
  search: string;
  mediaType: "movie" | "tv";
}

function MediaContainer({ search, mediaType }: MoviesContainerProps) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let url = "";

  if (search === "") {
    url = `https://api.themoviedb.org/3/${mediaType}/popular?language=en-US&page=${page}`;
  } else {
    url = `https://api.themoviedb.org/3/search/${mediaType}?query=${search}&include_adult=false&language=en-US&page=${page}`;
  }

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.TMDB_API_KEY || "",
      },
      cache: "no-cache",
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, [url]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0) {
      setPage(newPage);
    }
  };

  if (loading) {
    return (
      <div className="w-screen h-full flex flex-col items-center">
        <ClipLoader color="#ff0000" loading={loading} size={50} />
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return (
      <div className="w-screen h-full flex flex-col items-center">
        <h1 className="text-4xl">No Result Found</h1>
        <Image
          src="/assets/no-results.png"
          alt="No results"
          width={200}
          height={200}
        />
      </div>
    );
  }

  return (
    <div className="w-screen h-full flex flex-col items-center">
      <PaginationButtons page={page} handlePageChange={handlePageChange} />
      <MediaWrapper mediaType={mediaType} movies={movies}></MediaWrapper>
      <PaginationButtons
        page={page}
        handlePageChange={handlePageChange}
      ></PaginationButtons>
    </div>
  );
}

export default MediaContainer;
