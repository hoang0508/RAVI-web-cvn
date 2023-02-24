import { Checkbox } from "antd";
import React from "react";
import { Label } from "../label";
import "./Checkbox.scss";

interface IChecboxComp {
  value: string;
  text: string;
  colorGray?: string;
  children?: React.ReactNode;
}

const ChecboxComp = ({
  value,
  text,
  colorGray = "",
  children,
}: IChecboxComp) => {
  return (
    <>
      <Checkbox value={value} className="checkbox-custom">
        <Label labelMark={false} colorLabel={colorGray}>
          {text}
        </Label>
        {children}
      </Checkbox>
    </>
  );
};

export default ChecboxComp;
