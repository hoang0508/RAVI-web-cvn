import { Divider, Dropdown, MenuProps, Space } from "antd";
import React, { useState } from "react";
import { IconArrow } from "../icons";
import "./Dropdown.scss";

interface IDropDown {
  children: React.ReactNode;
  items: any;
  className?: string;
}

const DropdownComp = ({ children, items, className }: IDropDown) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleOpenChange = (flag: boolean) => {
    setOpenDropdown(flag);
  };
  return (
    <>
      <Dropdown
        menu={{ items }}
        trigger={["click"]}
        onOpenChange={handleOpenChange}
        open={openDropdown}
        dropdownRender={(menu) => (
          <>
            <div className={className}>
              {menu}
              <span
                className="close-show-dropdown"
                onClick={() => setOpenDropdown(false)}
              >
                Đóng
              </span>
            </div>
          </>
        )}
      >
        <div onClick={(e) => e.preventDefault()}>
          <Space>
            {children}
            <span
              className={`${
                openDropdown ? "icon-arrow--translate" : "icon-arrow"
              } `}
            >
              <IconArrow />
            </span>
          </Space>
        </div>
      </Dropdown>
    </>
  );
};

export default DropdownComp;
