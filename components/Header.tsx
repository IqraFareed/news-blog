import React from "react";
import Image from "next/image";
import searchIcon from "@/public/search-icon.svg";
import logo from "@/public/The-New-York-Times-logo-web-2-1024x193.webp";
const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center py-2 px-4  ">
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
          <h6 className="ml-[18rem] text-[12px]">
            TODAY'S PAPER | MARCH 23, 2024
          </h6>
        </div>
        <div className=" ">
          <button className="text-[12px]  mx-4 border uppercase border-[#326891] bg-[#567B95] hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
            Subscribe for $0.25/Week
          </button>

          <button className="text-[12px] border uppercase border-[#326891] bg-[#567B95] hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded">
            Sign in
          </button>
        </div>
      </div>
      <div className="flex text-center flex-col ">
        <div className=" items-center flex justify-center">
          {" "}
          <Image
            src={logo}
            alt=""
            width="400"
            height="292"
            quality="95"
            priority={true}
            className=" h-88 w-88  object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
