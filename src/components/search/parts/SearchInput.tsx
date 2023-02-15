import React, { useState } from "react";
import {
  IconArrow,
  IconArrowRight,
  IconClose,
  IconHotel,
  IconLocation,
} from "../../icons";
import IconUserv2 from "../../icons/IconUserv2";
import { DatePicker } from "antd";
import moment from "moment";
import { Select } from "antd";

const { RangePicker } = DatePicker;
const SearchInput = () => {
  const handleValueClendar = (e: any) => {
    console.log(e);
    console.log(e[0]?.$d, e[1]?.$d);
  };

  const [selected, setSelected] = useState<any>();
  // handler
  const clearSelected = () => {
    setSelected(null);
  };

  const Option = Select.Option;
  return (
    <>
      <div className="line-search d-flex drop-input-hotel">
        <Select
          style={{ width: "220px" }}
          defaultValue="Tìm khách sạn"
          onChange={(value: any) => setSelected(value)}
          suffixIcon={<IconHotel />}
          value={selected}
          // open
        >
          <>
            <Option value="">
              <h3 className="select-title">Tìm kiếm gần đây</h3>
            </Option>
            {Array(2)
              .fill(0)
              .map((item, index) => (
                <div className="select-item" key={index}>
                  <div className="select-item--location">
                    <span>
                      <IconLocation />
                    </span>
                    <span className="select-item--text">Hà Nội</span>
                  </div>
                  <span className="select-item--arrow">
                    <IconArrowRight />
                  </span>
                </div>
              ))}

            {/* <Option value="">
              <h3 className="select-title">TÌM KIẾM NỔI BẬT</h3>
            </Option> */}
            {/* {Array(2)
              .fill(0)
              .map((item, index) => (
                <div className="select-item" key={index}>
                  <div className="select-item--location">
                    <span>
                      <IconLocation />
                    </span>
                    <span className="select-item--text">Hà Nội</span>
                  </div>
                  <span className="select-item--arrow">
                    <IconArrowRight />
                  </span>
                </div>
              ))} */}
          </>
        </Select>
        <span className="close-select" onClick={clearSelected}>
          <IconClose />
        </span>
      </div>
      <div className="room-input-clendar line-search">
        {/* <div className="search-input--room d-flex line-search">
          <div className="clendar-room">
            <span className="icon-search">
              <IconClendar />
            </span>
            <span className="input-text">Nhận phòng</span>
          </div>
          <span className="icon-horizontal">
            <IconLine />
          </span>
          <div className="clendar-room">
            <span className="input-text input-text--right">Trả phòng</span>
            <span>
              <IconArrow />
            </span>
          </div>
        </div> */}
        <div>
          <RangePicker
            onChange={(e) => handleValueClendar(e)}
            format={"DD-MM-YYYY"}
            placeholder={["Nhận phòng", "Trả phòng"]}
          />
        </div>
      </div>

      <div className="search-input--user d-flex">
        <span className="icon-search">
          <IconUserv2 />
        </span>
        <span className="input-text">1 Phòng, 1 Người lớn</span>
        <span>
          <IconArrow />
        </span>
      </div>
    </>
  );
};

export default SearchInput;
