/*import { useEffect, useState } from "react";
import axios from "axios";

interface Props {
  endpoint: string;
  query: string;
}

const FetchMoviesData = ({ endpoint, query }: Props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    headers: {
      accept: "application/json",
      Authorization: process.env.TMDB_API_KEY,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.results);
      setIsLoading(false);
    } catch (error) {
      alert("there is an error at FetchMoviesData and the error is : " + error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  });

  const refresh = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refresh };
};

export default FetchMoviesData; */
