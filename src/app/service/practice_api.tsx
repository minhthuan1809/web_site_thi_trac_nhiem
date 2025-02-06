// get practice page
export const getPracticePage = async (page: number, searchTerm: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/practices?pagination[page]=${page}&pagination[pageSize]=9&filters[subject][$containsi]=${searchTerm}`
  );
  const data = await response.json();

  return data;
};

// get detail practice
export const getPracticeDetail = async (id: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/practices/${id}?populate=*`
  );
  const data = await response.json();
  return data;
};
