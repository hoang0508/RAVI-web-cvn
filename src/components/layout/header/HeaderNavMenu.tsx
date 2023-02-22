import React from "react";
import { Link } from "react-router-dom";
import { IconBack, IconHeart, IconHelp, IconUser } from "../../icons";
import Logo from "../../../assets/images/logo.png";
import "./HeaderNavMenu.scss";

const HeaderNavMenu = () => {
  return (
    <div className="d-flex-cb header-nav--menu">
      <div className="header-nav--back">
        <span>
          <IconBack />
        </span>
        <span>Thông tin của bạn</span>
      </div>

      <Link className="" to={"/"}>
        <div>
          <img src={Logo} alt="" />
        </div>
      </Link>

      <div className="header-nav--icon">
        <span>
          <IconHelp />
        </span>
        <span>
          <IconHeart />
        </span>
        <span>
          <IconUser />
        </span>
      </div>
    </div>
  );
};

export default HeaderNavMenu;
