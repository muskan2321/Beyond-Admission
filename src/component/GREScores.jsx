import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartBar,
  FaUniversity,
  FaArrowRight,
  FaTrophy,
} from "react-icons/fa";

const GREScores = () => {
  //  Predictor State
  const [score, setScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const universityData = [
    { name: "MIT", min: 325, type: "Dream" },
    { name: "Stanford", min: 328, type: "Dream" },
    { name: "Harvard", min: 326, type: "Target" },
    { name: "CMU", min: 320, type: "Target" },
    { name: "University of Texas", min: 310, type: "Safe" },
    { name: "Arizona State University", min: 900, type: "Safe" },
  ];

  const handlePredict = () => {
    if (!score) return;

    if (score < 260 || score > 940) {
      setError("Enter valid GRE score (260 - 940)");
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
      <section className="bg-gradient-to-br from-green-900 to-emerald-800 text-white py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          GRE Score & University Guide
        </h1>
        <p className="mt-4 opacity-90">
          Understand GRE scoring and find universities based on your score.
        </p>
      </section>

      {/* ================= TOTAL SCORE ================= */}
      <section className="py-28 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-10">GRE Total Score Range</h2>

        <div className="bg-green-50 p-14 rounded-3xl max-w-4xl mx-auto shadow-lg">
          <FaChartBar className="text-5xl text-green-700 mx-auto mb-6" />
          <p className="text-5xl font-bold text-green-800">260 – 340</p>
          <p className="mt-4 text-gray-600">
            Verbal (130-170) + Quant (130-170)
          </p>
        </div>
      </section>

      {/* ================= SECTION BREAKDOWN ================= */}
      <section className="py-28 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-12">Section Breakdown</h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {[
            { name: "Verbal Reasoning", range: "130 – 170" },
            { name: "Quantitative Reasoning", range: "130 – 170" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-2xl shadow hover:-translate-y-2 transition"
            >
              <h3 className="text-xl font-bold mb-3">{item.name}</h3>
              <p className="text-green-700 font-semibold">{item.range}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TOP UNIVERSITIES ================= */}
      <section className="py-28 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-12">
          Top University Average Scores
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: "MIT", score: "325+" },
            { name: "Stanford", score: "328+" },
            { name: "Harvard", score: "326+" },
            { name: "CMU", score: "320+" },
          ].map((uni, i) => (
            <div key={i} className="bg-green-50 p-8 rounded-xl shadow">
              <FaUniversity className="text-green-600 text-3xl mb-3 mx-auto" />
              <h4 className="font-semibold">{uni.name}</h4>
              <p className="text-2xl font-bold text-green-700 mt-2">
                {uni.score}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= GRE COLLEGE PREDICTOR ================= */}
      <section className="py-32 px-6 bg-gray-100 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-green-800">
            Find Universities Based on Your GRE Score
          </h2>

          <p className="text-gray-600 mb-10">
            Enter your GRE score to discover Dream, Target & Safe universities.
          </p>

          {/* INPUT */}
          <div className="flex justify-center gap-4 flex-wrap mb-8">
            <input
              type="number"
              placeholder="Enter GRE Score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
              className="px-6 py-4 rounded-xl border border-gray-300 w-80 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <button
              onClick={handlePredict}
              className="bg-green-700 text-white px-10 py-4 rounded-full font-semibold hover:bg-green-800 transition"
            >
              Predict Universities
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
                    No universities found for this score.
                  </p>
                </div>
              ) : (
                result.map((uni, i) => (
                  <div
                    key={i}
                    className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition hover:-translate-y-2"
                  >
                    <FaUniversity className="text-green-700 text-4xl mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-3">{uni.name}</h3>

                    <span
                      className={`inline-block px-4 py-1 text-sm rounded-full font-semibold text-white ${
                        uni.type === "Dream"
                          ? "bg-red-500"
                          : uni.type === "Target"
                            ? "bg-yellow-500"
                            : "bg-green-600"
                      }`}
                    >
                      {uni.type} University
                    </span>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-green-800 text-white text-center">
        <NavLink
          to="/contact"
          className="bg-white text-green-800 px-10 py-3 rounded-full font-semibold hover:scale-105 transition inline-flex items-center gap-3"
        >
          Improve Your GRE Score <FaArrowRight />
        </NavLink>
      </section>
    </div>
  );
};

export default GREScores;
