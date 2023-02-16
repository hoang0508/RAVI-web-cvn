import React from "react";
import { IconStar } from "../../../components/icons";

const CardContent = () => {
  return (
    <div className="card-content">
      <span className="card-address">107 Võ Nguyên Giáp, Đà Nẵng</span>
      <h3 className="card-title">
        Cherry Hotel & Apartment Da Nang - Phoenix 2 Hotel
      </h3>
      <div className="card-vote">
        <div className="card-vote--rating">
          <span className="rating-number">5.0</span>
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <span className="rating-text" key={index}>
                <IconStar />
              </span>
            ))}
        </div>
        <span className="card-vote--quanlity">(48 đánh giá)</span>
      </div>
      <div className="card-price">
        <span className="card-price--time">Bắt đầu từ </span>{" "}
        <strong>1.354.815 VND</strong>
      </div>
    </div>
  );
};

export default CardContent;
