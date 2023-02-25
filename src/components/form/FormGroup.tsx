import React from "react";
import "./FormStyle.scss";

interface IFormGroup {
  children: React.ReactNode;
  singleWitth?: boolean;
}

const FormGroup = ({ children, singleWitth }: IFormGroup) => {
  return (
    <div className={`form-group ${singleWitth ? "form-group--single" : ""}`}>
      {children}
    </div>
  );
};

export default FormGroup;
