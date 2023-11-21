import HeroSection from "@/components/homePage/Hero";
import SeriesOnDisplay from "@/components/homePage/SeriesOnDisplay";
import CardsContainer from "@/components/shared/CardsContainer";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <section className="h-full w-screen flex justify-start pb-10">
        <HeroSection />
      </section>
      <section className="w-full h-full flex justify-center pb-10">
        <SeriesOnDisplay />
      </section>
      {/*<section className="w-full h-full flex justify-center">
        <CardsContainer
          header="Trending"
          endpoint={`trending/movie/day`}
          query="language=en-US"
        />
      </section>
      <section className="w-full h-full flex justify-center">
        <CardsContainer
          header="Trending"
          endpoint={`trending/movie/day`}
          query="language=en-US"
        />
      </section>
      <section className="w-full h-full flex justify-center">
        <CardsContainer
          header="Trending"
          endpoint={`trending/movie/day`}
          query="language=en-US"
        />
      </section>
      <section className="w-full h-full flex justify-center">
        <CardsContainer
          header="Trending"
          endpoint={`trending/movie/day`}
          query="language=en-US"
        />
      </section>*/}
    </div>
  );
}
