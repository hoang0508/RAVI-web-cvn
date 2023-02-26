import React from "react";
import "./LabelStatus.scss";

interface ILabelStatus {
  children: React.ReactNode;
  type: string;
}

const LabelStatus = ({ children, type = "" }: ILabelStatus) => {
  let styleClassname = "label-status";
  switch (type) {
    case "success":
      styleClassname = "label-status label-status--success";
      break;
    case "pending":
      styleClassname = "label-status label-status--pending";
      break;
    case "cancel":
      styleClassname = "label-status label-status--cancel";
      break;
    default:
      break;
  }
  return <div className={styleClassname}>{children}</div>;
};

export default LabelStatus;
