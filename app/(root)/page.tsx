import HeroSection from "@/components/homePage/Hero";
import SeriesOnDisplay from "@/components/homePage/SeriesOnDisplay";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
export default async function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <section className="h-full w-screen flex justify-start pb-10">
        <HeroSection />
      </section>
      <section className="w-full h-full flex justify-center pb-10">
        <SeriesOnDisplay />
      </section>
    </div>
  );
}
