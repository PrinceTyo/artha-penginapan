import aboutBackground from "@/assets/background-about.png";
import aboutImage1 from "@/assets/about1.png";
import aboutImage2 from "@/assets/about2.png";
import aboutImage3 from "@/assets/about3.png";
import { IoIosArrowForward } from "react-icons/io";

export default function About() {
  return (
    <section
      className="relative min-h-[75vh] flex justify-center"
      id="#about"
      style={{
        backgroundImage: `url(${aboutBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center max-w-5xl gap-x-6">
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl uppercase">
            Welcome to your Mind! Artha Homestay in forest
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit quas nesciunt ipsum aut. Dolorem adipisci dolorum illo
            blanditiis architecto amet. Laboriosam quaerat rerum nesciunt
            possimus deserunt reiciendis sed ipsa quo. Aut voluptatem iure
          </p>
          <p>
            pariatur nisi nihil enim doloribus aspernatur incidunt accusantium
            molestiae fugit, voluptatibus ullam officia mollitia ipsam ab quam,
          </p>
          <a href="#properties">
            <button className="cursor-pointer flex items-center gap-2 py-3 px-8 bg-primary text-white">
              Explore More <IoIosArrowForward />
            </button>
          </a>
        </div>
        <div className="w-1/2 ps-4 flex items-center justify-center gap-1">
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
