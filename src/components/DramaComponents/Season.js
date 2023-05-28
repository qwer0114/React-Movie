import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Season({ seasons }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  if (seasons !== undefined) {
    return (
      <Swiper
        grabCursor={true}
        slidesPerView={3}
        slidesPerGroup={2}
        slideToClickedSlide={true}
        // 네비게이션 버튼
        mousewheel={true} // 마우스 휠
        modules={[Navigation, Mousewheel]} // 모듈추가
        className="mySwiper"
        speed={500}
      >
        <div className="seasons">
          {seasons
            .filter((season) => season.poster_path !== null)
            .map((season) => (
              <SwiperSlide>
                <div className="season" key={season.id}>
                  <img
                    src={`${IMAGE_BASE_URL}${season.poster_path}`}
                    className="season_poster"
                  ></img>
                  <div className="season_content">
                    <div>
                      <Link to={`/drama/${season.id}`}>{season.name}</Link>
                    </div>
                    {/* <div>{season.overview}</div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    );
  } else {
    return null;
  }
}

export default Season;
