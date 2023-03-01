import React from "react";
import BannerFamous from "../assets/images/famous-banner.png";
import { Heading } from "../components/common/heading";
import "../modules/famous-place/FamousPlace.scss";
import FamousPlaceItem from "../modules/famous-place/FamousPlaceItem";

const FamousPlacePage = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(37, 37, 37, 0.2), rgba(37, 37, 37, 0.2)), 
    url(${BannerFamous}`,
    height: "546px",
  };
  return (
    <>
      <div className="famous-place">
        <div
          style={backgroundStyle}
          className="background famous-place--banner"
        >
          <Heading
            heading="Những điểm đến cho thuê 
            khách sạn nổi tiếng"
            size="big"
          />
        </div>
        <div className="container">
          <Heading
            heading="Khám phá ngay"
            className="famous-place--heading"
            size="small"
          />
          <div className="famous-place--list">
            {Array(9)
              .fill(0)
              .map((item, index) => (
                <FamousPlaceItem key={index} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FamousPlacePage;
