import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Movie from "./Movie";
import { async } from "q";
import { directive } from "@babel/types";

SwiperCore.use([Navigation, Mousewheel]);

function MovieSwiper({ movie }) {
  return (
    <div>
      <Swiper
        grabCursor={true}
        slidesPerView={5}
        slidesPerGroup={2}
        slideToClickedSlide={true}
        // 네비게이션 버튼
        mousewheel={true} // 마우스 휠
        modules={[Navigation, Mousewheel]} // 모듈추가
        className="mySwiper"
        navigation
        speed={500}
      >
        {movie
          .filter((movie) => movie.poster_path !== null)
          .map((movie) => (
            <SwiperSlide key={movie.id}>
              <Movie
                title={movie.title}
                posterUrl={movie.poster_path}
                id={movie.id}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default MovieSwiper;
