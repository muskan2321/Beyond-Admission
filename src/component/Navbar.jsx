import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiChevronRight,
  FiChevronLeft,
} from "react-icons/fi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLevel, setMobileLevel] = useState(0); // 0: main, 1: categories, 2: subcategories, 3: subsub
  const [mobileSelectedMenu, setMobileSelectedMenu] = useState(null);
  const [mobileSelectedCategory, setMobileSelectedCategory] = useState(null);
  const [mobileSelectedSub, setMobileSelectedSub] = useState(null);

  const [menus, setMenus] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [subSubCategories, setSubSubCategories] = useState({});

  const closeTimeout = useRef(null);
  const location = useLocation();

  // Close all navbar tabs when route changes
  useEffect(() => {
    setOpenMenu(null);
    setOpenCategory(null);
    setOpenSubCategory(null);
    setMobileOpen(false);
    setMobileLevel(0);
    setMobileSelectedMenu(null);
    setMobileSelectedCategory(null);
    setMobileSelectedSub(null);
  }, [location]);

  // ✅ STATIC DATABASE (unchanged)
  const STATIC_DATA = {
    menus: [
      { id: 1, title: "Study In India", order: 1 },
      { id: 2, title: "Study In Abroad", order: 2 },
      { id: 3, title: "MBBS In Abroad", order: 3 },
      { id: 4, title: "Test-Prep", order: 4 },
      { id: 5, title: "Services", order: 5 },
    ],

    categories: {
      1: [
        { id: 11, title: "UG" },
        { id: 12, title: "PG" },
        { id: 13, title: "Top College" },
       
      ],
      2: [
        { id: 21, title: "Country" },
        { id: 22, title: "Courses" },
        { id: 23, title: "University" },
        { id: 24, title: "Scholarship" },
      ],
    },

    subCategories: {
      11: [
        { id: 111, title: "Medical", slug: "ug-medical", clickable: true },
        {
          id: 112,
          title: "Management",
          slug: "ug-management",
          clickable: true,
        },
        {
          id: 113,
          title: "Engineering",
          slug: "ug-engineering",
          clickable: true,
        },
        {
          id: 114,
          title: "Humanities",
          slug: "ug-humanities",
          clickable: true,
        },
      ],
      12: [
        { id: 121, title: "Medical", slug: "pg-medical", clickable: true },
        {
          id: 122,
          title: "Management",
          slug: "pg-management",
          clickable: true,
        },
        {
          id: 123,
          title: "Engineering",
          slug: "pg-engineering",
          clickable: true,
        },
        {
          id: 124,
          title: "Humanities",
          slug: "pg-humanities",
          clickable: true,
        },
      ],
      13: [
        {
          id: 131,
          title: "Top Medical Colleges In India",
          slug: "top-medical-colleges-india",
          clickable: true,
        },
        {
          id: 132,
          title: "Top Management Colleges In India",
          slug: "top-management-colleges-india",
          clickable: true,
        },
        {
          id: 133,
          title: "Top Engineering Colleges In India",
          slug: "top-engineering-colleges-india",
          clickable: true,
        },
        {
          id: 134,
          title: "Top Humanities Colleges In India",
          slug: "top-humanities-colleges-india",
          clickable: true,
        },
      ],
      14: [
        {
          id: 141,
          title: "Merit Based Scholarship",
          slug: "merit-scholarship",
          clickable: true,
        },
        {
          id: 142,
          title: "Need Based Scholarship",
          slug: "need-scholarship",
          clickable: true,
        },
        {
          id: 143,
          title: "Government Scholarship",
          slug: "government-scholarship",
          clickable: true,
        },
      ],
      15: [
        { id: 151, title: "IIT JEE", slug: "iit-jee", clickable: true },
        { id: 152, title: "NEET UG", slug: "neet-ug", clickable: true },
        { id: 153, title: "NEET PG", slug: "neet-pg", clickable: true },
        { id: 154, title: "CUET", slug: "cuet", clickable: true },
        { id: 155, title: "CAT", slug: "cat", clickable: true },
        { id: 156, title: "GATE", slug: "gate", clickable: true },
      ],
      21: [
        { id: 211, title: "Study In USA", slug: "study-usa", clickable: true },
        { id: 212, title: "Study In UK", slug: "study-uk", clickable: true },
        {
          id: 213,
          title: "Study In Canada",
          slug: "study-canada",
          clickable: true,
        },
        {
          id: 214,
          title: "Study In Germany",
          slug: "study-germany",
          clickable: true,
        },
        {
          id: 215,
          title: "Study In Ireland",
          slug: "study-ireland",
          clickable: true,
        },
        {
          id: 216,
          title: "Study In Australia",
          slug: "study-australia",
          clickable: true,
        },
      ],
      22: [
        { id: 221, title: "MS/PHD", slug: "ms-phd", clickable: false },
        { id: 222, title: "MBA", slug: "mba", clickable: false },
        { id: 223, title: "UG Program", slug: "ug-program", clickable: false },
        {
          id: 224,
          title: "University deadline",
          slug: "university-deadline",
          clickable: true,
        },
        {
          id: 225,
          title: "Specific Courses",
          slug: "specific-courses",
          clickable: true,
        },
      ],
      23: [
        {
          id: 231,
          title: "Top University in USA",
          slug: "top-university-usa",
          clickable: true,
        },
        {
          id: 232,
          title: "Top University in UK",
          slug: "top-university-uk",
          clickable: true,
        },
        {
          id: 233,
          title: "Top University in Canada",
          slug: "top-university-canada",
          clickable: true,
        },
        {
          id: 234,
          title: "Top University in Germany",
          slug: "top-university-germany",
          clickable: true,
        },
        {
          id: 235,
          title: "Top University in Ireland",
          slug: "top-university-ireland",
          clickable: true,
        },
        {
          id: 236,
          title: "Top University in Australia",
          slug: "top-university-australia",
          clickable: true,
        },
        {
          id: 237,
          title: "Public vs Private University",
          slug: "public-private",
          clickable: true,
        },
        {
          id: 238,
          title: "Partner University",
          slug: "partner-university",
          clickable: true,
        },
      ],
      24: [
        {
          id: 241,
          title: "Merit Based Scholarship",
          slug: "merit-scholarship",
          clickable: true,
        },
        {
          id: 242,
          title: "Need Based Scholarship",
          slug: "need-scholarship",
          clickable: true,
        },
        {
          id: 243,
          title: "Government Scholarship",
          slug: "government-scholarship",
          clickable: true,
        },
      ],
      25: [
        {
          id: 251,
          title: "Education Loan Assistance",
          slug: "education-loan",
          clickable: true,
        },
        {
          id: 252,
          title: "Visa Assistance",
          slug: "visa-assistance",
          clickable: true,
        },
      ],
      3: [
        {
          id: 31,
          title: "MBBS in Georgia",
          slug: "mbbs-georgia",
          clickable: true,
        },
        {
          id: 32,
          title: "MBBS in Russia",
          slug: "mbbs-russia",
          clickable: true,
        },
        {
          id: 33,
          title: "MBBS in Uzbekistan",
          slug: "mbbs-uzbekistan",
          clickable: true,
        },
        {
          id: 34,
          title: "MBBS in Kazakhstan",
          slug: "mbbs-kazakhstan",
          clickable: true,
        },
        {
          id: 35,
          title: "MBBS in Kyrgyzstan",
          slug: "mbbs-kyrgyzstan",
          clickable: true,
        },
        { id: 36, title: "MBBS in Nepal", slug: "mbbs-nepal", clickable: true },
      ],
      4: [
        { id: 41, title: "GMAT", slug: "gmat", clickable: true },
        { id: 42, title: "GRE", slug: "gre", clickable: true },
        { id: 43, title: "SAT", slug: "sat", clickable: true },
        { id: 44, title: "IELTS", slug: "ielts", clickable: true },
        { id: 45, title: "TOEFL", slug: "toefl", clickable: true },
        
      ],
      5: [
        {
          id: 51,
          title: "Admission Counselling",
          slug: "admission-counselling",
          clickable: true,
        },
        {
          id: 52,
          title: "NEET Counselling",
          slug: "neet-counselling",
          clickable: true,
        },
        {
          id: 53,
          title: "Educational Loan",
          slug: "educational-loan",
          clickable: true,
        },
        {
          id: 54,
          title: "Post Admission Services",
          slug: "post-admission-services",
          clickable: true,
        },
        {
          id: 55,
          title: "Beyond Blogs",
          slug: "beyond-blogs",
          clickable: true,
        },
      ],
    },

    subSubCategories: {
      221: [
        { id: 2211, title: "MS in USA", slug: "ms-usa", clickable: true },
        { id: 2212, title: "MS in UK", slug: "ms-uk", clickable: true },
        { id: 2213, title: "MS in Canada", slug: "ms-canada", clickable: true },
        {
          id: 2214,
          title: "MS in Germany",
          slug: "ms-germany",
          clickable: true,
        },
        {
          id: 2215,
          title: "MS in Ireland",
          slug: "ms-ireland",
          clickable: true,
        },
        {
          id: 2216,
          title: "MS in Australia",
          slug: "ms-australia",
          clickable: true,
        },
      ],
      222: [
        { id: 2221, title: "MBA in USA", slug: "mba-usa", clickable: true },
        { id: 2222, title: "MBA in UK", slug: "mba-uk", clickable: true },
        {
          id: 2223,
          title: "MBA in Canada",
          slug: "mba-canada",
          clickable: true,
        },
        {
          id: 2224,
          title: "MBA in Germany",
          slug: "mba-germany",
          clickable: true,
        },
        {
          id: 2225,
          title: "MBA in Ireland",
          slug: "mba-ireland",
          clickable: true,
        },
        {
          id: 2226,
          title: "MBA in Australia",
          slug: "mba-australia",
          clickable: true,
        },
      ],
      223: [
        { id: 2231, title: "UG in USA", slug: "ug-usa", clickable: true },
        { id: 2232, title: "UG in UK", slug: "ug-uk", clickable: true },
        { id: 2233, title: "UG in Canada", slug: "ug-canada", clickable: true },
        {
          id: 2234,
          title: "UG in Germany",
          slug: "ug-germany",
          clickable: true,
        },
        {
          id: 2235,
          title: "UG in Ireland",
          slug: "ug-ireland",
          clickable: true,
        },
        {
          id: 2236,
          title: "UG in Australia",
          slug: "ug-australia",
          clickable: true,
        },
      ],
    },
  };

  useEffect(() => {
    fetchNavbars();
  }, []);

  const fetchNavbars = async () => {
    const sortedMenus = STATIC_DATA.menus.sort((a, b) => a.order - b.order);
    setMenus(sortedMenus);
  };

  const fetchCategories = async (navbarId) => {
    if (navbarId === 3 || navbarId === 4 || navbarId === 5) {
      setCategories([]);
      const data = STATIC_DATA.subCategories[navbarId] || [];
      setSubCategories(data);
      setOpenSubCategory(null);
      return;
    }
    const data = STATIC_DATA.categories[navbarId] || [];
    setCategories(data);
    if (data.length > 0) {
      setOpenCategory(data[0].id);
      fetchSubCategories(data[0].id);
    }
  };

  const fetchSubCategories = async (categoryId) => {
    const data = STATIC_DATA.subCategories[categoryId] || [];
    setSubCategories(data);
    if (data.length > 0) {
      setOpenSubCategory(data[0].id);
      fetchSubSubCategories(data[0].id);
    }
  };

  const fetchSubSubCategories = async (subId) => {
    if (subSubCategories[subId]) return;
    const data = STATIC_DATA.subSubCategories[subId] || [];
    setSubSubCategories((prev) => ({
      ...prev,
      [subId]: data,
    }));
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

  const handleLinkClick = () => {
    setOpenMenu(null);
    setOpenCategory(null);
    setOpenSubCategory(null);
    setMobileOpen(false);
    setMobileLevel(0);
  };

  // Mobile handlers
  const handleMobileMenuClick = (menu) => {
    setMobileSelectedMenu(menu);
    if (menu.id === 3 || menu.id === 4 || menu.id === 5) {
      // Direct subcategories for special menus
      const data = STATIC_DATA.subCategories[menu.id] || [];
      setSubCategories(data);
      setMobileLevel(2);
    } else {
      // Normal menu with categories
      const cats = STATIC_DATA.categories[menu.id] || [];
      setCategories(cats);
      setMobileLevel(1);
    }
  };

  const handleMobileCategoryClick = (cat) => {
    setMobileSelectedCategory(cat);
    const data = STATIC_DATA.subCategories[cat.id] || [];
    setSubCategories(data);
    setMobileLevel(2);
  };

  const handleMobileSubClick = (sub) => {
    if (sub.clickable) {
      window.location.href = `/${sub.slug}`;
      handleLinkClick();
      return;
    }
    // If not clickable, check for sub-sub categories
    const subSubData = STATIC_DATA.subSubCategories[sub.id] || [];
    if (subSubData.length > 0) {
      setMobileSelectedSub(sub);
      setSubSubCategories((prev) => ({
        ...prev,
        [sub.id]: subSubData,
      }));
      setMobileLevel(3);
    }
  };

  const handleMobileBack = () => {
    if (mobileLevel === 1) {
      setMobileLevel(0);
      setMobileSelectedMenu(null);
    } else if (mobileLevel === 2) {
      setMobileLevel(1);
      setMobileSelectedCategory(null);
    } else if (mobileLevel === 3) {
      setMobileLevel(2);
      setMobileSelectedSub(null);
    }
  };

  // Check if menu is special (single column)
  const isSpecialMenu = (menuTitle) => {
    return (
      menuTitle === "MBBS In Abroad" ||
      menuTitle === "Test-Prep" ||
      menuTitle === "Services"
    );
  };

  return (
    <nav className="bg-white shadow-sm border-b relative z-[999999]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 relative">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" onClick={handleLinkClick} className="flex-shrink-0">
            <img
              src="/image/Beyond_Admissions_logo.png"
              className="w-32 sm:w-40 md:w-44 lg:w-49 object-contain"
              alt="logo"
            />
          </Link>

          {/* Desktop Menu - Hidden on mobile */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8 text-[14px] xl:text-[15px] font-semibold text-gray-800 font-[Inter]">
            <li>
              <NavLink
                to="/"
                className="hover:text-green-600 whitespace-nowrap"
                onClick={handleLinkClick}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="hover:text-green-600 whitespace-nowrap"
                onClick={handleLinkClick}
              >
                About
              </NavLink>
            </li>

            {menus.map((menu) => {
              const isSpecial = isSpecialMenu(menu.title);

              return (
                <li
                  key={menu.id}
                  onMouseEnter={() => handleMouseEnter(menu.id)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <button className="flex items-center gap-1 hover:text-green-600 whitespace-nowrap">
                    {menu.title}
                    <FiChevronDown className="text-[12px] xl:text-[14px]" />
                  </button>

                  {openMenu === menu.id && (
                    <div
                      className={`absolute top-full mt-2 bg-white shadow-xl rounded-xl transition-all duration-200 z-[9999] ${
                        isSpecial
                          ? "w-[280px] xl:w-[300px]"
                          : "w-[900px] xl:w-[980px]"
                      }`}
                      style={{
                        left: isSpecial ? "0" : "-180px",
                        transform: "none",
                      }}
                    >
                      <div
                        className={`grid ${
                          isSpecial ? "grid-cols-1" : "grid-cols-[260px_1fr]"
                        }`}
                      >
                        {categories.length > 0 && !isSpecial && (
                          <div className="bg-gray-50 border-r max-h-[70vh] overflow-y-auto custom-scroll">
                            {categories.map((cat) => (
                              <div
                                key={cat.id}
                                className={`flex items-center justify-between px-4 xl:px-5 py-3 text-[14px] xl:text-[15px] font-medium font-[Inter] cursor-pointer
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
                        )}

                        <div
                          className={`${isSpecial ? "p-4 bg-green-50" : "grid grid-cols-2 gap-6 xl:gap-8 py-4 px-6 xl:px-8 bg-green-50"} max-h-[70vh] overflow-y-auto custom-scroll`}
                        >
                          <div>
                            {subCategories.map((sub) =>
                              sub.clickable ? (
                                <NavLink
                                  key={sub.id}
                                  to={`/${sub.slug}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleLinkClick();
                                  }}
                                  onMouseEnter={() => {
                                    if (!isSpecial) {
                                      setOpenSubCategory(sub.id);
                                      fetchSubSubCategories(sub.id);
                                    }
                                  }}
                                  className={`block px-3 xl:px-4 py-2 text-[14px] xl:text-[15px] font-medium font-[Inter] ${
                                    openSubCategory === sub.id && !isSpecial
                                      ? "text-green-600"
                                      : "text-gray-700 hover:text-green-600"
                                  }`}
                                >
                                  {sub.title}
                                </NavLink>
                              ) : (
                                <div
                                  key={sub.id}
                                  onMouseEnter={() => {
                                    if (!isSpecial) {
                                      setOpenSubCategory(sub.id);
                                      fetchSubSubCategories(sub.id);
                                    }
                                  }}
                                  className={`block px-3 xl:px-4 py-2 text-[14px] xl:text-[15px] font-medium font-[Inter] cursor-default ${
                                    openSubCategory === sub.id && !isSpecial
                                      ? "text-green-600"
                                      : "text-gray-700"
                                  }`}
                                >
                                  {sub.title}
                                </div>
                              ),
                            )}
                          </div>

                          {!isSpecial && (
                            <div className="relative z-[999999] pointer-events-auto">
                              {subSubCategories[openSubCategory]?.map(
                                (ssub) => (
                                  <NavLink
                                    key={ssub.id}
                                    to={`/${ssub.slug}`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleLinkClick();
                                    }}
                                    className="block px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-normal font-[Inter] text-gray-600 hover:text-green-600"
                                  >
                                    {ssub.title}
                                  </NavLink>
                                ),
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 xl:px-6 py-1.5 xl:py-2 rounded-full text-[13px] xl:text-[15px] font-semibold font-[Inter] shadow-md hover:scale-105 transition whitespace-nowrap"
            >
              Contact
            </NavLink>

            <NavLink
              to="/signin"
              onClick={handleLinkClick}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 xl:px-6 py-1.5 xl:py-2 rounded-full text-[13px] xl:text-[15px] font-semibold font-[Inter] shadow-md hover:scale-105 transition whitespace-nowrap"
            >
              Sign in
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-2xl p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[99999] top-16 sm:top-20"
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 left-0 w-full bg-white shadow-xl max-h-[calc(100vh-64px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header with Back Button */}
            {mobileLevel > 0 && (
              <div className="sticky top-0 bg-white border-b px-4 py-3 flex items-center gap-3">
                <button onClick={handleMobileBack} className="p-1">
                  <FiChevronLeft className="text-xl" />
                </button>
                <span className="font-semibold text-gray-800">
                  {mobileLevel === 1 && mobileSelectedMenu?.title}
                  {mobileLevel === 2 && mobileSelectedCategory?.title}
                  {mobileLevel === 3 && mobileSelectedSub?.title}
                </span>
              </div>
            )}

            {/* Level 0 - Main Menu */}
            {mobileLevel === 0 && (
              <div className="py-2">
                <NavLink
                  to="/"
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 border-b"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about"
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 border-b"
                >
                  About
                </NavLink>
                {menus.map((menu) => (
                  <button
                    key={menu.id}
                    onClick={() => handleMobileMenuClick(menu)}
                    className="w-full flex items-center justify-between px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 border-b"
                  >
                    {menu.title}
                    <FiChevronRight className="text-gray-400" />
                  </button>
                ))}
                <NavLink
                  to="/contact"
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50 border-b"
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/signin"
                  onClick={handleLinkClick}
                  className="block px-4 py-3 text-[15px] font-medium text-gray-800 hover:bg-gray-50"
                >
                  Sign in
                </NavLink>
              </div>
            )}

            {/* Level 1 - Categories */}
            {mobileLevel === 1 && (
              <div className="py-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => handleMobileCategoryClick(cat)}
                    className="w-full flex items-center justify-between px-4 py-3 text-[15px] text-gray-700 hover:bg-gray-50 border-b"
                  >
                    {cat.title}
                    <FiChevronRight className="text-gray-400" />
                  </button>
                ))}
              </div>
            )}

            {/* Level 2 - Sub Categories */}
            {mobileLevel === 2 && (
              <div className="py-2">
                {subCategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleMobileSubClick(sub)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-[15px] text-left border-b ${
                      sub.clickable ? "hover:bg-gray-50" : ""
                    }`}
                  >
                    <span
                      className={
                        sub.clickable ? "text-gray-700" : "text-gray-500"
                      }
                    >
                      {sub.title}
                    </span>
                    {!sub.clickable &&
                      STATIC_DATA.subSubCategories[sub.id]?.length > 0 && (
                        <FiChevronRight className="text-gray-400" />
                      )}
                  </button>
                ))}
              </div>
            )}

            {/* Level 3 - Sub Sub Categories */}
            {mobileLevel === 3 && mobileSelectedSub && (
              <div className="py-2">
                {subSubCategories[mobileSelectedSub.id]?.map((ssub) => (
                  <NavLink
                    key={ssub.id}
                    to={`/${ssub.slug}`}
                    onClick={handleLinkClick}
                    className="block px-4 py-3 text-[15px] text-gray-700 hover:bg-gray-50 border-b"
                  >
                    {ssub.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
