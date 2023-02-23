import React, { useState } from "react";
import { Step } from "../components/step";
import "../modules/personInfo_Checkout/GlobalPersonInfo.scss";
import PersonInfoContent from "../modules/personInfo_Checkout/contentsInfo/PersonInfoContent";
import { dataStep } from "../modules/personInfo_Checkout/parts/dataStep";
import { Gap } from "../components/common/gap";
import CheckoutPays from "../modules/personInfo_Checkout/checkout/CheckoutPays";
import CheckoutContent from "../modules/personInfo_Checkout/contentCheckout/CheckoutContent";

interface IData {
  id: number;
  title: string;
}

const PersonalInfoRoomPage = () => {
  const [currentStep, setCurrentStep] = useState<any>(1);
  const items: IData[] = dataStep.map((item) => ({
    id: item.id,
    title: item.title,
  }));

  return (
    <div className="container personal-info-main">
      <div className="personal-info-main--left">
        <div className="PersonalInfo-main-step">
          <Step current={currentStep} data={items}></Step>
        </div>
        <Gap gap="g-40" />
        {currentStep === 1 && (
          <PersonInfoContent
            setCurrentStep={setCurrentStep}
            currentStep={currentStep}
          />
        )}
        {currentStep === 2 && <CheckoutContent />}
      </div>
      <div
        className={`personal-info-main--right ${
          currentStep === 2 ? "disable-checkout" : ""
        }`}
      >
        <CheckoutPays currentStep={currentStep} />
      </div>
    </div>
  );
};

export default PersonalInfoRoomPage;
