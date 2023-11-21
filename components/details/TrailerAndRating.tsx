"use client";
import React from "react";
import CircularRating from "../shared/CircularRating";
import { FaRegCirclePlay } from "react-icons/fa6";
interface TrailerAndRatingProps {
  rating: number;
  setShowVideo: React.Dispatch<React.SetStateAction<boolean>>;
}
function TrailerAndRating({ rating, setShowVideo }: TrailerAndRatingProps) {
  return (
    <div className="flex items-center justify-center gap-5">
      <CircularRating pageType="details" rating={rating}></CircularRating>
      <button
        onClick={() => setShowVideo(true)}
        className=" flex gap-3 hover:scale-105 transition-all duration-300 ease-in-out items-center rounded-full text-gray-50 px-2 py-1"
      >
        <FaRegCirclePlay size={40}></FaRegCirclePlay>
        <span className="text-lg">Watch Trailer</span>
      </button>
    </div>
  );
}

export default TrailerAndRating;
