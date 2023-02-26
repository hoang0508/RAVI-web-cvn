import React from "react";
import CardHistoryBooking from "../../components/cards/card-history/CardHistoryBooking";
import { Gap } from "../../components/common/gap";

const HistoryBookingAll = () => {
  return (
    <>
      <div>
        <CardHistoryBooking
          statusBooking="success"
          textStatus="Đã thanh toán"
        />
        <CardHistoryBooking
          statusBooking="pending"
          textStatus="Chờ thanh toán"
        />
        <CardHistoryBooking statusBooking="cancel" textStatus="Đã hủy" />
      </div>
    </>
  );
};

export default HistoryBookingAll;
