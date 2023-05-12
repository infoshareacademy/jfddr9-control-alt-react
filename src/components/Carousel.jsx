import { Swiper, SwiperSlide } from "swiper/react";
import Button from "react-bootstrap/Button";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper";

export const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        freeMode={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{ height: "150px" }}>
          {" "}
          <Button variant="danger" size="lg">
            Random drink
          </Button>{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "150px" }}>
          {" "}
          <Button variant="primary" size="lg">
            Filter by name
          </Button>{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "150px" }}>
          {" "}
          <Button variant="danger" size="lg">
            Filter by ingredients
          </Button>{" "}
        </SwiperSlide>
        <SwiperSlide style={{ height: "150px" }}>
          {" "}
          <Button variant="primary" size="lg">
            Favorite drinks
          </Button>{" "}
        </SwiperSlide>
      </Swiper>
    </>
  );
};
