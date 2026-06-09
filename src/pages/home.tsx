import About from "@/sections/about";
import Hero from "@/sections/hero";
import Room from "@/sections/room";
import { roomData } from "@/lib/data/roomData";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Room {...roomData} />
    </>
  );
}
