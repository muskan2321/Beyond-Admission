import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaUniversity, FaArrowRight } from "react-icons/fa";

const TOEFLScores = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-cyan-900 to-blue-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">TOEFL Score Guide</h1>
      </section>

      {/* SCORE RANGE */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">TOEFL Total Score Range</h2>

        <div className="bg-cyan-50 p-12 rounded-3xl max-w-4xl mx-auto shadow">
          <FaChartBar className="text-4xl text-cyan-700 mx-auto mb-6" />
          <p className="text-4xl font-bold text-cyan-800">0 – 120</p>
          <p className="mt-4 text-gray-600">
            Each section is scored between 0 – 30.
          </p>
        </div>
      </section>

      {/* SCORE INTERPRETATION */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Score Interpretation</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold">80 – 90</h4>
            <p>Good for many universities</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold">90 – 100</h4>
            <p>Competitive for top programs</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold">100+</h4>
            <p>Excellent score for elite universities</p>
          </div>
        </div>
      </section>

      {/* UNIVERSITY REQUIREMENTS */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Typical University Requirements
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: "USA", score: "90 – 100+" },
            { name: "Canada", score: "88 – 100" },
            { name: "UK", score: "85 – 95" },
            { name: "Australia", score: "79 – 100" },
          ].map((uni, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow">
              <FaUniversity className="text-cyan-600 text-3xl mb-3 mx-auto" />
              <h4>{uni.name}</h4>
              <p className="text-xl font-bold text-cyan-700 mt-2">
                {uni.score}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cyan-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-cyan-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Improve Your TOEFL Score <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default TOEFLScores;
