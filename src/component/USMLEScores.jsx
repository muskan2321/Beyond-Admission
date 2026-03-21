import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaHospital, FaArrowRight } from "react-icons/fa";

const USMLEScores = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-red-900 to-rose-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          USMLE Scoring & Residency Guide
        </h1>
      </section>

      {/* SCORING SYSTEM */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Scoring System Explained</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-red-50 p-10 rounded-2xl shadow">
            <FaChartBar className="text-4xl text-red-700 mb-4 mx-auto" />
            <h3 className="font-bold text-xl">Step 1</h3>
            <p className="text-gray-700">Pass / Fail System</p>
          </div>

          <div className="bg-red-50 p-10 rounded-2xl shadow">
            <FaChartBar className="text-4xl text-red-700 mb-4 mx-auto" />
            <h3 className="font-bold text-xl">Step 2 CK</h3>
            <p className="text-gray-700">3-Digit Score (200–300)</p>
          </div>
        </div>
      </section>

      {/* COMPETITIVE SCORE */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Competitive Score Range (Step 2 CK)
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold text-lg">230 – 240</h4>
            <p>Good Score</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold text-lg">240 – 250</h4>
            <p>Very Competitive</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold text-lg">250+</h4>
            <p>Highly Competitive</p>
          </div>
        </div>
      </section>

      {/* RESIDENCY MATCH */}
      <section className="py-20 px-6 text-center">
        <FaHospital className="text-red-600 text-4xl mx-auto mb-4" />
        <h2 className="text-3xl font-bold mb-6">Residency Match</h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          Higher Step 2 CK scores increase chances of matching into competitive
          specialties like Internal Medicine, Surgery, Pediatrics, Radiology,
          etc.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-red-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Improve Your Score <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default USMLEScores;
