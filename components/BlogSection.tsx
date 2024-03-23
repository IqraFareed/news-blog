import React from "react";
import Image from "next/image";
import imrs from "@/public/Hero-Month-1-3-1200x800.jpg";
const BlogSection = () => {
  return (
    <section>
      <div className="flex">
        <div className="w-[30rem]">
          {" "}
          <h1 className="text-[35px] font-bold">
            Death toll from Moscow concert attack rises to 133 as more bodies
            found
          </h1>
        </div>
        <div>
          <Image
            src={imrs}
            alt=""
            width="512"
            height="392"
            quality="95"
            priority={true}
            className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
