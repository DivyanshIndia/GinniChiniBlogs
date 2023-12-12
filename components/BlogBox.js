"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BlogBox = ({ blog }) => {
  const router = useRouter();
  const handleShowBlog = () => {
    router.push(`read/?id=${blog.id}`);
  };

  return (
    <div
      className="flex flex-col gap-1 items-start m-2"
      onClick={handleShowBlog}
    >
      <Image src={blog.thumbnail} alt="thumbnail" height={300} width={300} />
      <p className="whitespace-normal">{blog.title}</p>
      <small>{blog.author}</small>
    </div>
  );
};

export default BlogBox;
