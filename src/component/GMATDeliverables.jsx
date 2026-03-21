import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaChartLine,
  FaUserGraduate,
  FaLaptop,
  FaCheckCircle,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const GMATDeliverables = () => {
  // ================= TEST STATE =================
  const [startTest, setStartTest] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "If 2x + 6 = 18, what is x?",
      options: ["4", "5", "6", "7"],
      correct: 2,
    },
    {
      question: "Critical Reasoning questions test your?",
      options: ["Grammar", "Logical Thinking", "Speed", "Vocabulary"],
      correct: 1,
    },
    {
      question: "What is 20% of 250?",
      options: ["40", "45", "50", "55"],
      correct: 2,
    },
    {
      question: "Data Sufficiency requires?",
      options: ["Exact Answer", "Yes/No Logic", "Essay Writing", "Guess"],
      correct: 1,
    },
    {
      question: "Profit of 25% on cost 200, selling price?",
      options: ["225", "240", "250", "260"],
      correct: 2,
    },
  ];

  const handleOptionClick = (index) => {
    setAnswers({ ...answers, [currentQ]: index });
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.correct) score++;
    });
    return score;
  };

  const restartTest = () => {
    setCurrentQ(0);
    setAnswers({});
    setShowResult(false);
    setStartTest(false);
  };

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div className="w-full overflow-hidden font-sans text-gray-800">
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-blue-900 to-indigo-800 text-white py-36 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
            GMAT Preparation Deliverables
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Structured roadmap, expert mentorship, and complete preparation
            support to help you achieve{" "}
            <span className="text-yellow-400 font-bold">700+</span> GMAT score.
          </p>

          <div className="mt-10">
            <button className="bg-white text-indigo-900 px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition duration-300">
              Explore Program
            </button>
          </div>
        </div>
      </section>

      {/* WHAT WE DELIVER */}
      <section className="py-28 px-6 bg-gradient-to-b from-white to-indigo-50 text-center">
        <h2 className="text-4xl font-bold mb-16">What We Deliver</h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            { icon: <FaBook />, title: "Concept Classes" },
            { icon: <FaChartLine />, title: "Mock Test Series" },
            { icon: <FaUserGraduate />, title: "1-1 Mentorship" },
            { icon: <FaLaptop />, title: "Online Portal Access" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg border border-white/30 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-4 hover:scale-105"
            >
              <div className="text-indigo-700 text-4xl mb-4 flex justify-center">
                {item.icon}
              </div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* COURSE MODULES */}
      <section className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-14">
            Complete Course Modules
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Quantitative",
                items: [
                  "Arithmetic",
                  "Algebra",
                  "Geometry",
                  "Data Sufficiency",
                  "Advanced Problem Solving",
                ],
              },
              {
                title: "Verbal",
                items: [
                  "Reading Comprehension",
                  "Critical Reasoning",
                  "Sentence Correction",
                  "Logic-based Questions",
                ],
              },
              {
                title: "Data Insights",
                items: [
                  "Data Interpretation",
                  "Graph Analysis",
                  "Multi-Source Reasoning",
                  "Real-world Case Sets",
                ],
              },
            ].map((module, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3"
              >
                <h3 className="font-bold text-xl mb-6">{module.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {module.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <FaCheckCircle className="text-indigo-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI GMAT MOCK TEST SECTION */}
      <section className="py-28 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10 text-indigo-800">
          Practice Mini GMAT Mock Test
        </h2>

        {!startTest ? (
          <button
            onClick={() => setStartTest(true)}
            className="bg-indigo-700 text-white px-12 py-4 rounded-full font-semibold hover:bg-indigo-800 transition shadow-xl"
          >
            Start Test
          </button>
        ) : showResult ? (
          <div className="max-w-3xl mx-auto bg-indigo-50 p-12 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Your Result</h3>
            <p className="text-4xl font-bold text-indigo-700 mb-4">
              {calculateScore()} / {questions.length}
            </p>
            <p className="text-lg">
              Percentage:{" "}
              {Math.round((calculateScore() / questions.length) * 100)}%
            </p>
            <button
              onClick={restartTest}
              className="mt-8 bg-indigo-700 text-white px-8 py-3 rounded-full"
            >
              Retake Test
            </button>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-indigo-100">
            <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
              <div
                className="bg-indigo-700 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <h3 className="text-xl font-semibold mb-6">
              Q{currentQ + 1}. {questions[currentQ].question}
            </h3>

            <div className="space-y-4 text-left">
              {questions[currentQ].options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(index)}
                  className={`p-4 border rounded-xl cursor-pointer transition ${
                    answers[currentQ] === index
                      ? "bg-indigo-100 border-indigo-600"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="mt-8 bg-indigo-700 text-white px-8 py-3 rounded-full"
            >
              {currentQ === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-900"></div>

        {/* Decorative Glow Circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-400 opacity-30 rounded-full blur-3xl"></div>

        {/* Glass Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-16 shadow-2xl text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Start Your GMAT Preparation Today
          </h2>

          <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
            Join our structured program and unlock your path to a
            <span className="text-yellow-400 font-semibold">
              {" "}
              700+ GMAT score
            </span>
            with expert mentorship & proven strategies.
          </p>

          <NavLink
            to="/signin"
            className="inline-flex items-center gap-3 bg-white text-indigo-900 px-14 py-5 rounded-full font-semibold shadow-2xl hover:scale-110 hover:shadow-indigo-500/40 transition duration-300"
          >
            Enroll Now <FaArrowRight />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default GMATDeliverables;
