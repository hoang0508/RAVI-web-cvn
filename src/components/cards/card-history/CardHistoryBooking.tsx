import React, { useState } from "react";
import DefaultImage from "../../../constants/global";
import { LabelStatusType } from "../../../types/enum";
import { Button } from "../../button";
import LabelStatus from "../../label/LabelStatus";
import "./CardHistoryBooking.scss";
import CardHistoryCancel from "./CardHistoryCancel";
import CardHistoryInfo from "./CardHistoryInfo";

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
        <div className="card-history--subtitle">
          <LabelStatus type={statusBooking}>{textStatus}</LabelStatus>
          <div className="card-history--subtitle-type">
            <span>Loại hợp đồng:</span> <strong>FORMBOOKING</strong>
          </div>
          <div className="card-history--subtitle-code">
            <span>Mã đặt phòng:</span> <strong>HSF69WL</strong>
          </div>
        </div>
        <div className="card-history--content">
          <div className="card-history--content-image">
            <img src={DefaultImage} alt="" />
          </div>
          <div className="card-history--content-info">
            <h3 className="info-title">
              Cherry Hotel & Apartment Da Nang - Phoenix 2 Hotel
            </h3>
            <div className="info-details">
              <div className="info-details--list">
                <div className="info-details--list-item">
                  <span>Loại thẻ:</span>
                  <span>RAVI COUPLE</span>
                </div>
                <div className="info-details--list-item">
                  <span>Thời hạn hợp đồng:</span>
                  <span>25 năm</span>
                </div>
              </div>
              <div className="info-details--list">
                <div className="info-details--list-item">
                  <span>Ngày nghỉ hàng năm:</span>
                  <span>11 ngày 10 đêm</span>
                </div>
                <div className="info-details--list-item">
                  <strong>2.653.200đ</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        {statusBooking === LabelStatusType.APPROVED && (
          <div className="card-history--feature">
            <span className="card-history--feature-cancel">Hủy</span>
            <Button
              type="button"
              kind="sm"
              className="card-history--feature-btn"
              onClick={() => handleShowBookingDetails()}
            >
              Xem chi tiết
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
