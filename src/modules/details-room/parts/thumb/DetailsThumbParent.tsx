import React from "react";
import { IconHeartV2, IconShare } from "../../../../components/icons";

interface IDetailsThumbParent {
  imageThumb: any;
}

const DetailsThumbParent = ({ imageThumb }: IDetailsThumbParent) => {
  return (
    <div className="details-thumb">
      <div className="details-thumb--image">
        <img src={imageThumb} alt="" />
      </div>
      <div className="details-thumb--favourite">
        <span>
          <IconShare />
        </span>
        <span>
          <IconHeartV2 />
        </span>
      </div>
    </div>
  );
};

export default DetailsThumbParent;
