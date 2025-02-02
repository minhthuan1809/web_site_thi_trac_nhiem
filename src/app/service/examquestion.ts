import { toast } from "react-toastify";

// Thêm bài thi
export const getItemExamQuestion = async (question: any, formData: any) => {
  
  toast.dismiss();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 07c69d54ca0e2c85d79378c4cffe01e462f62c11ae63553dd9172c37e170b5d5ab6eab94c78fec887eea677e689a0835136b6d06682336026db41cb7fb6cbecdce43790dff3307430dc3e0f30d2e9bd34c41db80eda098644da0ed1ea2057930d9c0150dc2265e00b0687430f42e5496929edc673c0e56dc962b7d7500934e2e`,
    },
    body: JSON.stringify({
        "data": {
          "class": formData.class,
          "subject": formData.subject,
          "lecturer": formData.lecturer,
          "exam_day": formData.exam_day,
          "see_exam_results": formData.see_exam_results,
          "point": formData.point,
          "duration": formData.duration,
          "status_exam": formData.status_exam,
          "day_close": formData.day_close,
          "question": question
        }
      }),
  });
  const data = await response.json();
  if (!data.ok) {
    throw new Error(data.message);
  }
  toast.success(data.message);
  return data;
};



// Xóa câu hỏi
export const deleteExamQuestion = async (id: any, questionId: any) => {
  
  toast.dismiss();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/${id}/questions/${questionId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 07c69d54ca0e2c85d79378c4cffe01e462f62c11ae63553dd9172c37e170b5d5ab6eab94c78fec887eea677e689a0835136b6d06682336026db41cb7fb6cbecdce43790dff3307430dc3e0f30d2e9bd34c41db80eda098644da0ed1ea2057930d9c0150dc2265e00b0687430f42e5496929edc673c0e56dc962b7d7500934e2e`,
    },
   
  });
  const data = await response.json();
  if (!data.ok) {
    throw new Error(data.message);
  }
  toast.success(data.message);
  return data;
};

// xóa bài thi
export const deleteExam = async (id: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer 07c69d54ca0e2c85d79378c4cffe01e462f62c11ae63553dd9172c37e170b5d5ab6eab94c78fec887eea677e689a0835136b6d06682336026db41cb7fb6cbecdce43790dff3307430dc3e0f30d2e9bd34c41db80eda098644da0ed1ea2057930d9c0150dc2265e00b0687430f42e5496929edc673c0e56dc962b7d7500934e2e`,
    },
  });
  const data = await response.json();
  if (!data.ok) {
    throw new Error(data.message);
  }
  toast.success(data.message);
  return data;
};
