"use client";
import React, { useEffect, useState } from "react";
import Card from "../shared/Card";

function MoviesContainer() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Nemo");
  const [loading, setLoading] = useState(true);
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
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
        console.log(data.results);
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1 className="text-4xl">loading...</h1>;
  if (!movies) return <h1 className="text-4xl">No movies found</h1>;

  return (
    <div className="h-full w-full">
      {movies.map((movie: any) => (
        <Card
          key={movie?.id}
          cardType="display"
          cardMedia="movie"
          id={movie?.id}
          imagePath={movie.poster_path}
        />
      ))}
    </div>
  );
}

export default MoviesContainer;
