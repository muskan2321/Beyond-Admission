import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

const IELTSDeliverables = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          IELTS Preparation Deliverables
        </h1>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our IELTS Program Includes</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-purple-50 p-10 rounded-2xl shadow">
            <FaBook className="text-3xl text-purple-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Complete Study Material</h4>
          </div>

          <div className="bg-purple-50 p-10 rounded-2xl shadow">
            <FaChartLine className="text-3xl text-purple-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Mock Tests & Evaluation</h4>
          </div>

          <div className="bg-purple-50 p-10 rounded-2xl shadow">
            <FaUserGraduate className="text-3xl text-purple-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Personal Speaking Practice</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-purple-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-purple-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Enroll Now <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default IELTSDeliverables;
