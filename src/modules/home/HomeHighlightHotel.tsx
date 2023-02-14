import React from "react";
import { BgGray } from "../../components/common/backgroud";
import { Heading } from "../../components/common/heading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import CardItemHomePage from "./card/CardItemHomePage";
import "./HomeHighlightHotel.scss";
import Select from "./parts/select/Select";

const HomeHighlightHotel = () => {
  return (
    <>
      <BgGray className="bg-home--highlight">
        <Heading
          size="small"
          className="heading-home"
          heading="Khách sạn nổi bật "
        ></Heading>
        <Select />
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

export default HomeHighlightHotel;
