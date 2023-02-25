import React from "react";
import { Button } from "../../components/button";
import { Gap } from "../../components/common/gap";
import { FormGroup, FormRow } from "../../components/form";
import { InputComp } from "../../components/input";
import { Label } from "../../components/label";
import { SelectComp } from "../../components/select";
import "./AccountInfo.scss";

const AccountInfo = () => {
  return (
    <div className="acount-info">
      <span className="acount-info--note">
        Thông tin của bạn sẽ chỉ được lưu trữ an toàn trên hệ thống của chúng
        tôi.
      </span>
      <form action="#" className="acount-info--form">
        <FormRow>
          <FormGroup>
            <Label labelMark htmlFor="email">
              Email
            </Label>
            <InputComp
              name="email"
              placeholder="tmduca8@gmail.com"
              type="text"
            ></InputComp>
          </FormGroup>
          <FormGroup>
            <Label labelMark htmlFor="phone">
              Số điện thoại
            </Label>
            <InputComp
              name="phone"
              placeholder="0916656179"
              type="tel"
            ></InputComp>
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label labelMark htmlFor="firstName">
              Họ của bạn
            </Label>
            <InputComp
              name="firstName"
              placeholder="Mạnh"
              type="text"
            ></InputComp>
          </FormGroup>
          <FormGroup>
            <Label labelMark htmlFor="userName">
              Tên của bạn
            </Label>
            <InputComp
              name="userName"
              placeholder="Vui lòng tên bạn"
              type="text"
            ></InputComp>
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label labelMark htmlFor="firstName">
            Họ của bạn
          </Label>
          <InputComp
            name="firstName"
            placeholder="Mạnh"
            type="text"
          ></InputComp>
        </FormGroup>
        <Gap gap="g-16" />

        <FormGroup singleWitth>
          <Label labelMark htmlFor="date">
            Ngày sinh
          </Label>
          <InputComp
            name="date"
            placeholder="YYYY-MM-DD"
            type="text"
          ></InputComp>
        </FormGroup>
        <Gap gap="g-16" />

        <FormGroup singleWitth>
          <Label labelMark htmlFor="gender">
            Giới tính
          </Label>
          <SelectComp
            defaultValue="Tốt nhất không nói"
            name="gender"
          ></SelectComp>
        </FormGroup>
        <Gap gap="g-16" />

        <FormGroup singleWitth>
          <Label labelMark htmlFor="national">
            Vùng/ quốc gia
          </Label>
          <SelectComp
            defaultValue="Chọn quốc gia của bạn"
            name="national"
          ></SelectComp>
        </FormGroup>

        <Gap gap="g-40" />

        <Button type="submit" kind="xl">
          Lưu thông tin
        </Button>
      </form>
    </div>
  );
};

export default AccountInfo;
