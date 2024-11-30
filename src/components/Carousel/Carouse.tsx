import { Swiper, SwiperSlide } from "swiper/react";
import "./carousel.css";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import carouselImage1 from "../../../public/assets/main slider/homepage.jpg";

export default function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="main-carousel">
          <img src={carouselImage1} alt="carousel image 1" />
          <div className="headers">
            <span>Unmatched Softness, Unparalleled Quality</span>
            <p>
              Crafted for comfort, designed to last - towels that elevate every
              moment.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
