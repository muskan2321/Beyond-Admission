import { useState } from "react";

const questions = [
  {
    question: "What is 5 + 3?",
    options: ["6", "7", "8", "9"],
    answer: "8",
  },
  {
    question: "Synonym of 'Happy'?",
    options: ["Sad", "Joyful", "Angry", "Tired"],
    answer: "Joyful",
  },
];

const GMATQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      alert(`Quiz Finished 🎉 Your Score: ${score + 1}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-md w-full">
        <h2 className="text-lg font-semibold mb-4">Question {current + 1}</h2>

        <p className="mb-6">{questions[current].question}</p>

        <div className="space-y-3">
          {questions[current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className="w-full border p-3 rounded-lg hover:bg-blue-100"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GMATQuiz;
