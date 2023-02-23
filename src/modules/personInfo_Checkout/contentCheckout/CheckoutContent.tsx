import React from "react";
import { ChecboxComp } from "../../../components/checkbox";
import { Gap } from "../../../components/common/gap";
import { Heading } from "../../../components/common/heading";
import { Text } from "../../../components/common/text";
import { FormGroup, FormRow } from "../../../components/form";
import { IconUser } from "../../../components/icons";
import { InputComp } from "../../../components/input";
import { Label } from "../../../components/label";
import VisaImage from "../../../assets/images/Visa.png";
import JcbImage from "../../../assets/images/JCB.png";
import CardRoundImage from "../../../assets/images/card-round.png";
import "./CheckoutContent.scss";
import { SelectComp } from "../../../components/select";
import { DatePickerComp, DatePickerGroup } from "../../../components/date";
import { Button } from "../../../components/button";

const CheckoutContent = () => {
  return (
    <div className="checkout-content">
      <div className="checkout-content--info border-bottom--custom ">
        <div className="checkout-content--info-heading">
          <Heading heading="Thông tin của bạn" size="normal" />
          <span>
            <IconUser />
          </span>
        </div>
        <div className="checkout-content--info-list">
          <div className="info-item">
            <h4 className="info-item--title">Họ và tên</h4>
            <span className="info-item--content">Jane Cooper</span>
          </div>
          <div className="info-item">
            <h4 className="info-item--title">Họ và tên</h4>
            <span className="info-item--content">Jane Cooper</span>
          </div>
          <div className="info-item">
            <h4 className="info-item--title">Họ và tên</h4>
            <span className="info-item--content">Jane Cooper</span>
          </div>
          <div className="info-item">
            <h4 className="info-item--title">Họ và tên</h4>
            <span className="info-item--content">Jane Cooper</span>
          </div>
        </div>
        <ChecboxComp
          text="Amet minim mollit non deserunt."
          value="A"
          colorGray="gray"
        ></ChecboxComp>
      </div>
      <Gap gap="g-40" />
      <div className="checkout-content--saveinfo border-bottom--custom">
        <Heading
          heading="Lưu thông tin liên lạc của bạn"
          size="normal"
        ></Heading>
        <Text>
          Dùng thông tin liên lạc của bạn để tạo tài khoản và đặt phòng nhanh
          hơn sau này.(Chúng tôi sẽ không lưu trữ thông tin thanh toán của bạn.)
        </Text>
        <ChecboxComp
          text="Lưu thông tin của tôi để lần sau đặt nhanh hơn"
          value="A"
          colorGray="gray"
        ></ChecboxComp>
      </div>
      <Gap gap="g-40" />
      <div className="checkout-content--promo border-bottom--custom">
        <Heading heading="Có thể dùng cho đặt phòng này" size="normal" />
        <FormGroup>
          <Label htmlFor="promo" colorLabel="" labelMark>
            Mã khuyến mãi
          </Label>
          <InputComp
            name="promo"
            placeholder="Nhập mã giảm giá (nếu có)"
            type="text"
          />
        </FormGroup>
      </div>
      <Gap gap="g-40" />
      <div className="border-bottom--custom checkout-content--credit">
        <Heading heading="Thẻ tín dụng/ thẻ ghi nợ" size="normal"></Heading>
        <div className="checkout-content--credit-select">
          <img src={CardRoundImage} alt="" />
          <img src={VisaImage} alt="" />
          <img src={JcbImage} alt="" />
        </div>
        <FormRow>
          <FormGroup>
            <Label colorLabel="" labelMark htmlFor="username">
              Tên chủ thẻ
            </Label>
            <InputComp
              name="username"
              type="text"
              placeholder="Tên chủ thẻ"
            ></InputComp>
          </FormGroup>
          <FormGroup>
            <Label colorLabel="" labelMark htmlFor="card">
              Loại thẻ thanh toán
            </Label>
            <SelectComp
              defaultValue="Chọn loại thẻ thanh toán"
              name="card"
            ></SelectComp>
          </FormGroup>
        </FormRow>
        <FormRow>
          <FormGroup>
            <Label colorLabel="" labelMark htmlFor="cardNumber">
              Số thẻ
            </Label>
            <InputComp
              name="cardNumber"
              type="text"
              placeholder="Nhập số thẻ"
            ></InputComp>
          </FormGroup>
          <FormGroup>
            <Label colorLabel="" labelMark htmlFor="">
              Ngày hết hạn
            </Label>
            <DatePickerGroup>
              <DatePickerComp picker="date"></DatePickerComp>
              <DatePickerComp picker="year"></DatePickerComp>
            </DatePickerGroup>
          </FormGroup>
        </FormRow>
        <ChecboxComp
          text="Lưu thông tin thẻ thanh toán"
          value="B"
          colorGray="gray"
        ></ChecboxComp>
      </div>
      <Gap gap="g-40" />
      <div className="border-bottom--custom  checkout-content--desc">
        <Text>
          Để bảo đảm cho đặt phòng của bạn, Ravi.com sẽ uỷ quyền thanh toán
          trước thẻ tín dụng của bạn hoặc thu trước một khoản tương đương với
          giá phòng của bạn. Nếu đặt phòng không được xác nhận, bạn sẽ được hoàn
          lại toàn bộ số tiền. Không thể hủy hay điều chỉnh đặt phòng này. Nếu
          không nhận phòng khách sạn, bạn sẽ bị thu khoản tiền trả trước.
        </Text>
      </div>
      <Gap gap="g-40" />
      <div className="checkout-content--comple">
        <Button type="button" kind="3xl">
          Hoàn tất thanh toán
        </Button>
      </div>
    </div>
  );
};

export default CheckoutContent;
