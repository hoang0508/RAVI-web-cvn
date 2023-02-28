import React from "react";
import { Heading } from "../../components/common/heading";
import { IconArrowTop } from "../../components/icons";

interface IFaqAnswerNav {
  idScrollToView: any;
  scrollToSection: any;
}

const FaqAnswerNav = ({ idScrollToView, scrollToSection }: IFaqAnswerNav) => {
  return (
    <>
      <Heading heading="FAQ về đặt phòng" size="small"></Heading>
      <div className="faq-answer--left-nav">
        <div className="nav-heading">
          <h3 className="nav-heading--title">Các câu hỏi về đặt phòng</h3>
          <span>
            <IconArrowTop />
          </span>
        </div>
        <ul className="nav-list">
          <li
            className="nav-list--item"
            onClick={() => scrollToSection(idScrollToView?.reservationQuery)}
          >
            Truy vấn đặt chỗ
          </li>
          <li
            className="nav-list--item"
            onClick={() => scrollToSection(idScrollToView?.cancelChange)}
          >
            Hủy bỏ và sửa đổi{" "}
          </li>
          <li
            className="nav-list--item"
            onClick={() => scrollToSection(idScrollToView?.payment)}
          >
            Thanh toán và hoàn tiền{" "}
          </li>
          <li
            className="nav-list--item"
            onClick={() => scrollToSection(idScrollToView?.checkIn)}
          >
            Nhận phòng và Trả phòng
          </li>
          <li
            className="nav-list--item"
            onClick={() => scrollToSection(idScrollToView?.receipt)}
          >
            Biên lai và Hóa đơn
          </li>
        </ul>
      </div>
    </>
  );
};

export default FaqAnswerNav;
