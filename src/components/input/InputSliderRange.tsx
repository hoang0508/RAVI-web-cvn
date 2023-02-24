import { Slider } from "antd";
import React from "react";
import "./InputSliderRange.scss";

const InputSliderRange = () => {
  return (
    <div className="input-range">
      <Slider className="custom-input-range" range defaultValue={[0, 100]} />
    </div>
  );
};

export default InputSliderRange;
