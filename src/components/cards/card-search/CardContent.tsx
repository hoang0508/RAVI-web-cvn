import React from "react";
import { useNavigate } from "react-router-dom";
import CardInfoRoom from "../../common/cards-components/CardInfoRoom";
import { IconAcreage, IconBedroom, IconStar } from "../../icons";
import IconUserv2 from "../../icons/IconUserv2";

const CardContent = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/detail-room");
  };
  return (
    <div className="search-item--content" onClick={() => handleNavigate()}>
      <CardInfoRoom></CardInfoRoom>
      <h3 className="content-title">
        Cherry Hotel & Apartment Da Nang - Phoenix 2 Hotel
      </h3>
      <div className="content-vote">
        <div className="content-vote--rating">
          <span className="content-vote--rating-number">5.0</span>
          {Array(5)
            .fill(5)
            .map((item, index) => (
              <span key={index}>
                <IconStar />
              </span>
            ))}
        </div>
        <span className="content-vote--text">(48 đánh giá)</span>
      </div>
      <span className="content-address">107 Võ Nguyên Giáp, Đà Nẵng</span>
    </div>
  );
};

export default CardContent;
