import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaGlobe,
  FaMicrophone,
  FaBookOpen,
  FaHeadphones,
  FaArrowRight,
} from "react-icons/fa";

const AboutTOEFL = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-900 via-blue-800 to-cyan-900 text-white py-28 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          TOEFL iBT 2026 – Complete Guide
        </h1>
        <p className="max-w-3xl mx-auto text-lg opacity-90">
          TOEFL (Test of English as a Foreign Language) measures academic
          English skills required for university admissions abroad.
        </p>
      </section>

      {/* WHAT IS TOEFL */}
      <section className="py-24 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">What is TOEFL?</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          TOEFL is conducted by ETS and accepted by 11,000+ universities
          worldwide. It evaluates Reading, Listening, Speaking and Writing
          skills in an academic environment.
        </p>
      </section>

      {/* TEST STRUCTURE */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">TOEFL Test Structure</h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow">
            <FaBookOpen className="text-cyan-600 text-3xl mx-auto mb-4" />
            <h3>Reading</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaHeadphones className="text-cyan-600 text-3xl mx-auto mb-4" />
            <h3>Listening</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaMicrophone className="text-cyan-600 text-3xl mx-auto mb-4" />
            <h3>Speaking</h3>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <FaBookOpen className="text-cyan-600 text-3xl mx-auto mb-4" />
            <h3>Writing</h3>
          </div>
        </div>
      </section>

      {/* ACCEPTANCE */}
      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <FaGlobe className="text-cyan-600 text-4xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-6">Accepted Globally</h2>
        <p className="text-gray-700">
          TOEFL is accepted in USA, Canada, UK, Australia and many European
          universities.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cyan-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-cyan-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Start TOEFL Preparation <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default AboutTOEFL;
