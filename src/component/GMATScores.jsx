import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartBar,
  FaUniversity,
  FaArrowRight,
  FaTrophy,
} from "react-icons/fa";

const GMATScores = () => {
  // 🔥 College Finder Logic
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const universityData = [
    { name: "Harvard Business School", min: 730, type: "Dream" },
    { name: "Stanford GSB", min: 735, type: "Dream" },
    { name: "Wharton", min: 720, type: "Target" },
    { name: "INSEAD", min: 700, type: "Target" },
    { name: "ISB Hyderabad", min: 700, type: "Target" },
    { name: "University of Manchester", min: 650, type: "Safe" },
    { name: "University of Sydney", min: 650, type: "Safe" },
  ];

  const handleSuggest = () => {
    if (!score) return;

    if (score < 205 || score > 805) {
      setError("Enter valid GMAT score (205 - 805)");
      setResult(null);
      return;
    }

    setError("");
    const filtered = universityData.filter((uni) => Number(score) >= uni.min);

    setResult(filtered);
  };

  return (
    <div className="w-full overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white py-36 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            GMAT Score & Percentile Guide
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Understand scoring and find the right MBA colleges based on your
            GMAT score.
          </p>
        </div>
      </section>

      {/* ================= TOTAL SCORE ================= */}
      <section className="py-28 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-14">Total Score Range</h2>

        <div className="max-w-4xl mx-auto bg-indigo-50 p-16 rounded-3xl shadow-xl">
          <FaChartBar className="text-indigo-700 text-6xl mx-auto mb-6" />
          <p className="text-6xl font-extrabold text-indigo-900">205 – 805</p>
          <p className="text-gray-600 mt-6 text-lg">
            Combined score of Quantitative, Verbal & Data Insights.
          </p>
        </div>
      </section>

      {/* ================= SECTION BREAKDOWN ================= */}
      <section className="py-28 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-16">Section Score Breakdown</h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { name: "Quantitative", range: "60 – 90" },
            { name: "Verbal", range: "60 – 90" },
            { name: "Data Insights", range: "60 – 90" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-12 rounded-3xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
              <p className="text-indigo-700 text-xl font-semibold">
                {item.range}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= COLLEGE FINDER TOOL ================= */}
      <section className="py-32 px-6 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-indigo-900">
            Find Colleges Based on Your GMAT Score
          </h2>

          <p className="text-gray-600 mb-10">
            Enter your score to discover Dream, Target & Safe MBA schools.
          </p>

          {/* INPUT */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <input
              type="number"
              placeholder="Enter GMAT Score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="px-6 py-4 rounded-xl border border-gray-300 w-80 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            <button
              onClick={handleSuggest}
              className="bg-indigo-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-indigo-800 transition"
            >
              Predict Colleges
            </button>
          </div>

          {error && <p className="text-red-500 font-semibold">{error}</p>}

          {/* RESULTS */}
          {result && (
            <div className="mt-16 grid md:grid-cols-3 gap-8">
              {result.length === 0 ? (
                <div className="col-span-3 bg-white p-12 rounded-2xl shadow">
                  <FaTrophy className="text-yellow-500 text-5xl mx-auto mb-4" />
                  <p className="text-xl font-semibold">
                    No colleges found for this score.
                  </p>
                </div>
              ) : (
                result.map((uni, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2"
                  >
                    <FaUniversity className="text-indigo-700 text-4xl mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-3">{uni.name}</h3>

                    <span
                      className={`inline-block px-4 py-1 text-sm rounded-full font-semibold text-white ${
                        uni.type === "Dream"
                          ? "bg-red-500"
                          : uni.type === "Target"
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }`}
                    >
                      {uni.type} School
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 px-6 bg-gradient-to-r from-indigo-800 to-purple-800 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Targeting 700+ GMAT Score?</h2>

        <NavLink
          to="/contact"
          className="inline-flex items-center gap-3 bg-yellow-400 text-indigo-900 px-12 py-5 rounded-full font-bold hover:scale-105 transition"
        >
          Start Preparation <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default GMATScores;
