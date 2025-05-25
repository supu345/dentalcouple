import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { PiMapPinLight } from "react-icons/pi";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
const ContactPage = () => {
  return (
    <div className="mt-[80px]">
      {/*parallex */}
      <div
        className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6627422/pexels-photo-6627422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center ">
          <p className="text-center text-white text-5xl font-bold">
            Contact Us
          </p>
          <div className="relative flex flex-row gap-2 items-center mt-5">
            <p className="text-center text-white text-xl ">Home</p>
            <p className="text-center text-white text-xl ">/ Contact Us</p>
          </div>
          {/* <div className="w-16 h-1 bg-white mt-6 mb-6"></div> */}
        </div>
      </div>
      <div className="px-6 py-[100px] flex flex-row gap-8">
        {/*1*/}
        <div className="w-1/3 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-center justify-center items-center rounded-2xl">
          <div className=" py-8  text-center flex justify-center items-center">
            <PiMapPinLight
              className="text-8xl p-6 text-white rounded-full
          bg-[#15B392]"
            />
          </div>
          <p className="text-3xl font-semibold">Visit Our Clinic</p>
          <p className="px-7 mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="px-7 mt-5">
            <p className="px-7 mt-5 uppercase mb-9 font-bold">view location</p>
          </p>
        </div>
        {/*2*/}
        <div className="w-1/3 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-center justify-center items-center rounded-2xl">
          <div className=" py-8  text-center flex justify-center items-center">
            <PiMapPinLight
              className="text-8xl p-6 text-white rounded-full
          bg-[#15B392]"
            />
          </div>
          <p className="text-3xl font-semibold">Visit Our Clinic</p>
          <p className="px-7 mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="px-7 mt-5">
            <p className="px-7 mt-5 uppercase mb-9 font-bold">view location</p>
          </p>
        </div>

        {/*3*/}
        <div className="w-1/3 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 text-center justify-center items-center rounded-2xl">
          <div className=" py-8  text-center flex justify-center items-center">
            <PiMapPinLight
              className="text-8xl p-6 text-white rounded-full
          bg-[#15B392]"
            />
          </div>
          <p className="text-3xl font-semibold">Visit Our Clinic</p>
          <p className="px-7 mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="px-7 mt-5">
            <p className="px-7 mt-5 uppercase mb-9 font-bold">view location</p>
          </p>
        </div>
      </div>

      {/* 2 div */}

      <div className="flex flex-col md:flex-row gap-6 px-6 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100 py-[100px]">
        <div className="w-full md:w-1/2 px-6 ">
          <form action="https://getform.io/f/bxooowga" method="POST">
            <div className="flex flex-row gap-2 items-center text-[#15B392]">
              <BsStars />
              <p className="uppercase font-bold text-[#15B392]">OUR SERVICES</p>
              <TbDental className="mt-1 font-bold" />
            </div>
            <h1 className="text-gray-900 text-5xl semibold my-7">
              We’re Here to Help You Smile Brighter
            </h1>
            <p className="my-6">
              Whether you have a question, need to schedule an appointment, or
              want to know more about our services, we’re just a message away.
            </p>
            <div className="mb-7">
              <input
                type="text"
                name="name" // Add this
                id="name"
                placeholder="Full Name"
                className="bg-white/50 pl-4  mt-1 p-2 block w-full rounded-md border-gray-300 "
              />
            </div>
            <div className="mb-7">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="bg-white/50  pl-4 mt-1 p-2 block w-full rounded-md border-gray-300 "
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Enter Your Message"
                className="mt-1 p-2 pl-4 block bg-white/50  w-full h-[100px] rounded-md border-gray-300 "
              />
            </div>
            <button className="bg-green-500 text-white px-3 py-2 mt-8  rounded-2xl">
              Send Message
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 ">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src="https://images.pexels.com/photos/3845983/pexels-photo-3845983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="image"
            className="w-full h-auto md:h-[560px] object-cover rounded-xl md:rounded-r-xl"
          />
        </div>
        <div></div>
      </div>

      <div
        className="map-container-wrapper"
        style={{ width: "100%", height: "500px", overflow: "hidden" }}
      >
        <iframe
          className="map-container"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439.03753709658616!2d90.42361637354097!3d23.81181132974156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7001e630e5b%3A0x6d8751ac6b361921!2sDental%20Couple!5e0!3m2!1sen!2sbd!4v1746033869219!5m2!1sen!2sbd"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
