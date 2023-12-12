import React from "react";

const Footbar = () => {
  return (
    <div className=" flex flex-col p-2 items-center text-slate-300  bg-black gap-2">
      <p className="text-2xl border-b-2">GinniChini Blogs</p>
      <p className="md:w-96 p-3">
        Welcome to our sanctuary of personal experiences and mindfulness. We
        share our journey to inspire self-discovery and mindfulness in others.
        Join us as we explore life, one mindful moment at a time.
      </p>
      <div className="p-3 flex gap-3 items-center">
        <p className="border-b-2">Twitter</p>
        <p className="border-b-2">LinkedIn</p>
        <p className="border-b-2">Instagram</p>
      </div>
     <div className="flex flex-col items-center">
     <p>&copy; 2010 - 2023 GiniChini Blogs Co.</p>
      <p>All rights reserved</p>
     </div>
    </div>
  );
};

export default Footbar;
