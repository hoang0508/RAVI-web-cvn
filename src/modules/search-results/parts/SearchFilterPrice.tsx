import { MenuProps, Slider } from "antd";
import React from "react";
import { DropdownComp } from "../../../components/dropdown";
import { IconLine } from "../../../components/icons";
import InputSliderRange from "../../../components/input/InputSliderRange";

const SearchFilterPrice = () => {
  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <>
          <span className="price-text-caculator">
            Giá trung bình hàng đêm: 1.000.000đ
          </span>
          <InputSliderRange />
          <div className="price-display">
            <div className="price-display--number">0đ</div>
            <span>
              <IconLine />
            </span>
            <div className="price-display--number">10.000.000đ</div>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <DropdownComp className="custom-show-dropdown" items={items}>
        Khoảng giá
      </DropdownComp>
    </>
  );
};

export default SearchFilterPrice;
