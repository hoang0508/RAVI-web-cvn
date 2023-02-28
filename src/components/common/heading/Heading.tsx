import React from "react";
import "./Heading.scss";

interface IHeading {
  heading: string;
  className?: string;
  size: string;
}

const Heading = ({ heading, className = "", size = "" }: IHeading) => {
  let classHeading = "";
  switch (size) {
    case "normal":
      classHeading = "heading";
      break;
    case "small":
      classHeading = "heading--small";
      break;
    case "big":
      classHeading = "heading--big";
      break;

    default:
      break;
  }
  return <h2 className={`${classHeading} ${className}`}>{heading}</h2>;
};

export default Heading;
