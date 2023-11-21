interface Props {
  endpoint?: string;
  query?: string;
}

const fetchMoviesData = async ({ endpoint, query }: Props) => {
  const url = `https://api.themoviedb.org/3/${endpoint}?${query}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.TMDB_API_KEY || "",
      },
      next: { revalidate: 10 },
    });

    const moviesData = await response.json();
    return moviesData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchMoviesData;
