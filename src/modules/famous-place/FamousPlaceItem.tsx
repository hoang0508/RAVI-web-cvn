import React from "react";
import FamousItemImg from "../../assets/images/promotional-offers.png";
import "./FamousPlaceItem.scss";

const FamousPlaceItem = () => {
  return (
    <div className="famous-place--item">
      <div className="famous-place--item-image">
        <img src={FamousItemImg} alt="" />
      </div>
      <h3 className="famous-place--item-title">Hà Giang</h3>
    </div>
  );
};

export default FamousPlaceItem;
