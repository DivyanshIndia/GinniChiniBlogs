"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

const Read = () => {
  const router = useRouter();
  const id = useSearchParams().get("id");
  console.log(id);
  const [blog] = useSelector((state) =>
    state.blogs.blogs.filter((blog) => blog.id === Number(id))
  );
  console.log(blog);

  return (
    <div>
      <div className="bg-gradient-to-r from-cyan-600  to-blue-600">
       
        <div className="w-screen bg-white">
          {blog?.thumbnail && (
            <Image
              src={blog.thumbnail}
              width={100}
              height={100}
              className="object-contain w-screen h-96 rounded-sm"
              style={{ padding: "2% 25%" }}
            />
          )}
        </div>
        <div className="flex flex-col gap-2 bg-white items-center p-3 pt">
          {/* <p>Author: Divyansh</p> */}
          <p className="text-3xl font-bold">{`"${blog?.title}"`} </p>
        </div>
        <ReactQuill
          className="flex flex-cols   items-center  gap-3 justify-center border-none bg-white"
          value={blog?.content}
          readOnly={true}
          modules={{ toolbar: false }}
          style={{ height: "100%", width: "100vw" }}
        />
      </div>
    </div>
  );
};

export default Read;
