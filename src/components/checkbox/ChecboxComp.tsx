import { Checkbox } from "antd";
import React from "react";
import { Label } from "../label";
import "./Checkbox.scss";

interface IChecboxComp {
  value: string;
  text: string;
  colorGray?: string;
}

const ChecboxComp = ({ value, text, colorGray = "" }: IChecboxComp) => {
  return (
    <>
      <Checkbox value={value} className="checkbox-custom">
        <Label labelMark={false} colorLabel={colorGray}>
          {text}
        </Label>
      </Checkbox>
    </>
  );
};

export default ChecboxComp;
