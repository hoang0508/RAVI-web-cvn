import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

interface IButton {
  children: any;
  type: "button" | "submit" | "reset" | undefined;
  className?: string;
  kind?: string;
  onClick?: (e: any) => void;
  href?: string;
  disableBtn?: boolean;
}

const Button = ({
  type,
  children,
  className = "",
  kind,
  href,
  disableBtn,
  onClick,
}: IButton) => {
  let classBtnKind;
  switch (kind) {
    case "2xl":
      classBtnKind = "button--full";
      break;
    case "xl":
      classBtnKind = "button--primary";
      break;
    case "sm":
      classBtnKind = "button--secondary";
      break;
    case "2sm":
      classBtnKind = "button--secondary-bd";
      break;
    default:
      break;
  }

  if (href)
    return (
      <Link
        to={href}
        className={`button ${kind ? classBtnKind : ""}${className}`}
      >
        {children}
      </Link>
    );

  return (
    <button
      onClick={onClick}
      type={type}
      className={`button ${kind ? classBtnKind : ""}   ${className}`}
      disabled={disableBtn}
    >
      {children}
    </button>
  );
};

export default Button;
