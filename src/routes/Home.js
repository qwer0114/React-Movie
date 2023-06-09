import { useEffect, useState } from "react";

import { async } from "q";

import { directive } from "@babel/types";
import movieCSS from "../styles/movie.module.css";
import "../styles/style.css";
import MovieSwiper from "../components/MovieComponents/MovieSwiper";
import Navbar from "../components/navbar";
import MainMovie from "../components/MovieComponents/MainMovie";

function Home() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";
  const [popularMovies, setpopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upComingMovies, setUpComingMovies] = useState([]);
  const [images, setImages] = useState([]);
  const getMovies = async () => {
    const popular = await fetch(
      `${API_URL}trending/movie/week?api_key=${API_Key}&language=ko-KR`
    );
    const popularJson = await popular.json();
    setpopularMovies(popularJson.results);
    console.log(popularJson.results);

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

    const image = await fetch(
      `${API_URL}movie/${popularJson.results[0].id}/images?api_key=${API_Key}`
    );
    const json2 = await image.json();
    setImages(json2);
    console.log(json2);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="layout">
      <Navbar></Navbar>
      <MainMovie image={images} movie={popularMovies[0]} />
      <div className="movies">
        <div className={movieCSS.movieChart}>
          <h2>Popular</h2>
          <MovieSwiper movie={popularMovies} />
        </div>

        <div className={movieCSS.movieChart}>
          <h2>Top Rate</h2>
          <MovieSwiper movie={topRatedMovies} />
        </div>

        <div className={movieCSS.movieChart}>
          <h2>Upcoming</h2>
          <MovieSwiper movie={upComingMovies} />
        </div>
      </div>
    </div>
  );
}
export default Home;
