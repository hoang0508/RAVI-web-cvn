import * as React from "react";
import { Banner } from "../components/banner";

export interface IHomePageProps {}

export function HomePage(props: IHomePageProps) {
  return (
    <div className="container-fluid">
      <Banner heading="Đặt khách sạn dễ dàng" text="cùng RAVI" />
      <div>hhh</div>
    </div>
  );
}
