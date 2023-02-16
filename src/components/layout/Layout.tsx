import React from "react";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import HeaderSearch from "./header/HeaderSearch";
import HeaderDetails from "./header/HeaderDetails";

interface ILayout {
  layout: string;
}

const Layout = ({ layout }: ILayout) => {
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
    default:
      break;
  }
  return (
    <>
      {header}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
