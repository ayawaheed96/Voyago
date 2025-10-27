import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useDispatch } from "react-redux";
import useToast from "../../hooks/useToast";
import type { AppDispatch } from "../../store/store";
import { addReservation } from "../../store/reservationsSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Room {
  roomId: string;
  name: string;
  price: number;
  image: string;
}
interface BookModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: Room;
}
const BookModal = ({ room, isOpen, onClose }: BookModalProps) => {
  const toast = useToast();
  const dispatch = useDispatch<AppDispatch>();
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);

  const handleBook = async () => {
    if (!checkIn || !checkOut) {
      return toast.error("Please select both dates");
    }
    const id = Date.now().toString();
    const result = await dispatch(
      addReservation({ ...room, id, date: { checkIn, checkOut } })
    );

    if (addReservation.fulfilled.match(result)) {
      toast.success("Room booked successfully 🎉");
      onClose();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };
  const handleCancel = () => {
    setCheckIn(null);
    setCheckOut(null);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent
        aria-describedby={""}
        className="flex flex-col items-center rounded-lg  bg-[#F7F5F5] px-12  py-8   sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-[#9d76b7] font-serif">{`Booking ${room.name}`}</DialogTitle>
        </DialogHeader>

        <div className="w-full flex flex-col items-center gap-4 mt-2">
          <div className="w-full flex flex-col">
            <label className="text-sm font-medium text-[#9d76b7]">
              Check In
            </label>
            <DatePicker
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
              minDate={new Date()}
              placeholderText="Select Check-in Date"
              className="my-0 w-full"
            />
          </div>

          <div className="w-full flex flex-col">
            <label className="text-sm font-medium text-[#9d76b7]">
              Check Out
            </label>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              minDate={checkIn ?? new Date()}
              placeholderText="Select Check-out Date"
              className="my-0 w-full"
            />
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-4">
          <div
            className="flex-1/2 flex justify-center py-3  px-6  border rounded-md  text-sm md:text-md font-medium  transition-all cursor-pointer border-[#9d76b7] text-[#9d76b7]"
            onClick={handleCancel}
          >
            Cancel
          </div>
          <button
            onClick={handleBook}
            disabled={!checkIn || !checkOut}
            className="flex-1/2 bg-[#9d76b7] text-white rounded-md hover:bg-[#865ca1] text-sm md:text-md font-medium disabled:bg-purple-300"
          >
            Book Now
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookModal;
