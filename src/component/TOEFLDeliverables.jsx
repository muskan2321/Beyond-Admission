import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaUserGraduate,
  FaArrowRight,
} from "react-icons/fa";

const TOEFLDeliverables = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-900 to-blue-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          TOEFL Preparation Deliverables
        </h1>
      </section>

      {/* WHAT WE PROVIDE */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our TOEFL Program Includes</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-cyan-50 p-10 rounded-2xl shadow">
            <FaBook className="text-3xl text-cyan-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Complete Study Material</h4>
          </div>

          <div className="bg-cyan-50 p-10 rounded-2xl shadow">
            <FaChartLine className="text-3xl text-cyan-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Full-Length Mock Tests</h4>
          </div>

          <div className="bg-cyan-50 p-10 rounded-2xl shadow">
            <FaUserGraduate className="text-3xl text-cyan-700 mb-4 mx-auto" />
            <h4 className="font-semibold">Speaking & Writing Evaluation</h4>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cyan-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-cyan-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Enroll Now <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default TOEFLDeliverables;
