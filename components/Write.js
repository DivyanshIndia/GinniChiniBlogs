"use client";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageResize from "quill-image-resize-module-react";
import Quill from "quill";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { addAuthor } from "@/store/authorsSlice";
import { addBlog } from "@/store/blogsSlice";

Quill.register("modules/imageResize", ImageResize);

const Write = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };

  const handleThumbnailUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const isValid = () => {
    if (author.trim().length > 2 && image && title) {
      return true;
    } else {
      window.alert("Fill out the author details correctly!");
      return false;
    }
  };

  const handleSave = () => {
    if (content && isValid()) {
      let authorId = Date.now() + Math.floor(Math.random() * 1000);
      let blogId = Date.now() + Math.floor(Math.random() * 1000);
      dispatch(addAuthor({ id: authorId, name: author, image: image }));
      dispatch(
        addBlog({
          id: blogId,
          title: title,
          thumbnail: image,
          author: author,
          content: content,
          created: Date.now(),
        })
      );

      router.push("/");
    } else {
      window.alert("Writings are empty");
    }
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
    imageResize: {
      parchment: Quill.import("parchment"),
      modules: ["Resize", "DisplaySize"],
    },
  };


  return (
    <div className="container">
      <div className=" z-10 bg-white " style={{ width: "100vw" }}>
        <form
          className="grid md:grid-cols-2 gap-3 p-3 place-items-center"
          style={{ width: "100vw" }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <label>Author</label>
              <input
                type="text"
                className="border-2 outline-0 px-1 rounded-md h-8"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col">
              <label>Title</label>
              <textarea
                className="border-2 outline-0 px-1 rounded-md h-20 resize-none w-96"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col">
              <label>Thumbnail of Blog</label>
              <input
                type="file"
                className="border-2 outline-0  rounded-md h-8"
                onChange={handleThumbnailUpload}
              />
            </div>
          </div>
          {image && (
            <div className="m-3 bg-black p-2 rounded-md">
              <Image src={image} alt="Thumbnail" width={300} height={300} />
            </div>
          )}
        </form>
        <div className="border-2 border-slate-300"></div>
      </div>
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        style={{ height: "100vh", width: "100vw" }}
        placeholder="Start writing..."
      />

      <button
        className="ps-2 pe-2 py-1  bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold rounded-md fixed top-10 right-4 z-20"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default Write;
