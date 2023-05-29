import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import creditCSS from "../../styles/credit.module.css";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function CreditSwiper({ credit }) {
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
  console.log(credit);
  return (
    <div id="credits">
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
        {credit
          .filter((credit) => credit.profile_path !== null)
          .map((credit) => (
            <SwiperSlide key={credit.id}>
              <img
                src={`${IMAGE_BASE_URL}${credit.profile_path}`}
                className={`${creditCSS.credit_profile}`}
              ></img>
              <div className={`${creditCSS.credit_Names}`}>
                <div className={`${creditCSS.credit_realName}`}>
                  <Link to={`/credit/${credit.id}`}>{credit.name}</Link>
                </div>
                <div className={`${creditCSS.credit_charcterName}`}>
                  {credit.character}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default CreditSwiper;
