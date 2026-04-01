import { useState, useEffect } from "react";

const questions = [
  {
    question: "What is 12 × 3?",
    options: ["30", "36", "40", "42"],
    answer: "36",
  },
  {
    question: "Synonym of 'Difficult'?",
    options: ["Easy", "Hard", "Soft", "Light"],
    answer: "Hard",
  },
  {
    question: "What is 25 - 9?",
    options: ["14", "15", "16", "17"],
    answer: "16",
  },
  {
    question: "Antonym of 'Increase'?",
    options: ["Grow", "Rise", "Decrease", "Expand"],
    answer: "Decrease",
  },
  {
    question: "What is 8 × 7?",
    options: ["54", "56", "58", "60"],
    answer: "56",
  },
];

const GRETest = () => {
  const [start, setStart] = useState(false);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(120); // 2 min
  const [showResult, setShowResult] = useState(false);

  // ⏱ Timer
  useEffect(() => {
    if (start && time > 0 && !showResult) {
      const timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    if (time === 0) {
      setShowResult(true);
    }
  }, [start, time, showResult]);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setStart(false);
    setCurrent(0);
    setScore(0);
    setTime(120);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 max-w-md w-full">
        {/* 🔹 INTRO SCREEN */}
        {!start && !showResult && (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">GRE Sample Test</h2>

            <p className="text-gray-600 mb-6">
              ⏱ Duration: 2 minutes <br />
              📊 Questions: {questions.length} <br />
              📈 Difficulty: Mixed
            </p>

            <button
              onClick={() => setStart(true)}
              className="bg-yellow-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-600 transition"
            >
              Start Test
            </button>
          </div>
        )}

        {/* 🔹 TEST SCREEN */}
        {start && !showResult && (
          <>
            {/* Timer + Progress */}
            <div className="flex justify-between items-center mb-4">
              <p className="text-sm font-medium text-gray-600">
                Question {current + 1}/{questions.length}
              </p>
              <p className="text-red-500 font-semibold">⏱ {time}s</p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 h-2 rounded mb-4">
              <div
                className="bg-blue-500 h-2 rounded"
                style={{
                  width: `${((current + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>

            {/* Question */}
            <h3 className="text-lg font-semibold mb-4">
              {questions[current].question}
            </h3>

            {/* Options */}
            <div className="space-y-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="w-full border p-3 rounded-lg text-left hover:bg-blue-50 hover:border-blue-400 transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        )}

        {/* 🔹 RESULT SCREEN */}
        {showResult && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600 mb-4">
              🎉 Test Completed!
            </h2>

            <p className="text-lg mb-2">
              Score:{" "}
              <b>
                {score} / {questions.length}
              </b>
            </p>

            <p className="text-gray-600 mb-6">
              {score >= 4
                ? "Excellent! You're GRE ready 🚀"
                : "Good attempt! Keep practicing 💪"}
            </p>

            <button
              onClick={resetTest}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Restart Test
            </button>

            {/* CTA */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">
                Need expert guidance?
              </p>
              <button className="bg-green-600 text-white px-5 py-2 rounded-full">
                Talk to GRE Expert
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GRETest;
