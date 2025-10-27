import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";

const RootLayout = () => {
  return (
    <div className="relative z-10 h-screen w-screen">
      <main className="scrollbar-hide relative min-w-0 flex-1 overflow-hidden bg-cards">
        <Navbar />
        <div className="relative h-full w-full overflow-auto">
          <div>
            <Outlet />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;
