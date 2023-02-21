import React from "react";
import "./Text.scss";
interface IText {
  children: any;
  className?: string;
}

const Text = ({ children, className }: IText) => {
  return <p className={`text ${className}`}>{children}</p>;
};

export default Text;
