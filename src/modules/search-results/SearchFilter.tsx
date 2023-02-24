import React, { useState } from "react";
import { ButtonFilter } from "../../components/button";
import { DropdownComp } from "../../components/dropdown";
import { IconArrowRight, IconLineV3 } from "../../components/icons";
import { ModalComp } from "../../components/modal";
import SearchFilerModal from "./parts/SearchFilerModal";
import SearchFilterLive from "./parts/SearchFilterLive";
import SearchFilterPopular from "./parts/SearchFilterPopular";
import SearchFilterPrice from "./parts/SearchFilterPrice";
import "./SearchFilter.scss";

const SearchFilter = () => {
  const [modalOpenFilter, setModalOpenFilter] = useState(false);
  const handleOpenModalFilter = () => {
    setModalOpenFilter(!modalOpenFilter);
  };
  return (
    <>
      <div className="searchfilter-main">
        <div className="searchfilter-drop">
          <div className="searchfilter-drop--btnarr">
            <SearchFilterPopular />
            <SearchFilterPrice />
            <SearchFilterLive />
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
          <ButtonFilter
            type="button"
            kind="filter-bar"
            onClick={() => handleOpenModalFilter()}
          >
            Bộ lọc
          </ButtonFilter>
        </div>
      </div>
      <SearchFilerModal
        modalOpenFilter={modalOpenFilter}
        setModalOpenFilter={setModalOpenFilter}
      ></SearchFilerModal>
    </>
  );
};

export default SearchFilter;
