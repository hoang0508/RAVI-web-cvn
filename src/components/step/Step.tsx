import { Steps } from "antd";
import React from "react";
import { IconArrow, IconOverView } from "../icons";
import "./Step.scss";

interface IData {
  id: number;
  title: string;
}

interface IStep {
  current: number;
  data: IData[];
}

const Step = ({ current, data }: IStep) => {
  return (
    <div className="step">
      <Steps
        className="step-custom"
        iconPrefix="1"
        current={Number(current)}
        items={data}
      />
    </div>
  );
};

export default Step;
