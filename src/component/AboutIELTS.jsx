import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaGlobe,
  FaMicrophone,
  FaBookOpen,
  FaHeadphones,
  FaArrowRight,
} from "react-icons/fa";

const AboutIELTS = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white py-28 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          IELTS Exam 2026 – Complete Guide
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          IELTS (International English Language Testing System) is required for
          study, work and migration in English-speaking countries.
        </p>
      </section>

      {/* WHAT IS IELTS */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">What is IELTS?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          IELTS assesses English proficiency across Listening, Reading, Writing,
          and Speaking. It is jointly managed by British Council, IDP and
          Cambridge Assessment English.
        </p>
      </section>

      {/* EXAM STRUCTURE */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">IELTS Test Format</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow">
            <FaHeadphones className="text-purple-600 text-3xl mx-auto mb-4" />
            <h3>Listening</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaBookOpen className="text-purple-600 text-3xl mx-auto mb-4" />
            <h3>Reading</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaBookOpen className="text-purple-600 text-3xl mx-auto mb-4" />
            <h3>Writing</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaMicrophone className="text-purple-600 text-3xl mx-auto mb-4" />
            <h3>Speaking</h3>
          </div>
        </div>
      </section>

      {/* ACCEPTANCE */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <FaGlobe className="text-purple-600 text-4xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-6">Accepted Worldwide</h2>
        <p className="text-gray-700">
          IELTS is accepted in UK, USA, Canada, Australia, New Zealand and 140+
          countries globally.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 bg-purple-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-purple-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Start IELTS Preparation <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default AboutIELTS;
