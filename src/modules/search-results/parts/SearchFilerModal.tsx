import React, { useState } from "react";
import { ChecboxComp } from "../../../components/checkbox";
import { Gap } from "../../../components/common/gap";
import { Heading } from "../../../components/common/heading";
import {
  IconArrow,
  IconArrowV2,
  IconLine,
  IconStarV2,
} from "../../../components/icons";
import InputSliderRange from "../../../components/input/InputSliderRange";
import { ModalComp } from "../../../components/modal";

interface ISearchFilerModal {
  setModalOpenFilter: any;
  modalOpenFilter: boolean;
}

const SearchFilerModal = ({
  setModalOpenFilter,
  modalOpenFilter,
}: ISearchFilerModal) => {
  return (
    <div>
      <ModalComp
        setModalOpen={setModalOpenFilter}
        modalOpen={modalOpenFilter}
        title="Bộ lọc"
        textCacel="Xóa bộ lọc"
        textOk="Đóng bộ lọc"
        className="custom-filter-modal"
      >
        <div className="filter-modal">
          <div className="filter-modal--content border-bottom--filter ">
            <Heading heading="Bộ lọc phổ biến" size="normal" />
            <div className="filter-modal--list">
              {Array(7)
                .fill(0)
                .map((item, index) => (
                  <div className="filter-modal--list-item" key={index}>
                    <ChecboxComp text="Đã bao gồm bữa sáng" value="" />
                  </div>
                ))}
            </div>
          </div>
          <Gap gap="g-32" />
          <div className="filter-modal--content border-bottom--filter ">
            <Heading
              heading="Giá tiền"
              size="normal"
              className="heading-price"
            />
            <span className="price-caculator">
              Giá trung bình: 1.000.000 VND
            </span>
            <InputSliderRange />
            <div className="filter-modal--price">
              <span className="filter-modal--price-number">0đ</span>
              <span>
                <IconLine />
              </span>
              <span className="filter-modal--price-number">20.000.000đ</span>
            </div>
          </div>
          <Gap gap="g-32" />
          <div className="filter-modal--content border-bottom--filter ">
            <Heading heading="Các loại chỗ ở" size="normal" />
            <div className="filter-modal--list">
              {Array(4)
                .fill(0)
                .map((item, index) => (
                  <div className="filter-modal--list-item" key={index}>
                    <ChecboxComp text="Đã bao gồm bữa sáng" value="" />
                  </div>
                ))}
            </div>
          </div>
          <Gap gap="g-32" />
          <div className="filter-modal--content border-bottom--filter ">
            <Heading heading="Sức khỏe và an toàn" size="normal" />
            <div className="filter-modal--list">
              {Array(1)
                .fill(0)
                .map((item, index) => (
                  <div className="filter-modal--list-item" key={index}>
                    <ChecboxComp text="Đã bao gồm bữa sáng" value="" />
                  </div>
                ))}
            </div>
          </div>
          <Gap gap="g-32" />
          <div className="filter-modal--content border-bottom--filter ">
            <Heading heading="Sức khỏe và an toàn" size="normal" />
            <div className="filter-modal--list">
              <div className="filter-modal--list-item">
                <ChecboxComp text="5" value="">
                  <div className="item-star">
                    {Array(5)
                      .fill(0)
                      .map((item, index) => (
                        <span key={index}>
                          <IconStarV2 />
                        </span>
                      ))}
                  </div>
                </ChecboxComp>
              </div>
              <div className="filter-modal--list-item">
                <ChecboxComp text="4" value="">
                  <div className="item-star">
                    {Array(4)
                      .fill(0)
                      .map((item, index) => (
                        <span key={index}>
                          <IconStarV2 />
                        </span>
                      ))}
                  </div>
                </ChecboxComp>
              </div>
              <div className="filter-modal--list-item">
                <ChecboxComp text="3" value="">
                  <div className="item-star">
                    {Array(3)
                      .fill(0)
                      .map((item, index) => (
                        <span key={index}>
                          <IconStarV2 />
                        </span>
                      ))}
                  </div>
                </ChecboxComp>
              </div>
              <div className="filter-modal--list-item">
                <ChecboxComp text="2" value="">
                  <div className="item-star">
                    {Array(2)
                      .fill(0)
                      .map((item, index) => (
                        <span key={index}>
                          <IconStarV2 />
                        </span>
                      ))}
                  </div>
                </ChecboxComp>
              </div>
              <div className="filter-modal--list-item">
                <ChecboxComp text="1" value="">
                  <div className="item-star">
                    {Array(1)
                      .fill(0)
                      .map((item, index) => (
                        <span key={index}>
                          <IconStarV2 />
                        </span>
                      ))}
                  </div>
                </ChecboxComp>
              </div>
              <div className="filter-modal--list-item">
                <ChecboxComp text="Không xếp hạng sao" value=""></ChecboxComp>
              </div>
            </div>
          </div>
          <Gap gap="g-32" />
          <div className="filter-modal--content border-bottom--filter ">
            <Heading
              heading="Khoảng cách từ trung tâm thành phố"
              size="normal"
            />
            <div className="filter-modal--list">
              {Array(2)
                .fill(0)
                .map((item, index) => (
                  <div className="filter-modal--list-item" key={index}>
                    <ChecboxComp text="Đã bao gồm bữa sáng" value="" />
                  </div>
                ))}
            </div>
          </div>
          <Gap gap="g-32" />
          <div className="filter-modal--content border-bottom--filter ">
            <Heading
              heading="Tiện ích và dịch vụ của khách sạn"
              size="normal"
            />
            <div className="filter-modal--list">
              {Array(10)
                .fill(0)
                .map((item, index) => (
                  <div className="filter-modal--list-item" key={index}>
                    <ChecboxComp text="Đã bao gồm bữa sáng" value="" />
                  </div>
                ))}
              <div className="more-item">
                <span>Xem thêm nhiều tiện nghi nữa</span>
                <IconArrowV2 />
              </div>
            </div>
          </div>
          <Gap gap="g-32" />
          <div className="filter-modal--content">
            <Heading
              heading="Tiện ích và dịch vụ của khách sạn"
              size="normal"
            />
            <div className="filter-modal--list">
              {Array(10)
                .fill(0)
                .map((item, index) => (
                  <div className="filter-modal--list-item" key={index}>
                    <ChecboxComp text="Đã bao gồm bữa sáng" value="" />
                  </div>
                ))}
              <div className="more-item">
                <span>Xem thêm nhiều tiện nghi nữa</span>
                <IconArrowV2 />
              </div>
            </div>
          </div>
          <Gap gap="g-32" />
        </div>
      </ModalComp>
    </div>
  );
};

export default SearchFilerModal;
