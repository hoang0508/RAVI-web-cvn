import React from "react";
import { Link } from "react-router-dom";
import { IconBack, IconHeart, IconHelp, IconUser } from "../../icons";
import Logo from "../../../assets/images/logo.png";

interface IHeaderNavMenu {
  backTo: string;
  textTo: string;
}

const HeaderNavMenu = ({ backTo, textTo }: IHeaderNavMenu) => {
  let linkTo: any;
  switch (backTo) {
    case "back-search":
      linkTo = "/";
      break;
    case "back-home":
      linkTo = "/";
      break;
    case "back-blog":
      linkTo = "/blog";
      break;
    case "back-details-room":
      linkTo = "/detail-room";
      break;

    default:
      break;
  }
  return (
    <div className="d-flex-cb header-nav--menu">
      <Link to={linkTo} className="header-nav--back">
        <span>
          <IconBack />
        </span>
        <span>{textTo}</span>
      </Link>

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
