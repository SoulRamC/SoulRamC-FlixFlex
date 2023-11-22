"use client";
import React, { useEffect, useState } from "react";
import SearchWrapper from "./SearchWrapper";
import ClipLoader from "react-spinners/ClipLoader";
import Image from "next/image";
import PaginationButtons from "../shared/PaginationButtons";

interface MoviesContainerProps {
  search: string;
}

function SearchContainer({ search }: MoviesContainerProps) {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  let url = "";

  if (search === "") {
    url = `https://api.themoviedb.org/3/trending/all/day`;
  } else {
    url = `https://api.themoviedb.org/3/search/multi?query=${search}&include_adult=false&language=en-US&page=${page}`;
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
        let filteredResults;

        // Conditionally filter results if search is not empty
        if (search !== "") {
          filteredResults = data.results.filter(
            (result: any) =>
              result.media_type === "movie" || result.media_type === "tv",
          );
        } else {
          filteredResults = data.results;
        }

        setResults(filteredResults);
        setLoading(false);
      });
  }, [url, search, page]);

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

  if (!results || results.length === 0) {
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
      <PaginationButtons
        search={search}
        page={page}
        handlePageChange={handlePageChange}
      />
      <SearchWrapper movies={results}></SearchWrapper>
      <PaginationButtons
        search={search}
        page={page}
        handlePageChange={handlePageChange}
      ></PaginationButtons>
    </div>
  );
}

export default SearchContainer;
