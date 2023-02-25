import React from "react";
import "./Label.scss";

interface ILabel {
  htmlFor?: string;
  className?: string;
  children: React.ReactNode;
  colorLabel?: string;
  labelMark: boolean;
}

const Label = ({
  htmlFor,
  className = "",
  children,
  colorLabel,
  labelMark,
  ...props
}: ILabel) => {
  return (
    <label
      htmlFor={htmlFor}
      {...props}
      className={`label ${
        colorLabel === "gray" ? "label-gray label" : ""
      } ${className}`}
    >
      <span className="label-text">{children}</span>
      {labelMark && <span className="label-mark">*</span>}
    </label>
  );
};

export default Label;
