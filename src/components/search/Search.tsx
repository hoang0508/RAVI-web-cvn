import * as React from "react";
import { Button } from "../button";
import {
  IconArrow,
  IconClendar,
  IconClose,
  IconHotel,
  IconLine,
} from "../icons";
import IconUserv2 from "../icons/IconUserv2";
import "./Search.scss";

export interface ISearchProps {}

const Search = (props: ISearchProps) => {
  return (
    <div className="search">
      <div className="search-input--hotel d-flex line-search">
        <span className="icon-search">
          <IconHotel />
        </span>
        <input
          className="input-location input-text"
          type="text"
          placeholder="Tìm khách sạn..."
        />
        <span className="icon-close">
          <IconClose />
        </span>
      </div>
      <div className="search-input--room d-flex line-search">
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
      <Button className="button-search" type="button">
        Tìm
      </Button>
    </div>
  );
};

export default Search;
