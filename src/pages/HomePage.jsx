import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { TbDental } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import dental1 from "../assets/dental1.png";
import { PiStarFourFill } from "react-icons/pi";
import Service from "../components/Service";
import WhyChoose from "../components/WhyChoose";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* WHO WE ARE */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-6 mt-[200px] px-8">
        <div className="w-1/2 item-center">
          <div className="flex flex-row gap-2 item-center text-[#15B392]">
            <BsStars className="" />
            <p className="uppercase font-bold">About Us</p>
            <TbDental className="mt-1 font-bold" />
          </div>
          <div>
            <p className="text-4xl font-semibold">
              One Smile at a Time, <br />
              We Build Confidence and Care.
            </p>
          </div>
          <div className="text-justify">
            <p className="mt-4 text-sm w-[500px]">
              Every smile has a story — and we’re here to make yours
              unforgettable. At the heart of our care is a commitment to your
              health, comfort, and confidence. Through personalized dental
              solutions, we help you smile brighter, live healthier, and feel
              your very best, one smile at a time.
            </p>
          </div>
          <div className="flex flex-row gap-2 mt-5">
            <img src={dental1} alt="dental1" className="w-[200px] h-[150px]" />
            <div>
              <div className="flex flex-row gap-2 items-center text-sm mt-4">
                <PiStarFourFill className="text-[#15B392]" />
                <p>Trusted Routine & Specialized Medical Services</p>
              </div>
              <div className="flex flex-row gap-2 items-center text-sm mt-2 ">
                <PiStarFourFill className="text-[#15B392]" />
                <p>Nurturing a Healthier Tomorrow, Today</p>
              </div>
              <div className="flex flex-row gap-2 items-center text-sm mt-2">
                <PiStarFourFill className="text-[#15B392]" />
                <p>Excellence in Care, Every Day</p>
              </div>
              <div className="flex flex-row gap-2 items-center text-sm mt-2">
                <PiStarFourFill className="text-[#15B392]" />
                <p>Raising the Standard in Healthcare</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row w-[200px] mt-6 item-center  gap-2 bg-black rounded-full text-white p-2 pr-4">
            <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl" />
            <p> read more </p>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="relative w-fullh-auto">
            {/* Larger background image */}
            <img
              src="https://images.pexels.com/photos/6627533/pexels-photo-6627533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="photo"
              className="w-full md:w-[500px] h-[350px] md:h-[350px] object-cover  rounded-4xl "
            />
            {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
            {/* Smaller image positioned over the larger one */}
            <img
              src="https://images.pexels.com/photos/6627477/pexels-photo-6627477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="photo"
              className="absolute w-[200px] md:w-[400px] h-[300px] md:h-[300px] object-cover top-12 md:top-50 -left-20 md:right-80 border-[5px] md:border-[10px] border-white shadow-lg  rounded-4xl"
            />
          </div>
        </div>
      </div>
      <Service />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default HomePage;
