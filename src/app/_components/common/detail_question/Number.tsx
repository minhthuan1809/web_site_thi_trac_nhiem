import React, { useEffect } from "react";

export default function Number({
  question,
  setQuestion,
  data,
}: {
  question: number;
  setQuestion: (question: number) => void;
  data: any;
}) {
  const answered = JSON.parse(
    sessionStorage.getItem("selectedAnswers") || "{}"
  );
  useEffect(() => {
    sessionStorage.removeItem("selectedAnswers");
  }, []);

  const handleSubmit = () => {
    if (Object.keys(answered).length !== data.length) {
      alert("Vui lòng trả lời tất cả câu hỏi");
      return;
    }
    console.log(Object.keys(answered).length);
    console.log(answered);
    
    if (confirm("Bạn có chắc chắn muốn nộp bài?")) {
      // TODO: Thêm logic nộp bài thi ở đây
      alert("Đã nộp bài thành công!");
    }
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-2">
        {data.map((item: any, index: number) => (
          <button
            key={index + 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full
              ${
                index + 1 === question // số câu hỏi đang chọn
                  ? "bg-blue-600 text-white"
                  : Object.keys(answered).includes(item.id.toString()) // câu hỏi đã trả lời
                  ? "bg-gray-400 text-white"
                  : "bg-gray-200"
              }
              `}
            onClick={() => setQuestion(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className={`w-full  text-white rounded-xl py-3 font-medium  transition-colors mt-6
          ${
            Object.keys(answered).length !== data.length
              ? "cursor-not-allowed bg-gray-400 text-gray-700"
              : "bg-blue-600 hover:bg-blue-700"
          }
        `}
        onClick={handleSubmit}
        disabled={Object.keys(answered).length !== data.length}
      >
        Nộp bài
      </button>
    </>
  );
}
