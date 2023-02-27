import React from "react";
import CardAddress from "../../common/cards-components/CardAddress";
import CardTitle from "../../common/cards-components/CardTitle";
import CardVoteRating from "../../common/cards-components/CardVoteRating";

const CardFavoriteContent = () => {
  return (
    <div className="card-fouvourite--content">
      <CardTitle
        title="Cherry Hotel & Apartment 
      Da Nang - Phoenix 2 Hotel"
      ></CardTitle>
      <CardVoteRating />
      <CardAddress text="107 Võ Nguyên Giáp, Đà Nẵng"></CardAddress>
    </div>
  );
};

export default CardFavoriteContent;
