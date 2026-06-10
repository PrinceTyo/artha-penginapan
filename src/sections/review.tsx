import { FaStar, FaStarHalfAlt, FaQuoteRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Review = {
  image: string;
  name: string;
  location: string;
  message: string;
  date: string;
};

type ReviewProps = {
  badge: string;
  title: string;
  subtitle: string;
  totalBooking: number;
  review: Review[];
};

export default function Review({
  badge,
  title,
  subtitle,
  totalBooking,
  review,
}: ReviewProps) {
  return (
    <section className="px-4 py-20 md:px-20 scroll-mt-16" id="reviews">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-10">
          <div className="space-y-2 mb-5 lg:mb-0">
            <p className="text-gray-600 tracking-widest text-md uppercase">
              {badge}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold">{title}</h1>
          </div>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between lg:justify-center gap-2">
            <div className="flex items-center gap-x-2">
              <h1 className="text-3xl font-semibold">+{totalBooking}</h1>
              <p className="text-gray-700">{subtitle}</p>
            </div>

            <div className="flex items-center gap-x-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 lg:ms-10 rounded-none" />
              <CarouselNext className="static translate-x-0 translate-y-0 rounded-none" />
            </div>
          </div>
        </div>
        <CarouselContent className="-ml-1">
          {review.map((item, index) => (
            <CarouselItem
              className="pl-1 md:basis-auto lg:basis-1/3"
              key={index}
            >
              <div className="p-1">
                <div className="w-full md:w-106 lg:w-full bg-white p-6 space-y-4 shadow-md border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={item.image} alt={item.name} />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h1 className="text-xl font-semibold">{item.name}</h1>
                        <p className="text-gray-700 text-sm">{item.location}</p>
                      </div>
                    </div>
                    <div>
                      <FaQuoteRight className="w-14 h-14 text-gray-100" />
                    </div>
                  </div>
                  <blockquote className="italic text-gray-700">
                    {item.message}
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStar className="text-yellow-500" />
                      <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <span className="bg-primary py-1 px-1.5 text-white font-medium text-sm">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
