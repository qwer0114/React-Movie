import { async } from "q";
import mainCSS from "../../styles/main.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faMartiniGlassCitrus } from "@fortawesome/free-solid-svg-icons";

// 각 플랫폼별 1등 영화를 메인 영화로 선정함
function MainMovie({ image, movie }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  if (image.length === 0) {
    return;
  } else {
    return (
      <div
        className={`${mainCSS.background}`}
        style={{
          backgroundImage: `url(${IMAGE_BASE_URL}${image.backdrops[1].file_path})`,
        }}
      >
        <div className={`${mainCSS.content}`}>
          <div
            className={`${mainCSS.logo}`}
            style={{
              backgroundImage: `url(${IMAGE_BASE_URL}${image.logos[0].file_path})`,
            }}
          ></div>
          <div className={`${mainCSS.title}`}>{movie.title}</div>
          <div className={`${mainCSS.overview}`}>{movie.overview}</div>
          <button className={mainCSS.moreInfo}>
            <Link to={`/movie/${movie.id}`}>자세히 보러가기</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default MainMovie;
