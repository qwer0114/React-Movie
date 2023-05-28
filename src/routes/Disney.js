import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MovieSwiper from "../components/MovieComponents/MovieSwiper";
import { async } from "q";
import movieCSS from "../styles/movie.module.css";
import "../styles/style.css";
import DramaSwiper from "../components/DramaComponents/DramaSwiper";

function Disney() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";

  const [movies, setMovies] = useState([]);
  const [KRmovies, setKRMovies] = useState([]);
  const [drama, setDrama] = useState([]);
  const [Kdrama, setKDrama] = useState([]);

  const getMovies = async () => {
    const movies = await fetch(
      `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR`
    );
    const json = await movies.json();
    setMovies(json.results);
  };

  const getKRMovies = async () => {
    const KRmovies = await fetch(
      `${API_URL}discover/movie/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_origin_country=KR&with_original_language=ko&with_watch_providers=337&language=ko-KR`
    );
    const json = await KRmovies.json();
    setKRMovies(json.results);
  };

  const getDrama = async () => {
    const drama = await fetch(
      `${API_URL}discover/tv/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_watch_providers=337&language=ko-KR`
    );
    const json = await drama.json();
    setDrama(json.results);
  };

  const getKDrama = async () => {
    const drama = await fetch(
      `${API_URL}discover/tv/?api_key=${API_Key}&page=1&sort_by=popularity.desc&watch_region=KR&with_original_language=ko&with_watch_providers=337&language=ko-KR`
    );
    const json = await drama.json();
    setKDrama(json.results);
    console.log(json);
  };

  useEffect(() => {
    getMovies();
    getKRMovies();
    getDrama();
    getKDrama();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className={movieCSS.movieChart}>
        <h2>Popular</h2>
        <MovieSwiper movie={movies} />
      </div>
      <div className={movieCSS.movieChart}>
        <h2>KR Popular</h2>
        <MovieSwiper movie={KRmovies} />
      </div>
      <div className={movieCSS.movieChart}>
        <h2>Drama</h2>
        <DramaSwiper drama={drama} />
      </div>
      <div className={movieCSS.movieChart}>
        <h2>K Drama</h2>
        <DramaSwiper drama={Kdrama} />
      </div>
    </div>
  );
}

export default Disney;
