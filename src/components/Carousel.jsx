import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper";

export const Carousel = ({ toggleShow }) => {
  return (
    <Swiper
      slidesPerView="2"
      spaceBetween="30"
      centeredSlides="true"
      direction={"vertical"}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="carousel-main"
    >
      <SwiperSlide className="carousel-tile">
        <p onClick={() => toggleShow("searchByNamePanel")}>Filter by name</p>
      </SwiperSlide>
      <SwiperSlide className="carousel-tile">
        <p onClick={() => toggleShow("searchByIngredientPanel")}>
          Filter by ingredients
        </p>
      </SwiperSlide>
      <SwiperSlide className="carousel-tile">
        <p>Random drink</p>
      </SwiperSlide>
      <SwiperSlide className="carousel-tile">
        <p>Favorite drinks</p>
      </SwiperSlide>
    </Swiper>
  );
};
