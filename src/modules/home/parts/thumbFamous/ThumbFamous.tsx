import React from "react";
import "./ThumbFamous.scss";
import ThumbFamousImg from "../../../../assets/images/thumb-famous.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const ThumbFamous = () => {
  return (
    <div className="thumb-famous">
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {Array(12)
          .fill(0)
          .map((item, index) => (
            <SwiperSlide key={index}>
              <div className="thumb-famous--image">
                <img src={ThumbFamousImg} alt="" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ThumbFamous;
