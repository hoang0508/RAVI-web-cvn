import React from "react";
import "./FormStyle.scss";

interface IFormGroup {
  children: React.ReactNode;
}

const FormGroup = ({ children }: IFormGroup) => {
  return <div className="form-group">{children}</div>;
};

export default FormGroup;
