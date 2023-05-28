import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

import { async } from "q";
import { directive } from "@babel/types";
import Drama from "./Drama";

SwiperCore.use([Navigation, Mousewheel]);

function DramaSwiper({ drama }) {
  return (
    <div>
      <Swiper
        grabCursor={true}
        slidesPerView={4}
        slidesPerGroup={2}
        slideToClickedSlide={true}
        // 네비게이션 버튼
        mousewheel={true} // 마우스 휠
        modules={[Navigation, Mousewheel]} // 모듈추가
        className="mySwiper"
        navigation
        speed={500}
      >
        {drama.map((drama) => (
          <SwiperSlide key={drama.id}>
            <Drama
              name={drama.name}
              posterUrl={drama.poster_path}
              id={drama.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DramaSwiper;
