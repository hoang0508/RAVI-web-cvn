import { Collapse } from "antd";
import React from "react";
import { IconArrow } from "../icons";
import "./Accordion.scss";

interface IAccordionGroup {
  children: React.ReactNode;
}

const AccordionGroup = ({ children }: IAccordionGroup) => {
  return (
    <Collapse
      className="custom-accrodion"
      bordered={false}
      accordion
      ghost
      expandIconPosition={"end"}
      expandIcon={({ isActive }) =>
        isActive ? (
          <span className="arrow-rotate">
            <IconArrow />
          </span>
        ) : (
          <span>
            <IconArrow />
          </span>
        )
      }
    >
      {children}
    </Collapse>
  );
};

export default AccordionGroup;
