import {
  FaFacebookF,
  FaInstagram,
  FaArrowUp,
  FaWhatsapp,
} from "react-icons/fa";
import logo from "../assets/logo-1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";

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
    <div>
      <footer className="relative bg-cover bg-center bg-no-repeat text-white mt-[100px]  ">
        <div className="absolute inset-0 bg-[#15B392] "></div>
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView={"visible"}
        >
          <div className="relative w-full flex flex-col md:flex-row px-7 py-6 z-10">
            <div className="text-center md:w-5/12 sm:text-center md:text-left">
              <div className="flex flex-col gap-3 w-10/12 mx-auto md:mx-0">
                <div className="flex items-center  w-full p-2 justify-center md:justify-start">
                  <img
                    className="w-[70px] h-[50px] md:w-[80px] md:h-[70px]"
                    src={logo}
                    alt="logo"
                  />
                </div>

                <p>
                  “Your Sacred Journey Begins with Broadway — With Authentic
                  Sunnah-Based Guidance."
                </p>
              </div>
              <div className="flex justify-center md:justify-start items-center h-[50px] text-gray-200">
                <div className="flex gap-4">
                  <Link to="/" onClick={scrollToTop}>
                    <FaWhatsapp className="hover:text-blue-700 text-xl" />
                  </Link>
                  <Link to="/" onClick={scrollToTop}>
                    <FaFacebookF className="hover:text-blue-700" />
                  </Link>
                  <Link to="/" onClick={scrollToTop}>
                    <FaInstagram className="hover:text-red-700" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center md:w-2/12 sm:text-center md:text-left">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-lg mb-2 mt-6">Quick Links</p>
                <ul className="flex flex-col gap-2 text-white">
                  <li>
                    <Link to="/" onClick={scrollToTop}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={scrollToTop}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={scrollToTop}>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/hajj-packages" onClick={scrollToTop}>
                      Hajj Packages
                    </Link>
                  </li>
                  <li>
                    <Link to="/umrah-packages" onClick={scrollToTop}>
                      Umrah Packages
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center md:w-2/12 sm:text-center md:text-left">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-lg mb-2 mt-6">Quick Links</p>
                <ul className="flex flex-col gap-2 text-white">
                  <li>
                    <Link to="/" onClick={scrollToTop}>
                      General Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={scrollToTop}>
                      General Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={scrollToTop}>
                      General Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link to="/hajj-packages" onClick={scrollToTop}>
                      General Dentistry
                    </Link>
                  </li>
                  <li>
                    <Link to="/umrah-packages" onClick={scrollToTop}>
                      General Dentistry
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center ml-9 w-full md:w-3/12 md:text-left">
              <div className="flex flex-col gap-3">
                <p className="font-bold text-lg mb-2 mt-6">Address</p>
                <ul className="flex flex-col gap-2 text-white">
                  <li>
                    Address : Havely Complex (1st Floor Behind Walton Showroom),
                    Ka-6, Bashundhara Main Road, Dhaka-1229, Bangladesh
                  </li>
                  <li>Phone : 01999441515 , 01999551616 </li>
                  <li>Email : info@dentalcouple.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            onClick={scrollTop}
            id="scroll"
            className="fixed bottom-4 right-4 cursor-pointer"
          >
            <button className="bg-green-300 p-3 rounded-md shadow-md">
              <FaArrowUp className="text-black" />
            </button>
          </div>
          <div className="border border-white "></div>
          <div className="relative z-10 w-full bg-black flex flex-wrap justify-center items-center text-white mx-auto py-5 text-center">
            <span className="text-white">
              © Dental Couple 2025, All Rights Reserved | Developed by
              <Link
                to="https://codewithfoyzun.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="hover:underline"> Suparna</span>
              </Link>
            </span>
          </div>
        </motion.div>
      </footer>
    </div>
  );
};

export default Footer;
