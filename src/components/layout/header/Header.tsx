import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import { IconHeart, IconHelp, IconUser } from "../../icons";
import "./Header.scss";

export interface IHeaderProps {}

const headerNav = [
  {
    id: 1,
    icon: <IconHelp />,
    text: "Trợ giúp ?",
    url: "/faq-answers",
  },
  {
    id: 2,
    icon: <IconHeart />,
    text: "Yêu thích",
    url: "/account/favourite",
  },
];

export function Header(props: IHeaderProps) {
  const location: any = useLocation();
  const username = location?.state?.username;
  return (
    <>
      <div className="container-fluid header">
        <div className="header-logo">
          <img src={Logo} alt="" />
        </div>
        <nav className="header-nav">
          {headerNav.map((item) => (
            <Link to={item.url} className="header-nav--list" key={item.id}>
              <span>{item.icon}</span>
              <span className="header-nav--text">{item.text}</span>
            </Link>
          ))}
          <Link
            to={username ? "/account/account-info" : "/sign-in"}
            className="header-nav--list"
          >
            <span>
              <IconUser />
            </span>
            {username ? (
              <span className="header-nav--text">
                <span>Tài khoản của bạn</span>
                <span className="header-nav--text-username">{username}</span>
              </span>
            ) : (
              <span className="header-nav--text">Tài khoản</span>
            )}
          </Link>
        </nav>
      </div>
    </>
  );
}
