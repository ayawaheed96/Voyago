import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import ReservationCard from "../components/common/ReservationCard";
const Dashboard = () => {
  const reservations = useSelector(
    (state: RootState) => state.reservations.items
  );

  return (
    <div className="my-14 max-w-full mx-auto  overflow-hidden font-serif">
      <div className="flex items-center gap-4 bg-[#6a6a6b42] px-18 py-4 rounded-t-lg">
        <h3 className="text-lg font-semibold my-2 text-center text-[#171717BA]">
          My Reservations
        </h3>
      </div>

      <div className="my-10 px-18">
        {reservations.length === 0 ? (
          <p className="text-gray-500 my-12 py-3 text-center">
            You have no reservations yet.
          </p>
        ) : (
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
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
