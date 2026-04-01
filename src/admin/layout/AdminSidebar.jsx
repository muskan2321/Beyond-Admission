import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  FaUser,
  FaUniversity,
  FaBook,
  FaBlog,
  FaChartBar,
  FaChevronDown,
  FaLayerGroup,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [cmsOpen, setCmsOpen] = useState(false);

  const activeClass = "bg-white text-indigo-700 font-semibold shadow-md";
  const baseClass =
    "group flex items-center gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-white/20 hover:translate-x-2";

  useEffect(() => {
    if (
      location.pathname.includes("/admin/navbars") ||
      location.pathname.includes("/admin/categories") ||
      location.pathname.includes("/admin/sub-categories") ||
      location.pathname.includes("/admin/sub-sub-categories")
    ) {
      setCmsOpen(true);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Overlay Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static top-0 left-0 h-screen w-64 
        bg-gradient-to-b from-purple-500 via-indigo-600 to-blue-600 
        text-black z-50 transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 shadow-2xl flex flex-col`}
      >
        {/* Header Area */}
        <div className="p-6 border-b border-white/20">
          <div className="flex justify-between items-center md:hidden">
            <h2 className="text-lg font-bold">Admin Panel</h2>
            <FaTimes
              className="cursor-pointer text-xl"
              onClick={() => setSidebarOpen(false)}
            />
          </div>

          <div className="hidden md:flex justify-center">
            <img
              src="/image/logo.png"
              alt="Logo"
              className="w-52 drop-shadow-lg"
            />
          </div>
        </div>

        {/* Scrollable Menu */}
        <div className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-3">
            <li>
              <NavLink
                to="/admin"
                end
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaChartBar />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/users"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaUser />
                Users
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/universities"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaUniversity />
                Universities
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/courses"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaBook />
                Courses
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/blogs"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
              >
                <FaBlog />
                Blogs
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/contacts"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
              >
                <IoCall />
                Contacts
              </NavLink>
            </li>

            {/* CMS DROPDOWN */}
            <li>
              <button
                onClick={() => setCmsOpen(!cmsOpen)}
                className={`${baseClass} w-full flex justify-between items-center`}
              >
                <span className="flex items-center gap-3">
                  <FaLayerGroup />
                  Header
                </span>

                <FaChevronDown
                  className={`transition-transform duration-300 ${
                    cmsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {cmsOpen && (
                <ul className="ml-8 mt-2 space-y-2">
                  <li>
                    <NavLink
                      to="/admin/navbars"
                      className={({ isActive }) =>
                        `${baseClass} text-sm ${isActive ? activeClass : ""}`
                      }
                    >
                      Navbar
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/admin/categories"
                      className={({ isActive }) =>
                        `${baseClass} text-sm ${isActive ? activeClass : ""}`
                      }
                    >
                      Page Category
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/admin/sub-categories"
                      className={({ isActive }) =>
                        `${baseClass} text-sm ${isActive ? activeClass : ""}`
                      }
                    >
                      Sub Category
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/admin/sub-sub-categories"
                      className={({ isActive }) =>
                        `${baseClass} text-sm ${isActive ? activeClass : ""}`
                      }
                    >
                      Sub Sub Category
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/admin/pages"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
              >
                <IoDocumentText />
                Pages
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/add-study"
                className={({ isActive }) =>
                  `${baseClass} ${isActive ? activeClass : ""}`
                }
              >
                <IoDocumentText />
                Study Abroad
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Bottom Fixed */}
        <div className="p-4 border-t border-white/20 text-xs text-center">
          © 2024 Beyond Admission
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
