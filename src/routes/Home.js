import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import { async } from "q";

import { directive } from "@babel/types";
import movieChart from "../styles/movieChart.module.css";
import "../styles/style.css";
import ListSwiper from "../components/MovieSwiper";

function Home() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [video, setVideo] = useState([]);

  const getMovies = async () => {
    const popular = await fetch(
      `${API_URL}movie/popular?api_key=${API_Key}&language=ko-KR`
    );
    const popularJson = await popular.json();
    setpopularMovies(popularJson.results);

    const topRate = await fetch(
      `${API_URL}movie/top_rated?api_key=${API_Key}&language=ko-KR`
    );
    const topRateJson = await topRate.json();
    setTopRatedMovies(topRateJson.results);

    const upComing = await fetch(
      `${API_URL}movie/upcoming?api_key=${API_Key}&language=ko-KR`
    );
    const upComingJson = await upComing.json();
    setUpComingMovies(upComingJson.results);
  };

  const getVideo = async () => {
    popularMovies.map((movie) => setVideo(movie.id));
  };

  useEffect(() => {
    getMovies();
    getVideo();
  }, []);

  return (
    <div className="layout">
      <div className="navBar">
        <nav>
          <h1>Watcher</h1>
        </nav>
      </div>
      <div className={movieChart.movieChart}>
        <h2>Popular</h2>
        <ListSwiper movie={popularMovies} />
      </div>

      <div className={movieChart.movieChart}>
        <h2>Top Rate</h2>
        <ListSwiper movie={topRatedMovies} />
      </div>

      <div className={movieChart.movieChart}>
        <h2>Upcoming</h2>
        <ListSwiper movie={upComingMovies} />
      </div>
    </div>
  );
}
export default Home;
