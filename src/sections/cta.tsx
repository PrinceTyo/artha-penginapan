import { FaWhatsapp } from "react-icons/fa";

export default function Cta() {
  return (
    <section
      className="relative h-116 md:h-96 flex items-center justify-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/00/28/0e/00280e752377c13fc2c9910e4fd0012a.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="z-10 text-center flex flex-col justify-center items-center space-y-4">
        <p className="text-white tracking-widest text-md uppercase">
          Artha Hotel
        </p>
        <h1 className="text-3xl md:text-5xl text-white font-medium">
          Nature & Comfort
        </h1>
        <a href="#properties">
          <button className="mt-2 cursor-pointer flex items-center gap-3 py-3 px-8 bg-tranparent border border-white text-white text-md hover:bg-primary hover:border hover:border-primary transition duration-200">
            Book Now <FaWhatsapp className="size-5" />
          </button>
        </a>
      </div>
    </section>
  );
}
