import React from "react";
import { Button } from "../button";
import { Heading } from "../common/heading";
import TextBanner from "./parts/TextBanner";
interface IBannerGlobal {
  children?: any;
  className?: string;
  heading: string;
  text: string;
  buttonText: string;
  bannerImage: string;
  gradientBG?: string;
}

const BannerGlobal = ({
  children,
  className,
  heading,
  text,
  buttonText,
  bannerImage,
  gradientBG,
}: IBannerGlobal) => {
  const backgroundStyle = {
    backgroundImage: `${gradientBG ? gradientBG : ""} url(${bannerImage}`,
  };
  return (
    <div className="background" style={backgroundStyle}>
      <div className={`${className}`}>
        <Heading className="" size="big" heading={heading}></Heading>
        <TextBanner text={text}></TextBanner>
        <Button type="button" kind="xl">
          {buttonText}
        </Button>
      </div>
      {children}
    </div>
  );
};

export default BannerGlobal;
