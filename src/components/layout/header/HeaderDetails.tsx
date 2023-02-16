import React from "react";
import SearchInput from "../../search/parts/SearchInput";
import Logo from "../../../assets/images/logo.png";
import "./HeaderSearch.scss";
import { IconHeart, IconHelp, IconUser } from "../../icons";
import { Link } from "react-router-dom";
import "./HeaderDetails.scss";

const HeaderDetails = () => {
  return (
    <div className="d-flex-cb header-search--main header-detail--main">
      <div className="header-search header-detail">
        <Link className="" to={"/"}>
          <div className="header-detail--logo">
            <img src={Logo} alt="" />
          </div>
        </Link>
        <div className="header-search--input">
          <div className="search">
            <SearchInput />
          </div>
        </div>
      </div>
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

export default HeaderDetails;
