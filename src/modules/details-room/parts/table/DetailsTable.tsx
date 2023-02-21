import React from "react";
import { Heading } from "../../../../components/common/heading";
import "./DetailsTable.scss";

interface IDetailsTable {
  children: any;
  heading: string;
  grid?: string;
  headingInline?: string;
}

const DetailsTable = ({
  children,
  heading,
  grid,
  headingInline,
}: IDetailsTable) => {
  return (
    <div className="DetailsTable">
      <Heading
        size="small"
        className={`DetailsTable-heading ${
          headingInline === "inline"
            ? "DetailsTable-heading--inline"
            : "DetailsTable-heading"
        }`}
        heading={heading}
      ></Heading>
      <div
        className={
          grid === "full" ? "DetailsTable-main--full" : "DetailsTable-main"
        }
      >
        {children}
      </div>
    </div>
  );
};

export default DetailsTable;
