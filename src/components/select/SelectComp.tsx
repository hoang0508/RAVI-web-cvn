import { Select } from "antd";
import React from "react";
import { IconArrow } from "../icons";
import "./SelectComp.scss";

interface ISelectComp {
  name: string;
  defaultValue: string;
  children?: React.ReactNode;
}

const SelectComp = ({ name, defaultValue, children }: ISelectComp) => {
  return (
    <div className="select-comp">
      <Select
        className="select-comp--custom"
        id={name}
        defaultValue={defaultValue}
        suffixIcon={<IconArrow />}
        // options={cities.map((city) => ({ label: city, value: city }))}
      >
        {children}
      </Select>
    </div>
  );
};

export default SelectComp;
