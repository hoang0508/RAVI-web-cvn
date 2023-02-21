import React from "react";
import ButtonNav from "./ButtonNav";
import "./DetailsNav.scss";

const DetailsNav = () => {
  return (
    <div className="details-nav">
      <ButtonNav className="">Tiện ích</ButtonNav>
      <ButtonNav className="">Thông tin khách sạn</ButtonNav>
      <ButtonNav className="">Quy tắc chung</ButtonNav>
      <ButtonNav className="">Xếp hạng và đánh giá</ButtonNav>
    </div>
  );
};

export default DetailsNav;
