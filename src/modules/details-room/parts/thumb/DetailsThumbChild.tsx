import React from "react";

interface IDetailsThumbChild {
  imageThumbChild: any;
}

const DetailsThumbChild = ({ imageThumbChild }: IDetailsThumbChild) => {
  return (
    <div className="details-thumb--child">
      <div className="details-thumb--child-image">
        <img src={imageThumbChild} alt="" />
      </div>
    </div>
  );
};

export default DetailsThumbChild;
