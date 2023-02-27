import React from "react";
import LabelStatus from "../../../label/LabelStatus";
import "../CardHistoryBooking.scss";

interface ICardHistorySubtitle {
  statusBooking: string;
  textStatus: string;
}

const CardHistorySubtitle = ({
  statusBooking,
  textStatus,
}: ICardHistorySubtitle) => {
  return (
    <div className="card-history--subtitle">
      <LabelStatus type={statusBooking}>{textStatus}</LabelStatus>
      <div className="card-history--subtitle-type">
        <span>Loại hợp đồng:</span> <strong>FORMBOOKING</strong>
      </div>
      <div className="card-history--subtitle-code">
        <span>Mã đặt phòng:</span> <strong>HSF69WL</strong>
      </div>
    </div>
  );
};

export default CardHistorySubtitle;
