import React from "react";
import { TbDental } from "react-icons/tb";

const BlogPage = () => {
  return (
    <div className="mt-[80px]">
      {/*Parallex */}
      <div
        className="relative bg-fixed h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6187531/pexels-photo-6187531.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center ">
          <p className="text-center text-white text-5xl font-bold">Blogs</p>
          <div className="relative flex flex-row gap-2 items-center mt-5">
            <p className="text-center text-white text-xl ">Home</p>
            <p className="text-center text-white text-xl ">/Blog</p>
          </div>
          {/* <div className="w-16 h-1 bg-white mt-6 mb-6"></div> */}
        </div>
      </div>

      <div className="mt-9 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-6 gap-6">
        <div>
          <div class="image-container overflow-hidden group rounded-t-2xl">
            <img
              src="https://images.pexels.com/photos/4971513/pexels-photo-4971513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              class="rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
            />
          </div>
          <div className="px-6 py-7">
            <p className="uppercase text-xl">April 3, 2025</p>
            <p className="py-4 text-3xl font-bold hover:text-[#15B392]">
              Dental Care Tips for Kids to Keep Teeth Strong
            </p>
            <p className="text-md">
              Maintaining good oral health is essential for a bright smile and
              overall well-being. From daily brushing and flossing
            </p>

            <div className="flex flex-row w-[200px] mt-8 item-center  gap-2 bg-black rounded-full text-white p-2 pr-4">
              <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl" />
              <p className="uppercase"> read more </p>
            </div>
          </div>
        </div>
        <div>
          <div class="image-container overflow-hidden group rounded-t-2xl">
            <img
              src="https://images.pexels.com/photos/6627563/pexels-photo-6627563.jpeg"
              alt="image"
              class="rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
            />
          </div>
          <div className="px-6 py-7">
            <p className="uppercase text-xl">April 3, 2025</p>
            <p className="py-4 text-3xl font-bold hover:text-[#15B392]">
              Dental Care Tips for Kids to Keep Teeth Strong
            </p>
            <p className="text-md">
              Maintaining good oral health is essential for a bright smile and
              overall well-being. From daily brushing and flossing
            </p>

            <div className="flex flex-row w-[200px] mt-8 item-center  gap-2 bg-black rounded-full text-white p-2 pr-4">
              <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl" />
              <p className="uppercase"> read more </p>
            </div>
          </div>
        </div>

        <div>
          <div class="image-container overflow-hidden group rounded-t-2xl">
            <img
              src="https://images.pexels.com/photos/4269204/pexels-photo-4269204.jpeg"
              alt="image"
              class="rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
            />
          </div>
          <div className="px-6 py-7">
            <p className="uppercase text-xl">April 3, 2025</p>
            <p className="py-4 text-3xl font-bold hover:text-[#15B392]">
              Dental Care Tips for Kids to Keep Teeth Strong
            </p>
            <p className="text-md">
              Maintaining good oral health is essential for a bright smile and
              overall well-being. From daily brushing and flossing
            </p>

            <div className="flex flex-row w-[200px] mt-8 item-center  gap-2 bg-black rounded-full text-white p-2 pr-4">
              <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl" />
              <p className="uppercase"> read more </p>
            </div>
          </div>
        </div>
        <div>
          <div class="image-container overflow-hidden group rounded-t-2xl">
            <img
              src="https://images.pexels.com/photos/10566161/pexels-photo-10566161.jpeg"
              alt="image"
              class="rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
            />
          </div>
          <div className="px-6 py-7">
            <p className="uppercase text-xl">April 3, 2025</p>
            <p className="py-4 text-3xl font-bold hover:text-[#15B392]">
              Dental Care Tips for Kids to Keep Teeth Strong
            </p>
            <p className="text-md">
              Maintaining good oral health is essential for a bright smile and
              overall well-being. From daily brushing and flossing
            </p>

            <div className="flex flex-row w-[200px] mt-8 item-center  gap-2 bg-black rounded-full text-white p-2 pr-4">
              <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl" />
              <p className="uppercase"> read more </p>
            </div>
          </div>
        </div>
        <div>
          <div class="image-container overflow-hidden group rounded-t-2xl">
            <img
              src="https://images.pexels.com/photos/5355828/pexels-photo-5355828.jpeg"
              alt="image"
              class="rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
            />
          </div>
          <div className="px-6 py-7">
            <p className="uppercase text-xl">April 3, 2025</p>
            <p className="py-4 text-3xl font-bold hover:text-[#15B392]">
              Dental Care Tips for Kids to Keep Teeth Strong
            </p>
            <p className="text-md">
              Maintaining good oral health is essential for a bright smile and
              overall well-being. From daily brushing and flossing
            </p>

            <div className="flex flex-row w-[200px] mt-8 item-center  gap-2 bg-black rounded-full text-white p-2 pr-4">
              <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl" />
              <p className="uppercase"> read more </p>
            </div>
          </div>
        </div>

        <div>
          <div class="image-container overflow-hidden group rounded-t-2xl">
            <img
              src="https://images.pexels.com/photos/5693028/pexels-photo-5693028.jpeg"
              alt="image"
              class="rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
            />
          </div>
          <div className="px-6 py-7">
            <p className="uppercase text-xl">April 3, 2025</p>
            <p className="py-4 text-3xl font-bold hover:text-[#15B392]">
              Dental Care Tips for Kids to Keep Teeth Strong
            </p>
            <p className="text-md">
              Maintaining good oral health is essential for a bright smile and
              overall well-being. From daily brushing and flossing
            </p>

            <div className="flex flex-row w-[200px] mt-8 item-center  gap-2 bg-black rounded-full text-white p-2 pr-4">
              <TbDental className="bg-[#15B392] font-bold rounded-full p-1 text-3xl" />
              <p className="uppercase"> read more </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
