import { async } from "q";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Season from "../components/DramaComponents/Season";
function DramaDetail() {
  const API_Key = "e57cb5455543dca5e39dbdf67e3877a8";
  const API_URL = "https://api.themoviedb.org/3/";
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  let { id } = useParams();

  const [dramaDetail, setDramaDetail] = useState([]);
  const [seasons, setSeasons] = useState([]);

  const getDramaDetail = async () => {
    const result = await fetch(
      `${API_URL}/tv/${id}?api_key=${API_Key}&language=ko-KR`
    );
    const json = await result.json();
    setDramaDetail(json);
    setSeasons(json.seasons);
    console.log(json.seasons);
  };
  useEffect(() => {
    getDramaDetail();
  }, [id]);

  return (
    <div
      id="background"
      style={{
        backgroundImage: `url(${IMAGE_BASE_URL}${dramaDetail.backdrop_path})`,
      }}
    >
      <div id="filter">
        <div id="movie_detail">
          <div id="movie_detail_poster">
            <img
              src={`${IMAGE_BASE_URL}${dramaDetail.poster_path}`}
              className="poster"
            ></img>
          </div>
          <div id="movie_detail_info">
            <div id="movie_detail_info_title">
              <div id="title">{dramaDetail.name}</div>
            </div>
            <div id="movie_detail_info_facts">
              <div></div>
              <div>{dramaDetail.number_of_episodes}편</div>
              {/* <div>인기도: {dramaDetail.popularity}</div> */}
            </div>
            <div className="movie_detail_tagline">{dramaDetail.tagline}</div>
            <div>개요</div>
            <div id="overview">{dramaDetail.overview}</div>
            <Season seasons={seasons} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DramaDetail;
