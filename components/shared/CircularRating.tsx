import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import React from "react";

interface Props {
  rating: number;
  pageType: "details" | "display";
}

function CircularRating({ rating, pageType }: Props) {
  const ratingRounded: number = parseFloat(rating.toFixed(1));

  return (
    <div
      className="rounded-full font-bold h-10 w-10"
      style={{
        position: pageType === "display" ? "fixed" : "static",
        left: pageType === "display" ? "0.5rem" : "auto",
        bottom: pageType === "display" ? "1rem" : "auto",
        backgroundColor: pageType === "display" ? "white" : "transparent",
      }}
    >
      <CircularProgressbar
        value={ratingRounded}
        maxValue={10}
        text={`${ratingRounded}`}
        styles={buildStyles({
          pathColor:
            ratingRounded < 5 ? "red" : ratingRounded < 7 ? "orange" : "green",
          textSize: "30px",
          textColor: pageType === "display" ? "black" : "white",
          pathTransitionDuration: 1,
        })}
      />
    </div>
  );
}

export default CircularRating;
