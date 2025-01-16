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
  console.log("data", data);

  return (
    <>
      <div className="grid grid-cols-6 gap-2">
        {Array.from({ length: length }, (_, index) => (
          <button
            key={index}
            id={data.id}
            className={`flex items-center justify-center w-10 h-10  rounded-full ${
              question === index + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
            onClick={() => setQuestion(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-medium hover:bg-blue-700 transition-colors mt-6">
        Nộp bài
      </button>
    </>
  );
}
