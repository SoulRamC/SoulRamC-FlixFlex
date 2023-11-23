"use client";
import MediaContainer from "@/components/mediaList/MediaContainer";
import SearchBar from "@/components/shared/SearchBar";
import React, { useState } from "react";

function Page() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-[100vw] max-sm:pt-5 relative h-full flex flex-col justify-center items-center">
      <section className="h-[40vh] pt-10 flex gap-6 flex-col justify-center items-center">
        <h1 className="text-6xl text-center">
          Discover <span className="text-red-500 font-bold">Movies</span>
        </h1>
        <SearchBar setSearch={setSearch} />
      </section>
      <section className="w-[80vw] h-full flex justify-center items-center">
        <MediaContainer mediaType="movie" search={search} />
      </section>
    </div>
  );
}

export default Page;
