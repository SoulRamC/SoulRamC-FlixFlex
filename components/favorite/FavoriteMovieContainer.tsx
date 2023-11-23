import React from "react";
import Card from "../shared/Card";
interface FavoriteMovieContainerProps {
  movie: any;
  mediaType: "movie" | "tv";
}
function FavoriteMovieContainer({
  movie,
  mediaType,
}: FavoriteMovieContainerProps) {
  return (
    <div>
      <Card
        id={movie.id}
        cardMedia={mediaType}
        cardType="display"
        rating={movie.rating}
        imagePath={movie.imagePath}
      ></Card>
      {/*<div>
        <h3>{movie}</h3>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>*/}
    </div>
  );
}

export default FavoriteMovieContainer;
