import React from "react";

export default function Number({
  length,
  question,
  setQuestion,
  data,
}: {
  length: number;
  question: number;
  setQuestion: (question: number) => void;
  data: any;
}) {
  const answered = JSON.parse(localStorage.getItem("selectedAnswers") || "{}");

  // Create an array of question IDs based on the current data structure
  const questionIds = Array.from({ length }, (_, index) => index + 1);

  return (
    <>
      <div className="grid grid-cols-6 gap-2">
        {questionIds.map((index) => (
          <button
            key={index}
            className={`flex items-center justify-center w-10 h-10 rounded-full ${
              answered[index] ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setQuestion(index)}
          >
            {index}
          </button>
        ))}
      </div>
      <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition-colors mt-6">
        Nộp bài
      </button>
    </>
  );
}
