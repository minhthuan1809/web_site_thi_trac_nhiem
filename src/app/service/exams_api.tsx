
// hiện thị các bài thi
export const getItemExam = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/exams`,{

        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 07c69d54ca0e2c85d79378c4cffe01e462f62c11ae63553dd9172c37e170b5d5ab6eab94c78fec887eea677e689a0835136b6d06682336026db41cb7fb6cbecdce43790dff3307430dc3e0f30d2e9bd34c41db80eda098644da0ed1ea2057930d9c0150dc2265e00b0687430f42e5496929edc673c0e56dc962b7d7500934e2e`,
        }
    }
    );
    const data = await response.json();
  
    return data;
  };