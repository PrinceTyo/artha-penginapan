import heroImage from "@/assets/hero.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex justify-center lg:justify-start items-center px-4 lg:px-20 text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:max-w-1/2 flex flex-col items-center text-center lg:text-start lg:items-start">
        <h1 className="text-white text-4xl md:text-6xl font-black">
          FIND YOUR LUXURY DREAM HOME
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
          Discover exclusive modern residences designed with elegance, comfort,
          and timeless architecture. Experience premium living spaces tailored
          to match your lifestyle and future aspirations.
        </p>
        <a href="#properties">
          <button className="mt-6 cursor-pointer flex items-center gap-2 py-3 px-8 bg-primary rounded-lg text-white font-medium text-lg">
            Explore More <IoIosArrowForward />
          </button>
        </a>
      </div>
    </section>
  );
}
