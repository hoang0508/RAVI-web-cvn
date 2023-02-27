import React from "react";
import DefaultImage from "../../../constants/global";
import { IconHeartV4, IconShare } from "../../icons";

const CardFovoriteImage = () => {
  return (
    <>
      <div className="card-fouvourite--image">
        <div className="image">
          <img src={DefaultImage} alt="" />
        </div>
        <div className="share-favourite">
          <span>
            <IconShare />
          </span>
          <span>
            <IconHeartV4 />
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
    </>
  );
};

export default CardFovoriteImage;
