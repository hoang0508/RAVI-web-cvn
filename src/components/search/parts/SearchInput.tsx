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

  console.log(selected);

  const Option = Select.Option;
  return (
    <>
      <div className="line-search d-flex drop-input-hotel">
        <Select
          defaultValue={"Tìm khách sạn"}
          onChange={(value: any) => setSelected(value)}
          suffixIcon={<IconHotel />}
          clearIcon={<IconClose />}
          allowClear={true}
          value={selected}
          dropdownRender={(menu) => (
            <div className="custom-select--show">{menu}</div>
          )}
        >
          <>
            <Option value="disabled" disabled>
              <h3 className="select-title">Tìm kiếm gần đây</h3>
            </Option>
            <Option value="Hà Nội">
              <div className="select-item">
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
            </Option>
          </>
        </Select>
      </div>
      <div className="room-input-clendar line-search">
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
