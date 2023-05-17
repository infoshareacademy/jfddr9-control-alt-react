import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import {
  ingredientSearchID,
  nameSearchID,
  searchRandomPanelID,
} from "./pages/MixIt";
export const Carousel = ({ changeView }) => {
  return (
    <Swiper
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
      <SwiperSlide className="carousel-tile">
        <p onClick={() => changeView(nameSearchID)}>Filter by name</p>
      </SwiperSlide>
      <SwiperSlide className="carousel-tile">
        <p onClick={() => changeView(ingredientSearchID)}>
          Filter by ingredients
        </p>
      </SwiperSlide>
      <SwiperSlide className="carousel-tile">
        <p onClick={() => changeView(searchRandomPanelID)}>Random drink</p>
      </SwiperSlide>
      <SwiperSlide className="carousel-tile">
        <p>Favorite drinks</p>
      </SwiperSlide>
    </Swiper>
  );
};
