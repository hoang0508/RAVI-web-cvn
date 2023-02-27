import React, { useState } from "react";
import { LabelStatusType } from "../../../types/enum";
import { Button } from "../../button";
import "./CardHistoryBooking.scss";
import CardHistoryCancel from "./CardHistoryCancel";
import CardHistoryInfo from "./CardHistoryInfo";
import CardHistoryContent from "./parts/CardHistoryContent";
import CardHistorySubtitle from "./parts/CardHistorySubtitle";

interface ICardHistoryBooking {
  statusBooking: string;
  textStatus: string;
}

const CardHistoryBooking = ({
  statusBooking,
  textStatus,
}: ICardHistoryBooking) => {
  // details
  const [showBookingDetails, setShowBookingDetails] = useState<boolean>(false);
  const handleShowBookingDetails = () => {
    setShowBookingDetails(!showBookingDetails);
  };

  // cacel
  const [openCacelModal, setOpenModalCancel] = useState(false);
  const handleOpenCacel = () => {
    setOpenModalCancel(!openCacelModal);
  };
  return (
    <>
      <div className="card-history">
        <CardHistorySubtitle
          statusBooking={statusBooking}
          textStatus={textStatus}
        />
        <CardHistoryContent />
        {statusBooking === LabelStatusType.APPROVED && (
          <div className="card-history--feature">
            <span className="card-history--feature-cancel">Hủy</span>
            <Button
              type="button"
              kind="sm"
              className="card-history--feature-btn"
              onClick={() => handleShowBookingDetails()}
            >
              {showBookingDetails ? "Ẩn bớt" : "Xem chi tiết"}
            </Button>
          </div>
        )}
        {statusBooking === LabelStatusType.PENDING && (
          <div className="card-history--feature">
            <span
              className="card-history--feature-cancel"
              onClick={() => handleOpenCacel()}
            >
              Hủy
            </span>
            <Button
              type="button"
              kind="sm"
              className="card-history--feature-btn"
            >
              Thanh toán ngay
            </Button>
          </div>
        )}
        {statusBooking === LabelStatusType.REJECT && (
          <div className="card-history--feature">
            <span className="card-history--feature-cancel">Xóa</span>
            <Button
              type="button"
              kind="sm"
              className="card-history--feature-btn"
              onClick={() => handleShowBookingDetails()}
            >
              Đặt lại
            </Button>
          </div>
        )}
        {showBookingDetails && <CardHistoryInfo></CardHistoryInfo>}
      </div>
      <CardHistoryCancel
        modalCancelOpen={openCacelModal}
        setModalCancelOpen={setOpenModalCancel}
      />
    </>
  );
};

export default CardHistoryBooking;
