import { Checkbox } from "antd";
import React from "react";
import { Label } from "../label";
import "./Checkbox.scss";

interface IChecboxComp {
  value: string;
  text: string;
}

const ChecboxComp = ({ value, text }: IChecboxComp) => {
  return (
    <>
      <Checkbox value={value} className="checkbox-custom">
        <Label labelMark={false} colorLabel="">
          {text}
        </Label>
      </Checkbox>
    </>
  );
};

export default ChecboxComp;
