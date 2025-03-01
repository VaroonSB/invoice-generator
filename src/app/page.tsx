import { Hero } from "@/components/Hero";
import { HomePageDetails } from "@/components/HomePageDetails";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center px-4 pt-4">
      <Hero />
      <HomePageDetails />
    </div>
  );
}
