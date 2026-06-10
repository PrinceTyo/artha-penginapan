import About from "@/sections/about";
import Hero from "@/sections/hero";
import Room from "@/sections/room";
import Amenities from "@/sections/amenities";
import Location from "@/sections/location";
import Review from "@/sections/review";
import Cta from "@/sections/cta";
import { roomData } from "@/lib/data/roomData";
import { amenitiesData } from "@/lib/data/amenitiesData";
import { reviewData } from "@/lib/data/reviewData";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Room {...roomData} />
      <Amenities {...amenitiesData} />
      <Location />
      <Cta />
      <Review {...reviewData} />
    </>
  );
}
