import React from "react";
import CardHistoryBooking from "../../components/cards/card-history/CardHistoryBooking";

const HistoryBookingCancel = () => {
  return (
    <>
      <CardHistoryBooking statusBooking="cancel" textStatus="Đã hủy" />
      <CardHistoryBooking statusBooking="cancel" textStatus="Đã hủy" />
    </>
  );
};

export default HistoryBookingCancel;
