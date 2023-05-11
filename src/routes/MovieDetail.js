import { async } from "q";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Movie from "../components/Movie";
import CreditSwiper from "../components/creditSwiper";

// 디테일에서 나와야 하는 정보 -> 영화 정보, 영화 포스터 , 영화 제목 , 배우 출연진 / 비슷한 작품 ?

function MovieDetail() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  let { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [genres, setGenres] = useState([]);
  const [credit, setCredit] = useState([]);

  const getMovieDetail = async () => {
    const result = await fetch(`${API_URL}/movie/${id}?api_key=${API_Key}`);
    const json = await result.json();
    setMovieDetail(json);
    console.log(movieDetail);
    console.log(json);

    setGenres(json.genres);
  };

  const getCredit = async () => {
    const result = await fetch(
      `${API_URL}/movie/${id}/credits?api_key=${API_Key}`
    );
    const json = await result.json();
    setCredit(json.cast);
    console.log(json.cast);
  };

  useEffect(() => {
    getMovieDetail();
    getCredit();
  }, []);
  return (
    <div id="detail_layout">
      <div id="image">
        <img
          src={`${IMAGE_BASE_URL}${movieDetail.backdrop_path}`}
          alt="backdrop_path"
          className="back_drop"
        ></img>
      </div>
      <div id="movie_detail">
        <Movie
          title={movieDetail.title}
          posterUrl={movieDetail.poster_path}
          id={movieDetail.id}
        />
        <div>
          {genres.map((genre) => (
            <span>{genre.name}/ </span>
          ))}
          <div>{movieDetail.overview}</div>
        </div>
      </div>

      <div id="credit">
        <div>Actors</div>
        <CreditSwiper credit={credit}></CreditSwiper>
      </div>
    </div>
  );
}

export default MovieDetail;
