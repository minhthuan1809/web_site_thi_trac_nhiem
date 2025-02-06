// hiện thị các bài thi
export const getItemExam = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/exams`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_API_KEY_TOKEN}`,
    },
  });
  const data = await response.json();

  return data;
};
