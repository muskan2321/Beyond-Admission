import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaUser,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {/* Overlay Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6 z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 flex flex-col`}
      >
        {/* Mobile Close */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-lg font-bold">Menu</h2>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Logo */}
        <div className="mb-8 flex justify-center hidden md:flex">
          <img src="/image/logo.png" alt="Logo" className="w-48" />
        </div>

        {/* Menu */}
        <ul className="space-y-3 flex-1">
          <li>
            <NavLink
              to="/dashboard"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-blue-700 font-semibold"
                    : "hover:bg-blue-700"
                }`
              }
            >
              <FaTachometerAlt />
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/my-courses"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-blue-700 font-semibold"
                    : "hover:bg-blue-700"
                }`
              }
            >
              <FaBook />
              My Courses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/profile"
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${
                  isActive
                    ? "bg-white text-blue-700 font-semibold"
                    : "hover:bg-blue-700"
                }`
              }
            >
              <FaUser />
              Profile
            </NavLink>
          </li>
        </ul>

        {/* Logout */}
        <div>
          <NavLink
            to="/"
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-600 transition"
          >
            <FaSignOutAlt />
            Logout
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
