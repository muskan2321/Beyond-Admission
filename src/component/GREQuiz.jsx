import { useState } from "react";

const questions = [
  {
    question: "What is 10 + 5?",
    options: ["12", "15", "18", "20"],
    answer: "15",
  },
  {
    question: "Synonym of 'Quick'?",
    options: ["Slow", "Rapid", "Lazy", "Weak"],
    answer: "Rapid",
  },
  {
    question: "What is 9 × 3?",
    options: ["21", "24", "27", "30"],
    answer: "27",
  },
  {
    question: "Antonym of 'Strong'?",
    options: ["Powerful", "Weak", "Bold", "Tough"],
    answer: "Weak",
  },
  {
    question: "What is 20 - 8?",
    options: ["10", "11", "12", "13"],
    answer: "12",
  },
];

const GREQuiz = () => {
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 px-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl max-w-md w-full">
        {!showResult ? (
          <>
            {/* Progress */}
            <div className="mb-4">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="bg-purple-500 h-2 rounded-full transition-all"
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
            <h2 className="text-lg md:text-xl font-semibold mb-4">
              {questions[current].question}
            </h2>

            {/* Options */}
            <div className="space-y-3">
              {questions[current].options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(opt)}
                  className="w-full border p-3 rounded-lg text-left hover:bg-purple-50 hover:border-purple-400 transition"
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

              <p className="text-lg mb-4">
                Your Score:{" "}
                <span className="font-bold">
                  {score} / {questions.length}
                </span>
              </p>

              <button
                onClick={() => {
                  setCurrent(0);
                  setScore(0);
                  setShowResult(false);
                }}
                className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600"
              >
                Restart Quiz
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default GREQuiz;
