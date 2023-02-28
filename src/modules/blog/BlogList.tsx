import React from "react";
import { Heading } from "../../components/common/heading";
import BlogItem from "./BlogItem";
import "./BlogList.scss";

interface IDateBlogItem {
  id: number;
  date: string;
  title: string;
}

interface IBlogList {
  dataBlog: IDateBlogItem[];
  heading: string;
}

const BlogList = ({ dataBlog, heading = "" }: IBlogList) => {
  return (
    <div>
      <Heading size="small" heading={heading}></Heading>
      <div className="blog-list">
        {dataBlog &&
          dataBlog.length > 0 &&
          dataBlog.map((item) => <BlogItem key={item.id} blogItem={item} />)}
      </div>
    </div>
  );
};

export default BlogList;
