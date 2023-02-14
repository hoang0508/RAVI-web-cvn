import React from "react";
import "./BgGray.scss";

interface IBgGray {
  children: any;
  className: string;
}

const BgGray = ({ children, className }: IBgGray) => {
  return <div className={`bg-gray ${className}`}>{children}</div>;
};

export default BgGray;
