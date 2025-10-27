import RoomsSection from "./RoomSection";

const HeroSection = () => {
  return (
    <div className={`w-full flex flex-col gap-4 `}>
      <div
        className={`flex flex-col items-start justify-center px-10 md:px-16 lg:px-24 xl:px-18 text-white bg-[url("/src/assets/hotelImg-2.jpg")] bg-no-repeat bg-cover bg-center h-screen`}
      >
        <p className=" text-2xl md:text-5xl md:leading-[50px] font-bold md:font-extrabold  max-w-2xs md:max-w-xl mt-50 md:mt-40 font-serif ">
          A Brand New Hotel Beyond Ordinary
        </p>
        <p className="max-w-xs md:max-w-lg mt-4  bg-[#ada6ad2c] rounded-xl  text-sm md:text-base p-3 ">
          Book Your Summer Holidays With Voyago Hotel
          <br /> BOOKING Book Your Summer Holidays With Voyago HOTEL
        </p>
      </div>
      <RoomsSection />
    </div>
  );
};

export default HeroSection;
