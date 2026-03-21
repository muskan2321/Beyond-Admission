import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBook,
  FaUserGraduate,
  FaChartLine,
  FaArrowRight,
  FaChalkboardTeacher,
  FaCheckCircle,
} from "react-icons/fa";

const GREDeliverables = () => {
  const [startTest, setStartTest] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "If x = 5, what is 2x + 3?",
      options: ["10", "13", "15", "20"],
      correct: 1,
    },
    {
      question: "Synonym of 'Abundant'?",
      options: ["Scarce", "Plentiful", "Rare", "Empty"],
      correct: 1,
    },
    {
      question: "What is 15% of 200?",
      options: ["20", "25", "30", "35"],
      correct: 2,
    },
    {
      question: "Choose meaning of 'Meticulous'",
      options: ["Careless", "Detailed", "Quick", "Lazy"],
      correct: 1,
    },
    {
      question: "If 5y - 10 = 15, what is y?",
      options: ["3", "4", "5", "6"],
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
      <section className="relative bg-gradient-to-br from-green-950 via-emerald-900 to-green-800 text-white py-36 text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight">
            GRE Preparation Program
          </h1>

          <p className="opacity-90 text-xl leading-relaxed">
            Structured learning, expert mentorship & realistic mock testing
            designed to help you score{" "}
            <span className="font-bold text-yellow-400">320+</span>.
          </p>

          <div className="mt-10">
            <button className="bg-white text-green-900 px-10 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-xl">
              Explore Program
            </button>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-28 px-6 text-center bg-gradient-to-b from-white to-green-50">
        <h2 className="text-4xl font-bold mb-16 text-green-800">
          What You Get
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <FaBook />,
              title: "Concept Classes",
              desc: "In-depth Quant & Verbal foundation building sessions.",
            },
            {
              icon: <FaChartLine />,
              title: "Mock Test Series",
              desc: "Full-length GRE simulated tests with analytics.",
            },
            {
              icon: <FaUserGraduate />,
              title: "1-1 Mentorship",
              desc: "Personalized guidance & strategy improvement.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-lg border border-white/30 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:-translate-y-4 hover:scale-105"
            >
              <div className="text-4xl text-green-700 mb-4 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONCEPT DETAILS */}
      <section className="py-28 px-6 bg-gradient-to-b from-gray-50 to-white text-center">
        <h2 className="text-3xl font-bold mb-14 text-green-800">
          Concept Mastery
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">
            <FaChalkboardTeacher className="text-4xl text-green-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-4">Quantitative Section</h3>
            <ul className="text-left space-y-3">
              <li>
                <FaCheckCircle className="inline text-green-600 mr-2" /> Algebra
                & Geometry
              </li>
              <li>
                <FaCheckCircle className="inline text-green-600 mr-2" /> Data
                Interpretation
              </li>
              <li>
                <FaCheckCircle className="inline text-green-600 mr-2" />{" "}
                Probability & Stats
              </li>
            </ul>
          </div>

          <div className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3">
            <FaBook className="text-4xl text-green-700 mx-auto mb-4" />
            <h3 className="font-semibold text-lg mb-4">Verbal Section</h3>
            <ul className="text-left space-y-3">
              <li>
                <FaCheckCircle className="inline text-green-600 mr-2" />{" "}
                Vocabulary Mastery
              </li>
              <li>
                <FaCheckCircle className="inline text-green-600 mr-2" /> Reading
                Comprehension
              </li>
              <li>
                <FaCheckCircle className="inline text-green-600 mr-2" /> Text
                Completion
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MENTORSHIP */}
      <section className="py-28 px-6 bg-gradient-to-r from-emerald-50 via-white to-green-50 text-center">
        <h2 className="text-3xl font-bold mb-14 text-green-800">
          1-1 Personalized Mentorship
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            "Personalized Study Plan",
            "Weekly Performance Tracking",
            "Doubt Solving & Strategy Calls",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md border border-green-100 p-10 rounded-3xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3"
            >
              <FaUserGraduate className="text-3xl text-green-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">{item}</h3>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <NavLink
            to="/contact"
            className="bg-green-800 text-white px-12 py-4 rounded-full font-semibold hover:bg-green-900 transition duration-300 shadow-xl hover:scale-105 inline-flex items-center gap-3"
          >
            Book Free Session <FaArrowRight />
          </NavLink>
        </div>
      </section>

      {/* MOCK TEST */}
      <section className="py-28 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-800">
          Practice Mini GRE Mock Test
        </h2>

        {!startTest ? (
          <button
            onClick={() => setStartTest(true)}
            className="bg-green-700 text-white px-12 py-4 rounded-full font-semibold hover:bg-green-800 transition shadow-xl"
          >
            Start Test
          </button>
        ) : showResult ? (
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-green-50 to-white p-14 rounded-3xl shadow-2xl border border-green-200">
            <h3 className="text-2xl font-bold mb-6">Your Result</h3>
            <p className="text-5xl font-extrabold text-green-700 mb-4">
              {calculateScore()} / {questions.length}
            </p>
            <p className="text-lg">
              Percentage:{" "}
              {Math.round((calculateScore() / questions.length) * 100)}%
            </p>
            <button
              onClick={restartTest}
              className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition"
            >
              Retake Test
            </button>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-2xl border border-green-100">
            <div className="w-full bg-gray-200 rounded-full h-4 mb-8 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-600 to-emerald-500 h-4 rounded-full transition-all duration-500"
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
                  className={`p-5 border rounded-2xl cursor-pointer transition duration-300 ${
                    answers[currentQ] === index
                      ? "bg-green-100 border-green-600 shadow-md"
                      : "hover:bg-gray-50 hover:shadow-md"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800 transition shadow-lg"
            >
              {currentQ === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        )}
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 bg-gradient-to-br from-green-900 via-emerald-800 to-green-700 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-8">
            Start Your GRE Journey Today
          </h2>

          <NavLink
            to="/contact"
            className="bg-white text-green-900 px-12 py-4 rounded-full font-semibold shadow-xl hover:scale-110 transition duration-300 inline-flex items-center gap-3"
          >
            Enroll Now <FaArrowRight />
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default GREDeliverables;
