import React from "react";
import Image from "next/image";
import searchIcon from "@/public/search-icon.svg";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center p-4 ">
        {" "}
        <div>
          <Image
            src={searchIcon}
            alt=""
            width="22"
            height="22"
            quality="95"
            priority={true}
            className=" "
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
