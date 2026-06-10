import { useEffect, useState } from "react";
import hero1 from "@/assets/hero1.png";
import hero2 from "@/assets/hero2.png";
import hero3 from "@/assets/hero3.png";
import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  const images = [hero1, hero2, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      ))}
      <div className="relative z-10 lg:max-w-2xl top-60 -right-30 text-center lg:text-start lg:items-start">
        <h1 className="text-white text-4xl md:text-5xl font-light">
          Switch Life to Artha
        </h1>
        <h2 className="mt-1 text-white text-4xl md:text-3xl font-light uppercase">
          Sweet home for your mind
        </h2>
        <p className="mt-4 text-gray-300 max-w-xl leading-relaxed">
          Discover exclusive modern residences designed with elegance, comfort,
          and timeless architecture. Experience premium living spaces tailored
          to match your lifestyle and future aspirations.
        </p>
        <a href="#properties">
          <button className="mt-6 cursor-pointer flex items-center gap-2 py-3 px-8 bg-tranparent border border-white text-white text-md hover:bg-primary hover:border hover:border-primary transition duration-200">
            Explore More <IoIosArrowForward />
          </button>
        </a>
      </div>
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2.5">
        {images.map((_, index) => (
          <label
            key={index}
            className="cursor-pointer flex items-center justify-center"
          >
            <input
              type="radio"
              name="hero-slider"
              checked={currentSlide === index}
              onChange={() => setCurrentSlide(index)}
              className="hidden"
            />

            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
              {currentSlide === index && (
                <div className="w-2.5 h-2.5 rounded-full bg-white" />
              )}
            </div>
          </label>
        ))}
      </div>
    </section>
  );
}
