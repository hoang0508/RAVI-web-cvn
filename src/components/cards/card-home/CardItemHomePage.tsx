import React from "react";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import "./CardItemHomePage.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const CardItemHomePage = () => {
  return (
    <div className="card card-item--hover">
      <Swiper
        slidesPerView={1}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardImage />
        </SwiperSlide>
        <SwiperSlide>
          <CardImage />
        </SwiperSlide>
      </Swiper>
      <CardContent />
    </div>
  );
};

export default CardItemHomePage;
