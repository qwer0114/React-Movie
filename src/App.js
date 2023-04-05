import { async } from "q";
import { useEffect, useState } from "react";

const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
const API_URL = "https://api.themoviedb.org/3/";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300/";
function App() {
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
          <div>
            <h2>{movie.original_title}</h2>
            <img src={`${IMAGE_BASE_URL}${movie.poster_path}`}></img>
            <span>{movie.overview}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
