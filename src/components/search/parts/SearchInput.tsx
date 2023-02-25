import React, { useState } from "react";
import {
  IconArrow,
  IconArrowLeft,
  IconArrowRight,
  IconArrowRightV2,
  IconCar,
  IconClose,
  IconHotel,
  IconLocation,
} from "../../icons";
import IconUserv2 from "../../icons/IconUserv2";
import { DatePicker, MenuProps } from "antd";
import moment from "moment";
import { Select } from "antd";
import { DropdownComp } from "../../dropdown";
import SearchInputCount from "./SearchInputCoun";

const { RangePicker } = DatePicker;
const SearchInput = () => {
  const handleValueClendar = (e: any) => {};
  const [selected, setSelected] = useState<any>();
  // handler
  const clearSelected = () => {
    setSelected(null);
  };
  const Option = Select.Option;

  const items: MenuProps["items"] = [
    {
      key: "1",
      type: "group",
      label: "SỐ PHÒNG VÀ SỐ KHÁCH",
      children: [
        {
          key: "1-1",
          label: (
            <>
              <div className="people-list--room">
                <div className="people-list--room-item">
                  <span>
                    <IconCar />
                  </span>
                  <span className="text">Phòng</span>
                </div>
                <div>
                  <SearchInputCount count={1} />
                </div>
              </div>
            </>
          ),
        },
        {
          key: "1-2",
          label: (
            <>
              <div className="people-list--room">
                <div className="people-list--room-item">
                  <span>
                    <IconUserv2 />
                  </span>
                  <div className="item-age-room">
                    <span className="text">Người lớn</span>
                    <span className="old">18+ tuổi</span>
                  </div>
                </div>
                <div>
                  <SearchInputCount count={2} />
                </div>
              </div>
            </>
          ),
        },
        {
          key: "1-3",
          label: (
            <>
              <div className="people-list--room">
                <div className="people-list--room-item">
                  <span>
                    <IconUserv2 />
                  </span>
                  <div className="item-age-room">
                    <span className="text">Trẻ em</span>
                    <span className="old">Từ 0 -17 tuổi</span>
                  </div>
                </div>
                <div>
                  <SearchInputCount count={0} />
                </div>
              </div>
            </>
          ),
        },
      ],
    },
  ];

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
                <span className="select-item--text">Hà Nội</span>
              </div>
            </Option>
          </>
        </Select>
      </div>

      <div className="room-input-clendar line-search">
        <div className="room-input-clendar--custom">
          <RangePicker
            onChange={(e) => handleValueClendar(e)}
            format={"DD-MM-YYYY"}
            placeholder={["Nhận phòng", "Trả phòng"]}
            suffixIcon={<IconArrow />}
            dropdownClassName="datepicker-cutom-dropdown"
            nextIcon={<IconArrowLeft />}
            prevIcon={<IconArrowRightV2 />}
          />
        </div>
      </div>

      <div className="search-people">
        <DropdownComp items={items} className="custom-dropwdown-people">
          <div className="search-input--user d-flex">
            <span className="icon-search">
              <IconUserv2 />
            </span>
            <span className="input-text">1 Phòng, 1 Người lớn</span>
          </div>
        </DropdownComp>
      </div>
    </>
  );
};

export default SearchInput;
