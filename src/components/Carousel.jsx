import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation } from "swiper";

import { Panel } from "../utils/panels";

const searchIds = [
  Panel.NAME_SEARCH,
  Panel.INGREDIENTS,
  Panel.SEARCH_RANDOM,
  Panel.FAVORITES,
];
export const Carousel = ({ changeView }) => {
  return (
    <>
      <Swiper
        onSlideChange={(swiper) => {
          changeView(searchIds[swiper.realIndex]);
        }}
        slidesPerView="2"
        spaceBetween="30"
        centeredSlides="true"
        direction={"vertical"}
        loop={true}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="carousel-main swiper-desktop"
      >
        <SwiperSlide className="carousel-tile">
          <p>Filter by name</p>
        </SwiperSlide>
        <SwiperSlide className="carousel-tile">
          <p>Filter by ingredients</p>
        </SwiperSlide>
        <SwiperSlide className="carousel-tile">
          <p>Random drink</p>
        </SwiperSlide>
        <SwiperSlide className="carousel-tile">
          <p>Favorite drinks</p>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSlideChange={(swiper) => {
          changeView(searchIds[swiper.realIndex]);
        }}
        slidesPerView="1"
        spaceBetween="30"
        centeredSlides="true"
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper-mobile carousel-main"
      >
        <SwiperSlide className="carousel-tile">
          <p>Filter by name</p>
        </SwiperSlide>
        <SwiperSlide className="carousel-tile">
          <p>Filter by ingredients</p>
        </SwiperSlide>
        <SwiperSlide className="carousel-tile">
          <p>Random drink</p>
        </SwiperSlide>
        <SwiperSlide className="carousel-tile">
          <p>Favorite drinks</p>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
