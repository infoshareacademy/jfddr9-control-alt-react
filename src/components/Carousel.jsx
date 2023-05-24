import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import {
  ingredientSearchID,
  nameSearchID,
  searchRandomPanelID,
  favoritesPanelID,
} from "./pages/MixIt";
import { useEffect, useRef, useState } from "react";

export const Carousel = ({ changeView }) => {
  const swiperSlide = useSwiperSlide();
  const swiperRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const searchIds = [
      nameSearchID,
      ingredientSearchID,
      searchRandomPanelID,
      favoritesPanelID,
    ];
    changeView(searchIds[activeSlide], "hej");
    console.log("useEffect", activeSlide);
  }, [activeSlide]);

  return (
    <Swiper
      // ref={swiperRef}
      onSlideChange={(swiper) => {
        setActiveSlide(swiper.realIndex);
        console.log(swiper);
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
          <p onClick={() => changeView(nameSearchID)}>
            Filter by name {isActive && changeView(nameSearchID)}
          </p>
        )}
      </SwiperSlide>
      <SwiperSlide className="carousel-tile" key={1}>
        {({ isActive }) => (
          <p onClick={() => changeView(ingredientSearchID)}>
            Filter by ingredients {isActive && changeView(ingredientSearchID)}
          </p>
        )}
      </SwiperSlide>
      <SwiperSlide className="carousel-tile" key={2}>
        {({ isActive }) => (
          <p onClick={() => changeView(searchRandomPanelID)}>
            Random drink {isActive && changeView(searchRandomPanelID)}
          </p>
        )}
      </SwiperSlide>
      <SwiperSlide className="carousel-tile" key={3}>
        {({ isActive }) => (
          <p onClick={() => changeView(favoritesPanelID)}>
            Favorite drinks {isActive && changeView(favoritesPanelID)}
          </p>
        )}
      </SwiperSlide>
    </Swiper>
  );
};
