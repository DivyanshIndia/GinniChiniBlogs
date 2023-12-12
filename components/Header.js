import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex gap-2 items-center conatainer p-3  text-3xl  bg-gradient-to-r from-cyan-600 to-blue-700  text-white font-bold ">
      <p>GinniChini Blogs</p>
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/external-tulpahn-outline-color-tulpahn/64/external-butterfly-insect-tulpahn-outline-color-tulpahn.png"
        alt="external-butterfly-insect-tulpahn-outline-color-tulpahn"
      />
    </div>
  );
};

export default Header;
