import { Collapse } from "antd";
import React from "react";

interface IAccordionItem {
  header: string;
  children: React.ReactNode;
  key: string | number;
}
const { Panel } = Collapse;

const AccordionItem = ({ header, children, key }: IAccordionItem) => {
  return (
    <Panel header={header} key={key}>
      <p>{children}</p>
    </Panel>
  );
};

export default AccordionItem;
