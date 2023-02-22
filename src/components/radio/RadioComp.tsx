import React from "react";
import { Radio } from "antd";
import { Label } from "../label";

interface IRadioComp {
  value: string | number;
  text: string;
}

const RadioComp = ({ value, text }: IRadioComp) => {
  return (
    <div className="radio-comp">
      <Radio value={value}>
        <Label labelMark={false} colorLabel="gray">
          {text}
        </Label>
      </Radio>
    </div>
  );
};

export default RadioComp;
