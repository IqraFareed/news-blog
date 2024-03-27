"use client";
import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";
import Image from "next/image";
import downIcon from "@/public/chevron-down-solid.svg";
import NavDetail from "./NavDetail";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 3 * 16); // Convert rem to pixels (assuming 1rem = 16px)
    };

    window.addEventListener("scroll", handleScroll);
    console.log(isScrolled);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <header
      className={`fixed transition w-[100%] bg-[#fff]  ${
        isScrolled ? " top-0" : " top-[7.75rem]"
      }`}
    >
      <nav className=" border-[1.5px] border-black-900  mr-[8rem] ">
        <ul className=" flex  gap-2 text-sm items-center justify-center ">
          {links?.map((link) => {
            return (
              <li
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className="flex hover:border-b-2 border-[#000] py-2 px-2 text-[12px] "
              >
                {link?.name}{" "}
                <Image
                  src={downIcon}
                  alt=""
                  width="10"
                  height="10"
                  quality="95"
                  priority={true}
                  className=" h-88 w-88  ml-1"
                />
              </li>
            );
          })}
        </ul>

        {/* <div className={`${isShown ? "block" : "hidden"} h-[100px] `}>
          <NavDetail />
        </div> */}
      </nav>
    </header>
  );
};

export default NavBar;
