import React from "react";
import { IconLineV2 } from "../../components/icons";
import BlogImg from "../../assets/images/blog-image.png";
import LogoImg from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

interface IBlogItem {
  blogItem: {
    id: number;
    date: string;
    title: string;
  };
}

const BlogItem = ({ blogItem }: IBlogItem) => {
  const navigate = useNavigate();
  const handleBlogDetails = (id: number) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div className="blog-item" onClick={() => handleBlogDetails(blogItem.id)}>
      <div className="blog-item--image">
        <div className="image-blog">
          <img src={BlogImg} alt="" />
        </div>
        <div className="image-logo">
          <img src={LogoImg} alt="" />
        </div>
      </div>
      <div className="blog-content">
        <span className="blog-content--time">{blogItem.date}</span>
        <h3 className="blog-content--title">{blogItem.title}</h3>
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
