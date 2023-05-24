import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import { Panel } from "../utils/panels";

const searchIds = [
  Panel.NAME_SEARCH,
  Panel.INGREDIENTS,
  Panel.SEARCH_RANDOM,
  Panel.FAVORITES,
];

export const Carousel = ({ changeView }) => {
  return (
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
      className="carousel-main"
    >
      <SwiperSlide className="carousel-tile" key={0}>
        {({ isActive }) => (
          <p onClick={() => changeView(Panel.NAME_SEARCH)}>Filter by name</p>
        )}
      </SwiperSlide>
      <SwiperSlide className="carousel-tile" key={1}>
        {({ isActive }) => (
          <p onClick={() => changeView(Panel.INGREDIENTS)}>
            Filter by ingredients
          </p>
        )}
      </SwiperSlide>
      <SwiperSlide className="carousel-tile" key={2}>
        {({ isActive }) => (
          <p onClick={() => changeView(Panel.SEARCH_RANDOM)}>Random drink</p>
        )}
      </SwiperSlide>
      <SwiperSlide className="carousel-tile" key={3}>
        {({ isActive }) => (
          <p onClick={() => changeView(Panel.FAVORITES)}>Favorite drinks</p>
        )}
      </SwiperSlide>
    </Swiper>
  );
};
