import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const colleges = [
  { name: "Harvard University", course: "MBA", country: "USA" },
  { name: "University of Oxford", course: "Computer Science", country: "UK" },
  { name: "University of Toronto", course: "Data Science", country: "Canada" },
];

export default function CollegeSliderCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colleges.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute right-12 top-18 hidden lg:block">
      <div className="w-[460px] rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl px-8 py-6 text-white">
        {/* Badge */}
        <span className="text-xs bg-amber-500/90 px-3 py-1 rounded-full font-semibold">
          Featured University
        </span>

        {/* University Name */}
        <h3 className="mt-3 text-xl font-semibold">{colleges[index].name}</h3>

        {/* Details */}
        <p className="text-sm text-white/80 mt-1">
          {colleges[index].course} • {colleges[index].country}
        </p>

        {/* Button */}
        <div className="mt-5 flex justify-between items-center">
          <p className="text-xs text-white/70">Limited seats available</p>

          <Link
            to="/contact"
            className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            Apply Now
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
