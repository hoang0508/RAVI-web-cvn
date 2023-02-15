import React from "react";

interface IDropdownTitle {
  title?: string;
}

const DropdownTitle = ({ title }: IDropdownTitle) => {
  return <h3 className="dropdown-title">{title}</h3>;
};

export default DropdownTitle;
