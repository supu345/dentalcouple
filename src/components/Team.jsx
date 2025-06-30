import React from "react";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";
const Team = () => {
  return (
    <div className="mt-[50px] px-5">
      {/* text part */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <div className="flex flex-row gap-2  items-center text-[#15B392]">
          <BsStars className="" />
          <p className="uppercase font-bold">Meet Our Dental Team</p>
          <TbDental className="mt-1 font-bold" />
        </div>

        <p className="text-5xl font-semibold py-7 ">Committed to Your Smile</p>
        <p className="mt-2 text-gray-600 max-w-lg px-4">
          Our experienced dental team is here to make every visit positive and
          personalized. With gentle hands and caring hearts.
        </p>
      </motion.div>
      {/* 4 div */}

      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView={"visible"}
        className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-7 px-6 mt-8"
      >
        <div className="w-full md:w-[290px]   rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6605090/pexels-photo-6605090.jpeg"
              alt="Dr. Sarah Bennett"
              className="w-full md:h-[450px] object-cover"
            />
            <div className="absolute bottom-0 w-[380px] md:w-[260px]  ml-4 md:ml-4 bg-white  mb-8 py-4 text-center rounded-xl">
              <p className="text-lg font-bold text-[#1f2d3d]">
                Dr. Sarah Bennett
              </p>
              <p className="text-sm text-gray-500">Lead Dentist</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[290px] rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/30674582/pexels-photo-30674582.jpeg"
              alt=""
              className="w-full md:h-[450px] object-cover"
            />
            <div className="absolute bottom-0 w-[380px] md:w-[260px]  ml-4 md:ml-4 bg-white mb-8 py-4 text-center rounded-xl">
              <p className="text-lg font-bold text-[#1f2d3d]">Dr. Maya Lin</p>
              <p className="text-sm text-gray-500">Cosmetic Dentist</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[290px]   rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/14438785/pexels-photo-14438785.jpeg"
              alt=""
              className="w-full md:h-[450px]object-cover"
            />
            <div className="absolute bottom-0 w-[380px] md:w-[260px]  ml-4 md:ml-4 bg-white mb-8 py-4 text-center rounded-xl">
              <p className="text-lg font-bold text-[#1f2d3d]">
                Dr. Michael Smith
              </p>
              <p className="text-sm text-gray-500">Dental Hygienist</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[290px]   rounded-2xl shadow-md overflow-hidden">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
              alt=""
              className="w-full md:h-[450px] object-cover"
            />
            <div className="absolute bottom-0 w-[380px] md:w-[260px]  ml-4 md:ml-4 bg-white mb-8 py-4 text-center rounded-xl">
              <p className="text-lg font-bold text-[#1f2d3d]">Dr. Julia Doe</p>
              <p className="text-sm text-gray-500">Pediatric Specialist</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
