import React from "react";
import "./DatePickerGroup.scss";

interface IDatePickerGroup {
  children: React.ReactNode;
}

const DatePickerGroup = ({ children }: IDatePickerGroup) => {
  return <div className="datepicker-group">{children}</div>;
};

export default DatePickerGroup;
