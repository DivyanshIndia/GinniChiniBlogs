import Banner from "@/components/Banner";
import BlogBox from "@/components/BlogBox";
import Blogs from "@/components/Blogs";

export default function Home() {
  return (
    <main className=" min-w-full text-white">
      <Banner />
      <div className="container  pt-12 p-6 min-w-full  bg-gradient-to-r from-cyan-500 to-blue-500">
        <h1 className="text-center text-2xl font-bold">All Articles</h1>
        <hr />
       <Blogs/>
      </div>
    </main>
  );
}
