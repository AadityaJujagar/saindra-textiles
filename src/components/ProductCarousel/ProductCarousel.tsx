import { Swiper, SwiperSlide } from "swiper/react";
import "./productcarousel.css";
import { EffectFade, Autoplay } from "swiper/modules";
import Hotel from "../../../public/assets/products carousel/p-section.jpg";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function ProductCarousel() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[EffectFade, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide className="mySwiperSlider">
        <img src={Hotel} alt="carousel-hotel" />
        <div className="product-headers">
          <span>Premium-Grade Luxury Towels:</span>
          <div className="towelTypes">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Hotel</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Kitchen</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Beach</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Dobby</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Jacquard</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Velvet</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Pool</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Napkins</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Bathrob</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <KeyboardDoubleArrowRightIcon />
              <p>Bath Mat</p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
