import React from "react";
interface MovieStatusProps {
  status: string;
  releaseDate: string;
  RunTime: string;
  mediaType: "movie" | "tv";
}
function MovieStatus({
  status,
  releaseDate,
  RunTime,
  mediaType,
}: MovieStatusProps) {
  return (
    <div className="flex pb-10 gap-5">
      <div>
        <span className="text-md font-bold">
          Status: <span className="text-gray-400 font-normal">{status}</span>
        </span>
      </div>
      <div>
        <span className="text-md font-bold">
          Release Date:
          <span className="text-gray-400 font-normal"> {releaseDate}</span>
        </span>
      </div>
      <div>
        <span className="text-md font-bold">
          {mediaType === "movie" ? "Runtime: " : "Seasons: "}
          <span className="text-gray-400 font-normal">{`${RunTime} ${
            mediaType === "movie" ? "min" : "season"
          }`}</span>
        </span>
      </div>
    </div>
  );
}

export default MovieStatus;
