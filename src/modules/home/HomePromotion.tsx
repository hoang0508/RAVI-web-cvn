import React from "react";
import BannerGlobal from "../../components/banner/BannerGlobal";
import "./HomePromotion.scss";
import BannerImage2 from "../../assets/images/banner2.png";

const HomePromotion = () => {
  return (
    <div className="home-promotion">
      <BannerGlobal
        bannerImage={BannerImage2}
        className="banner-global"
        heading="Ưu đãi khuyến mại cuối năm 
        dành cho bạn"
        text="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        buttonText="Khám phá ngay"
      ></BannerGlobal>
    </div>
  );
};

export default HomePromotion;
