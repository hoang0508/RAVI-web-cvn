import React from "react";
import CardHistoryBooking from "../../components/cards/card-history/CardHistoryBooking";

const HistoryBookingWait = () => {
  return (
    <>
      <CardHistoryBooking statusBooking="pending" textStatus="Chờ thanh toán" />
      <CardHistoryBooking statusBooking="pending" textStatus="Chờ thanh toán" />
    </>
  );
};

export default HistoryBookingWait;
