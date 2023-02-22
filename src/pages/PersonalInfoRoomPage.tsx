import React, { useState } from "react";
import { Step } from "../components/step";
import "../modules/personInfo_Checkout/GlobalPersonInfo.scss";
import PersonInfoContent from "../modules/personInfo_Checkout/contentsInfo/PersonInfoContent";
import { dataStep } from "../modules/personInfo_Checkout/parts/dataStep";
import { Gap } from "../components/common/gap";
import CheckoutPays from "../modules/personInfo_Checkout/checkout/CheckoutPays";

interface IData {
  id: number;
  title: string;
}

const PersonalInfoRoomPage = () => {
  const [current, setCurrent] = useState<number>(1);
  const items: IData[] = dataStep.map((item) => ({
    id: item.id,
    title: item.title,
  }));
  return (
    <div className="container personal-info-main">
      <div className="personal-info-main--left">
        <div className="PersonalInfo-main-step">
          <Step current={current} data={items}></Step>
        </div>
        <Gap gap="g-40" />
        <PersonInfoContent />
      </div>
      <div className="personal-info-main--right">
        <CheckoutPays />
      </div>
    </div>
  );
};

export default PersonalInfoRoomPage;
