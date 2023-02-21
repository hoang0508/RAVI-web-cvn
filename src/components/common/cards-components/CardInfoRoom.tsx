import React from "react";
import { IconAcreage, IconBedroom } from "../../icons";
import IconUserv2 from "../../icons/IconUserv2";
import "./CardComponent.scss";

const CardInfoRoom = () => {
  return (
    <div className="card-info">
      <div className="card-info--item">
        <span>
          <IconAcreage />
        </span>
        <span className="card-info--item-text">
          102 m<sup>2</sup>
        </span>
      </div>
      <div className="card-info--item">
        <span>
          <IconBedroom />
        </span>
        <span className="card-info--item-text">2 giường</span>
      </div>
      <div className="card-info--item">
        <span>
          <IconUserv2 />
        </span>
        <span className="card-info--item-text">3 người</span>
      </div>
    </div>
  );
};

export default CardInfoRoom;
