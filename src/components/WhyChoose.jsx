import React from "react";
import Dental4 from "../assets/dental4.png";
import { TbDental } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { FaUserDoctor } from "react-icons/fa6";
import { GiToothbrush } from "react-icons/gi";
import { MdPayments } from "react-icons/md";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";

const WhyChoose = () => {
  return (
    <div className="px-7 py-7 bg-[#15B392] text-white">
      {/* top section */}
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView={"visible"}
        className="text-center"
      >
        {/* Centered Flex Row */}
        <div className="flex justify-center mt-9">
          <div className="flex flex-row gap-2 items-center text-white">
            <BsStars />
            <p className="uppercase font-bold text-white">OUR SERVICES</p>
            <TbDental className="mt-1 font-bold" />
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-1">
          <p className="text-5xl font-semibold">Diagnosis of Dental Diseases</p>
          <p className="mt-6">
            We are committed to sustainability. eco-friendly initiatives.
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col md:flex-row gap-6">
        {/* left section */}
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          className="w-full md:w-1/3"
        >
          <div className="flex flex-row gap-6 items-center mt-[60px]">
            <div className="w-full md:w-[300px] md:text-end">
              <p className="capitalize text-xl font-bold">experienced doctor</p>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry
                and the.
              </p>
            </div>
            <FaUserDoctor className="text-4xl" />
          </div>

          <div className="flex flex-row gap-6 items-center mt-[50px]">
            <div className="w-[300px] md:text-end">
              <p className="capitalize text-xl font-bold">personalized care</p>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry
                and the.
              </p>
            </div>
            <GiToothbrush className="text-6xl" />
          </div>
          <div className="flex flex-row gap-6 items-center mt-[50px]">
            <div className="w-[300px] md:text-end">
              <p className="capitalize text-xl font-bold">
                flexible payment options
              </p>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry
                and the.
              </p>
            </div>
            <MdPayments className="text-4xl" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className=" w-full md:w-1/3 bg-white/30 rounded-full my-9"
        >
          <img src={Dental4} alt="dental" />
        </motion.div>
        {/* right section */}
        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          className="w-full md:w-1/3"
        >
          <div className="flex flex-row gap-6 items-center mt-[50px]">
            <MdPayments className="text-4xl" />
            <div className="w-[300px] text-start">
              <p className="capitalize text-xl font-bold">
                flexible payment options
              </p>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry
                and the.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center mt-[50px]">
            <MdPayments className="text-4xl" />
            <div className="w-[300px] text-start">
              <p className="capitalize text-xl font-bold">
                flexible payment options
              </p>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry
                and the.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-6 items-center mt-[50px]">
            <MdPayments className="text-4xl" />
            <div className="w-[300px] text-start">
              <p className="capitalize text-xl font-bold">
                flexible payment options
              </p>
              <p>
                The goal of our clinic is to provide friendly, caring dentistry
                and the.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChoose;
