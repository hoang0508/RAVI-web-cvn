import React from "react";
import { IconStar } from "../../icons";
import "./CardComponent.scss";

const CardVoteRating = () => {
  return (
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
  );
};

export default CardVoteRating;
