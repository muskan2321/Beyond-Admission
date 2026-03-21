import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartLine,
  FaBookOpen,
  FaClock,
  FaGlobe,
  FaArrowRight,
} from "react-icons/fa";

const AboutGRE = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-green-800 via-emerald-700 to-green-800 text-white py-28 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          GRE Exam 2026 – Complete Guide
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          The Graduate Record Examination (GRE) is a globally accepted test
          required for MS, MBA and other postgraduate programs abroad.
        </p>
      </section>

      {/* WHAT IS GRE */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">What is GRE?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          GRE is conducted by ETS and is accepted by 3,000+ universities
          worldwide. It tests Analytical Writing, Verbal Reasoning, and
          Quantitative Reasoning skills.
        </p>
      </section>

      {/* EXAM STRUCTURE */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">GRE Exam Structure</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow">
            <FaBookOpen className="text-3xl text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Verbal</h3>
            <p>130 – 170 Score Range</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow">
            <FaChartLine className="text-3xl text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Quantitative</h3>
            <p>130 – 170 Score Range</p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow">
            <FaClock className="text-3xl text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold text-xl">Analytical Writing</h3>
            <p>0 – 6 Score Range</p>
          </div>
        </div>
      </section>

      {/* ACCEPTANCE */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <FaGlobe className="text-green-600 text-4xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-6">Accepted Worldwide</h2>
        <p className="text-gray-700">
          GRE is accepted in USA, UK, Canada, Australia, Germany and many other
          countries for MS & MBA programs.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-green-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Start Your GRE Preparation Today
        </h2>
        <NavLink
          to="/contact"
          className="bg-white text-green-800 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Book Consultation <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default AboutGRE;
