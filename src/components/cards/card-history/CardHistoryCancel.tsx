import React from "react";
import { Gap } from "../../common/gap";
import { FormGroup } from "../../form";
import { TextAreaComp } from "../../input";
import { Label } from "../../label";
import { ModalComp } from "../../modal";
import CardHistoryBooking from "./CardHistoryBooking";
import "./CardHistoryCancel.scss";

interface ICardHistoryCancel {
  modalCancelOpen: boolean;
  setModalCancelOpen: any;
}

const CardHistoryCancel = ({
  modalCancelOpen,
  setModalCancelOpen,
}: ICardHistoryCancel) => {
  return (
    <div className="card-cancel">
      <ModalComp
        className="card-cancel--custom"
        title="Hủy hợp đồng"
        modalOpen={modalCancelOpen}
        setModalOpen={setModalCancelOpen}
        textOk="Gửi lý do"
        textCacel="Hủy"
      >
        <CardHistoryBooking
          statusBooking="pending"
          textStatus="Chờ thanh toán"
        />

        <div className="history-info">
          <div className="history-info--list">
            <h3 className="history-info--list-title">
              1. Thông tin khách hàng
            </h3>
            <div className="history-info--list-item">
              <h4 className="item-title">Chủ sở hữu:</h4>
              <div className="item-content">
                <div className="item-content--info">
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Gap gap="g-20" />
          <div className="history-info--list">
            <h3 className="history-info--list-title">2. Thông tin hợp đồng</h3>
            <div className="history-info--list-item">
              <div className="item-title">
                <span className="item-title--type">Loại hợp đồng:</span>
                <span className="item-title--code">FORMBOOKING</span>
              </div>
              <div className="item-content">
                <div className="item-content--info">
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                  <div className="info-list">
                    <span className="info-list-title">Họ và tên:</span>
                    <span className="info-list-text">Jane Cooper</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Gap gap="g-20" />
          <div className="history-info--list">
            <h3 className="history-info--list-title">3. Thông tin hợp đồng</h3>
            <FormGroup>
              <Label labelMark htmlFor="reason">
                Lý do hủy hợp đồng
              </Label>
              <TextAreaComp
                placeholder="Nhập lý do của bạn"
                value=""
                name="reason"
              ></TextAreaComp>
            </FormGroup>
          </div>
        </div>

        <div className="card-cancel--total">
          <div className="card-cancel--total-item">
            <span>Tổng tiền phải thanh toán</span>
            <span>25.000.000đ</span>
          </div>
          <div className="card-cancel--total-item">
            <span>Tổng tiền phải thanh toán</span>
            <span>25.000.000đ</span>
          </div>
          <div className="card-cancel--total-item">
            <span>Tổng tiền phải thanh toán</span>
            <span>25.000.000đ</span>
          </div>
          <div className="card-cancel--total-item">
            <span>Tổng tiền phải thanh toán</span>
            <span>25.000.000đ</span>
          </div>
          <div className="card-cancel--total-item">
            <span className="item-price">Tổng số tiền bạn sẽ nhận lại</span>
            <span className="item-price">20.000.000đ</span>
          </div>
        </div>
      </ModalComp>
    </div>
  );
};

export default CardHistoryCancel;
