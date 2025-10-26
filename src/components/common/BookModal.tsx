import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useDispatch } from "react-redux";
import useToast from "../../hooks/useToast";
import { addReservation } from "../../store/reservationsSlice";

interface Room {
  id: string;
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
  const dispatch = useDispatch();
  const toast = useToast();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const now = new Date().toISOString().split("T")[0];

  const handleBook = () => {
    if (!checkIn || !checkOut) {
      return toast.error("Please select both dates");
    }

    dispatch(addReservation({ ...room, date: { checkIn, checkOut } }));
    // onClose();
    toast.success("Room booked successfully 🎉");
  };
  const handleCancel = () => {
    setCheckIn("");
    setCheckOut("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCancel}>
      <DialogContent
        aria-describedby={""}
        className="flex flex-col items-center rounded-lg! bg-[#F7F5F5] px-12! py-8!  sm:max-w-md"
      >
        <DialogHeader>
          <DialogTitle className="text-center text-[#58545a] font-serif">{`Booking ${room.name}`}</DialogTitle>
        </DialogHeader>

        <div className="w-3/4 flex flex-col gap-4 mt-2">
          <div className="flex flex-col">
            <label className="font-medium text-[#58545a]">Check In</label>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="my-0!"
              min={now}
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium text-[#58545a]">Check Out</label>
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="my-0!"
              min={checkIn || now}
            />
          </div>
        </div>
        <div className="mt-4 flex w-full items-center justify-center gap-4">
          <div
            className="flex-1/2 flex justify-center py-3! px-6! border rounded-md! text-sm md:text-md font-medium  transition-all cursor-pointer border-[#9d76b7] text-[#9d76b7]"
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
