import { Select } from "antd";
import React from "react";
import "./SelectComp.scss";

interface ISelectComp {
  name: string;
  defaultValue: string;
}

const SelectComp = ({ name, defaultValue }: ISelectComp) => {
  return (
    <div className="select-comp">
      <Select
        className="select-comp--custom"
        id={name}
        defaultValue={defaultValue}
        // options={cities.map((city) => ({ label: city, value: city }))}
      />
    </div>
  );
};

export default SelectComp;
