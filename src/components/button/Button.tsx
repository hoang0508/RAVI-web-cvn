import React from "react";
import "./Button.scss";

interface IButton {
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  kind?: string;
  onClick?: () => void;
}

const Button = ({ type, children, className, kind, onClick }: IButton) => {
  let classBtnKind;
  switch (kind) {
    case "2xl":
      classBtnKind = "button--full";
      break;
    case "3xl":
      classBtnKind = "button--full button--full-bg";
      break;
    case "xl":
      classBtnKind = "button--primary";
      break;
    case "sm":
      classBtnKind = "button--secondary";
      break;

    default:
      break;
  }
  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${kind ? classBtnKind : ""}   ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
