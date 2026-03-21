import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import api from "../api/axios";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [menus, setMenus] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState({});

  const closeTimeout = useRef(null);

  useEffect(() => {
    fetchNavbars();
  }, []);

  const fetchNavbars = async () => {
    try {
      const res = await api.get("navbars");

      if (res.data.status) {
        const sortedMenus = res.data.data.sort((a, b) => a.order - b.order);
        setMenus(sortedMenus);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async (navbarId) => {
    try {
      const res = await api.get(`categories/${navbarId}`);

      if (res.data.status) {
        const data = res.data.data;
        setCategories(data);

        if (data.length > 0) {
          setOpenCategory(data[0].id);
          fetchSubCategories(data[0].id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubCategories = async (categoryId) => {
    try {
      const res = await api.get(`sub-categories/${categoryId}`);

      if (res.data.status) {
        const data = res.data.data;
        setSubCategories(data);

        if (data.length > 0) {
          setOpenSubCategory(data[0].id);
          fetchSubSubCategories(data[0].id);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchSubSubCategories = async (subId) => {
    try {
      if (subSubCategories[subId]) return;

      const res = await api.get(`sub-sub-categories/${subId}`);

      if (res.data.status) {
        setSubSubCategories((prev) => ({
          ...prev,
          [subId]: res.data.data,
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleMouseEnter = (menuId) => {
    clearTimeout(closeTimeout.current);
    setOpenMenu(menuId);
    setOpenCategory(null);
    setOpenSubCategory(null);
    fetchCategories(menuId);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setOpenMenu(null);
      setOpenCategory(null);
      setOpenSubCategory(null);
    }, 250);
  };

  return (
    <nav className="bg-white shadow-sm border-b relative z-[999999]">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="h-20 flex items-center justify-between">
          <img src="/image/beyond-logo.png" className="w-36" alt="logo" />

          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-800 font-[Inter]">
            <li>
              <NavLink to="/" className="hover:text-green-600">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className="hover:text-green-600">
                About
              </NavLink>
            </li>

            {menus.map((menu) => (
              <li
                key={menu.id}
                onMouseEnter={() => handleMouseEnter(menu.id)}
                onMouseLeave={handleMouseLeave}
                className="text-[15px] font-semibold font-[Inter]"
              >
                <button className="flex items-center gap-1 hover:text-green-600">
                  {menu.title}
                  <FiChevronDown className="text-[14px]" />
                </button>

                {openMenu === menu.id && (
                  <div
                    className={`absolute top-20 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-xl transition-all duration-200 z-[9999]
                    ${
                      menu.title === "MBBS In Abroad" ||
                      menu.title === "Services" ||
                      menu.title === "Test-Prep"
                        ? "w-[300px] py-2"
                        : "w-[1050px]"
                    }`}
                  >
                    <div
                      className={`grid ${
                        menu.title === "MBBS In Abroad" ||
                        menu.title === "Services" ||
                        menu.title === "Test-Prep"
                          ? "grid-cols-1"
                          : "grid-cols-[260px_1fr]"
                      }`}
                    >
                      <div className="bg-gray-50 border-r">
                        {categories.map((cat) => (
                          <div
                            key={cat.id}
                            className={`flex items-center justify-between px-5 py-3 text-[15px] font-medium font-[Inter] cursor-pointer
                            ${
                              openCategory === cat.id
                                ? "bg-white text-green-600 border-l-4 border-green-600"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                            onMouseEnter={() => {
                              setOpenCategory(cat.id);
                              fetchSubCategories(cat.id);
                            }}
                          >
                            {cat.title}
                            <span className="text-gray-400">›</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-8 pt-2 pb-6 px-8 bg-green-50">
                        {/* ✅ FIXED PART */}
                        <div>
                          {subCategories.map((sub) => (
                            <NavLink
                              key={sub.id}
                              to={`/page/${sub.slug}`}
                              onMouseEnter={() => {
                                setOpenSubCategory(sub.id);
                                fetchSubSubCategories(sub.id);
                              }}
                              onClick={(e) => e.stopPropagation()}
                              className={`block px-4 py-2 text-[15px] font-medium font-[Inter] ${
                                openSubCategory === sub.id
                                  ? "text-green-600"
                                  : "text-gray-700 hover:text-green-600"
                              }`}
                            >
                              {sub.title}
                            </NavLink>
                          ))}
                        </div>

                        <div className="relative z-[999999] pointer-events-auto">
                          {[
                            ...new Map(
                              subCategories.map((item) => [item.title, item]),
                            ).values(),
                          ].map((sub) => {
                            return (
                              <NavLink
                                key={sub.id}
                                to={`/page/${sub.slug || sub.title.toLowerCase().replace(/\s+/g, "-")}`}
                                onMouseEnter={() => {
                                  setOpenSubCategory(sub.id);
                                  fetchSubSubCategories(sub.id);
                                }}
                                onClick={(e) => e.stopPropagation()}
                                className={`block px-4 py-2 text-[15px] font-medium font-[Inter] ${
                                  openSubCategory === sub.id
                                    ? "text-green-600"
                                    : "text-gray-700 hover:text-green-600"
                                }`}
                              >
                                {sub.title}
                              </NavLink>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-[15px] font-semibold font-[Inter] shadow-md hover:scale-105 transition"
            >
              Contact
            </NavLink>

            <NavLink
              to="/signin"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-full text-[15px] font-semibold font-[Inter] shadow-md hover:scale-105 transition"
            >
              Sign in
            </NavLink>
          </div>

          <button
            className="lg:hidden text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}
