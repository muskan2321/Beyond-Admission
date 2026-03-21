import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBookOpen,
  FaCalculator,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

const AboutSAT = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-900 text-white py-28 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          SAT Exam 2026 – Complete Guide
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          The SAT is a standardized test required for undergraduate admissions
          in USA and other countries.
        </p>
      </section>

      {/* WHAT IS SAT */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">What is SAT?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          SAT (Scholastic Assessment Test) is conducted by College Board. It
          evaluates Reading, Writing, and Mathematics skills for undergraduate
          admissions.
        </p>
      </section>

      {/* EXAM STRUCTURE */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">SAT Structure</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow">
            <FaBookOpen className="text-3xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Reading & Writing</h3>
            <p>200 – 800 Score Range</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow">
            <FaCalculator className="text-3xl text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Math</h3>
            <p>200 – 800 Score Range</p>
          </div>
        </div>
      </section>

      {/* ACCEPTANCE */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <FaGlobe className="text-blue-600 text-4xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-6">Accepted Worldwide</h2>
        <p className="text-gray-700">
          SAT is accepted in USA, Canada, UK, Australia and many other
          undergraduate programs globally.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-blue-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Start SAT Preparation <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default AboutSAT;
