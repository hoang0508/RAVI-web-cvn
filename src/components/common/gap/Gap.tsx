import React from "react";
import "./Gap.scss";

interface IGap {
  gap?: string;
}

const Gap = ({ gap }: IGap) => {
  let classNameGap;
  switch (gap) {
    case "g-80":
      classNameGap = "gap-80";
      break;
    case "g-60":
      classNameGap = "gap-60";
      break;
    case "g-40":
      classNameGap = "gap-40";
      break;
    case "g-120":
      classNameGap = "gap-120";
      break;
    case "g-16":
      classNameGap = "gap-16";
      break;
    case "g-20":
      classNameGap = "gap-20";
      break;
    case "g-32":
      classNameGap = "gap-32";
      break;
    default:
      classNameGap = "gap-60";
      break;
  }
  return <div className={classNameGap}></div>;
};

export default Gap;
