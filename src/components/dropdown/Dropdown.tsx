import React from "react";
import "./Dropdown.scss";

interface IDropDown {
  children: any;
}

const Dropdown = ({ children }: IDropDown) => {
  return <div className="dropdown">{children}</div>;
};

export default Dropdown;
