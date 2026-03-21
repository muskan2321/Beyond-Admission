import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

const SATDeliverables = () => {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          SAT Preparation Deliverables
        </h1>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">What We Provide</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-blue-50 p-10 rounded-2xl shadow">
            <FaBook className="text-3xl text-blue-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Concept Classes</h4>
          </div>

          <div className="bg-blue-50 p-10 rounded-2xl shadow">
            <FaChartLine className="text-3xl text-blue-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Mock Tests</h4>
          </div>

          <div className="bg-blue-50 p-10 rounded-2xl shadow">
            <FaUserGraduate className="text-3xl text-blue-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Personal Mentorship</h4>
          </div>
        </div>
      </section>

      <section className="py-24 bg-blue-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-blue-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Enroll Now <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default SATDeliverables;
