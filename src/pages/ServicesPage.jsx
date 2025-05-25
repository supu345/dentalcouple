import React from "react";
import { LiaTeethOpenSolid } from "react-icons/lia";
import { FaTooth } from "react-icons/fa6";
import { MdOutlineMedicationLiquid } from "react-icons/md";
import { FaTeeth } from "react-icons/fa6";
import { TbDental, TbDentalBroken } from "react-icons/tb";
import doctor from "../assets/doctor.png";
import { BsStars } from "react-icons/bs";
const ServicesPage = () => {
  return (
    <div className="mt-[80px]">
      {/*Parallex */}
      <div
        className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1580821810660-5486b8e980a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center ">
          <p className="text-center text-white text-5xl font-bold">
            Our Services
          </p>
          <div className="relative flex flex-row gap-2 items-center mt-5">
            <p className="text-center text-white text-xl ">Home</p>
            <p className="text-center text-white text-xl ">/ Our Services</p>
          </div>
          {/* <div className="w-16 h-1 bg-white mt-6 mb-6"></div> */}
        </div>
      </div>

      {/*Parallex */}

      <div className="py-[100px] px-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">
        <div className=" bg-teal-100 p-8 rounded-2xl">
          <LiaTeethOpenSolid className="text-6xl text-teal-700" />
          <p className="py-6 text-3xl font-bold text-gray-600">
            Complete Dental & Medical Care
          </p>
          <p className="w-[480px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since simply dummy.
          </p>
        </div>
        <div className=" bg-teal-100 p-8 rounded-2xl">
          <FaTooth className="text-6xl text-teal-700" />
          <p className="py-6 text-3xl font-bold text-gray-600">
            Healthy Smiles & Healthy Lives
          </p>
          <p className="w-[480px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since simply dummy.
          </p>
        </div>
        <div className=" bg-teal-100 p-8 rounded-2xl">
          <MdOutlineMedicationLiquid className="text-6xl text-teal-700" />
          <p className="py-6 text-3xl font-bold text-gray-600">
            Advanced Healthcare Solutions
          </p>
          <p className="w-[480px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since simply dummy.
          </p>
        </div>
        <div className=" bg-teal-100 p-8 rounded-2xl">
          <LiaTeethOpenSolid className="text-6xl text-teal-700" />
          <p className="py-6 text-3xl font-bold text-gray-600">
            Healthy Smiles & Healthy Lives
          </p>
          <p className="w-[480px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since simply dummy.
          </p>
        </div>
        <div className=" bg-teal-100 p-8 rounded-2xl">
          <FaTeeth className="text-6xl text-teal-700" />
          <p className="py-6 text-3xl font-bold text-gray-600">
            Healthy Smiles & Healthy Lives
          </p>
          <p className="w-[480px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since simply dummy.
          </p>
        </div>
        <div className=" bg-teal-100 p-8 rounded-2xl">
          <TbDentalBroken className="text-6xl text-teal-700" />
          <p className="py-6 text-3xl font-bold text-gray-600">
            Healthy Smiles & Healthy Lives
          </p>
          <p className="w-[480px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since simply dummy.
          </p>
        </div>
      </div>
      {/*doctor */}
      <div className="flex flex-col md:flex-row">
        <div className="text-black bg-teal-900">
          {" "}
          <div className="flex flex-row gap-2 item-center  text-white px-7 py-9">
            <BsStars className="" />
            <p className="uppercase font-bold">About Us</p>
            <TbDental className="mt-1 font-bold" />
          </div>
          <p className="text-5xl text-white px-9">
            Become a Member of the Club and Start Riding
          </p>
        </div>
        <div className="bg-teal-900 w-full">
          <img src={doctor} alt="photo" className="-mt-[100px] ml-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
