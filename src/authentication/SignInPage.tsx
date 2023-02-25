import React from "react";
import { useNavigate } from "react-router-dom";
import bgSignIn from "../assets/images/bg-signup.png";
import { Button } from "../components/button";
import { Gap } from "../components/common/gap";
import { FormGroup } from "../components/form";
import { IconEmail, IconFacebookV2, IconGoogle } from "../components/icons";
import { InputComp } from "../components/input";
import { Label } from "../components/label";
import { SelectComp } from "../components/select";
import SignInSocial from "./authen-social/SignInSocial";
import "./SignInPage.scss";

const SignInPage = () => {
  const backgroundStyle = {
    backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
    url(${bgSignIn}`,
  };
  const navigate = useNavigate();
  const handleSingIn = () => {
    navigate("/account-info");
  };
  return (
    <div className="background signin" style={backgroundStyle}>
      <div className="signin-main">
        <h3 className="signin-main--title">Đăng nhập hoặc tạo tài khoản </h3>
        <div className="signin-main--content">
          <form action="#" className="signin-form">
            <FormGroup>
              <Label className="" labelMark>
                Vùng/ quốc gia
              </Label>
              <SelectComp defaultValue="(+84) Việt Nam" name=""></SelectComp>
            </FormGroup>
            <InputComp
              name="phone"
              placeholder="Vui lòng nhập số điện thoại"
              type="tel"
            />
            <Button
              type="submit"
              kind="xl"
              className="signin-form--submit"
              onClick={() => handleSingIn()}
            >
              Tiếp tục
            </Button>
          </form>
          <span className="sigin-line">hoặc</span>
          <SignInSocial
            signinIcon={<IconFacebookV2 />}
            signinText="Tiếp tục với Facebook"
          />
          <SignInSocial
            signinIcon={<IconGoogle />}
            signinText="Tiếp tục với Google"
          />
          <SignInSocial
            signinIcon={<IconEmail />}
            signinText="Tiếp tục với Email"
          />
          <Gap gap="g-40" />
          <p className="signin-desc">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <Button type="button" kind="sm" className="signin-support">
            Bạn cần hỗ trợ?
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
