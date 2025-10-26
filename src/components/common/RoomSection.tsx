import { useEffect, useState } from "react";
import { rooms } from "../../assets/assets";
import FilterSheet from "./FilterSheet";
import RoomCard from "./RoomCard";
import { useDispatch, useSelector } from "react-redux";
import { setRooms } from "../../store/roomsSlice";
import { Spinner } from "./Spinner";
import { selectFilteredRooms } from "../../store/selectors";
import type { RootState } from "../../store/store";

const RoomsSection = () => {
  const dispatch = useDispatch();
  const filteredRooms = useSelector(selectFilteredRooms);

  const [loading, setLoading] = useState(true);
  const reservations = useSelector(
    (state: RootState) => state.reservations.items
  );
  useEffect(() => {
    console.log("Reservations in RoomCard:", reservations);
  }, [reservations]);
  useEffect(() => {
    const interval = setTimeout(() => setLoading(false), 1000);
    dispatch(setRooms(rooms));
    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-6 my-12!">
      {/* Intro Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-[#151617d2]">
          WELCOME TO Voyago
        </h2>

        {/*Divider */}
        <div className="flex items-center justify-center gap-4 my-4">
          <span className="h-px w-12 bg-gray-300"></span>
          <span className="text-gray-400 text-lg font-serif">✦</span>
          <span className="h-px w-12 bg-gray-300"></span>
        </div>

        {/* Breif */}
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base my-4!">
          Discover comfort, elegance, and unforgettable hospitality at Voyago.
          Whether you're traveling for relaxation, work, or adventure, our rooms
          are designed to provide a premium stay tailored to your needs. Enjoy
          modern amenities, tranquil spaces, and exceptional service — all
          crafted to help you feel right at home.
        </p>
      </div>

      {loading ? (
        <div className="w-full flex items-center justify-center">
          {" "}
          <Spinner />
        </div>
      ) : (
        <>
          <div className="w-full px-8! flex items-center justify-end ">
            <FilterSheet />
          </div>
          <div className="w-full px-8! grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center ">
            {filteredRooms.length === 0 && (
              <p className="text-[#58545a] text-sm  md:text-2xl font-bold col-span-full text-center my-8!">
                Opps !!... No rooms match the selected filters.
              </p>
            )}
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default RoomsSection;
