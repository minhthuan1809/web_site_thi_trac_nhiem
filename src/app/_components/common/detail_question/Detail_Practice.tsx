"use client";
import React, { useEffect, useState } from "react";
import Number from "./Number";
import { Radio, RadioGroup } from "@nextui-org/react";
import Time from "./Time";

export default function Detail_Practice({ params }: { params: any }) {
  const [question, setQuestion] = useState(1);
  const [time, setTime] = useState(2000);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});

  const questions = [
    {
      id: 1,
      content: "Thủ đô của Việt Nam là gì?",
      options: ["A. Hà Nội", "B. Hồ Chí Minh", "C. Đà Nẵng", "D. Hải Phòng"],
      answer: "A",
    },
    {
      id: 2,
      content: "Sông nào dài nhất Việt Nam?",
      options: ["A. Sông Hồng", "B. Sông Mê Kông", "C. Sông Đà", "D. Sông Lô"],
      answer: "B",
    },
    {
      id: 3,
      content: "Đâu là món ăn truyền thống của Việt Nam?",
      options: ["A. Sushi", "B. Pizza", "C. Phở", "D. Hamburger"],
      answer: "C",
    },
    {
      id: 4,
      content: "Thủ đô của Việt Nam là gì?",
      options: ["A. Hà Nội", "B. Hồ Chí Minh", "C. Đà Nẵng", "D. Hải Phòng"],
      answer: "A",
    },
    {
      id: 5,
      content: "Sông nào dài nhất Việt Nam?",
      options: ["A. Sông Hồng", "B. Sông Mê Kông", "C. Sông Đà", "D. Sông Lô"],
      answer: "B",
    },
    {
      id: 6,
      content: "Đâu là món ăn truyền thống của Việt Nam?",
      options: ["A. Sushi", "B. Pizza", "C. Phở", "D. Hamburger"],
      answer: "C",
    },
  ];

  const currentQuestion = questions[question - 1];

  useEffect(() => {
    console.log(time);
  }, [time]);

  const handleAnswerChange = (value: string) => {
    console.log(selectedAnswers);

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">
              Câu hỏi {currentQuestion.id}
            </h2>
            <p className="text-gray-700 mb-6">{currentQuestion.content}</p>
            <div className="space-y-4">
              <RadioGroup
                color="primary"
                value={selectedAnswers[currentQuestion.id] || ""}
                onValueChange={handleAnswerChange}
                className="flex flex-col gap-2"
              >
                {currentQuestion.options.map((option, index) => (
                  <Radio key={index} value={option.charAt(0)}>
                    {option}
                  </Radio>
                ))}
              </RadioGroup>
            </div>
            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                onClick={() => setQuestion(Math.max(1, question - 1))}
                disabled={question === 1}
              >
                Câu trước
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() =>
                  setQuestion(Math.min(questions.length, question + 1))
                }
                disabled={question === questions.length}
              >
                Câu tiếp theo
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* thời gian */}
            <Time value={time} _setTime={setTime} />
            <h3 className="text-xl font-semibold mb-4">Danh sách câu hỏi</h3>
            {/* số lượng câu hỏi */}
            <Number
              length={questions.length}
              question={question}
              setQuestion={setQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
