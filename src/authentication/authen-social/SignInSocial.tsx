import React from "react";
import { IconFacebookV2 } from "../../components/icons";
import "./SignInSocial.scss";

interface ISignInSocial {
  onClick?: () => void;
  signinText: string;
  signinIcon: React.ReactNode;
}

const SignInSocial = ({ onClick, signinIcon, signinText }: ISignInSocial) => {
  return (
    <button className="signin-social" onClick={onClick}>
      <span className="signin-sociail--icon">{signinIcon}</span>
      <span className="signin-social--text">{signinText}</span>
    </button>
  );
};

export default SignInSocial;
