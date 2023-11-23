import React from "react";
import CardsContainer from "../shared/CardsContainer";
function MediaOnDisplay() {
  return (
    <div className="flex flex-col gap-10 pb-5">
      <CardsContainer
        header="Trending Movies"
        endpoint={`trending/movie/day`}
        query="language=en-US"
        cardMedia="movie"
      />
      <CardsContainer
        header="Popular Movies"
        endpoint={`movie/popular`}
        query="language=en-US"
        cardMedia="movie"
      />
      <CardsContainer
        header="Trending TV-Series"
        endpoint={`trending/tv/day`}
        query="language=en-US"
        cardMedia="tv"
      />
      <CardsContainer
        header="Popular TV-Series"
        endpoint={`tv/popular`}
        query="language=en-US"
        cardMedia="tv"
      />
    </div>
  );
}

export default MediaOnDisplay;
