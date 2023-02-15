import React from "react";
import { IconHeartV2 } from "../../../components/icons";
import DefaultImage from "../../../constants/global";

const CardImage = () => {
  return (
    <div className="card-image">
      <div className="card-image--img">
        <img src={DefaultImage} alt="" />
      </div>
      <span className="card-heart">
        <IconHeartV2 />
      </span>
    </div>
  );
};

export default CardImage;
