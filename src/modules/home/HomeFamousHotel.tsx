import React from "react";
import BannerGlobal from "../../components/banner/BannerGlobal";
import BannerImage3 from "../../assets/images/banner3.png";
import "./HomeFamousHotel.scss";
import ThumbFamous from "./parts/thumbFamous/ThumbFamous";

const HomeFamousHotel = () => {
  return (
    <div className="famous-hotel">
      <BannerGlobal
        gradientBG={`linear-gradient(0deg, rgba(37, 37, 37, 0.2), rgba(37, 37, 37, 0.2)),`}
        bannerImage={BannerImage3}
        className="banner-global"
        height="642px"
        borderRadius="8px"
        heading="Những điểm đến cho thuê 
        khách sạn nổi tiếng"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        buttonText="Khám phá ngay"
      >
        <ThumbFamous></ThumbFamous>
      </BannerGlobal>
    </div>
  );
};

export default HomeFamousHotel;
