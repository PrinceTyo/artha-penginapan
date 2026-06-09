import { FaStar, FaStarHalfAlt, FaQuoteRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Review() {
  return (
    <section className="px-4 py-20 md:px-20 " id="reviews">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 lg:mb-10">
          <div className="space-y-2 md:space-y-4 mb-5 lg:mb-0">
            <p className="text-gray-600 tracking-widest text-md">
              GENUINE REVIEWS
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Tourists talk about us
            </h1>
          </div>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between lg:justify-center gap-2">
            <div className="flex items-center gap-x-2">
              <h1 className="text-3xl font-semibold">+80K</h1>
              <p className="text-gray-700">Bookings</p>
            </div>
            <div className="flex items-center gap-x-2">
              <h1 className="text-3xl font-semibold lg:ms-4">4.9</h1>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
              <p className="text-gray-700">(+85K reviews)</p>
            </div>
            <div className="flex items-center gap-x-2">
              <CarouselPrevious className="static translate-x-0 translate-y-0 lg:ms-10" />
              <CarouselNext className="static translate-x-0 translate-y-0" />
            </div>
          </div>
        </div>
        <CarouselContent className="-ml-1">
          <CarouselItem className="pl-1 md:basis-auto lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-106 bg-white p-6 space-y-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src="https://moliva.themenix.com/assets/img/avatars/a1.jpg"
                        alt="Avatar Review"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-xl font-semibold">John Doe</h1>
                      <p className="text-gray-700 text-sm">Halstat, Austria</p>
                    </div>
                  </div>
                  <div>
                    <FaQuoteRight className="w-14 h-14 text-gray-100" />
                  </div>
                </div>
                <blockquote className="italic text-gray-700">
                  Our trip to Moliva was amazing! Nusa Trip Travel Agency
                  organized everything perfectly, from the hotels to the
                  sightseeing spots. I was very impressed and will definitely
                  return!
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfAlt className="text-yellow-500" />
                  </div>
                  <span className="bg-primary rounded-sm py-1 px-1.5 text-white font-medium text-sm">
                    Jun 12 25
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-auto lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-106 bg-white p-6 space-y-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src="https://moliva.themenix.com/assets/img/avatars/a2.jpg"
                        alt="Avatar Review"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-xl font-semibold">Emily Smith</h1>
                      <p className="text-gray-700 text-sm">Roma, Italy</p>
                    </div>
                  </div>
                  <div>
                    <FaQuoteRight className="w-14 h-14 text-gray-100" />
                  </div>
                </div>
                <blockquote className="italic text-gray-700">
                  Our trip to Moliva was amazing! Nusa Trip Travel Agency
                  organized everything perfectly, from the hotels to the
                  sightseeing spots. I was very impressed and will definitely
                  return!
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfAlt className="text-yellow-500" />
                  </div>
                  <span className="bg-primary rounded-sm py-1 px-1.5 text-white font-medium text-sm">
                    Jun 12 25
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-auto lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-106 bg-white p-6 space-y-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src="https://moliva.themenix.com/assets/img/avatars/a3.jpg"
                        alt="Avatar Review"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-xl font-semibold">Alex Mark</h1>
                      <p className="text-gray-700 text-sm">Busan, Korea</p>
                    </div>
                  </div>
                  <div>
                    <FaQuoteRight className="w-14 h-14 text-gray-100" />
                  </div>
                </div>
                <blockquote className="italic text-gray-700">
                  Our trip to Moliva was amazing! Nusa Trip Travel Agency
                  organized everything perfectly, from the hotels to the
                  sightseeing spots. I was very impressed and will definitely
                  return!
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfAlt className="text-yellow-500" />
                  </div>
                  <span className="bg-primary rounded-sm py-1 px-1.5 text-white font-medium text-sm">
                    Jun 12 25
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-auto lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-106 bg-white p-6 space-y-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src="https://moliva.themenix.com/assets/img/avatars/a4.jpg"
                        alt="Avatar Review"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-xl font-semibold">Ariol Deep</h1>
                      <p className="text-gray-700 text-sm">Kyoto, Japan</p>
                    </div>
                  </div>
                  <div>
                    <FaQuoteRight className="w-14 h-14 text-gray-100" />
                  </div>
                </div>
                <blockquote className="italic text-gray-700">
                  Our trip to Moliva was amazing! Nusa Trip Travel Agency
                  organized everything perfectly, from the hotels to the
                  sightseeing spots. I was very impressed and will definitely
                  return!
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfAlt className="text-yellow-500" />
                  </div>
                  <span className="bg-primary rounded-sm py-1 px-1.5 text-white font-medium text-sm">
                    Jun 12 25
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-1 md:basis-auto lg:basis-1/3">
            <div className="p-1">
              <div className="rounded-lg w-full md:w-106 bg-white p-6 space-y-4 shadow-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage
                        src="https://moliva.themenix.com/assets/img/avatars/a3.jpg"
                        alt="Avatar Review"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h1 className="text-xl font-semibold">Alex Mark</h1>
                      <p className="text-gray-700 text-sm">Busan, Korea</p>
                    </div>
                  </div>
                  <div>
                    <FaQuoteRight className="w-14 h-14 text-gray-100" />
                  </div>
                </div>
                <blockquote className="italic text-gray-700">
                  Our trip to Moliva was amazing! Nusa Trip Travel Agency
                  organized everything perfectly, from the hotels to the
                  sightseeing spots. I was very impressed and will definitely
                  return!
                </blockquote>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStarHalfAlt className="text-yellow-500" />
                  </div>
                  <span className="bg-primary rounded-sm py-1 px-1.5 text-white font-medium text-sm">
                    Jun 12 25
                  </span>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
