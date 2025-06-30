import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
import { SiAdafruit } from "react-icons/si";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollTop = () => {
    const scrollStep = -window.scrollY / 50;
    const delay = 10;

    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, delay);
  };

  return (
    <div className="bg-[#15B392] overflow-hidden">
      <motion.div
        variants={SlideUp(0.5)}
        initial="hidden"
        whileInView={"visible"}
        className="px-6 py-5  mb-6"
      >
        <div className="py-7 flex flex-col md:flex-row lg:flex-row gap-7 text-black">
          {/* Column 1 */}
          <div className="w-full md:w-2/5  text-justify">
            {/* Logo section */}
            <div className="flex flex-row gap-2 items-center mb-4">
              <SiAdafruit className="text-2xl text-teal-300" />
              <h1 className="font-bold text-2xl ">Suparna</h1>
            </div>
            <p>
              Turning vision into value with design that speaks. I create
              intuitive, impactful experiences for forward-thinking brands and
              creators
            </p>
            <div className="flex justify-center md:justify-start items-center h-[50px] text-black">
              <div className="flex gap-4">
                <Link
                  to="https://web.whatsapp.com/send?phone=+wa.me/8801730702545"
                  target="_blank"
                  rel="noopener nofollow"
                  data-url="https://web.whatsapp.com/send?phone=wa.me/8801730702545"
                  data-tab-setting="hover"
                  data-mobile-behavior="disable"
                  data-flyout="disable"
                  title="WhatsApp"
                  onClick={scrollToTop}
                >
                  {" "}
                  <FaWhatsapp className="hover:text-blue-700 text-2xl" />
                </Link>
                <Link
                  to="https://https://www.facebook.com/codewithfoyzun"
                  target="_blank"
                  onClick={scrollToTop}
                >
                  <FaFacebookF className="hover:text-blue-700  text-2xl" />
                </Link>

                <Link to="/" onClick={scrollToTop}>
                  <FaInstagram className="hover:text-red-700  text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="w-full md:w-1/5 text-center">
            <p className="text-lg font-bold mb-2">Links</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" onClick={scrollToTop}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" onClick={scrollToTop}>
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full md:w-1/5 text-center">
            <p className="text-lg font-bold mb-2">More Links</p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/testimonials" onClick={scrollToTop}>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={scrollToTop}>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="w-full md:w-1/5 text-center">
            <p className="text-lg font-bold mb-2">Our Services</p>
            <p>Frontend Developer</p>
            <p>React Developer</p>
            <p>Backend Developer</p>
            <p>Full Stack Developer</p>
          </div>
        </div>

        <div
          onClick={scrollTop}
          id="scroll"
          className="fixed bottom-4 right-4 cursor-pointer"
        >
          <button className="bg-teal-300 p-3 rounded-full shadow-md">
            <FaArrowUp className="text-black" />
          </button>
        </div>
        <div className="border border-gray-500/20"></div>
        <div className="text-center text-black pt-7">
          <p>© 2025 Foyzun Nahar Suparna | All rights reserved.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
