import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

const USMLEDeliverables = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-red-900 to-rose-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Complete USMLE Preparation Program
        </h1>
      </section>

      {/* PROGRAM FEATURES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Program Includes</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-red-50 p-10 rounded-2xl shadow-lg">
            <FaBook className="text-3xl text-red-700 mb-4 mx-auto" />
            <h4 className="font-semibold text-lg">Concept-Based Learning</h4>
            <p className="text-gray-700 mt-2">
              Deep understanding of medical concepts from basic to clinical
              level.
            </p>
          </div>

          <div className="bg-red-50 p-10 rounded-2xl shadow-lg">
            <FaChartLine className="text-3xl text-red-700 mb-4 mx-auto" />
            <h4 className="font-semibold text-lg">QBank Practice</h4>
            <p className="text-gray-700 mt-2">
              High-yield questions with detailed explanations and mock tests.
            </p>
          </div>

          <div className="bg-red-50 p-10 rounded-2xl shadow-lg">
            <FaUserGraduate className="text-3xl text-red-700 mb-4 mx-auto" />
            <h4 className="font-semibold text-lg">Personal Mentorship</h4>
            <p className="text-gray-700 mt-2">
              One-on-one guidance, strategy planning & doubt sessions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-red-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-red-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Enroll Now <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default USMLEDeliverables;
