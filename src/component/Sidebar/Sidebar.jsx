import React from "react";
import { FaBars, FaTimes, FaClipboardList, FaRegClock, FaSpinner, FaUsers, FaSignOutAlt, FaTachometerAlt } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../FireBase/FireBaseConfig";
import student from "../../assets/student.png";
import Navbar from "../Navbar/Navbar";

const Sidebar = ({ isVisible, toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Error during logout: ", error);
      });
  };

  return (
    <div>
      {/* Navbar with toggle button */}
      <Navbar toggleSidebar={toggleSidebar} />
      
      {/* Sidebar */}
      <div
        className={`lg:w-64 w-full bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 px-4 transition-transform duration-300 ${isVisible ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Close Sidebar Button */}
        <button onClick={toggleSidebar} className="lg:hidden absolute top-4 right-10 mt-4 cursor-pointer text-white">
          <FaTimes size={19} />
        </button>

        {/* Logo and Avatar */}
        <Link to="/admin-dashboard">
          <div className="flex gap-2 items-center mt-2 h-14 bg-gray-700 rounded-md cursor-pointer">
            <img src={student} alt="User Avatar" className="h-12 w-auto rounded-full bg-white" />
            <h2 style={{ fontFamily: "Pacifico, cursive" }} className="text-2xl text-white ml-3">
              SchoolHub
            </h2>
          </div>
        </Link>

        {/* Sidebar Links */}
        <div className="px-4 mt-10">
          <NavLink to="/admin-dashboard" className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`} end>
            <FaTachometerAlt />
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/admin-dashboard/students-page" className={({ isActive }) => `${isActive ? "bg-teal-500" : ""} flex items-center space-x-4 block py-2.5 px-4 rounded`}>
            <FaUsers />
            <span>Students</span>
          </NavLink>
        

          {/* Logout Button */}
          <button onClick={handleLogout} className="flex items-center space-x-4 py-2.5 px-4 rounded w-full text-left hover:bg-teal-500">
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

