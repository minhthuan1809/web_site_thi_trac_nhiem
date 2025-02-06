"use client";
import React, { useEffect, useState } from "react";
import Number from "./Number";
import { Radio, RadioGroup } from "@nextui-org/react";
import Time from "./Time";

// Define interface for exam data
interface Question {
  id: number;
  question: string;
  answerA: string;
  answerB: string;
  answerC: string;
  answerD: string;
  results: string;
}

interface ExamData {
  id: number;
  subject: string;
  class: string;
  lecturer: string;
  exam_day: string;
  day_close: string;
  duration: string;
  point: string;
  status_exam: boolean;
  see_exam_results: boolean;
  question: Question[];
}

interface DetailPracticeProps {
  data: ExamData | null;
  runtime?: number;
}

const Detail_Practice: React.FC<DetailPracticeProps> = ({
  data,
  runtime,
}) => {
  const [numberQuestion, setNumberQuestion] = useState(1);
  const [_time, _setTime] = useState<number>(runtime || 900); // default 15 mins
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>(JSON.parse(sessionStorage.getItem("selectedAnswers") || "{}"));

  // Update _time when runtime changes
  useEffect(() => {
    
    if (runtime) {
      _setTime(runtime);
      
    }
  }, [runtime]);

  const questions = data?.question || [];
  const currentQuestion = questions[numberQuestion - 1] || {};

  const handleAnswerChange = (value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));

    // Save to sessionStorage
    sessionStorage.setItem(
      "selectedAnswers",
      JSON.stringify({
        ...selectedAnswers,
        [currentQuestion.id]: value,
      })
    );
  };

  const handleTimeUp = () => {
    // Xử lý khi hết thời gian
    if (Object.keys(selectedAnswers).length > 0) {
      // TODO: Thêm logic nộp bài thi ở đây
      alert("Đã hết thời gian làm bài!");
    }
  };

  return (
    <div className="container mx-auto p-4 h-screen pt-[10rem]">
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
                className={`px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300
                  ${numberQuestion === 1 ? "cursor-not-allowed" : ""}
                `}
                onClick={() =>
                  setNumberQuestion(Math.max(1, numberQuestion - 1))
                }
                disabled={numberQuestion === 1}
              >
                Câu trước
              </button>
              <button
                className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700
                  ${
                    numberQuestion === questions.length
                      ? "cursor-not-allowed"
                      : ""
                  }
                `}
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
            <Time _setTime={_setTime} _time={_time} />
            <Number data={questions} question={numberQuestion} setQuestion={setNumberQuestion}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail_Practice;
