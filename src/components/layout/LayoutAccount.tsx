import React from "react";
import { Outlet } from "react-router-dom";
import AccountSidebar from "../../modules/account/AccountSidebar";
import Footer from "./footer/Footer";
import HeaderNavMenu from "./header/HeaderNavMenu";
import "./LayoutAcount.scss";

const LayoutAccount = () => {
  return (
    <>
      <HeaderNavMenu backTo="back-home" textTo="Quay lại tìm kiếm" />
      <div className="container acount-layout">
        <div className="acount-layout--sidebar">
          <AccountSidebar />
        </div>
        <div className="acount-layout--content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LayoutAccount;
