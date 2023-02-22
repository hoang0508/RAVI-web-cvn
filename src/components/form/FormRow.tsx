import React from "react";
import "./FormStyle.scss";

interface IFormRow {
  children: React.ReactNode;
}

const FormRow = ({ children }: IFormRow) => {
  return <div className={`form-row`}>{children}</div>;
};

export default FormRow;
