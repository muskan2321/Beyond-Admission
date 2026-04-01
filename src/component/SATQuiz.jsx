import { useState } from "react";

const questions = [
  {
    question: "What is 20 + 15?",
    options: ["30", "35", "40", "45"],
    answer: "35",
  },
  {
    question: "Synonym of 'Increase'?",
    options: ["Decrease", "Reduce", "Grow", "Fall"],
    answer: "Grow",
  },
  {
    question: "What is 9 × 6?",
    options: ["48", "52", "54", "56"],
    answer: "54",
  },
  {
    question: "Antonym of 'Happy'?",
    options: ["Joyful", "Sad", "Excited", "Glad"],
    answer: "Sad",
  },
  {
    question: "What is 50 - 18?",
    options: ["30", "32", "34", "36"],
    answer: "32",
  },
];

const SATQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

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

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-100 px-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full">
        {!showResult ? (
          <>
            {/* Progress */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-yellow-500 h-2 rounded-full transition-all"
                  style={{
                    width: `${((current + 1) / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2 text-right">
                {current + 1}/{questions.length}
              </p>
            </div>

            {/* Question */}
            <h2 className="text-lg md:text-xl font-semibold mb-4 text-gray-800">
              {questions[current].question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="w-full border p-3 rounded-lg text-left hover:bg-yellow-50 hover:border-yellow-400 transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Result */}
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600 mb-4">
                🎉 Quiz Completed!
              </h2>

              <p className="text-lg text-gray-700 mb-4">
                Your Score:{" "}
                <span className="font-bold">
                  {score} / {questions.length}
                </span>
              </p>

              <p className="text-gray-600 mb-6">
                {score >= 4
                  ? "Excellent! You're SAT ready 🚀"
                  : "Good attempt! Keep practicing 💪"}
              </p>

              <button
                onClick={() => {
                  setCurrent(0);
                  setScore(0);
                  setShowResult(false);
                }}
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600"
              >
                Restart Quiz
              </button>

              {/* CTA */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">
                  Need expert guidance?
                </p>
                <button className="bg-green-600 text-white px-5 py-2 rounded-full">
                  Talk to SAT Expert
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SATQuiz;
