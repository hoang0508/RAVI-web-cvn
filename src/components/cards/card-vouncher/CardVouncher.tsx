import React from "react";
import DefaultImage from "../../../constants/global";
import { Vouncher } from "../../../types/enum";
import { Button } from "../../button";
import { IconLineV4 } from "../../icons";
import "./CardVouncher.scss";

interface ICardVouncher {
  vouncherFeature: string;
}

const CardVouncher = ({ vouncherFeature }: ICardVouncher) => {
  return (
    <div className="card-vouncher">
      <div className="card-vouncher--subtitle">
        <span className="subtitle-label">Chỉ dành cho riêng bạn</span>
        <div className="subtitle-text">
          <span>Mã voucher: </span>
          <strong>HSF69WL</strong>
        </div>
        <div className="subtitle-text">
          <span>Loại voucher: </span>
          <strong>RAVI0GUBVIT5 </strong>
        </div>
      </div>
      <div className="card-vouncher--content">
        <div className="card-vouncher--content-image">
          <div className="image">
            <img src={DefaultImage} alt="" />
          </div>
          <span className="text">3 ngày 2 đêm</span>
        </div>
        <div className="card-vouncher--content-info">
          <h3 className="info-title">
            Cherry Hotel & Apartment Da Nang - Phoenix 2 Hotel
          </h3>
          <div className="info-date">
            <span className="info-date--title"> Từ ngày đến ngày:</span>
            <span>07/09/2022 - 07/12/2022</span>
          </div>
          <div className="info-think">
            <span className="info-think--title">Quyền nghỉ:</span>
            <span>3 ngày 2 đêm</span>
          </div>
        </div>
      </div>
      <span className="card-vouncher--line">
        <IconLineV4 />
      </span>

      <div className="card-vouncher--feature">
        {vouncherFeature === Vouncher.VOUNCHER_USE && (
          <Button kind="sm" type="button">
            Sử dụng
          </Button>
        )}
        {vouncherFeature === Vouncher.VOUNCHER_EXPIRED && (
          <Button kind="sm" type="button" disableBtn={true}>
            Hết hạn
          </Button>
        )}
        {vouncherFeature === Vouncher.VOUNCHER_TO_USE && (
          <Button kind="sm" type="button" disableBtn={true}>
            Đã sử dụng
          </Button>
        )}
      </div>
    </div>
  );
};

export default CardVouncher;
