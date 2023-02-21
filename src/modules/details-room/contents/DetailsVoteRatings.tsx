import React from "react";
import { Button } from "../../../components/button";
import { Heading } from "../../../components/common/heading";
import { IconStarV2 } from "../../../components/icons";
import CardVote from "../parts/cards/CardVote";
import ProgressBar from "../parts/vote/ProgressBar";
import "./DetailsVoteRatings.scss";

const DetailsVoteRatings = () => {
  return (
    <>
      <div className="details-vote">
        <div className="details-vote--heading">
          <Heading
            size="small"
            heading="Xếp hạng và đánh giá của khách hàng"
          ></Heading>
        </div>
        <div className="details-vote--number">
          <div className="details-vote--number-quanlity">
            <div className="quanlity-rating">
              <span>4.8</span>
              <span>
                <IconStarV2 />
              </span>
            </div>
            <span className="quanlity-text">(48 đánh giá)</span>
          </div>
          <span className="details-vote--number-text">“Tuyệt vời”</span>
        </div>
      </div>
      <div className="details-vote--progress">
        {Array(6)
          .fill(0)
          .map((item, index) => (
            <ProgressBar key={index} />
          ))}
      </div>
      <div className="details-vote--cards border-bottom--details">
        <div className="details-vote--cards-item">
          <CardVote />
          <CardVote />
        </div>
        <div className="details-vote--cards-btn">
          <Button kind="2xl" type="button">
            Viết đánh giá
          </Button>
        </div>
      </div>
    </>
  );
};

export default DetailsVoteRatings;
