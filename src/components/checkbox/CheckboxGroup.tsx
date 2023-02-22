import { Checkbox } from "antd";
import React from "react";
import "./Checkbox.scss";

interface ICheckboxGroup {
  children: React.ReactNode;
}

const CheckboxGroup = ({ children }: ICheckboxGroup) => {
  return (
    <>
      <Checkbox.Group className="checkbox-group">{children}</Checkbox.Group>
    </>
  );
};

export default CheckboxGroup;
