import HeroSection from "@/components/homePage/Hero";
import SeriesOnDisplay from "@/components/homePage/SeriesOnDisplay";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { updateUser } from "../../lib/actions/user.action";
export default async function Home() {
  const user = await currentUser();
  if (user) await updateUser({ userId: user.id });
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
