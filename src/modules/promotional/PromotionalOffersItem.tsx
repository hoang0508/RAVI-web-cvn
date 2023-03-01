import React from "react";
import PromotionItemImage from "../../assets/images/promotional-offers.png";
import { Button } from "../../components/button";
import "./PromotionalOffersItem.scss";

const PromotionalOffersItem = () => {
  return (
    <div className="promotionaloffers-item">
      <div className="promotionaloffers-item--image">
        <img src={PromotionItemImage} alt="" />
      </div>
      <div className="promotionaloffers-item--content">
        <h3 className="content-title">Hà Giang</h3>
        <div className="content-price">
          <span className="content-price--text">Chỉ từ 117.000đ</span>
          <Button type="button" className="content-price--btn" kind="xl">
            Xem ưu đãi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PromotionalOffersItem;
