export const getLogo = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/global?&populate[0]=nav&populate[1]=nav.logo`
  );
  const data = await response.json();

  return data;
};
export const getNavItems = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/global?&populate[0]=nav&populate[1]=nav.navbar_items`
  );
  const data = await response.json();

  return data;
};
