import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import Movie from "./Movie";
import { async } from "q";
import { directive } from "@babel/types";

SwiperCore.use([Navigation, Mousewheel]);

function CreditSwiper({ credit }) {
  return (
    <div>
      <Swiper
        grabCursor={true}
        slidesPerView="5"
        spaceBetween={0}
        slideToClickedSlide={true}
        // 네비게이션 버튼
        mousewheel={true} // 마우스 휠
        modules={[Navigation, Mousewheel]} // 모듈추가
        className="mySwiper"
        navigation
        speed={500}
      >
        {credit.map((credit) => (
          <SwiperSlide>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`}
                alt="No Image"
                style={{ width: "150px" }}
              ></img>
              <div>
                <div>{credit.name}</div>
                <div>{credit.character}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CreditSwiper;
