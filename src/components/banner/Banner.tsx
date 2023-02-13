import * as React from "react";
import BannerBg from "../../assets/images/banner-home.png";
import { Search } from "../search";
import "./Banner.scss";
export interface IBannerProps {
  heading: string;
  text: string;
}

const Banner = ({ heading, text }: IBannerProps) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${BannerBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "552px",
      }}
    >
      <h3 className="banner-title">
        <span>{heading}</span>
        <span>{text}</span>
      </h3>
      <Search></Search>
    </div>
  );
};
export default Banner;
