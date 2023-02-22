import React from "react";
import { Button } from "../../../components/button";
import CardAddress from "../../../components/common/cards-components/CardAddress";
import CardInfoRoom from "../../../components/common/cards-components/CardInfoRoom";
import CardTitle from "../../../components/common/cards-components/CardTitle";
import CardVoteRating from "../../../components/common/cards-components/CardVoteRating";
import { Heading } from "../../../components/common/heading";
import {
  IconAirConditioner,
  IconArrow,
  IconDining,
  IconParlking,
  IconPool,
  IconShuttle,
  IconWifi,
} from "../../../components/icons";
import { InputComp } from "../../../components/input";
import DefaultImage from "../../../constants/global";
import "./CheckoutPays.scss";

const CheckoutPays = () => {
  return (
    <>
      <div className="checkoutpays">
        <div className="checkoutpays-wrapper border-bottom--pays">
          <div className="checkoutpays-image">
            <img src={DefaultImage} alt="" />
          </div>
          <div className="checkoutpays-info">
            <CardInfoRoom></CardInfoRoom>
          </div>
          <CardTitle
            title="Cherry Hotel & Apartment
            Da Nang - Phoenix 2 Hotel"
          ></CardTitle>
          <div className="checkoutpays--pay-vote">
            <CardVoteRating></CardVoteRating>
          </div>
          <div className="checkoutpays--pay-address">
            <CardAddress text="107 Võ Nguyên Giáp, Đà Nẵng"></CardAddress>
          </div>
        </div>
      </div>
      <div className="checkoutpays-wrapper border-bottom--pays ">
        <div className="checkoutpays-menu">
          <div className="menu-list">
            <div className="menu-list--item">
              <span className="menu-list--item-icon">
                <IconShuttle />
              </span>
              <span className="menu-list--item-text">Có xe đưa đón</span>
            </div>
            <div className="menu-list--item">
              <span className="menu-list--item-icon">
                <IconParlking />
              </span>
              <span className="menu-list--item-text">Có bãi đỗ xe</span>
            </div>
            <div className="menu-list--item">
              <span className="menu-list--item-icon">
                <IconDining />
              </span>
              <span className="menu-list--item-text">Có nhà hàng</span>
            </div>
          </div>
          <div className="menu-list">
            <div className="menu-list--item">
              <span className="menu-list--item-icon">
                <IconWifi />
              </span>
              <span className="menu-list--item-text">Wi-Fi miễn phí</span>
            </div>
            <div className="menu-list--item">
              <span className="menu-list--item-icon">
                <IconAirConditioner />
              </span>
              <span className="menu-list--item-text">Có điều hòa</span>
            </div>
            <div className="menu-list--item">
              <span className="menu-list--item-icon">
                <IconPool />
              </span>
              <span className="menu-list--item-text">Hồ bơi trong nhà</span>
            </div>
          </div>
        </div>
      </div>
      <div className="checkoutpays-wrapper border-bottom--pays">
        <div className="checkoutpays-date">
          <div className="date-period">
            <div className="date-period--col">
              <span className="date-col--room">Nhận phòng</span>
              <div className="date-col--time">T6, 16 tháng 12 2022</div>
              <span className="date-col--to">12:00 - 00:00</span>
            </div>
            <div className="date-period--col">
              <span className="date-col--room">Trả phòng</span>
              <div className="date-col--time">CN, 18 tháng 12 2022</div>
              <span className="date-col--to">11:00 - 13:00</span>
            </div>
          </div>
          <span className="date-live">
            Tổng thời gian lưu trú:{" "}
            <span className="date-live--number">3 đêm</span>
          </span>
        </div>
      </div>
      <div className="checkoutpays-wrapper border-bottom--pays">
        <div className="checkoutpays-people">
          <span>1 phòng, 1 người lớn </span>
          <span>
            <IconArrow />
          </span>
        </div>
      </div>
      <div className="checkoutpays-wrapper border-bottom--pays">
        <div className="checkoutpays-expense">
          <Heading heading="Chi phí đặt phòng" size="normal"></Heading>
          <div className="expense-list">
            <span>Thuế GTGT</span>
            <span>222.869 VND</span>
          </div>
          <div className="expense-list">
            <span>Thuế GTGT</span>
            <span>222.869 VND</span>
          </div>
          <div className="expense-list">
            <span>Thuế GTGT</span>
            <span>222.869 VND</span>
          </div>
          <div className="expense-list">
            <span>Thuế GTGT</span>
            <span>222.869 VND</span>
          </div>
        </div>
      </div>
      <div className="checkoutpays-total">
        <div className="total-price">
          <span>Tổng tiền</span>
          <span>2.653.200 VND</span>
        </div>
        <span className="total-info">(cho 2 khách và 6 đêm nghỉ)</span>
      </div>
      <div className="checkoutpays-wrapper border-bottom--pays border-top--pays">
        <div className="checkoutpays-choosen">
          <Heading heading="Bạn đã chọn:" size="normal"></Heading>
          <span className="choosen-text">Phòng Giường Đôi Có Ban Công</span>
          <span className="choosen-select">ĐỔI LỰA CHỌN CỦA BẠN</span>
        </div>
      </div>
      <div className="checkoutpays-pressure">
        <Heading
          heading="Có Thể Dùng Cho Đặt Phòng Này"
          size="normal"
        ></Heading>
        <InputComp
          name=""
          type="text"
          placeholder="Nhập mã giảm giá (nếu có)"
        ></InputComp>
        <Button type="button" kind="2sm">
          Áp dụng mã
        </Button>
      </div>
    </>
  );
};

export default CheckoutPays;
