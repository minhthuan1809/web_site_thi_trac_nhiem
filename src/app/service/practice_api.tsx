// get practice page
export const getPracticePage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/Practice?populate[0]=exam.image`
  );
  const data = await response.json();

  return data;
};

// get practice detail
export const getPracticeDetail = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/practice?populate=exam.question`
  );
  const data = await response.json();
  return data;
};
