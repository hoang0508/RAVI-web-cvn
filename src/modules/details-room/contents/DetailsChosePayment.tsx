import React from "react";
import { Heading } from "../../../components/common/heading";
import CardImageRound from "../../../assets/images/card-round.png";
import JCBImage from "../../../assets/images/JCB.png";
import VisaImage from "../../../assets/images/Visa.png";
import "./DetailsChosePayment.scss";

const DetailsChosePayment = () => {
  return (
    <div className="DetailsChosePayment border-bottom--details ">
      <Heading heading="Hình thức thanh toán" size="normal"></Heading>
      <div className="DetailsChosePayment-select">
        <div>
          <img src={CardImageRound} alt="" />
        </div>
        <div>
          <img src={VisaImage} alt="" />
        </div>
        <div>
          <img src={JCBImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsChosePayment;
