import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";

const RootLayout = () => {
  return (
    <div className="relative z-10 h-screen w-screen">
      <main className="scrollbar-hide relative m-2 min-w-0 flex-1 overflow-hidden rounded-2xl bg-cards sm:m-4">
        <Navbar />
        <div className="relative h-full w-full overflow-auto">
          <div className="p-4 pt-20">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default RootLayout;
