"use client";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";
interface VideoPlayerPopUpProps {
  setShowVideo: (showVideo: boolean) => void;
  videoKeyId: string;
}

function VideoPlayerPopUp({ setShowVideo, videoKeyId }: VideoPlayerPopUpProps) {
  const hidePopup = () => {
    setShowVideo(false);
  };
  return (
    <div className="block h-full w-full">
      <div className="h-full w-full">
        <div className=" flex justify-center items-center w-full h-full">
          <ReactPlayer
            controls
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${videoKeyId}`}
          />{" "}
          <div className="absolute right-0 top-0">
            <button
              className="m-2 p-2.5 bg-red-500 text-white rounded-full self-start"
              onClick={hidePopup}
            >
              <AiOutlineClose size={25} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayerPopUp;
