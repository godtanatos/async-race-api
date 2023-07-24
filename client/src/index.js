const getCars = async (page, limit = 7) => {
  const response = await fetch(
    `http://localhost:3000/garage?_page=${page}&_limit=${limit}`
  );
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};
getCars(1);
