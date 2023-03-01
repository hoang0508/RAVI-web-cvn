import React from "react";
import BannerGlobal from "../../components/banner/BannerGlobal";
import BannerImage3 from "../../assets/images/banner3.png";
import "./HomeFamousHotel.scss";
import ThumbFamous from "./parts/thumbFamous/ThumbFamous";
import { useNavigate } from "react-router-dom";

const HomeFamousHotel = () => {
  const navigate = useNavigate();
  const handleNavigateFamousPlace = () => {
    navigate("/famous-place");
  };
  return (
    <div className="famous-hotel">
      <BannerGlobal
        onClick={() => handleNavigateFamousPlace()}
        gradientBG={`linear-gradient(0deg, rgba(37, 37, 37, 0.2), rgba(37, 37, 37, 0.2)),`}
        bannerImage={BannerImage3}
        className="banner-global"
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
