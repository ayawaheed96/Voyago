import { useAuth } from "../../hooks/useAuth";

const HeroSection = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div
      className={`flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/hotelImg-2.jpg")] bg-no-repeat bg-cover bg-center h-screen `}
    >
      <p className=" text-2xl md:text-5xl md:leading-[50px] font-bold md:font-extrabold  max-w-2xs md:max-w-xl mt-10! ml-18! font-serif ">
        A Brand New Hotel Beyond Ordinary
      </p>
      <p className="max-w-lg mt-4! bg-black/55 rounded-3xl! text-sm md:text-base md:ml-16! p-3!">
        Book Your Summer Holidays With Voyago Hotel
        <br /> BOOKING Book Your Summer Holidays With Voyago HOTEL
      </p>
    </div>
  );
};

export default HeroSection;
