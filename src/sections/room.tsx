import { useState } from "react";

type Room = {
  image: string;
  title: string;
  price: string;
  description: string;
};

type RoomProps = {
  room: Room[];
  btnTextFirst: string;
  btnTextSecond: string;
};

export default function Room({ room, btnTextFirst, btnTextSecond }: RoomProps) {
  const [selectedRoom, setSelectedRoom] = useState(room[0]);

  return (
    <section className="scroll-mt-32" id="room">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="w-4/5 md:w-3/4 lg:w-1/2">
          <img
            src={selectedRoom.image}
            alt={selectedRoom.title}
            className="w-full"
          />
        </div>
        <div className="w-4/5 md:w-3/4 lg:w-1/2 lg:pe-40 space-y-4">
          <h2 className="font-light text-3xl">{selectedRoom.title}</h2>
          <p className="text-lg">
            <span className="text-xl text-yellow-600">
              {selectedRoom.price}
            </span>{" "}
            /Night
          </p>
          <p className="mt-10 lg:mt-16">{selectedRoom.description}</p>
          <div className="flex items-center gap-x-4">
            <a href="#properties">
              <button className="mt-2 cursor-pointer py-2 px-7 md:px-8 bg-primary border border-primary text-white text-md transition duration-200">
                {btnTextFirst}
              </button>
            </a>
            <a href="#properties">
              <button className="mt-2 cursor-pointer py-2 px-7 md:px-8 bg-tranparent border border-primary text-primary text-md hover:bg-primary hover:border hover:border-primary hover:text-white transition duration-200">
                {btnTextSecond}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full mt-4 gap-x-2">
        {room.map((item, index) => (
          <a href="#room" onClick={() => setSelectedRoom(item)} key={index}>
            <div
              className={`relative w-full h-44 p-1 overflow-hidden cursor-pointer border transition-all ${
                selectedRoom.title === item.title
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              <img
                src={item.image}
                alt="Room Image"
                className="w-full h-full object-cover"
              />

              <div className="absolute w-fit top-6 right-4 bg-primary text-white px-3 py-2 flex items-center gap-x-3">
                <p className="text-sm">{item.title}</p>
                <span className="text-sm text-yellow-400">{item.price}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
