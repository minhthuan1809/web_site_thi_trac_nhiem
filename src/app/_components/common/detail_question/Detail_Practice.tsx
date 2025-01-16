"use client";
import React, { useEffect, useState } from "react";
import Number from "./Number";
import { Radio, RadioGroup } from "@nextui-org/react";
import Time from "./Time";

// Định nghĩa interface cho props
interface DetailPracticeProps {
  params: {
    slug: string[];
  };
  data: any;
  runtime?: number;
}

export default function Detail_Practice({
  params,
  data,
  runtime,
}: DetailPracticeProps) {
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [_time, _setTime] = useState<number>(runtime || 900); // mặc định là 15p
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>(JSON.parse(localStorage.getItem("selectedAnswers") || "{}"));

  // Cập nhật giá trị _time khi runtime thay đổi
  useEffect(() => {
    if (runtime) {
      _setTime(runtime);
    }
  }, [runtime]);

  // Tìm exam có title khớp với slug[0] sau khi chuẩn hóa
  const matchingExam = data.find((exam: any) => {
    const normalizedTitle = exam.title
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .replace(/\s+/g, "_")
      .toLowerCase();
    return normalizedTitle === params.slug[0];
  });

  const questions = matchingExam?.question || [];
  const currentQuestion = questions[numberQuestion - 1] || {};

  const handleAnswerChange = (value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    // Lưu vào localStorage
    localStorage.setItem(
      "selectedAnswers",
      JSON.stringify({
        ...selectedAnswers,
        [currentQuestion.id]: value,
      })
    );
  };

  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">
              Câu hỏi {numberQuestion}
            </h2>
            <p className="text-gray-700 mb-6">{currentQuestion.question}</p>
            <div className="space-y-4">
              <RadioGroup
                color="primary"
                value={selectedAnswers[currentQuestion.id] || ""}
                onValueChange={handleAnswerChange}
                className="flex flex-col gap-2"
              >
                <Radio value="A">{currentQuestion.answerA}</Radio>
                <Radio value="B">{currentQuestion.answerB}</Radio>
                <Radio value="C">{currentQuestion.answerC}</Radio>
                <Radio value="D">{currentQuestion.answerD}</Radio>
              </RadioGroup>
            </div>
            <div className="flex justify-between mt-8">
              <button
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                onClick={() =>
                  setNumberQuestion(Math.max(1, numberQuestion - 1))
                }
                disabled={numberQuestion === 1}
              >
                Câu trước
              </button>
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                onClick={() =>
                  setNumberQuestion(
                    Math.min(questions.length, numberQuestion + 1)
                  )
                }
                disabled={numberQuestion === questions.length}
              >
                Câu tiếp theo
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-1/4">
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* thời gian */}
            <Time value={_time} _setTime={_setTime} />
            <h3 className="text-xl font-semibold mb-4">Danh sách câu hỏi</h3>
            {/* số lượng câu hỏi */}
            <Number
              length={questions.length}
              question={numberQuestion}
              setQuestion={setNumberQuestion}
              data={currentQuestion}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
