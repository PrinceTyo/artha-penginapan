import aboutBackground from "@/assets/background-about.png";
import aboutImage1 from "@/assets/about1.png";
import aboutImage2 from "@/assets/about2.png";
import aboutImage3 from "@/assets/about3.png";
import { IoIosArrowForward } from "react-icons/io";

export default function About() {
  return (
    <section
      className="relative min-h-[75vh] flex justify-center scroll-mt-16"
      id="about"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center max-w-5xl gap-12 lg:gap-6 py-20">
        <div className="w-4/5 md:w-3/4 lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start justify-center lg:justify-start text-center lg:text-start">
          <h2 className="text-2xl md:text-4xl uppercase">
            Welcome to your Mind! Artha Homestay in forest
          </h2>
          <p>
            Escape from the noise of everyday life and discover a peaceful
            retreat surrounded by nature. Designed with modern architecture and
            warm interiors, Artha offers a comfortable space where you can enjoy
            every moment with the people who matter most.
          </p>

          <p>
            Wake up to fresh air, stunning scenery, and a calming atmosphere
            that helps you reconnect with yourself.
          </p>
          <a href="#properties">
            <button className="cursor-pointer flex items-center gap-2 py-3 px-8 bg-primary text-white">
              Explore More <IoIosArrowForward />
            </button>
          </a>
        </div>
        <div className="w-4/5 md:w-3/4 lg:w-1/2 ps-4 flex items-center justify-center gap-1">
          <div className="">
            <img src={aboutImage1} alt="About Image" className="w-40 h-60" />
          </div>
          <div className="space-y-1">
            <img src={aboutImage2} alt="About Image" className="w-80" />
            <img src={aboutImage3} alt="About Image" className="w-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
