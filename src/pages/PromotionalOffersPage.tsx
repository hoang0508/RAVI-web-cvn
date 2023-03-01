import React from "react";
import { Banner } from "../components/banner";
import { Gap } from "../components/common/gap";
import { Heading } from "../components/common/heading";
import "../modules/promotional/Promotional.scss";
import PromotionalOffersItem from "../modules/promotional/PromotionalOffersItem";

const PromotionalOffersPage = () => {
  return (
    <div className="promotional">
      <div className="promotional-banner">
        <Banner
          heading="Những ưu đãi khuyến mãi cuối năm 
          dành cho bạn"
        />
      </div>
      <Gap gap="g-60" />
      <div className="container">
        <Heading heading="Ưu đãi cuối năm khác" size="small" />
        <div className="promotional-list">
          {Array(9)
            .fill(0)
            .map((item, index) => (
              <PromotionalOffersItem key={index} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalOffersPage;
