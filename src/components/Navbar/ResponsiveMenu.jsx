import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavbarLinks } from "./Navbar";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  // Context and Navigate hooks
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigate = useNavigate();

  // Logout function
  const handleLogout = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/user/patient/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(res.data.message);
      setIsAuthenticated(false);
      setShowMenu(false);
    } catch (err) {
      toast.error(err.response?.data?.message || "Logout failed");
    }
  };

  // Navigate to Login page
  const goToLogin = () => {
    setShowMenu(false);
    navigate("/login");
  };

  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-gray-900 dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md`}
    >
      <div className="card">
        {/* User Info Section */}
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium user</h1>
          </div>
        </div>

        {/* Navbar Links */}
        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            {NavbarLinks.map((data) => (
              <li key={data.name}>
                <Link
                  to={data.link}
                  onClick={() => setShowMenu(false)}
                  className="mb-5 inline-block"
                >
                  {data.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Login/Logout Button */}
      <div className="mt-10">
        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="bg-teal-600 text-white w-full py-2 rounded-xl hover:bg-teal-800 transition"
          >
            LOGOUT
          </button>
        ) : (
          <button
            onClick={goToLogin}
            className="bg-teal-600 text-white w-full py-2 rounded-xl hover:bg-teal-800 transition"
          >
            LOGIN
          </button>
        )}
      </div>
    </div>
  );
};

export default ResponsiveMenu;
