import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = ({ setSidebarOpen }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="bg-white shadow px-4 sm:px-6 py-4 flex justify-between items-center h-20">
      {/* Mobile Toggle */}
      <button
        className="md:hidden text-xl"
        onClick={() => setSidebarOpen(true)}
      >
        <FaBars />
      </button>

      <h1 className="text-lg sm:text-xl font-semibold">User Dashboard</h1>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full">
          {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
        </div>

        <span className="text-sm font-medium hidden sm:block">
          {user?.name ? user.name : "User Name"}
        </span>
      </div>
    </div>
  );
};

export default Header;
