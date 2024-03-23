import React from "react";
import Image from "next/image";
import searchIcon from "@/public/search-icon.png";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        {" "}
        <div>
          <Image
            src={searchIcon}
            alt=""
            width="32"
            height="32"
            quality="95"
            priority={true}
            className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
          />
        </div>
        <div>
          <h6 className="ml-[160px] text-[12px]">
            TODAY'S PAPER | MARCH 23, 2024
          </h6>
        </div>
        <div className=" ">
          <button className="mx-4 bg-[#718096] hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
            Subscribe
          </button>
          <button className="bg-[#718096] hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
            Sign in
          </button>
        </div>
      </div>
      <div className="flex text-center flex-col ">
        <h1 className="text-[40px] font-bold font-[emoji]">
          {" "}
          The Washington Post
        </h1>
      </div>
    </>
  );
};

export default Header;
