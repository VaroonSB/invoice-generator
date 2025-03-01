import { Hero } from "@/components/Hero";
import { HomePageDetails } from "@/components/HomePageDetails";

export default function Home() {
  return (
    <div className="grid grid-rows-[60%_40%] w-full min-h-screen bg-gray-100 p-4">
      <Hero />
      <HomePageDetails />
    </div>
  );
}
