import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaBookOpen,
  FaCheckCircle,
  FaUniversity,
  FaPenFancy,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const AboutGMAT = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-36 px-6 text-center overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

        <div className="relative max-w-4xl mx-auto">
          <span className="bg-white/20 px-5 py-2 rounded-full text-sm backdrop-blur-md">
            GMAT Focus Edition 2026
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
            Crack GMAT & Enter <span className="text-yellow-400">Top MBA</span>
          </h1>

          <p className="text-lg md:text-xl mt-6 opacity-90">
            Unlock global MBA admissions with expert mentorship and strategic
            preparation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-10">
            <NavLink
              to="/contact"
              className="bg-yellow-400 text-indigo-900 px-10 py-4 rounded-full font-bold hover:scale-105 transition duration-300 shadow-xl"
            >
              Free Counselling
            </NavLink>

            <NavLink
              to="/test-prep/gmat/scores"
              className="border border-white px-10 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-900 transition duration-300"
            >
              View Score Details
            </NavLink>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 text-center">
            <div>
              <h3 className="text-3xl font-bold">7000+</h3>
              <p className="text-sm opacity-80">Programs Accept GMAT</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">110+</h3>
              <p className="text-sm opacity-80">Countries</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">5 Years</h3>
              <p className="text-sm opacity-80">Score Validity</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EXAM STRUCTURE ================= */}
      <section className="py-28 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          GMAT Exam Structure
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            {
              icon: <FaChartLine />,
              title: "Quantitative",
              detail: "21 Questions | 45 Minutes",
            },
            {
              icon: <FaBookOpen />,
              title: "Verbal",
              detail: "23 Questions | 45 Minutes",
            },
            {
              icon: <FaPenFancy />,
              title: "Data Insights",
              detail: "20 Questions | 45 Minutes",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-indigo-200"
            >
              <div className="text-indigo-600 text-5xl mb-6 group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= UNIVERSITIES ================= */}
      <section className="py-28 bg-white text-center px-6">
        <h2 className="text-4xl font-bold mb-16">
          Top Universities Accepting GMAT
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            "Harvard Business School",
            "Stanford GSB",
            "INSEAD",
            "ISB Hyderabad",
          ].map((uni, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-indigo-50 to-white p-10 rounded-3xl shadow-md hover:shadow-xl transition hover:-translate-y-2"
            >
              <FaUniversity className="text-indigo-600 text-4xl mb-5 mx-auto" />
              <p className="font-semibold text-lg">{uni}</p>
              <div className="flex justify-center mt-3 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PREPARATION TIMELINE ================= */}
      <section className="py-28 bg-indigo-900 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-16">Smart Preparation Strategy</h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            "Concept Building & Foundation",
            "Mock Tests & Performance Analysis",
            "Time Management & Score Boosting",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white/10 p-10 rounded-3xl backdrop-blur-md hover:bg-white/20 transition"
            >
              <div className="text-5xl font-bold mb-6 text-yellow-400">
                0{i + 1}
              </div>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 bg-gradient-to-r from-purple-800 to-indigo-800 text-white text-center px-6">
        <h2 className="text-4xl font-bold mb-6">Ready to Score 700+?</h2>

        <p className="opacity-90 mb-10 text-lg">
          Start your GMAT preparation journey with certified mentors.
        </p>

        <NavLink
          to="/contact"
          className="inline-flex items-center gap-3 bg-yellow-400 text-indigo-900 px-12 py-5 rounded-full font-bold hover:scale-105 transition shadow-2xl"
        >
          Apply Now <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default AboutGMAT;
