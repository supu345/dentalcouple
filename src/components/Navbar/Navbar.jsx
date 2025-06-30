import React, { useState, useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../../main";
export const NavbarLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },

  {
    name: "Blogs",
    link: "/blog",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

const DropdownLinks = [
  {
    name: "Our Services",
    link: "/#services",
  },
  {
    name: "Top Brands",
    link: "/#mobile_brands",
  },
  {
    name: "Location",
    link: "/#location",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:5000/api/v1/user/patient/logout", {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="">
        <nav className="fixed top-0 right-0 w-full z-50 bg-white backdrop-blur-sm text-black shadow-md ">
          <div className="bg-black text-white">
            <div className="container py-[1px] px-7 sm:block hidden">
              <div className="flex items-center justify-between">
                <p className="text-sm">20% off on next booking</p>
                <p>mobile no. +91 123456789</p>
              </div>
            </div>
          </div>
          <div className="container py-3 px-7 sm:py-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4 font-bold text-2xl ">
                <Link to={"/"} onClick={() => window.scrollTo(0, 0)}>
                  logo
                </Link>
              </div>
              <div className="hidden md:block">
                <ul className="flex items-center gap-6">
                  {NavbarLinks.map((data) => (
                    <li className="py-4" key={data.name}>
                      <NavLink to={data.link} activeClassName="active">
                        {data.name}
                      </NavLink>
                    </li>
                  ))}
                  {/* <li className="group relative cursor-pointer">
                    <a
                      href="/#home"
                      className="flex h-[72px] items-center gap-[2px]"
                    >
                      Quick Links{" "}
                      <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                    </a>
                    <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block shadow-md">
                      <ul className="space-y-3">
                        {DropdownLinks.map((data) => (
                          <li key={data.name}>
                            <a
                              className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                              href={data.link}
                            >
                              {data.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li> */}
                  <div className="pl-6">
                    <Link to="/appointment">
                      <button className="bg-teal-600 p-2 text-white rounded-xl px-3 hover:bg-teal-900 ">
                        Appointment
                      </button>
                    </Link>
                  </div>
                  <div className="pl-6">
                    {isAuthenticated ? (
                      <button
                        className="bg-teal-600 p-2 text-white rounded-xl px-3 hover:bg-teal-900"
                        onClick={handleLogout}
                      >
                        LOGOUT
                      </button>
                    ) : (
                      <button
                        className="bg-teal-600 p-2 text-white rounded-xl px-3 hover:bg-teal-900 "
                        onClick={goToLogin}
                      >
                        LOGIN
                      </button>
                    )}
                  </div>
                </ul>
              </div>
              {/* <div>
              <button onClick={toggleDarkMode}>
                {darkMode ? <MdLightMode /> : <MdDarkMode />}
              </button>
            </div> */}
            
            </div>
          </div>
          {/* Passing the state to ResponsiveMenu */}
          <ResponsiveMenu setShowMenu={setShowMenu} showMenu={showMenu} />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
