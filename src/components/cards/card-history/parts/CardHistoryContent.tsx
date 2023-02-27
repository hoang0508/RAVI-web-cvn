import React from "react";
import DefaultImage from "../../../../constants/global";
import "../CardHistoryBooking.scss";

const CardHistoryContent = () => {
  return (
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
  );
};

export default CardHistoryContent;
