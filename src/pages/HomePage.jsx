import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
import { TbDental } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import dental1 from "../assets/dental1.png";
import { PiStarFourFill } from "react-icons/pi";
import Service from "../components/Service";
import WhyChoose from "../components/WhyChoose";
import Blogs from "../components/Blogs";
import {
  FaKaaba,
  FaUserCheck,
  FaPrayingHands,
  FaCalendarAlt,
  FaFemale,
  FaTshirt,
  FaClock,
  FaPassport,
  FaChild,
  FaClipboardList,
} from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaHandHoldingMedical } from "react-icons/fa";
import { PiHospitalFill } from "react-icons/pi";
import Tesstimonials from "../components/Tesstimonials";
import MessageForm from "../components/MessageForm";
import Hero from "../components/Hero";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";
import Team from "../components/Team";
const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Default to first item open

  const faqs = [
    {
      question: "Book an Appointement",
      answer:
        "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, ents.",
      icon: <CiCalendarDate />,
    },
    {
      question: "What conditions can manual therapy treat?",
      answer:
        "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, ents.",
      icon: <FaHandHoldingMedical />,
    },
    {
      question: "Exper Care",
      answer:
        "The goal of our clinic is to provide friendly, caring dentistry and the highest level of general, cosmetic, ents.",
      icon: <PiHospitalFill />,
    },
    {
      question: "When is the best time to perform Umrah?",
      answer: "Umrah can be performed year-round...",
      icon: <FaCalendarAlt />,
    },
    {
      question: "Can women perform Hajj or Umrah without a Mahram?",
      answer: "Women under 45 need a Mahram...",
      icon: <FaFemale />,
    },
    {
      question: "What is Ihram, and how do I enter it?",
      answer: "Ihram is a state of spiritual purity...",
      icon: <FaTshirt />,
    },
    {
      question: "How long does Hajj take?",
      answer: "Hajj typically spans 5 to 6 days...",
      icon: <FaClock />,
    },
    {
      question: "What documents are required for a Hajj or Umrah visa?",
      answer: "A valid passport, a completed application...",
      icon: <FaPassport />,
    },
    {
      question: "Can children accompany parents for Hajj or Umrah?",
      answer: "Yes, children can accompany parents...",
      icon: <FaChild />,
    },
    {
      question: "What are the key preparations for Hajj or Umrah?",
      answer: "Preparations include physical fitness...",
      icon: <FaClipboardList />,
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div>
      <Hero />
      {/* WHO WE ARE */}
      <motion.div
        variants={SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col md:flex-row lg:flex-row gap-6 mt-[200px] px-8"
      >
        <div className="w-full md:w-1/2 item-center">
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
            <p className="mt-4 text-sm w-[400px] md:w-[480px] ">
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
        <div className="w-full md:w-1/2 ">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative w-fullh-auto"
          >
            {/* Larger background image */}
            <img
              src="https://images.pexels.com/photos/6627533/pexels-photo-6627533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="photo"
              className="w-full md:w-[500px] h-[330px] md:h-[350px] object-cover  rounded-4xl "
            />
            {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
            {/* Smaller image positioned over the larger one */}
            <img
              src="https://images.pexels.com/photos/6627477/pexels-photo-6627477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="photo"
              className="absolute w-[200px]  h-[300px] sm:w-[200px] sm:h-[160px]  md:w-[400px] md:h-[300px] object-cover top-12  sm:top-16 md:top-50 sm:left-8 md:-left-20  md:right-80 border-[5px] md:border-[10px]  sm:border-[6px] border-white shadow-lg  rounded-4xl"
            />
          </motion.div>
        </div>
      </motion.div>

      <Team />
      <Service />
      <WhyChoose />
      <div className="py-9 px-7 flex flex-col md:flex-row gap-5">
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.pexels.com/photos/6627420/pexels-photo-6627420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="h-[550px] object-cover rounded-4xl"
          />
        </motion.div>
        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          className="w-full md:w-1/2"
        >
          <div className="px-6">
            <div className="flex flex-row mt-9 mb-5">
              <div className="flex flex-row gap-2 items-center text-[#15B392]">
                <BsStars />
                <p className="uppercase font-bold text-[#15B392]">
                  OUR SERVICES
                </p>
                <TbDental className="mt-1 font-bold" />
              </div>
            </div>
            <p className="text-5xl font-bold mb-6">
              <span className="text-[#15B392]"> What We Do for</span> Your Teeth
            </p>
            <p className="mb-6">
              We are committed to sustainability. Our clinic practices
              eco-friendly initiatives like digital records to reduce paper
              waste and energy-efficient equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 relative">
            {faqs.slice(0, 3).map((faq, index) => (
              <div
                key={index}
                className="border border-[#15B392] rounded-lg overflow-hidden  w-[90%] mx-auto bg-white bg-opacity-80"
              >
                <button
                  className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-2 text-black font-bold text-xl">
                    <span className="text-3xl text-[#15B392]">{faq.icon} </span>
                    <span>{faq.question}</span>
                  </div>
                  <span className="text-md">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="p-4 bg-white text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Tesstimonials />
      <Blogs />
      {/* <MessageForm /> */}
    </div>
  );
};

export default HomePage;
