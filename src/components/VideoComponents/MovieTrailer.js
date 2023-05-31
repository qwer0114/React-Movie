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
  console.log(videos);
  return (
    <div className={`${trailerCSS.trailers}`}>
      {<Video videoKey={videos} />}
    </div>
  );
}

export default MovieTrailer;
