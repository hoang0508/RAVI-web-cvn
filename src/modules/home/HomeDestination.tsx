import React from "react";
import TextBanner from "../../components/banner/parts/TextBanner";
import { BgGray } from "../../components/common/backgroud";
import { Heading } from "../../components/common/heading";
import "./HomeDestination.scss";
import CardDestination from "./parts/CardDestis/CardDestination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";

const HomeDestination = () => {
  return (
    <BgGray className="bg-home--desti">
      <div className="destination d-flex">
        <div className="destination-content">
          <span className="destination-content--text">CHUYẾN ĐI THÚ VỊ</span>
          <Heading
            className=""
            heading="Điểm đến lý tưởng 
            dành cho bạn "
            size="small"
          ></Heading>
          <TextBanner text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."></TextBanner>
        </div>
        <div className="grid-layout--destis destination-card">
          <Swiper
            grabCursor
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <CardDestination />
            </SwiperSlide>

            <SwiperSlide>
              <CardDestination />
            </SwiperSlide>

            <SwiperSlide>
              <CardDestination />
            </SwiperSlide>

            <SwiperSlide>
              <CardDestination />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </BgGray>
  );
};

export default HomeDestination;
