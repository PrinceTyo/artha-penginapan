import { useState } from "react";

type Amenities = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type AmenitiesProps = {
  badge: string;
  title: string;
  btnText: string;
  amenities: Amenities[];
};

export default function Amenities({
  badge,
  title,
  btnText,
  amenities,
}: AmenitiesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className="flex flex-col justify-center items-center py-20 scroll-mt-16"
      id="amenities"
    >
      <p className="font-semibold uppercase text-gray-600 text-center">
        {badge}
      </p>
      <h2 className="text-2xl md:text-4xl text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center justify-center gap-4 mt-14">
        {amenities.map((item, index) => {
          const Icon = item.icon;

          const isHovered = hoveredIndex === index;
          const isDefaultActive = index === 1 && hoveredIndex === null;

          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`shadow-md border border-gray-200 px-8 py-6 max-w-90 space-y-4 transition-all duration-300 ${
                index === amenities.length - 1
                  ? "md:col-span-2 md:justify-self-center lg:col-span-1"
                  : ""
              } ${
                isHovered || isDefaultActive
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-gray-200 text-gray-800"
              }`}
            >
              <div className="flex items-center gap-4">
                <Icon
                  className={`size-18 ${
                    isHovered || isDefaultActive ? "text-white" : "text-primary"
                  }`}
                />
                <h3 className="text-2xl">{item.title}</h3>
              </div>
              <p>{item.description}</p>
              <a href="#properties">
                <button
                  className={`mt-2 cursor-pointer py-2 px-8 border transition duration-300 ${
                    isHovered || isDefaultActive
                      ? " border-white text-white text-md hover:bg-white hover:text-primary"
                      : " border-primary text-primary text-md hover:bg-primary hover:text-white"
                  }`}
                >
                  {btnText}
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
