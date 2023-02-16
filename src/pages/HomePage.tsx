import * as React from "react";
import { Banner } from "../components/banner";
import { Gap } from "../components/common/gap";
import BlogList from "../modules/blog/BlogList";
import HomeDestination from "../modules/home/HomeDestination";
import HomeFamousHotel from "../modules/home/HomeFamousHotel";
import HomeHighlightHotel from "../modules/home/HomeHighlightHotel";
import HomePromotion from "../modules/home/HomePromotion";
import HomeRegisterMail from "../modules/home/HomeRegisterMail";
import HomeSearchNear from "../modules/home/HomeSearchNear";

export interface IHomePageProps {}

export function HomePage(props: IHomePageProps) {
  return (
    <div className="container-fluid">
      <Banner heading="Đặt khách sạn dễ dàng" text="cùng RAVI" />
      <div className="container">
        <HomeSearchNear />
        <Gap />
        <HomePromotion></HomePromotion>
        <Gap />
        <HomeDestination></HomeDestination>
        <Gap />
        <HomeRegisterMail></HomeRegisterMail>
        <Gap />
        <HomeHighlightHotel></HomeHighlightHotel>
        <Gap />
        <HomeFamousHotel></HomeFamousHotel>
        <Gap gap="gap-40" />
        <HomeFamousHotel></HomeFamousHotel>
        <Gap gap="gap-40" />
        <HomeFamousHotel></HomeFamousHotel>
        <Gap />
        <BlogList />
        <Gap gap="gap-120" />
      </div>
    </div>
  );
}
