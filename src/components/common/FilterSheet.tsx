import React, { useState, type SetStateAction } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ListFilter } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import {
  resetFilters,
  setPriceRange,
  setStatus,
  setType,
} from "../../store/roomsSlice";
type FilterProps = {
  resetSorting: React.Dispatch<SetStateAction<"asc" | "desc" | null>>;
};
const FilterSheet = ({ resetSorting }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { type, priceRange, status } = useSelector(
    (state: RootState) => state.rooms.filters
  );

  const onReset = () => {
    dispatch(resetFilters());
    resetSorting(null);
    setIsOpen(false);
  };

  const roomTypes = [
    { label: "Single", value: "single" },
    { label: "Double", value: "double" },
    { label: "Suite", value: "suite" },
  ];
  const priceRanges = [
    { label: "$0 - $100", value: [0, 100] },
    { label: "$100 - $300", value: [100, 300] },
    { label: "$300 - $500", value: [300, 500] },
  ];
  const roomStatuses = [
    { label: "All", value: "" },
    { label: "Available", value: "available" },
    { label: "Not Available", value: "not-available" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger>
        <ListFilter className="w-6 h-6 cursor-pointer text-[#58545a] transition-colors" />{" "}
      </SheetTrigger>
      <SheetContent
        side="right"
        className="p-0 bg-white backdrop-blur-md rounded-md  overflow-hidden"
      >
        <SheetHeader>
          <SheetTitle className="py-3  text-center text-white font-serif bg-[#9d76b7c9]">
            Rooms Filter
          </SheetTitle>
          <div className="my-4  h-[calc(100vh-7rem)]  p-4 ">
            <div className="flex flex-col gap-6 font-serif">
              {/* Filter by Type */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-[#58545a]">Room Type</label>
                {roomTypes.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-2 cursor-pointer px-2 "
                  >
                    <input
                      type="radio"
                      name="roomType"
                      value={option.value}
                      checked={type === option.value}
                      onChange={(e) => dispatch(setType(e.target.value))}
                      className=" peer sr-only"
                    />
                    <span className="flex items-center justify-center h-5 w-5 rounded-full  border-2 border-gray-300 peer-checked:border-[#9d76b7] transition-colors">
                      <span className="h-2.5 w-2.5 rounded-full  bg-transparent peer-checked:bg-[#9d76b7] transition-colors" />
                    </span>

                    <span className="text-[#58545ade] hover:text-[#58545a]">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
              {/* Filter by status */}
              <div className="flex flex-col gap-2">
                <label className="font-medium text-[#58545a]">
                  Room Status
                </label>
                {roomStatuses.map((stat) => (
                  <label
                    key={stat.value}
                    className="flex items-center gap-2 cursor-pointer px-2 "
                  >
                    <input
                      type="radio"
                      name="status"
                      value={stat.value}
                      checked={status === stat.value}
                      onChange={(e) => dispatch(setStatus(e.target.value))}
                      className=" peer sr-only"
                    />
                    <span className="flex items-center justify-center h-5 w-5 rounded-full  border-2 border-gray-300 peer-checked:border-[#9d76b7] transition-colors">
                      <span className="h-2.5 w-2.5 rounded-full  bg-transparent peer-checked:bg-[#9d76b7] transition-colors" />
                    </span>

                    <span className="text-[#58545ade] hover:text-[#58545a]">
                      {stat.label}
                    </span>
                  </label>
                ))}
              </div>
              {/* Filter by price */}
              <div className="space-y-2">
                <label className="font-medium text-[#58545a]">
                  Price Range
                </label>
                <div className="flex flex-col gap-2">
                  {priceRanges.map((price) => (
                    <label
                      key={price.label}
                      className="flex items-center gap-2 cursor-pointer px-2 "
                    >
                      <input
                        type="radio"
                        name="selectedPriceRange"
                        value={`${price.value}`}
                        checked={
                          priceRange[0] === price.value[0] &&
                          priceRange[1] === price.value[1]
                        }
                        onChange={() => dispatch(setPriceRange(price.value))}
                        className=" peer sr-only"
                      />
                      <span className="flex items-center justify-center h-5 w-5 rounded-full  border-2 border-gray-300 peer-checked:border-[#9d76b7] transition-colors">
                        <span className="h-2.5 w-2.5 rounded-full  bg-transparent peer-checked:bg-[#9d76b7] transition-colors" />
                      </span>

                      <span className="text-[#58545ade] hover:text-[#58545a]">
                        {price.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="w-full flex items-center justify-between px-20  mt-8 ">
                <div
                  onClick={onReset}
                  className={`flex-1 flex justify-center py-2  px-6  border rounded-md  text-sm md:text-md font-medium  transition-all cursor-pointer border-[#9d76b7] text-[#9d76b7]
               `}
                >
                  Reset
                </div>
              </div>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default FilterSheet;
