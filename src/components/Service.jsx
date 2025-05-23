import React from "react";
import { TbDental } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import dental1 from "../assets/dental1.png";
import { PiStarFourFill } from "react-icons/pi";
import dental2 from "../assets/scaling1.png";
import dentalimplant from "../assets/dental-implant.png";
import toothwhitening from "../assets/tooth-whitening.png";
import dentalimplant1 from "../assets/dental-implant1.png";
import rootcanal from "../assets/endodontist.png";
import toothextraction from "../assets/tooth-extraction.png";
import DentalCrowns from "../assets/dental-care.png";
import Orthodontics from "../assets/straighten.png";

const Service = () => {
  return (
    <div className="py-9 mt-[100px] px-7 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100">
      <div className="text-center">
        {/* Centered Flex Row */}
        <div className="flex justify-center">
          <div className="flex flex-row gap-2 items-center text-[#15B392]">
            <BsStars />
            <p className="uppercase font-bold">OUR SERVICES</p>
            <TbDental className="mt-1 font-bold" />
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-4">
          <p className="text-4xl font-semibold">
            Exceptional Dental & Medical <br />
            Services, Together for You
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6 mt-6">
        <div className="bg-white text-center flex flex-col items-center py-7 rounded-md  hover:shadow-[0_0_20px_rgba(5,18,41,0.2)] transition-shadow duration-300">
          <img
            src={dental2}
            alt="image1"
            className="h-[100px] w-[100px] bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 p-4 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <p className="py-4 font-bold text-xl">General Dentistry</p>
        </div>
        <div className="bg-white text-center flex flex-col items-center py-7 rounded-md  hover:shadow-[0_0_20px_rgba(5,18,41,0.2)] transition-shadow duration-300">
          <img
            src={dentalimplant}
            alt="dentalimplant"
            className="h-[100px] w-[100px] bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 p-4 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <p className="py-4 font-bold text-xl">Prosthetic Dentistry</p>
        </div>
        <div className="bg-white text-center flex flex-col items-center py-7 rounded-md  hover:shadow-[0_0_20px_rgba(5,18,41,0.2)] transition-shadow duration-300">
          <img
            src={toothwhitening}
            alt="image1"
            className="h-[100px] w-[100px] bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 p-4 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <p className="py-4 font-bold text-xl">Teeth Whitening</p>
        </div>
        <div className="bg-white text-center flex flex-col items-center py-7 rounded-md  hover:shadow-[0_0_20px_rgba(5,18,41,0.2)] transition-shadow duration-300">
          <img
            src={dentalimplant1}
            alt="dentalimplant1"
            className="h-[100px] w-[100px] bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 p-4 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <p className="py-4 font-bold text-xl">Orthodontics </p>
        </div>
        <div className="bg-white text-center flex flex-col items-center py-7 rounded-md  hover:shadow-[0_0_20px_rgba(5,18,41,0.2)] transition-shadow duration-300">
          <img
            src={rootcanal}
            alt="rootcanal"
            className="h-[100px] w-[100px] bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 p-4 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <p className="py-4 font-bold text-xl">Root Canal Treatment</p>
        </div>
        <div className="bg-white text-center flex flex-col items-center py-7 rounded-md  hover:shadow-[0_0_20px_rgba(5,18,41,0.2)] transition-shadow duration-300">
          <img
            src={toothextraction}
            alt="toothextraction"
            className="h-[100px] w-[100px] bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 p-4 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <p className="py-4 font-bold text-xl">Tooth Extraction</p>
        </div>
        <div className="bg-white text-center flex flex-col items-center py-7 rounded-md  hover:shadow-[0_0_20px_rgba(5,18,41,0.2)] transition-shadow duration-300">
          <img
            src={DentalCrowns}
            alt="DentalCrowns"
            className="h-[100px] w-[100px] bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 p-4 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <p className="py-4 font-bold text-xl">
            Dental <br />
            Crowns and Bridges
          </p>
        </div>
        <div className="bg-white text-center flex flex-col items-center py-7 rounded-md  hover:shadow-[0_0_20px_rgba(5,18,41,0.2)] transition-shadow duration-300">
          <img
            src={Orthodontics}
            alt="Orthodontics"
            className="h-[100px] w-[100px] bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 p-4 rounded-full transition-transform duration-300 hover:scale-110"
          />
          <p className="py-4 font-bold text-xl">
            Orthodontics <br />
            (Braces and Invisalign)
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <div className="flex flex-row w-[200px] mt-6 items-center gap-2 bg-black rounded-full text-white p-2 pr-4 hover:bg-[#15B392]">
          <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl hover:bg-black" />
          <p>More Services</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
