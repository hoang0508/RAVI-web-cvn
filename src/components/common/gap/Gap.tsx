import React from "react";

interface IGap {
  gap?: string;
}

const Gap = ({ gap }: IGap) => {
  let classNameGap;
  switch (gap) {
    case "g-60":
      classNameGap = "gap-60";
      break;
    case "g-40":
      classNameGap = "gap-40";
      break;
    case "g-120":
      classNameGap = "gap-120";
      break;
    default:
      classNameGap = "gap-60";
      break;
  }
  return <div className={classNameGap}></div>;
};

export default Gap;
