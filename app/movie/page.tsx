import MoviesContainer from "@/components/movie/MoviesContainer";
import React from "react";

function page() {
  return (
    <div className="w-[100vw] relative h-full flex flex-col justify-center items-center">
      <section className="h-[40vh] flex justify-center items-center">
        <h1 className="text-6xl">Discover Movies</h1>
      </section>
      <section className="w-[80vw] h-[60vh] flex justify-center items-center">
        <MoviesContainer />
      </section>
    </div>
  );
}

export default page;
