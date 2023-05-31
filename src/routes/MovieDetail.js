import { async } from "q";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Movie from "../components/MovieComponents/Movie";
import CreditSwiper from "../components/MovieComponents/CreditSwiper";
import MovieSwiper from "../components/MovieComponents/MovieSwiper";
import Navbar from "../components/navbar";

import Detail from "../components/Detail";

import detailCSS from "../styles/detail.module.css";

// 디테일에서 나와야 하는 정보 -> 영화 정보, 영화 포스터 , 영화 제목 , 배우 출연진 / 비슷한 작품 ?

function MovieDetail() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [credit, setCredit] = useState([]);


  const getMovieDetail = async () => {
    const result = await fetch(
      `${API_URL}/movie/${id}?api_key=${API_Key}&language=ko-KR`
    );
    const json = await result.json();
    setMovieDetail(json);
    setGenres(json.genres);
    getSimilarMovie(json.genres);
  };

  const getSimilarMovie = async (genres) => {
    const result = await fetch(
      `${API_URL}/discover/movie?api_key=${API_Key}&include_adult=false&language=ko-KR&sort_by=popularity.desc&with_genres=${genres[0].id}`
    );
    const json = await result.json();
    setSimilarMovies(json.results);
  };

  const getCredit = async () => {
    const result = await fetch(
      `${API_URL}/movie/${id}/credits?api_key=${API_Key}&language=ko-KR`
    );
    const json = await result.json();
    setCredit(json.cast);
  };



  useEffect(() => {
    getMovieDetail();
    getCredit();

  }, [id]);

  return (
    <div className={`${detailCSS.detail}`}>
      <Navbar></Navbar>
      <div id="detail_layout">
        <Detail id={movieDetail.id} backdrop={movieDetail.backdrop_path} poster={movieDetail.poster_path} title={movieDetail.title} genres={genres} runtime={movieDetail.runtime} tagline={movieDetail.tagline} overview={movieDetail.overview} />
        <div id="credit">
          <h2>배우</h2>
          <CreditSwiper credit={credit}></CreditSwiper>
          <div id="similarMovies">
            <h2>비슷한 영화</h2>
            <MovieSwiper movie={similarMovies} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
