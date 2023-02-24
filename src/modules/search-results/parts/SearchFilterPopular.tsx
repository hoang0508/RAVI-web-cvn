import { MenuProps } from "antd";
import React from "react";
import { ChecboxComp } from "../../../components/checkbox";
import { DropdownComp } from "../../../components/dropdown";

const items: MenuProps["items"] = [
  {
    key: 1,
    label: (
      <>
        <ChecboxComp value="a" text="Đã bao gồm bữa sáng" />
      </>
    ),
  },
  {
    key: 2,
    label: (
      <>
        <ChecboxComp value="b" text="Đã bao gồm bữa sáng" />
      </>
    ),
  },
  {
    key: 3,
    label: (
      <>
        <ChecboxComp value="c" text="Đã bao gồm bữa sáng" />
      </>
    ),
  },
];

const SearchFilterPopular = () => {
  return (
    <>
      <DropdownComp className="custom-show-dropdown" items={items}>
        Phổ biến
      </DropdownComp>
    </>
  );
};

export default SearchFilterPopular;
