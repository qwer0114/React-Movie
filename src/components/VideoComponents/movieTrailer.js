import { async } from "q";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import trailerCSS from "../../styles/trailer.module.css";
import Video from "./Video";

function MovieTrailer({ videos }) {
  const showVideo = (id) => {
    console.log(id);
  };
  console.log(videos);
  return (
    <div className={`${trailerCSS.trailers}`}>
      {videos
        .filter((video) => video.type === "Trailer")
        .map((video) => (
          <Video videoKey={video.key} />
        ))}
    </div>
  );
}

export default MovieTrailer;
