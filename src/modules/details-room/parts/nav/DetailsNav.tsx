import React from "react";
import ButtonNav from "./ButtonNav";
import "./DetailsNav.scss";

interface IDetailsNav {
  scrollToSection: any;
  idTableDetails: any;
}

const DetailsNav = ({ scrollToSection, idTableDetails }: IDetailsNav) => {
  return (
    <div className="details-nav">
      <ButtonNav
        onClick={() => scrollToSection(idTableDetails?.utilitiesHotel)}
      >
        Tiện ích
      </ButtonNav>
      <ButtonNav onClick={() => scrollToSection(idTableDetails?.infoHotel)}>
        Thông tin khách sạn
      </ButtonNav>
      <ButtonNav onClick={() => scrollToSection(idTableDetails?.ruleHotel)}>
        Quy tắc chung
      </ButtonNav>
      <ButtonNav onClick={() => scrollToSection(idTableDetails?.voteHotel)}>
        Xếp hạng và đánh giá
      </ButtonNav>
    </div>
  );
};

export default DetailsNav;
