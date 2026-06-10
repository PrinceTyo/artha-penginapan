import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

export default function Location() {
  return (
    <section
      className="bg-gray-100 px-4 md:px-20 py-14 scroll-mt-36"
      id="location"
    >
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="px-8 py-14 h-96 bg-white w-full lg:w-[30%] space-y-4 shadow-sm">
          <h2 className="text-3xl">Location & Maps</h2>
          <span className="flex items-start gap-1">
            <IoLocationOutline className="size-7" /> Forest View Road No. 8 Pine
            Valley, Banyuwangi, East Java
          </span>
          <p className="mt-8">
            Located near scenic landscapes and natural attractions, our property
            provides the perfect balance of comfort.
          </p>
          <a href="#properties">
            <button className="cursor-pointer flex items-center gap-2 py-2.5 px-8 bg-primary text-white text-md hover:bg-primary">
              View Location <IoIosArrowForward />
            </button>
          </a>
        </div>
        <div className="w-full lg:w-[70%] shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2250251129876!2d114.2203589741774!3d-8.078517980755175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14b8e1921a729%3A0x3f4be9995a9d7a88!2sBobocabin%20Ijen%2C%20Banyuwangi!5e0!3m2!1sid!2sid!4v1781008480761!5m2!1sid!2sid"
            className="w-full h-96"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
