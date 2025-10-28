import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import ReservationCard from "../components/common/ReservationCard";
import { CalendarX } from "lucide-react";
const Dashboard = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservations.items
  );

  return (
    <div className="my-14 max-w-full mx-auto  overflow-hidden">
      <div className="flex items-center gap-4 bg-[#6a6a6b42] px-18 py-4 rounded-t-lg">
        <h3 className="text-lg font-semibold my-2 text-center text-[#171717BA]">
          My Reservations
        </h3>
      </div>

      <div className="my-10 px-4 md:px-18">
        {reservations.length === 0 ? (
          <div className="my-12 py-4 flex flex-col items-center justify-center gap-2">
            <CalendarX className="w-18 h-18 md:w-24 md:h-24 text-[#817c85cc]" />
            <p className="text-gray-500 text-center font-sm md:font-medium">
              You have no reservations yet.
            </p>
          </div>
        ) : (
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center  py-10">
            {reservations.map((r) => (
              <ReservationCard reservation={r} key={r.id} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
