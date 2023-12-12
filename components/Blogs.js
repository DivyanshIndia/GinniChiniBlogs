"use client";
import React from "react";
import BlogBox from "./BlogBox";
import { useSelector } from "react-redux";

const Blogs = () => {
  const { blogs } = useSelector((state) => state.blogs);
  return (
    <div className="grid gap-10 grid-cols-1 md:grid-cols-3 pt-5 place-content-center md:px-20">
      {blogs?.map((blog, index) => (
        <BlogBox key={index} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
