import { useState } from "react";
import { FaBars, FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AdminHeader = ({ setSidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow px-4 sm:px-6 py-4 flex justify-between items-center h-20 relative">
      {/* Hamburger */}
      <button
        className="md:hidden text-xl"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars />
      </button>

      <h1 className="text-lg sm:text-xl font-semibold">Admin Dashboard</h1>

      {/* Right Side */}
      <div className="relative">
        {/* Admin Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/image/admin.png"
            alt="admin"
            className="w-8 h-8 rounded-full"
          />

          <span className="hidden sm:block text-gray-700 font-medium">
            Admin
          </span>

          <FaChevronDown
            className={`text-sm transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown */}
        {open && (
          <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg border border-gray-100 py-2 z-50">
            <button
              onClick={() => navigate("/signin")}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminHeader;
