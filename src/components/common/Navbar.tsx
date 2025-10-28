import { useEffect, useState } from "react";
import Logo from "@/assets/logo.svg";
import ColorLogo from "@/assets/color-logo.svg";
import { LogOut, Menu, UserCircle2, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { logout } from "../../store/authSlice";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Sign up", path: "/sign-up" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 flex items-center justify-between transition-all duration-500 z-50 
         ${
           isHomePage
             ? isScrolled
               ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
               : "bg-transparent text-white py-4 md:py-6"
             : "bg-[#9d76b7] text-white py-4 md:py-6"
         }
          `}
    >
      <Link
        to="/"
        className={`flex flex-2/12 items-center justify-start  gap-2 ml-18 `}
      >
        <img
          src={isScrolled && isHomePage ? ColorLogo : Logo}
          alt="logo"
          className="w-8 h-8 "
        />
        <p
          className={` text-3xl font-sans font-bold ${
            isScrolled
              ? isHomePage
                ? "text-[#9d76b7]"
                : "text-white"
              : "text-white"
          }`}
        >
          Voyago
        </p>
      </Link>

      <div className="hidden md:flex basis-2/5 items-center justify-evenly">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            className="group flex flex-col gap-0.5 text-base font-medium font-sans"
          >
            <p
              className={`${
                isScrolled
                  ? isHomePage
                    ? "text-[#9d76b7]"
                    : "text-white"
                  : "text-white"
              }`}
            >
              {link.name}
            </p>
            <div
              className={`${
                isScrolled ? "bg-[#41414159]" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </Link>
        ))}

        {user ? (
          <div className="flex items-center gap-1 transition-all duration-300">
            <div
              className={`px-6  py-2  flex items-center gap-1 rounded-full  font-medium  ml-4 transition-all duration-500  ${
                isScrolled ? "bg-[#F7F5F5]   text-black " : " text-white "
              }`}
            >
              <div className="flex items-center gap-1">
                <UserCircle2
                  className={`w-4 h-4 ${
                    isScrolled ? "text-[#9d76b7]" : "#fff"
                  }`}
                />
                <p
                  className={`font-md capitalize ${
                    isScrolled ? "text-[#9d76b7]" : "#fff"
                  }`}
                >
                  {user.name}
                </p>{" "}
                |
              </div>

              <button
                className="m-0 p-0 flex items-center gap-1"
                onClick={() => dispatch(logout())}
              >
                <LogOut
                  className={`w-4 h-4 font-medium mt-1 ${
                    isScrolled ? "text-black" : "text-white"
                  }`}
                  // color={isScrolled ? "#000" : "#fff"}
                />{" "}
                Log out
              </button>
            </div>
          </div>
        ) : (
          <button
            className={`px-6  py-2   rounded-full  font-medium  ml-4 transition-all duration-500  ${
              isScrolled
                ? "bg-[#9d76b7]  text-white "
                : "bg-[#F7F5F5]   text-[#9d76b7] "
            }`}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <Menu
          className={`w-7 h-7 cursor-pointer ${
            isScrolled ? "text-[#9d76b7]" : "text-white"
          } mr-4`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          // color="#fff"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-6 w-6 cursor-pointer" />
        </button>

        {navLinks.map((link, i) => (
          <Link
            key={i}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-lg"
          >
            {link.name}
          </Link>
        ))}

        {user ? (
          <button
            className={`px-6  py-2  flex items-center gap-1 rounded-full  font-medium  ml-4 transition-all duration-500  bg-black text-white `}
            onClick={() => {
              dispatch(logout());
              setIsMenuOpen(false);
            }}
          >
            Log out
          </button>
        ) : (
          <button
            className="bg-[#9d76b7]  text-white  px-8  py-2.5  rounded-full  cursor-pointer  transition-all duration-500"
            onClick={() => {
              setIsMenuOpen(false);
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
