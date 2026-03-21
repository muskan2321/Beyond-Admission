import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaUniversity, FaArrowRight } from "react-icons/fa";

const SATScores = () => {
  return (
    <div className="w-full overflow-hidden">
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">SAT Score Guide</h1>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">SAT Total Score Range</h2>

        <div className="bg-blue-50 p-12 rounded-3xl max-w-4xl mx-auto shadow">
          <FaChartBar className="text-4xl text-blue-700 mx-auto mb-6" />
          <p className="text-4xl font-bold text-blue-800">400 – 1600</p>
          <p className="mt-4 text-gray-600">
            Reading & Writing (200-800) + Math (200-800)
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Top University Average SAT Scores
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Harvard", score: "1480+" },
            { name: "MIT", score: "1500+" },
            { name: "Stanford", score: "1490+" },
            { name: "Yale", score: "1470+" },
          ].map((uni, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow">
              <FaUniversity className="text-blue-600 text-3xl mb-3 mx-auto" />
              <h4>{uni.name}</h4>
              <p className="text-2xl font-bold text-blue-700 mt-2">
                {uni.score}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-blue-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-blue-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Improve Your SAT Score <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default SATScores;
