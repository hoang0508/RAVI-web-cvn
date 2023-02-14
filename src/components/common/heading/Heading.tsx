import React from "react";
import "./Heading.scss";

interface IHeading {
  heading: string;
  className?: string;
  size: string;
}

const Heading = ({ heading, className = "", size = "small" }: IHeading) => {
  return (
    <h2
      className={`${
        size === "small" ? "heading--small" : "heading--big"
      } ${className}`}
    >
      {heading}
    </h2>
  );
};

export default Heading;
