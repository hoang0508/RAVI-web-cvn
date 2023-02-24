import React from "react";
import CardImageDs from "../../../../assets/images/card-denis.png";
import { Button } from "../../../../components/button";
import "./CardDestination.scss";

interface ICardDestination {}

const CardDestination = ({}: ICardDestination) => {
  return (
    <div className="card-desti">
      <div className="card-desti--image">
        <img src={CardImageDs} alt="" />
      </div>
      <div className="card-desti--content">
        <h3 className="content-tilte">Đà Nẵng</h3>
        <p className="content-desc">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <Button type="button" kind="sm">
          Tìm kiếm ngay
        </Button>
      </div>
    </div>
  );
};

export default CardDestination;
