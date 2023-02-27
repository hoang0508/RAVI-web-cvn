import { Rate } from "antd";
import React, { useState } from "react";
import { Button } from "../../components/button";
import CardHistoryContent from "../../components/cards/card-history/parts/CardHistoryContent";
import CardHistorySubtitle from "../../components/cards/card-history/parts/CardHistorySubtitle";
import { FormGroup, FormRow } from "../../components/form";
import {
  IconMapsV2,
  IconMapV3,
  IconPencilV2,
  IconRoket,
} from "../../components/icons";
import { InputComp, TextAreaComp } from "../../components/input";
import { Label } from "../../components/label";
import { ModalComp } from "../../components/modal";
import DefaultImage from "../../constants/global";

const EvaluateItem = () => {
  const [openWriteReview, setOpenWriteReview] = useState<boolean>(false);
  const handleWriteReview = () => {
    setOpenWriteReview(!openWriteReview);
  };

  const handleSumitVoteReview = () => {
    setOpenWriteReview(false);
  };
  return (
    <>
      <div className="evaluate-item">
        <CardHistorySubtitle
          statusBooking="success"
          textStatus="Đã thanh toán"
        />
        <CardHistoryContent />
        <Button type="button" kind="sm" onClick={() => handleWriteReview()}>
          <span>Viết đánh giá</span>
          <span>
            <IconPencilV2 />
          </span>
        </Button>
      </div>
      <ModalComp
        modalOpen={openWriteReview}
        setModalOpen={setOpenWriteReview}
        title="Viết đánh giá trải nghiệm của bạn"
        className="evaluate-custom-modal"
      >
        <div className="evaluate-custom-modal--content">
          <div className="content-image">
            <img src={DefaultImage} alt="" />
          </div>
          <div className="content-info">
            <h3 className="content-info--title">
              Cherry Hotel & Apartment Da Nang - Phoenix 2 Hotel
            </h3>
            <div className="content-info--address">
              <span>
                <IconMapV3 />
              </span>
              <span>107 Võ Nguyên Giáp, Đà Nẵng</span>
            </div>
            <span className="content-info--price">2.653.200 VND</span>
          </div>
        </div>
        <div className="evaluate-custom-modal--vote">
          <h3 className="vote-title">Đánh giá trải nghiệm của bạn</h3>
          <Rate />
        </div>
        <FormRow>
          <FormGroup>
            <Label labelMark htmlFor="username">
              Tên của bạn
            </Label>
            <InputComp
              name="username"
              placeholder="Vui lòng nhập tên "
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label labelMark htmlFor="username">
              Tên của bạn
            </Label>
            <InputComp
              name="username"
              placeholder="Vui lòng nhập tên "
              type="text"
            />
          </FormGroup>
        </FormRow>
        <FormGroup>
          <Label labelMark htmlFor="vote">
            Nội dung đánh giá của bạn
          </Label>
          <TextAreaComp
            placeholder="Nhập nội dung bạn muốn nói"
            value=""
          ></TextAreaComp>
        </FormGroup>
        <Button kind="xl" type="submit" onClick={() => handleSumitVoteReview()}>
          <span>Gửi đánh giá</span>
          <span>
            <IconRoket />
          </span>
        </Button>
      </ModalComp>
    </>
  );
};

export default EvaluateItem;
