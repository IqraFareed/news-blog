"use client";
import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";
import Image from "next/image";
import downIcon from "@/public/chevron-down-solid.svg";
const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 7.5 * 16); // Convert rem to pixels (assuming 1rem = 16px)
    };

    window.addEventListener("scroll", handleScroll);
    console.log(isScrolled);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <header
      className={`fixed transition w-[100%] bg-[#fff] p-4 ${
        isScrolled ? " top-0" : " top-[7.25rem]"
      }`}
    >
      <nav className=" border-[1.5px] border-black-900">
        <ul className=" flex  gap-2 text-sm items-center justify-center ">
          {links?.map((link) => {
            return (
              <li
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                className="flex hover:border-b-2 border-[#000] py-2 px-2 "
              >
                {link?.name}{" "}
                <Image
                  src={downIcon}
                  alt=""
                  width="12"
                  height="12"
                  quality="95"
                  priority={true}
                  className=" h-88 w-88  ml-1"
                />
              </li>
            );
          })}
        </ul>

        <div
          className={`${isShown ? "block" : "hidden"} h-[100px] bg-red-500`}
        ></div>
      </nav>
    </header>
  );
};

export default NavBar;
