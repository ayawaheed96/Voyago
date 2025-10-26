import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store/store";
import { cancelReservation } from "../store/reservationsSlice";
import { CircleUser, CircleX } from "lucide-react";
import dayjs from "dayjs";
const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  //   const reservations = useSelector(
  //     (state: RootState) => state.reservations.items
  //   );
  //   console.log("Reservations:", reservations);
  const reservations = [
    {
      id: "1",
      name: "Deluxe Room",
      price: 200,
      date: { checkIn: "2024-07-01", checkOut: "2024-07-05" },
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    {
      id: "2",
      name: "Deluxe Room",
      price: 200,
      date: { checkIn: "2024-07-01", checkOut: "2024-07-05" },
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    {
      id: "3",
      name: "Deluxe Room",
      price: 200,
      date: { checkIn: "2024-07-01", checkOut: "2024-07-05" },
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
  ];
  return (
    <div className="my-34! max-w-3xl md:max-w-11/12 mx-auto! shadow-sm rounded-lg! overflow-hidden border border-[#b5b5b55e]">
      <div className="flex items-center gap-4 mb-8 bg-[#b5b5b5] px-6! py-2! rounded-t-lg!">
        <CircleUser className="w-14 h-14 " color={"#fff"} />
        <div>
          <h2 className="text-xl font-semibold capitalize text-white">
            {user?.name}
          </h2>
          <p className="text-sm text-[#F7F5F5]">{user?.username}</p>
        </div>
      </div>

      <h3 className="text-lg font-medium my-4! text-center text-[#58545a] font-serif">
        My Reservations
      </h3>
      <div className="my-8!">
        {reservations.length === 0 ? (
          <p className="text-gray-500 my-2! text-center">
            You have no reservations yet.
          </p>
        ) : (
          <ul className="space-y-3">
            {reservations.map((r) => (
              <li
                key={r.id}
                className="flex justify-between items-center py-4! px-8! border-t rounded-b-md!"
              >
                <div className="flex items-center gap-2">
                  <img src={r.image} className="w-16 h-16 rounded-sm!" />
                  <div className="flex-1 flex flex-col">
                    <span className="text-xs md:text-sm text-[#58545a] font-serif font-semibold">
                      Name : <span className="font-semibold">{r.name}</span>
                    </span>

                    <span className="text-xs md:text-sm text-[#58545a] font-serif">
                      Date :{" "}
                      <span className="font-semibold">
                        {dayjs(r.date.checkIn).format("MMM DD, YYYY")}
                        {" - "}
                        {dayjs(r.date.checkOut).format("MMM DD, YYYY")}
                      </span>
                    </span>
                    <span className="text-xs md:text-sm text-[#58545a] font-serif">
                      Price : <span className="font-semibold">${r.price}</span>
                    </span>
                  </div>
                </div>
                <button onClick={() => dispatch(cancelReservation(r.id))}>
                  <CircleX className="w-7 h-7 " color={"#ff4d4d"} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
