import { useEffect, useState } from "react";
import Movie from "../Movie";
import { async } from "q";

function Home() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(`${API_URL}movie/popular?api_key=${API_Key}`);
    const json = await response.json();
    setMovies(json.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>{loading ? "Loading" : null}</h1>
      <div>
        {movies.map((movie) => (
          <Movie
            title={movie.original_title}
            posterUrl={movie.poster_path}
            overview={movie.overview}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;
