import React from "react";
import { Heading } from "../../components/common/heading";
import BlogItem from "./BlogItem";

import "./BlogList.scss";

const BlogList = () => {
  return (
    <div>
      <Heading
        size="small"
        heading="Cảm hứng cho những chuyến du lịch"
      ></Heading>
      <div className="blog-list">
        {Array(3)
          .fill(0)
          .map((item, index) => (
            <BlogItem key={index}></BlogItem>
          ))}
      </div>
    </div>
  );
};

export default BlogList;
