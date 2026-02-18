import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
//  import "./style.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [activeLeft, setActiveLeft] = useState(" ");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);

  const menus = [
    { key: "admission", title: "Admission" },
    { key: "franchise", title: "Franchise" },
    { key: "counselling", title: "Counselling" },
    { key: "abroad", title: "Study Abroad" },
    
  ];

  

  const dropdownData = {
    admission: {
      left: ["Medical", "Engineering", "Management", "Humanities/Law","Finance"],
      right: {
        "Medical": [
          { label: "MBBS", path: "/medical/mbbs" },
          { label: "UG", path: "/medical/ug" },
          { label: "PG", path: "/medical/pg" },
          { label: "MD/MS", path: "/medical/md-ms" },
        ],
        "Engineering": [
          { label: "B Tech", path: "/engineering/b-tech" },
          { label: "BCA", path: "/engineering/bca" },
          { label: "M Tech", path: "/engineering/m-tech" },
          { label: "MCA", path: "/engineering/mca" },
        ],
        "Management": [
          { label: "BBA", path: "/management/bba" },
          { label: "MBA", path: "/management/mba" },
          { label: "HR", path: "/management/hr" },
          { label: "Marketing", path: "/management/marketing" },
        ],
        
        "Humanities/Law": [  { label: "BA", path: "/humanities-law/ba" }, { label: "LLB", path: "/humanities-law/llb" }, { label: "PHD", path: "/humanities-law/phd" }, { label: "MA", path: "/humanities-law/ma" },{ label: "Commerce", path: "/humanities-law/commerce" }],
        "Finance": [ { label: "B COM", path: "/finance/b-com" }, { label: "MCOM", path: "/finance/m-com" },  { label: "CA", path: "/finance/ca" }],
      },
    },

    franchise: {
      left: ["Branch",  "Companies", "Tech Solutions"],
      right: {
        "Branch": [
          { label: "International", path: "/branch/international" },
          { label: "National", path: "/branch/national" },
          { label: "State", path: "/branch/state" },
          
          
        ],
        
        
        "Companies": [
          { label: "About", path: "/companies/about" },
          { label: "Opportunities", path: "/companies/opportunities" },
          
        ],
        "Tech Solutions": [
          { label: "LMS", path: "/tech-solutions/lms" },
          { label: "CRM", path: "/tech-solutions/crm" },
          { label: "ERP", path: "/tech-solutions/erp" },
        ],
      },
    },

   counselling: {
      left: ["UG Counselling", "PG Counselling",],
      right: {
      "UG Counselling": [ { label: "BTech", path: "/counselling/b-tech" }, { label: "Medical", path: "counselling/medical" }, { label: "General Studies", path: "/counselling/general" }],
        "PG Counselling": [ { label: "MTech", path: "/counselling/m-tech" }, { label: "Medical PG", path: "/counselling/medical-pg" }],
      },
    },

    abroad: {
      left: ["Countries", "Exams","visa support","financial"],
      right: {
         "visa support": [ { label: "Visa", path: "/abroad/visa-support" }, ],
        financial: [ { label: "Education Loans", path: "/abroad/financial/education-loans" }, { label: "Scholarships", path: "/abroad/financial/scholarships" }],
        Countries: [ { label: "USA", path: "/abroad/countries/usa" }, { label: "UK", path: "/abroad/countries/uk" }, { label: "Canada", path: "/abroad/countries/canada" }, { label: "Australia", path: "/abroad/countries/australia" }, { label: "Germany", path: "/abroad/countries/germany" }],
        Exams: [ { label: "IELTS", path: "/abroad/exams/ielts" }, { label: "TOEFL", path: "/abroad/exams/toefl" }, { label: "GRE", path: "/abroad/exams/gre" }, { label: "GMAT", path:"/abroad/exams/gmat"}],
      },
    },

    
  };


  return (
    <>
      
      <nav className="bg-white shadow relative z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-20 flex items-center justify-between">

        
            <img src="/image/beyond-logo.png" className="w-36" />

           
            <ul className="hidden lg:flex items-center gap-8 font-medium">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              {menus.map((menu) => (
                <li
                  key={menu.key}
                  className="relative hover:bg-gray-400 cursor-pointer rounded-sm"
                  onMouseEnter={() => {
                    setOpenMenu(menu.key);
                    setActiveLeft(dropdownData[menu.key].left[0]);
                  }}
                  
                >
                  <button className="flex items-center gap-1">
                    {menu.title}
                    <FiChevronDown />
                  </button>

                  {openMenu === menu.key && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4
                                 bg-white shadow-xl rounded-xl p-6 flex gap-6 min-w-[320px]"
                      onMouseEnter={() => setOpenMenu(menu.key)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <div className="bg-gray-50 rounded-lg p-4 w-40">
                        {dropdownData[menu.key].left.map((item) => (
                          <p
                            key={item}
                            onMouseEnter={() => setActiveLeft(item)}
                            className={`px-3 py-2 rounded cursor-pointer ${
                              activeLeft === item
                                ? "bg-white text-blue-600 font-semibold"
                                : "hover:text-blue-600"
                            }`}
                          >
                            {item}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-col gap-2">
                        {dropdownData[menu.key].right[activeLeft]?.map((item) => (
                          <NavLink
                            key={item.label}
                            to={item.path}
                            className="px-4 py-1 rounded hover:bg-gray-100"
                          >
                            {item.label}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
              <li>
                    <NavLink to="/about"  >  About   </NavLink>
              </li>
            </ul>
              
           
            <NavLink
              to="/contact"
              className="hidden lg:block font-medium"
            >
              Contact
            </NavLink>

           
            <button
              className="lg:hidden text-2xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      
      {mobileOpen && (
        <div className="lg:hidden bg-white shadow border-t">

          
          <NavLink
            to="/"
            className="block px-4 py-3 border-b font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>

          {menus.map((menu) => (
            <div key={menu.key} className="border-b px-4 py-3">
              <button
                onClick={() =>
                  setMobileSub(mobileSub === menu.key ? null : menu.key)
                }
                className="flex justify-between w-full font-semibold"
              >
                {menu.title}
                <FiChevronDown />
              </button>

              {mobileSub === menu.key && (
                <div className="mt-3 space-y-2">
                  {dropdownData[menu.key].left.map((item) => (
                    <div key={item}>
                      <p className="text-blue-600 font-medium">{item}</p>
                      {dropdownData[menu.key].right[item]?.map((sub) => (
                        <NavLink
                          key={sub.label}
                          to={sub.path}
                          className="block ml-3 text-sm text-gray-600"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <NavLink
            to="/about"
            className="block px-4 py-3 font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            About
          </NavLink>
          
          <NavLink
            to="/contact"
            className="block px-4 py-3 font-semibold"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
}
