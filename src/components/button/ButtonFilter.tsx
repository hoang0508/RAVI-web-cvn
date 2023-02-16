import React from "react";
import { IconArrow } from "../icons";
import IconBar from "../icons/IconBar";
import "./ButtonFilter.scss";

interface IButtonFilter {
  type: "button" | "submit" | "reset" | undefined;
  children: any;
  className?: string;
  kind: string;
  onClick?: () => void;
}

const ButtonFilter = ({
  type,
  children,
  className = "",
  kind,
  onClick,
}: IButtonFilter) => {
  let child;
  switch (kind) {
    case "arrow":
      child = (
        <div className="button-filter--primary">
          <span>{children}</span>
          <span className="icon-arrow">
            <IconArrow />
          </span>
        </div>
      );
      break;
    case "not-arrow":
      child = <span className="button-filter--secondary">{children}</span>;
      break;
    case "filter-bar":
      child = (
        <div className="button-filter--three">
          <span>{children}</span>
          <span>
            <IconBar />
          </span>
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`button-filter ${className}`}
      type={type}
    >
      {child}
    </button>
  );
};

export default ButtonFilter;
