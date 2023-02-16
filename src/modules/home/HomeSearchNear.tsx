import React from "react";
import { BgGray } from "../../components/common/backgroud";
import { Heading } from "../../components/common/heading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./GlobalHome.scss";
import CardItemHomePage from "../../components/cards/card-home/CardItemHomePage";

const HomeSearchNear = () => {
  return (
    <>
      <BgGray className="bg-home--near">
        <Heading
          size="small"
          className="heading-home"
          heading="Tìm kiếm gần đây của bạn"
        ></Heading>
        <div className="grid-layout">
          <Swiper grabCursor spaceBetween={20} slidesPerView={"auto"}>
            {Array(6)
              .fill(0)
              .map((item, index) => (
                <SwiperSlide key={index}>
                  <CardItemHomePage></CardItemHomePage>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </BgGray>
    </>
  );
};

export default HomeSearchNear;
