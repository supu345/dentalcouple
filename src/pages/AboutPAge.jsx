import React from "react";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import Service from "../components/Service";

const AboutPage = () => {
  return (
    <div className="mt-[80px]">
      {/*Parallex */}
      <div
        className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1681843004557-f3128f91aeb7?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center ">
          <p className="text-center text-white text-5xl font-bold">About Us</p>
          <div className="relative flex flex-row gap-2 items-center mt-5">
            <p className="text-center text-white text-xl ">Home</p>
            <p className="text-center text-white text-xl ">/ About Us</p>
          </div>
          {/* <div className="w-16 h-1 bg-white mt-6 mb-6"></div> */}
        </div>
      </div>
      {/*About Us*/}
      <div className="px-6 py-[100px] flex flex-col md:flex-row gap-5">
        <div className="w-1/2">
          <img
            src="https://images.pexels.com/photos/7195317/pexels-photo-7195317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            className="rounded-2xl h-[600px] w-full object-cover"
          />
        </div>
        <div className="w-1/2">
          <div className="flex flex-row gap-2 item-center  text-teal-700 px-7 py-9">
            <BsStars className="" />
            <p className="uppercase font-bold">About Us</p>
            <TbDental className="mt-1 font-bold" />
          </div>
          <p className="text-5xl px-6 font-bold">
            Committed to Your Health, One Smile at a Time
          </p>

          <p className="py-7  px-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable.
          </p>
          <div className="flex flex-col gap-5 px-6 items-center">
            <div className="flex flex-row gap-5 px-6 items-center">
              <div className="rounded-full bg-teal-600 p-3">
                <BsStars className="text-5xl text-white  " />
              </div>
              <div>
                <p className="text-xl font-bold">Our Vision</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-5 px-6 items-center">
              <div className="rounded-full bg-teal-600 p-3">
                <TbDental className="text-5xl text-white  " />
              </div>
              <div>
                <p className="text-xl font-bold">Our Mission</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*service */}
      <div>
        <Service />
      </div>
    </div>
  );
};

export default AboutPage;
