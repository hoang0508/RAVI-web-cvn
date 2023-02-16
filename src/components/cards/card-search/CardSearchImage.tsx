import React from "react";
import DefaultImage from "../../../constants/global";
import { IconHeartV3, IconShare } from "../../icons";

const CardSearchImage = () => {
  return (
    <div className="search-item--images">
      <div className="item-image">
        <img src={DefaultImage} alt="" />
      </div>
      <div className="share-favourite">
        <span>
          <IconShare />
        </span>
        <span>
          <IconHeartV3 />
        </span>
      </div>
      <div className="sale-endow">
        <span className="sale-endow--percent">-17%</span>
        <div className="sale-endow--price">
          <span className="price-old">
            1.876.741 <span>VND</span>
          </span>
          <span className="price-new">
            1.540.741 <span>VND</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardSearchImage;
