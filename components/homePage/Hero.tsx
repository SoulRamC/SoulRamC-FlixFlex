import React from "react";

const HeroSection = () => {
  const heroImage =
    "https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg";

  return (
    <section className="relative">
      <div
        className="h-[60vh] w-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute opacity-100 inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-50 text-center">
          <div>
            <h1 className="text-7xl text-red-600 font-bold mb-4">Hello,</h1>
            <p className="text-2xl text-center mb-1">
              Discover Millions of movies, TV series, and People with one click.
            </p>
            <span className="text-red-600 text-xl font-bold">
              Start your journey!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
