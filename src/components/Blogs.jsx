import React from "react";
import { BsStars } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";
const Blogs = () => {
  return (
    <div className="py-9 pt-[100px] px-7 bg-gradient-to-r from-green-100 via-teal-100 to-blue-100">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center"
      >
        {/* Centered Flex Row */}
        <div className="flex justify-center">
          <div className="flex flex-row gap-2 items-center text-[#15B392]">
            <BsStars />
            <p className="uppercase font-bold">OUR BLOGS</p>
            <TbDental className="mt-1 font-bold" />
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-4">
          <p className="text-4xl font-semibold">
            Explore the Latest in <br />
            Dental & Medical Care
          </p>
        </div>
      </motion.div>
      <div className="flex flex-col  md:flex-row gap-8 mt-[50px]">
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          className="md:w-[600px] bg-white rounded-2xl"
        >
          <div class="image-container overflow-hidden group rounded-t-2xl">
            <img
              src="https://images.pexels.com/photos/4971513/pexels-photo-4971513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="image"
              class="rounded-t-2xl transform transition-transform duration-300 group-hover:scale-110 "
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
        </motion.div>
        <motion.div
          variants={SlideLeft(0.4)}
          initial="hidden"
          whileInView="visible"
          className="md:w-[700px]  rounded-2xl  "
        >
          {/* 1 */}
          <div className="  bg-white flex flex-col  md:flex-row  rounded-2xl">
            <div className="w-full md:w-2/5">
              <div className="image-container overflow-hidden group rounded-2xl m-6">
                <img
                  src="https://images.pexels.com/photos/10566161/pexels-photo-10566161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[200px] md:w-[280px] rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
                />
              </div>
              {/* <img
                src="https://images.pexels.com/photos/4971513/pexels-photo-4971513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                class="h-[200px] w-[280px] object-cover  rounded-t-2xl transform transition-transform duration-300 group-hover:scale-110 rounded-2xl"
              /> */}
            </div>
            <div className="md:w-3/5">
              {" "}
              <div className="px-6 py-7">
                <p className="uppercase text-md">April 3, 2025</p>
                <p className="py-4 text-2xl font-bold hover:text-[#15B392]">
                  Dental Care Tips for Kids to Keep Teeth Strong
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  incidunt ipsum excepturi.
                </p>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="  bg-white flex  flex-col md:flex-row  rounded-2xl my-5">
            <div className="w-full md:w-2/5">
              <div className="image-container overflow-hidden group rounded-2xl m-6">
                <img
                  src="https://images.pexels.com/photos/1161929/pexels-photo-1161929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[200px] md:w-[280px] rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
                />
              </div>
              {/* <img
                src="https://images.pexels.com/photos/4971513/pexels-photo-4971513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                class="h-[200px] w-[280px] object-cover  rounded-t-2xl transform transition-transform duration-300 group-hover:scale-110 rounded-2xl"
              /> */}
            </div>
            <div className="w-full md:w-3/5">
              {" "}
              <div className="px-6 py-7">
                <p className="uppercase text-md">April 3, 2025</p>
                <p className="py-4 text-2xl font-bold hover:text-[#15B392]">
                  Dental Care Tips for Kids to Keep Teeth Strong
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  incidunt ipsum excepturi.
                </p>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="  bg-white flex flex-col md:flex-row  rounded-2xl">
            <div className="w-full md:w-2/5">
              <div className="image-container overflow-hidden group rounded-2xl m-6">
                <img
                  src="https://images.pexels.com/photos/8413088/pexels-photo-8413088.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="image"
                  className="h-[200px] md:w-[280px] rounded-2xl transform transition-transform duration-300 group-hover:scale-110 "
                />
              </div>
              {/* <img
                src="https://images.pexels.com/photos/4971513/pexels-photo-4971513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="image"
                class="h-[200px] w-[280px] object-cover  rounded-t-2xl transform transition-transform duration-300 group-hover:scale-110 rounded-2xl"
              /> */}
            </div>
            <div className="md:w-3/5">
              {" "}
              <div className="px-6 py-7">
                <p className="uppercase text-md">April 3, 2025</p>
                <p className="py-4 text-2xl font-bold hover:text-[#15B392]">
                  Dental Care Tips for Kids to Keep Teeth Strong
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  incidunt ipsum excepturi.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
