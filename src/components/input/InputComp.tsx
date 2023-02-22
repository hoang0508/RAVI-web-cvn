import { Input } from "antd";
import React from "react";
import "./InputComp.scss";

interface IInputComp {
  name: string;
  type: string;
  placeholder: string;
}

const InputComp = ({ name, type, placeholder, ...props }: IInputComp) => {
  return (
    <div className="input-comp">
      <Input
        className="input-comp--custom"
        type={type}
        id={name}
        name={name}
        {...props}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputComp;
