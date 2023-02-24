import React from "react";
import "./ButtonNav.scss";

interface IButtonNav {
  children: any;
  className?: string;
  onClick?: () => void;
}

const ButtonNav = ({ children, className, onClick }: IButtonNav) => {
  return (
    <button onClick={onClick} className={`button-nav ${className}`}>
      {children}
    </button>
  );
};

export default ButtonNav;
