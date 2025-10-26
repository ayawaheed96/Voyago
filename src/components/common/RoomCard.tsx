import { useState, type FC } from "react";
import type { Room } from "../../types/types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import BookModal from "./BookModal";

interface RoomCardProps {
  room: Room;
}

const RoomCard: FC<RoomCardProps> = ({ room }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { id, name, image, type, price, available } = room;
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div
      key={id}
      className="max-w-xs bg-white shadow-sm rounded-lg! overflow-hidden border border-[#b5b5b55e] hover:shadow-md transition-all duration-300 "
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={() => navigate(`/rooms?id=${id}`)}
      />

      {/* Content */}
      <div className="p-4!">
        <h3 className="text-lg font-semibold text-gray-800 cursor-pointer">
          {name}
        </h3>
        <p className="text-gray-500 text-sm mt-1 capitalize">{type} </p>
        <div className="flex items-center justify-between">
          <p className="text-gray-600 text-sm">
            <span className="text-lg font-bold text-gray-800">${price}</span>
            <span className="text-xs text-gray-500 ml-1">/ night</span>
          </p>

          {user && (
            <div
              onClick={() => setIsOpen(true)}
              className={`p-2! border  rounded-md! text-sm font-medium   transition-all!
          ${
            available
              ? "cursor-pointer border-[#9d76b7] text-[#9d76b7] hover:bg-[#9d76b7] hover:text-white"
              : "bg-transparent text-[#B5B5B5] border-[#b5b5b55e]"
          }
          `}
            >
              Book
            </div>
          )}
        </div>
      </div>
      <BookModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        room={{ id, price, name, image }}
      />
    </div>
  );
};

export default RoomCard;
