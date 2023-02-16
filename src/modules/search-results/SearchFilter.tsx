import React from "react";
import { ButtonFilter } from "../../components/button";
import { IconArrowRight, IconLineV3 } from "../../components/icons";
import "./SearchFilter.scss";

const SearchFilter = () => {
  return (
    <div className="searchfilter-main">
      <div className="searchfilter-drop">
        <div className="searchfilter-drop--btnarr">
          <ButtonFilter type="button" kind="arrow">
            Bộ lọc phổ biến
          </ButtonFilter>
          <ButtonFilter type="button" kind="arrow">
            GIÁ TIỀN
          </ButtonFilter>
          <ButtonFilter type="button" kind="arrow">
            LOẠI CHỖ Ở
          </ButtonFilter>
        </div>
        <span>
          <IconLineV3 />
        </span>
        <div className="searchfilter-drop--btn">
          <ButtonFilter type="button" kind="not-arrow">
            Giá thấp nhất
          </ButtonFilter>
          <ButtonFilter type="button" kind="not-arrow">
            xếp hạng sao
          </ButtonFilter>
          <ButtonFilter type="button" kind="not-arrow">
            Internet
          </ButtonFilter>
          <ButtonFilter type="button" kind="not-arrow">
            Thú cưng
          </ButtonFilter>
        </div>
      </div>
      <div className="searchfilter-bar">
        <span className="searchfilter-bar--icon">
          <IconArrowRight />
        </span>
        <ButtonFilter type="button" kind="filter-bar">
          Bộ lọc
        </ButtonFilter>
      </div>
    </div>
  );
};

export default SearchFilter;
