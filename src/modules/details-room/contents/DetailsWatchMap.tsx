import React from "react";
import { Heading } from "../../../components/common/heading";
import bgWatchMap from "../../../assets/images/bg-map.png";
import "./DetailsWatchMap.scss";
import { Button } from "../../../components/button";
import { IconMapsV2 } from "../../../components/icons";

const DetailsWatchMap = () => {
  return (
    <div className="detailsWatch-map border-bottom--details">
      <Heading size="normal" heading="Xem vị trí" />
      <div
        className="background detailsWatch-map--bg"
        style={{ backgroundImage: `url(${bgWatchMap})` }}
      >
        <Button kind={"xl"} type="button">
          <span className="text-map">Xem bản đồ</span>
          <span>
            <IconMapsV2 />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default DetailsWatchMap;
