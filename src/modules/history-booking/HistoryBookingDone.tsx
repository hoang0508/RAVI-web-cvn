import React from "react";
import CardHistoryBooking from "../../components/cards/card-history/CardHistoryBooking";

const HistoryBookingDone = () => {
  return (
    <>
      <CardHistoryBooking statusBooking="success" textStatus="Đã thanh toán" />
      <CardHistoryBooking statusBooking="success" textStatus="Đã thanh toán" />
    </>
  );
};

export default HistoryBookingDone;
