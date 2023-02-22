import React from "react";
import { Radio } from "antd";
import "./RadioGroup.scss";

interface IRadioGroup {
  children: React.ReactNode;
}

const RadioGroup = ({ children }: IRadioGroup) => {
  return (
    <>
      <Radio.Group className="radio-group">{children}</Radio.Group>
    </>
  );
};

export default RadioGroup;
