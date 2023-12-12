"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const handleCreate = () => {
    router.push("/create");
  };
  return (
    <div className="container flex flex-col md:flex-row gap-4 items-center bg-gradient-to-r from-cyan-600  to-blue-600 min-w-full p-6  text-white font-light">
      <img
        className="rounded-md h-96"
        src="https://th.bing.com/th/id/OIG.OQxYv2EcMskaJ_ux4jqC?w=1024&h=1024&rs=1&pid=ImgDetMain"
      />
      <div className="container flex flex-col gap-4 items-center p-2 text-xl">
        <p className="text-2xl">Hello and Welcome to my Experiences.</p>
        <p>
          Welcome to our sanctuary of personal experiences and mindfulness. We
          share our journey to inspire self-discovery and mindfulness in others.
          Join us as we explore life, one mindful moment at a time.
        </p>

        <button
          className="border-2 p-2 rounded-md hover:text-red-300"
          onClick={handleCreate}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default Banner;
