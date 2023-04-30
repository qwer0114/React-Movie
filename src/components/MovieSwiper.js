import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, EffectCoverflow, Mousewheel } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Movie from "./Movie";
import { async } from "q";

SwiperCore.use([Navigation, EffectCoverflow, Mousewheel]);

function MovieSwiper({ movie }) {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={4}
      coverflowEffect={{
        rotate: 10, // 회전각도
        stretch: 0,
        depth: 100, // 깊이감도
        modifier: 2, //
        slideShadows: true, //선택한 부분 밝게 나머지는 그늘지게 해준다.
      }}
      slideToClickedSlide={true}
      // 네비게이션 버튼
      mousewheel={true} // 마우스 휠
      modules={[EffectCoverflow, Navigation, Mousewheel]} // 모듈추가
      className="mySwiper"
    >
      {movie.map((movie) => (
        <SwiperSlide>
          <Movie
            title={movie.original_title}
            posterUrl={movie.poster_path}
            id={movie.id}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieSwiper;
