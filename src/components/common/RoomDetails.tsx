import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  BedDouble,
  Users,
  Wifi,
  Tv,
  Bath,
  MapPin,
  BadgeCheck,
  BadgeAlert,
} from "lucide-react";
import { rooms } from "../../assets/assets";
import "swiper/css";
import "swiper/css/navigation";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { useState } from "react";
import BookModal from "./BookModal";

const RoomDetails = () => {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const room = rooms.find((r) => r.id === id);

  const user = useSelector((state: RootState) => state.auth.user);
  const reservations = useSelector(
    (state: RootState) => state.reservations.items
  );
  const isBooked = reservations.find((res) => res.roomId === id);

  if (!room) {
    return (
      <div className="text-center my-24 text-xl text-gray-500">
        Room not found.
      </div>
    );
  }
  const { name, image, type, price, description, available } = room;

  const images = [
    image,
    "/src/assets/room1.jpg",
    "/src/assets/bathroom.jpg",
    "/src/assets/room2.jpg",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 my-24">
      <Swiper
        navigation
        modules={[Navigation]}
        className="w-10/12 h-[350px] rounded-xl overflow-hidden"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={room.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8">
        <div className="w-full flex items-center justify-between">
          <h1 className="text-xl md:text-3xl font-semibold font-serif text-[#151617d2]">
            {room.name}
          </h1>
          {user && (
            <>
              {
                <div
                  onClick={() => setIsOpen(true)}
                  className={`px-2 md:px-6 py-3 border rounded-md text-md font-medium transition-all 
          ${
            available
              ? isBooked
                ? "bg-purple-200 text-white "
                : "hover:text-[#9d76b7] hover:border-[#9d76b7]  bg-[#9d76b7] text-white hover:bg-transparent cursor-pointer transition-all"
              : "bg-transparent text-[#B5B5B5] border-[#b5b5b55e]"
          }
          `}
                >
                  {isBooked ? "Booked" : "Book Now"}
                </div>
              }
            </>
          )}
        </div>

        <p className="text-gray-500 mt-1 text-sm flex items-center gap-2">
          <MapPin className="w-4 h-4" /> Voyago Hotel • {type} Room
        </p>
        <p className="text-[#9d76b7] text-2xl font-bold mt-3">
          ${price} / night
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-medium text-[#151617d2] mb-2">
          Description
        </h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-lg font-medium text-[#151617d2] mb-4">Amenities</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          <div className="flex items-center gap-3 text-gray-600">
            <BedDouble className="w-5 h-5 text-[#9d76b7]" />
            <span>{type} Bed</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Users className="w-5 h-5 text-[#9d76b7]" />
            <span>2-4 Guests</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Wifi className="w-5 h-5 text-[#9d76b7]" />
            <span>Free Wi-Fi</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Tv className="w-5 h-5 text-[#9d76b7]" />
            <span>Smart TV</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Bath className="w-5 h-5 text-[#9d76b7]" />
            <span>Private Bathroom</span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-medium text-[#151617d2] mb-2">
          Availability
        </h2>
        <p>
          {room.available ? (
            <div className="flex items-center gap-2 ">
              <BadgeCheck className="w-5 h-5 text-[#9d76b7]" />
              <span className=" text-gray-600">Available. </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-gray-600">
              <BadgeAlert className="w-5 h-5 " />
              <span className=" ">Currently Unavailable. </span>
            </div>
          )}
        </p>
      </div>
      <BookModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        room={{ roomId: id!, price, name, image }}
      />
    </div>
  );
};

export default RoomDetails;
