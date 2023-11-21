import Image from "next/image";
import React from "react";

interface Props {
  imagePath: string;
}

function Card({ imagePath }: Props) {
  const imageUrl = `https://image.tmdb.org/t/p/w500/${imagePath}`;

  return (
    <div className="flex rounded-lg flex-col items-center max-w-[40vw]">
      <div className="w-full h-[40vh] rounded-lg mb-2 shadow-lg">
        <Image
          width={200}
          height={200}
          src={imageUrl}
          alt="moviePoster"
          className="w-full h-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default Card;
