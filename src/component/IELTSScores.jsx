import React from "react";
import { NavLink } from "react-router-dom";
import { FaChartBar, FaUniversity, FaArrowRight } from "react-icons/fa";

const IELTSScores = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-28 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">IELTS Score Guide</h1>
      </section>

      {/* SCORE RANGE */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">IELTS Band Score Range</h2>

        <div className="bg-purple-50 p-12 rounded-3xl max-w-4xl mx-auto shadow">
          <FaChartBar className="text-4xl text-purple-700 mx-auto mb-6" />
          <p className="text-4xl font-bold text-purple-800">Band 0 – Band 9</p>
          <p className="mt-4 text-gray-600">
            Each section (Listening, Reading, Writing, Speaking) is scored
            between 0 and 9 bands.
          </p>
        </div>
      </section>

      {/* BAND INTERPRETATION */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Band Score Meaning</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold">Band 6.0 – 6.5</h4>
            <p>Competent User</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold">Band 7.0 – 7.5</h4>
            <p>Good User</p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow">
            <h4 className="font-bold">Band 8.0+</h4>
            <p>Very Good to Expert User</p>
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
            { name: "UK Universities", score: "6.5 – 7.0" },
            { name: "Canada", score: "6.5+" },
            { name: "Australia", score: "6.0 – 7.0" },
            { name: "USA", score: "6.5+" },
          ].map((uni, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow">
              <FaUniversity className="text-purple-600 text-3xl mb-3 mx-auto" />
              <h4>{uni.name}</h4>
              <p className="text-xl font-bold text-purple-700 mt-2">
                {uni.score}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-purple-900 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-purple-900 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Improve Your Band Score <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default IELTSScores;
