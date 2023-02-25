import React from "react";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import HeaderSearch from "./header/HeaderSearch";
import HeaderDetails from "./header/HeaderDetails";
import HeaderNavMenu from "./header/HeaderNavMenu";

interface ILayout {
  layout: string;
  footerHidden?: boolean;
  backTo?: string;
  textTo?: string;
}

const Layout = ({
  layout,
  footerHidden,
  backTo = "",
  textTo = "",
}: ILayout) => {
  let header;
  switch (layout) {
    case "layout-home":
      header = <Header />;
      break;
    case "layout-search":
      header = <HeaderSearch />;
      break;
    case "layout-detail":
      header = <HeaderDetails />;
      break;
    case "layout-headerNav":
      header = <HeaderNavMenu backTo={backTo} textTo={textTo} />;
      break;
    default:
      break;
  }
  return (
    <>
      {header}
      <Outlet />
      {footerHidden ? <div></div> : <Footer />}
    </>
  );
};

export default Layout;
