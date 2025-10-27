import { useEffect, useMemo, useState } from "react";
import { rooms as roomsArr } from "../../assets/assets";
import FilterSheet from "./FilterSheet";
import RoomCard from "./RoomCard";
import { useDispatch, useSelector } from "react-redux";
import { setRooms } from "../../store/roomsSlice";
import { Spinner } from "./Spinner";
import { selectFilteredRooms } from "../../store/selectors";
import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import Pagination from "./Pagination";

const RoomsSection = () => {
  const roomsPerPage = 8;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const filteredRooms = useSelector(selectFilteredRooms);
  const [sortByPrice, setSortByPrice] = useState<"asc" | "desc" | null>(null);

  const rooms = useMemo(() => {
    let sorted = filteredRooms;
    setTotalItems(sorted.length);
    if (sortByPrice === "asc") {
      sorted = [...sorted].sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "desc") {
      sorted = [...sorted].sort((a, b) => b.price - a.price);
    }
    const startIndex = (currentPage - 1) * roomsPerPage;
    return sorted.slice(startIndex, startIndex + roomsPerPage);
  }, [filteredRooms, sortByPrice, currentPage, roomsPerPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredRooms]);

  useEffect(() => {
    const interval = setTimeout(() => setLoading(false), 500);
    dispatch(setRooms(roomsArr));
    return () => clearTimeout(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-10 my-12 ">
      {/* Intro Section */}
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-serif tracking-wide text-[#151617d2]">
          WELCOME TO Voyago
        </h2>

        {/*Divider */}
        <div className="flex items-center justify-center gap-4 my-4">
          <span className="h-px w-12 bg-gray-300"></span>
          <span className="text-gray-400 text-2xl font-serif">✦</span>
          <span className="h-px w-12 bg-gray-300"></span>
        </div>

        {/* Breif */}
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base ">
          Discover comfort, elegance, and unforgettable hospitality at Voyago.
          Whether you're traveling for relaxation, work, or adventure, our rooms
          are designed to provide a premium stay tailored to your needs. Enjoy
          modern amenities, tranquil spaces, and exceptional service — all
          crafted to help you feel right at home.
        </p>
      </div>
      {/* Rooms Section */}
      {loading ? (
        <div className="w-full flex items-center justify-center">
          {" "}
          <Spinner />
        </div>
      ) : (
        <div className="w-full px-12 md:px-16">
          <div className="w-full flex items-center justify-between ">
            <h2 className="text-2xl md:text-3xl font-medium font-serif text-[#151617d2]">
              Rooms
            </h2>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <ArrowUpNarrowWide
                  className={`w-6 h-6 cursor-pointer hover:text-[#58545a] transition-colors ${
                    sortByPrice === "asc" ? "text-[#151617d2]" : "text-[#ccc]"
                  } `}
                  onClick={() => setSortByPrice("asc")}
                />
                <ArrowDownWideNarrow
                  className={`w-6 h-6 cursor-pointer hover:text-[#58545a] transition-colors ${
                    sortByPrice === "desc" ? "text-[#151617d2]" : "text-[#ccc]"
                  }`}
                  onClick={() => setSortByPrice("desc")}
                />
              </span>
              <FilterSheet resetSorting={setSortByPrice} />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center ">
            {rooms.length === 0 && (
              <p className="text-[#58545a] text-sm  md:text-2xl font-bold col-span-full text-center my-8 ">
                Opps !!... No rooms match the selected filters.
              </p>
            )}
            {rooms.map((room) => (
              <RoomCard room={room} />
            ))}
          </div>
          <Pagination
            pageSize={roomsPerPage}
            setPage={setCurrentPage}
            totalItems={totalItems}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default RoomsSection;
