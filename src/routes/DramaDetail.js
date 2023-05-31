import { async } from "q";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Season from "../components/DramaComponents/Season";
import CreditSwiper from "../components/MovieComponents/CreditSwiper";
import DramaSwiper from "../components/DramaComponents/DramaSwiper";
import Navbar from "../components/navbar";
import detailCSS from "../styles/detail.module.css";
import movieDetail from "../styles/movieDetail.css";
import MovieTrailer from "../components/VideoComponents/MovieTrailer";
function DramaDetail() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  let { id } = useParams();

  const [dramaDetail, setDramaDetail] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [credit, setCredit] = useState([]);
  const [similarDramas, setSimilarDramas] = useState([]);
  const [trailer, setTrailer] = useState([]);

  const getDramaDetail = async () => {
    const result = await fetch(
      `${API_URL}/tv/${id}?api_key=${API_Key}&language=ko-KR`
    );
    const json = await result.json();
    setDramaDetail(json);
    setSeasons(json.seasons);
    getSimilarMovie(json.genres);
  };
  const getCredit = async () => {
    const result = await fetch(
      `${API_URL}/tv/${id}/credits?api_key=${API_Key}&language=ko-KR`
    );
    const json = await result.json();
    setCredit(json.cast);
  };
  const getSimilarMovie = async (genres) => {
    const result = await fetch(
      `${API_URL}/discover/tv?api_key=${API_Key}&include_adult=false&language=ko-KR&with_watch_providers=8,337&&watch_region=KR&with_genres=${genres[0].id}&sort_by=popularity.desc`
    );
    const json = await result.json();
    setSimilarDramas(json.results);
  };
  const getTrailer = async () => {
    const result = await fetch(
      `${API_URL}/tv/${id}/videos?api_key=${API_Key}`
    );
    const json = await result.json();
    const array = json.results;
    const key = array.filter((video) => video.type === "Teaser" || "Trailer");
    setTrailer(key[0].key);
  };
  useEffect(() => {
    getDramaDetail();
    getCredit();
    getSimilarMovie();
    getTrailer();
  }, [id]);

  return (
    <div className={`${detailCSS.detail}`}>
      <Navbar></Navbar>
      <div id="detail_layout">
        <div
          className={`${detailCSS.background}`}
          style={{
            backgroundImage: `url(${IMAGE_BASE_URL}${dramaDetail.backdrop_path})`,
          }}
        >
          <div className={`${detailCSS.filter}`}>
            <div className={`${detailCSS.content_detail}`}>
              <div>
                <img
                  src={`${IMAGE_BASE_URL}${dramaDetail.poster_path}`}
                  className={`${detailCSS.poster}`}
                ></img>
              </div>
              <div className={`${detailCSS.content_detail_info}`}>
                <div className={`${detailCSS.content_detail_info_title}`}>
                  {dramaDetail.name}
                </div>
                <div className={`${detailCSS.content_detail_info_facts}`}>
                  <div>{dramaDetail.number_of_episodes}편</div>
                  {/* <div>인기도: {dramaDetail.popularity}</div> */}
                </div>
                <div className={`${detailCSS.content_detail_tagline}`}>
                  {dramaDetail.tagline}
                </div>
                <div>개요</div>
                <div>{dramaDetail.overview}</div>
                <Season seasons={seasons} />
                <MovieTrailer videos={trailer}></MovieTrailer>
              </div>
            </div>
          </div>
          <div id="credit">
            <h2>배우</h2>
            <CreditSwiper credit={credit}></CreditSwiper>
            <div id="similarMovies">
              <h2>비슷한 드라마</h2>
              <DramaSwiper drama={similarDramas} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DramaDetail;
