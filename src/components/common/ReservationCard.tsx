import type { FC } from "react";
import type { Reservation } from "../../types/types";
import dayjs from "dayjs";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { cancelReservation } from "../../store/reservationsSlice";

type ReservationProps = {
  reservation: Reservation;
};
const ReservationCard: FC<ReservationProps> = ({ reservation }) => {
  const { id, name, image, date, price } = reservation;
  const dispatch = useDispatch();
  return (
    <li
      key={id}
      className="flex gap-4 justify-between items-center py-2 px-8 shadow-sm border rounded-md last:border-0 transition-all duration-300"
    >
      <div className="flex items-center gap-2">
        <img src={image} className="w-18 h-18 rounded-sm " />
        <div className="flex-1 flex flex-col">
          <span className="text-xs md:text-sm text-[#58545a] font-semibold">
            Name : <span className="font-semibold">{name}</span>
          </span>

          <span className="text-xs md:text-sm text-[#58545a]">
            Date :{" "}
            <span className="font-semibold">
              {dayjs(date.checkIn).format("MMM DD, YYYY")}
              {" - "}
              {dayjs(date.checkOut).format("MMM DD, YYYY")}
            </span>
          </span>
          <span className="text-xs md:text-sm text-[#58545a]">
            Price : <span className="font-semibold">${price}</span>
          </span>
        </div>
      </div>
      <button onClick={() => dispatch(cancelReservation(id))}>
        <Trash2 className="w-7 h-7 " color={"#ff4d4d"} />
      </button>
    </li>
  );
};

export default ReservationCard;
