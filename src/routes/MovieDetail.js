import { async } from "q";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";
import CreditSwiper from "../components/creditSwiper";
import MovieSwiper from "../components/MovieSwiper";

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
      `${API_URL}/discover/movie?api_key=${API_Key}&include_adult=false&language=ko-KR&sort_by=popularity.desc&with_genres=${genres[0].id}&${genres[1].id}`
    );
    const json = await result.json();
    setSimilarMovies(json.results);
    console.log(json.results);
  };

  const getCredit = async () => {
    const result = await fetch(
      `${API_URL}/movie/${id}/credits?api_key=${API_Key}&language=ko-KR`
    );
    const json = await result.json();
    setCredit(json.cast);
    console.log(json.cast);
  };

  useEffect(() => {
    getMovieDetail();
    getCredit();
  });
  return (
    <div id="detail_layout">
      <div
        id="background"
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${movieDetail.backdrop_path})`,
        }}
      >
        <div id="filter">
          <div id="movie_detail">
            <div id="movie_detail_poster">
              <img
                src={`${IMAGE_BASE_URL}${movieDetail.poster_path}`}
                className="poster"
              ></img>
            </div>
            <div id="movie_detail_info">
              <div id="movie_detail_info_title">
                <h1>{movieDetail.title}</h1>
                <div id="movie_detail_info_facts">
                  <div>{movieDetail.release_date} </div>
                  <div>
                    {genres.map((genre) => (
                      <span id="genre">{genre.name}/</span>
                    ))}
                  </div>
                  <div> {movieDetail.runtime}m</div>
                </div>
              </div>
              <div>인기도: {movieDetail.popularity}</div>
              <div>개요</div>
              <div id="overview">{movieDetail.overview}</div>
            </div>
          </div>
        </div>
      </div>
      <div id="credit">
        <div>Actors</div>
        <CreditSwiper credit={credit}></CreditSwiper>
      </div>
      <div id="similarMovies">
        <h2>Similar Movies</h2>
        <MovieSwiper movie={similarMovies} />
      </div>
    </div>
  );
}

export default MovieDetail;
