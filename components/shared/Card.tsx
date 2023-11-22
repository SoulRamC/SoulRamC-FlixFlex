"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import CircularRating from "./CircularRating";

interface Props {
  id?: number;
  rating?: number;
  imagePath: string;
  cardType: "details" | "display";
  cardMedia: "movie" | "tv";
}

function Card({ id, rating, imagePath, cardType, cardMedia }: Props) {
  const router = useRouter();
  let imageUrl = "";
  if (!imagePath) {
    imageUrl = "/assets/no-poster.png";
  } else {
    imageUrl = `https://image.tmdb.org/t/p/w500${imagePath}`;
  }

  return (
    <div
      onClick={
        cardType === "display"
          ? () => router.push(`/${cardMedia}/${id}`)
          : (undefined as any)
      }
      className={`flex ${
        cardType === "display" ? "hover:scale-105 hover:cursor-pointer" : ""
      } transition transform duration-300 ease-out rounded-lg flex-col items-center max-w-[40vw] max-sm:max-w-[75vw]`}
    >
      <div
        className={`relative w-full ${
          cardType === "details" ? "h-[55vh]" : "h-[40vh]"
        } rounded-lg mb-2 shadow-lg`}
      >
        <Image
          width={500}
          height={500}
          src={imageUrl}
          alt="moviePoster"
          className="w-full h-full rounded-lg object-cover"
        />
        {rating ? (
          <CircularRating
            pageType="display"
            rating={rating || 0}
          ></CircularRating>
        ) : cardType === "display" ? (
          <CircularRating pageType="display" rating={0}></CircularRating>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
