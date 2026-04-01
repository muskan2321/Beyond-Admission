import { useEffect, useRef, useState } from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const colleges = [
  {
    logo: "/image/cllg1.jpg",
    name: "IntelliPaat School of Technology",
    course: "AI, ML & Data Science",
    subtitle: "Admissions Open 2026",
    details: [
      "UGC Recognised University",
      "1-Year Internship",
      "World-Class Mentors",
      "3100+ Hiring Partners",
    ],
  },
  {
    logo: "/image/cllg2.png",
    name: "Divine Institute of Management",
    course: "BBA | MBA | BCA",
    subtitle: "Admissions Open 2026",
    details: [
      "Industry-Oriented Curriculum",
      "Experienced Faculty",
      "100% Placement",
      "Internship Opportunities",
    ],
  },

  {
    logo: "/image/cllg3.png",
    name: "Manipal University Jaipur (MUJ)",
    course: "BBA | BCom | BCA | MBA | MCA",
    subtitle: "Admissions Open 2026",
    details: [
      "Established in 2011",
      "Flexible Online UG & PG Programs",
      "Career-Focused Learning",
      "Courses: MA Economics, MAJMC, MCom",
    ],
  },

  {
    logo: "/image/cllg4.jpg",
    name: "Sikkim Manipal University (SMU)",
    course: "BA | BCom | MBA | MCA",
    subtitle: "Admissions Open 2026",
    details: [
      "Established in 1995",
      "Affordable Online Programs",
      "Courses: MCom, MA English",
      "Political Science & Sociology",
    ],
  },

  //  NEW B.TECH AIML CARD WITH MULTIPLE COLLEGES
  {
    logo: "/image/cllg5.jpg",
    tag: "B.Tech in CS & AIML",
    name: "Top Engineering Universities",
    course: "B.Tech CSE (AI & ML)",
    subtitle: "Admissions Open 2026",
    collegesList: [
      "S-Vyasa University - Bangalore (17L)",
      "Yenepoya University - Bangalore (12L)",
      "AMET University - Chennai (9L)",
      "Sandip University - Nashik (10L)",
      "VGU University - Jaipur (8.5L)",
      "Sushant University - Delhi (11L)",
      "Guru Nanak University - Hyderabad (12L)",
      "DY Patil University - Pune (15L)",
      "HRIT University - Ghaziabad (8L)",
    ],
  },
];

export default function CollegeSliderCard() {
  const sliderRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let scrollAmount = 0;

    const slide = () => {
      if (!sliderRef.current || isPaused) return;

      scrollAmount += 0.4;

      if (scrollAmount >= sliderRef.current.scrollHeight / 2) {
        scrollAmount = 0;
      }

      sliderRef.current.scrollTop = scrollAmount;
    };

    const interval = setInterval(slide, 16);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div className="absolute right-10 top-15 hidden lg:block w-[380px] h-[520px] overflow-hidden">
      <div
        ref={sliderRef}
        className="h-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="flex flex-col gap-5 py-2">
          {[...colleges, ...colleges, ...colleges].map((college, index) => (
            <div
              key={index}
              className="group min-h-[130px] rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl px-5 py-4 text-white transition-all duration-300 hover:scale-[1.03]"
            >
              {/*  TAG (NEW) */}
              {college.tag && (
                <p className="text-[10px] bg-orange-500 inline-block px-2 py-1 rounded mb-2">
                  {college.tag}
                </p>
              )}

              {/* Logo + Name */}
              <div className="flex items-center gap-3">
                <img
                  src={college.logo}
                  alt=""
                  className="w-12 h-12 rounded-full border object-cover"
                />
                <div>
                  <h3 className="text-sm font-bold leading-tight">
                    {college.name}
                  </h3>
                  <p className="text-xs text-yellow-300">{college.course}</p>
                </div>
              </div>

              {/* Subtitle */}
              <p className="mt-2 text-xs text-white/70">{college.subtitle}</p>

              {/*  NORMAL DETAILS */}
              {college.details && (
                <div className="max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500 mt-2">
                  {college.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 mt-1">
                      <FaCheckCircle className="text-green-400 text-xs" />
                      <p className="text-xs">{item}</p>
                    </div>
                  ))}
                </div>
              )}

              {/*  NEW COLLEGE LIST (UX IMPROVED) */}
              {college.collegesList && (
                <div className="max-h-0 overflow-hidden group-hover:max-h-52 transition-all duration-500 mt-2">
                  <div className="grid grid-cols-1 gap-1 text-xs">
                    {college.collegesList.map((item, i) => (
                      <p key={i} className="text-white/90">
                        • {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom */}
              <div className="mt-3 flex justify-between items-center">
                <p className="text-xs text-white/80">Limited Seats</p>

                <Link
                  to="/contact"
                  className="flex items-center gap-1 bg-orange-500 px-3 py-1 rounded-md text-xs hover:scale-105 transition"
                >
                  Apply
                  <FaArrowRight size={10} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
