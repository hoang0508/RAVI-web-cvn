import * as React from "react";
import Logo from "../../../assets/images/logo.png";
import { IconHeart, IconHelp, IconUser } from "../../icons";
import "./Header.scss";

export interface IHeaderProps {}

const headerNav = [
  {
    id: 1,
    icon: <IconHelp />,
    text: "Trợ giúp?",
  },
  {
    id: 2,
    icon: <IconHeart />,
    text: "Yêu thích",
  },
  {
    id: 3,
    icon: <IconUser />,
    text: "Tài khoản",
  },
];

export function Header(props: IHeaderProps) {
  return (
    <>
      <div className="container-fluid header">
        <div className="header-logo">
          <img src={Logo} alt="" />
        </div>
        <nav className="header-nav">
          {headerNav.map((item) => (
            <div className="header-nav--list" key={item.id}>
              <span>{item.icon}</span>
              <span className="header-nav--text">{item.text}</span>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
