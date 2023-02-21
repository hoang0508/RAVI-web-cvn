import React from "react";
import CardAddress from "../../common/cards-components/CardAddress";
import CardTitle from "../../common/cards-components/CardTitle";
import CardVoteRating from "../../common/cards-components/CardVoteRating";

const CardContent = () => {
  return (
    <div className="card-content">
      <CardAddress text="107 Võ Nguyên Giáp, Đà Nẵng"></CardAddress>
      <CardTitle title="Cherry Hotel & Apartment Da Nang - Phoenix 2 Hotel"></CardTitle>
      <CardVoteRating></CardVoteRating>
      <div className="card-price">
        <span className="card-price--time">Bắt đầu từ </span>{" "}
        <strong>1.354.815 VND</strong>
      </div>
    </div>
  );
};

export default CardContent;
