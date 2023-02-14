import React from "react";
import { IconLineV2 } from "../../components/icons";
import BlogImg from "../../assets/images/blog-image.png";

const BlogItem = () => {
  return (
    <div className="blog-item">
      <div className="blog-item--image">
        <img src={BlogImg} alt="" />
      </div>
      <div className="blog-content">
        <span className="blog-content--time">03.10.2022</span>
        <h3 className="blog-content--title">
          Shinrin-yoku: Nghệ thuật chữa lành của tắm rừng
        </h3>
        <div className="blog-content--add">
          <span className="add-text">Đọc thêm</span>
          <span>
            <IconLineV2 />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
