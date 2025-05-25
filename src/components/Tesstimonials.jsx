import React from "react";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SlideLeft } from "../utility/animation";
import { SlideRight } from "../utility/animation";
const Tesstimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Md.Fahim Al-Rashid",
      rating: 5,
      image:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Broadway Tours & Travels provides excellent service for performing Hajj and Umrah. We highly recommend them for anyone looking to undertake these sacred journeys.",
      title: "Senior RM",
    },
    {
      id: 2,
      name: "Md.Ahmed Khan",
      rating: 4,
      image:
        "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "I completely agree! Broadway Tours & Travels ensured every aspect of our journey was seamless and spiritually fulfilling. Highly recommend them!",
      title: "Senior RM",
    },
    {
      id: 3,
      name: "Md.Rashid Khan",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Their attention to detail and customer care are truly commendable. The arrangements for Hajj were extraordinary.",
      title: "Senior RM",
    },
    {
      id: 4,
      name: "Md.Omar Malik",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "I had an amazing experience with Broadway Tours & Travels. They made the entire Umrah trip stress-free and memorable. Kudos to the team",
      title: "Senior RM",
    },
    {
      id: 5,
      name: "Md.Hasan",
      rating: 4,
      image:
        "https://images.pexels.com/photos/7793741/pexels-photo-7793741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      text: "Broadway Tours & Travels exceeded my expectations. From accommodations to guides, everything was perfectly organized. A trustworthy choice!",
      title: "Senior RM",
    },
  ];
  return (
    <div className="px-6 pt-9">
      <div className="flex flex-col lg:flex-row md:gap-6 lg:gap-3 mt-7">
        <motion.div
          variants={SlideRight(0.4)}
          initial="hidden"
          whileInView="visible"
          className="w-[500px]"
        >
          <img
            src="https://images.pexels.com/photos/6627291/pexels-photo-6627291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="photo"
            className="rounded-2xl h-[300px] lg:h-[400px] w-full lg:w-[500px] md:w-[500px] mx-auto lg:mx-0 mt-6 lg:mt-12 object-cover transition duration-700  ease-in-out hover:scale-105"
          />
        </motion.div>

        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          className="w-full lg:w-3/4"
        >
          <div id="testimonials" className="py-10 bg-white relative">
            <p className="text-2xl lg:text-3xl font-bold text-center lg:text-left ml-0 lg:ml-7">
              Amazing Review from Customers
            </p>
            <div className="max-w-full lg:max-w-6xl mx-auto py-10 px-4">
              <Swiper
                style={{
                  "--swiper-pagination-color": "#00C400",
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                  "--swiper-pagination-bullet-inactive-opacity": "1",
                  "--swiper-pagination-bullet-size": "10px",
                  "--swiper-pagination-bullet-horizontal-gap": "6px",
                }}
                modules={[Pagination, Autoplay]}
                loop={true}
                speed={600}
                autoplay={{ delay: 5000 }}
                slidesPerView={1}
                spaceBetween={5}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 5 },
                  768: { slidesPerView: 2, spaceBetween: 8 },
                  1024: { slidesPerView: 3, spaceBetween: 10 },
                }}
                pagination={{
                  el: ".swiper-pagination",
                  type: "bullets",
                  clickable: true,
                }}
                className="mySwiper"
              >
                {testimonials.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="border h-[330px] border-gray-200 shadow-lg rounded-lg flex flex-col p-4">
                      <div className="flex text-yellow-500">
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className={`${
                              index < item.rating
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="py-3 text-gray-700">{item.text}</p>
                      <div className="flex justify-between items-center">
                        <div>
                          <img
                            src={item.image}
                            alt="photo1"
                            className="h-[60px] lg:h-[70px] w-[60px] lg:w-[70px] object-cover rounded-full transition-transform transform hover:scale-110"
                          />
                          <h3 className="font-semibold text-green-600 text-base lg:text-lg">
                            {item.name}
                          </h3>
                          <p className="text-xs lg:text-sm mt-1">
                            {item.title}
                          </p>
                        </div>
                        quote
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Pagination dots container */}
              <div className="swiper-pagination my-6 flex justify-center"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tesstimonials;
