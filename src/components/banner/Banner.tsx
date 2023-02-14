import * as React from "react";
import BannerBg from "../../assets/images/banner-home.png";
import { Search } from "../search";
import "./Banner.scss";
export interface IBannerProps {
  heading: string;
  text: string;
}

const Banner = ({ heading, text }: IBannerProps) => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(37, 37, 37, 0.3), rgba(37, 37, 37, 0.3)), 
    url(${BannerBg}`,
    height: "552px",
  };
  return (
    <div className="banner" style={backgroundStyle}>
      <h3 className="banner-title">
        <span>{heading}</span>
        <span>{text}</span>
      </h3>
      <Search></Search>
    </div>
  );
};
export default Banner;
