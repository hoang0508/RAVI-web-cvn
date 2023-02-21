import React from "react";
import "./ButtonNav.scss";

interface IButtonNav {
  children: any;
  className?: string;
}

const ButtonNav = ({ children, className }: IButtonNav) => {
  return <button className={`button-nav ${className}`}>{children}</button>;
};

export default ButtonNav;
