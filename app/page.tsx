import BlogSection from "@/components/BlogSection";

import LatestBlogSection from "@/components/LatestBlogSection";

import Food from "@/components/Food";
import Divider from "@/components/Divider";
import Sports from "@/components/Sports";

export default function Home() {
  return (
    <main className="flex flex-col  px-12  mt-[5rem] ">
      <div className="grid grid-cols-12 gap-x-1">
        <div className="col-span-9">
          {" "}
          <BlogSection />
        </div>
        <div className="col-span-3">
          {" "}
          <LatestBlogSection />
        </div>
      </div>
      <Divider />
      <Sports />
      <Divider />
      <Food />
    </main>
  );
}
