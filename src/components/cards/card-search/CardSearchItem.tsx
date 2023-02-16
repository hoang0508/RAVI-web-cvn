import React from "react";
import CardContent from "./CardContent";
import CardSearchImage from "./CardSearchImage";
import "./CardSearchItem.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Keyboard, Pagination, Navigation } from "swiper";

const CardSearchItem = () => {
  return (
    <div className="search-item card-item--hover">
      <Swiper
        // slidesPerView={2}
        slidesPerView={1}
        spaceBetween={50}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        // className="mySwiper"
      >
        <SwiperSlide>
          <CardSearchImage></CardSearchImage>
        </SwiperSlide>
        <SwiperSlide>
          <CardSearchImage></CardSearchImage>
        </SwiperSlide>
        <SwiperSlide>
          <CardSearchImage></CardSearchImage>
        </SwiperSlide>
        <SwiperSlide>
          <CardSearchImage></CardSearchImage>
        </SwiperSlide>
        <SwiperSlide>
          <CardSearchImage></CardSearchImage>
        </SwiperSlide>
      </Swiper>
      <CardContent></CardContent>
    </div>
  );
};

export default CardSearchItem;
