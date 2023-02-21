import React from "react";
import { Heading } from "../../../components/common/heading";
import "./DetailsExpenseRoom.scss";

const DetailsExpenseRoom = () => {
  return (
    <div className="DetailsExpense border-bottom--details">
      <Heading heading="Chi phí đặt phòng" size="normal" />
      <div className="DetailsExpense-info">
        <div className="DetailsExpense-info--item">
          <span>Thuế GTGT</span>
          <span>222.869 VND</span>
        </div>
        <div className="DetailsExpense-info--item">
          <span>Thuế GTGT</span>
          <span>222.869 VND</span>
        </div>
        <div className="DetailsExpense-info--item">
          <span>Thuế GTGT</span>
          <span>222.869 VND</span>
        </div>
        <div className="DetailsExpense-info--item">
          <span>Thuế GTGT</span>
          <span>222.869 VND</span>
        </div>
      </div>
      <div className="DetailsExpense-total">
        <Heading heading="Tổng tiền thanh toán" size="normal" />
        <span className="DetailsExpense-total--price">2.653.200 VND</span>
      </div>
      <span className="DetailsExpense-text">Dành cho 2 khách và 6 đêm</span>
    </div>
  );
};

export default DetailsExpenseRoom;
