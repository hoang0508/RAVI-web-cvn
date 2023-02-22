import React from "react";
import { Gap } from "../../../components/common/gap";
import { Heading } from "../../../components/common/heading";
import { FormGroup, FormRow } from "../../../components/form";
import { InputComp } from "../../../components/input";
import { Label } from "../../../components/label";
import { RadioComp, RadioGroup } from "../../../components/radio";
import { SelectComp } from "../../../components/select";
import "./PersonInfoForm.scss";

const PersonInfoForm = () => {
  return (
    <div className="personinfo-form border-bottom--custom">
      <Heading size="normal" heading="Nhập thông tin chi tiết" />
      <div className="personinfo-form--wrapper">
        <div className="personinfo-form--wrapper-radio">
          <RadioGroup>
            <RadioComp text="Ông, anh" value={"1"}></RadioComp>
            <RadioComp text="Bà, chị" value={"2"}></RadioComp>
          </RadioGroup>
        </div>
        <div>
          <FormRow>
            <FormGroup>
              <Label labelMark colorLabel="" htmlFor="firstName">
                Họ của bạn
              </Label>
              <InputComp
                name="firstName"
                placeholder="Vui lòng nhập họ của bạn"
                type="text"
              ></InputComp>
            </FormGroup>
            <FormGroup>
              <Label labelMark colorLabel="" htmlFor="userName">
                Tên của bạn
              </Label>
              <InputComp
                name="userName"
                placeholder="Vui lòng nhập tên của bạn"
                type="text"
              ></InputComp>
            </FormGroup>
          </FormRow>
          <FormRow>
            <FormGroup>
              <Label labelMark colorLabel="" htmlFor="email">
                Email
              </Label>
              <InputComp
                name="email"
                placeholder="Vui lòng nhập email"
                type="email"
              ></InputComp>
            </FormGroup>
            <FormGroup>
              <Label labelMark colorLabel="" htmlFor="phone">
                Số điện thoại
              </Label>
              <InputComp
                name="phone"
                placeholder="Vui lòng số điện thoại của bạn"
                type="tel"
              ></InputComp>
            </FormGroup>
          </FormRow>
          <FormGroup>
            <Label labelMark colorLabel="" htmlFor="address">
              Địa chỉ
            </Label>
            <InputComp
              name="address"
              placeholder="Vui lòng nhập địa chỉ của bạn"
              type="text"
            ></InputComp>
          </FormGroup>
          <Gap gap="g-16" />
          <FormRow>
            <FormGroup>
              <Label labelMark colorLabel="" htmlFor="city">
                Thành phố
              </Label>
              <SelectComp defaultValue="Chọn thành phố" name="city" />
            </FormGroup>
            <FormGroup>
              <Label labelMark colorLabel="" htmlFor="national">
                Thành phố
              </Label>
              <SelectComp defaultValue="Chọn vùng/quốc gia" name="national" />
            </FormGroup>
          </FormRow>
        </div>
      </div>
    </div>
  );
};

export default PersonInfoForm;
