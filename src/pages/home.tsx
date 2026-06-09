import About from "@/sections/about";
import Hero from "@/sections/hero";
import Room from "@/sections/room";
import Amenities from "@/sections/amenities";
import { roomData } from "@/lib/data/roomData";
import { amenitiesData } from "@/lib/data/amenitiesData";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Room {...roomData} />
      <Amenities {...amenitiesData} />
    </>
  );
}
