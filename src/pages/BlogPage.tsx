import React from "react";
import Blogbaner from "../modules/blog/parts/banner/Blogbaner";
import BannerBlog from "../assets/images/blog-banner.png";
import BlogList from "../modules/blog/BlogList";
import "../modules/blog/Blog.scss";
import { Heading } from "../components/common/heading";

const dataBlog = [
  {
    id: 1,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
  {
    id: 2,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
  {
    id: 3,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
  {
    id: 4,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
  {
    id: 5,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
  {
    id: 6,
    title: "Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng",
    date: "03.10.2022",
  },
];

const BlogPage = () => {
  return (
    <div className="container blog">
      <Blogbaner
        bannerImage={BannerBlog}
        className="background blog-banner"
        gradientBG=""
        height="362px"
      >
        <Heading heading=" Cảm hứng cho những chuyến du lịch" size="big" />
      </Blogbaner>
      <div>
        <BlogList dataBlog={dataBlog} heading="Mới nhất" />
      </div>
    </div>
  );
};

export default BlogPage;
