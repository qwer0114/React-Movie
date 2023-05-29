import { async } from "q";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Movie from "../components/MovieComponents/Movie";
import CreditSwiper from "../components/MovieComponents/CreditSwiper";
import MovieSwiper from "../components/MovieComponents/MovieSwiper";
import Navbar from "../components/navbar";
import MovieTrailer from "../components/VideoComponents/movieTrailer";

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
  const [trailer, setTrailer] = useState([]);

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

  const getTrailer = async () => {
    const result = await fetch(
      `${API_URL}/movie/${id}/videos?api_key=${API_Key}&language=ko-KR`
    );
    const json = await result.json();
    setTrailer(json.results);
  };

  useEffect(() => {
    getMovieDetail();
    getCredit();
    getTrailer();
  }, [id]);

  return (
    <div className={`${detailCSS.detail}`}>
      <Navbar></Navbar>
      <div id="detail_layout">
        <div
          className={`${detailCSS.background}`}
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${movieDetail.backdrop_path})`,
          }}
        >
          <div className={`${detailCSS.filter}`}>
            <div className={`${detailCSS.content_detail}`}>
              <div>
                <img
                  src={`${IMAGE_BASE_URL}${movieDetail.poster_path}`}
                  className={`${detailCSS.poster}`}
                ></img>
              </div>
              <div className={`${detailCSS.content_detail_info}`}>
                <div className={`${detailCSS.content_detail_info_title}`}>
                  {movieDetail.title}
                </div>
                <div className={`${detailCSS.content_detail_info_facts}`}>
                  <div>
                    {genres.map((genre) => (
                      <span key={genre.id}>·{genre.name}</span>
                    ))}
                  </div>
                  <div>{movieDetail.runtime}m</div>
                  {/* <div>인기도: {movieDetail.popularity}</div> */}
                </div>
                <div className={`${detailCSS.content_detail_tagline}`}>
                  {movieDetail.tagline}
                </div>
                <div>개요</div>
                <div>{movieDetail.overview}</div>
                <MovieTrailer videos={trailer}></MovieTrailer>
              </div>
            </div>
          </div>
        </div>
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
