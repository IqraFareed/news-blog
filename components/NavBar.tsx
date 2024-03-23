"use client";
import React, { useEffect, useState } from "react";
import { links } from "@/lib/data";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition >= 6.5 * 16); // Convert rem to pixels (assuming 1rem = 16px)
    };

    window.addEventListener("scroll", handleScroll);
    console.log(isScrolled);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  return (
    <header
      className={` fixed transition w-[100%] bg-[#fff] p-4 ${
        isScrolled ? " top-0" : " top-[6.25rem]"
      }`}
    >
      <nav className=" border-[1.5px] border-black-900">
        <ul className=" flex  gap-2 text-sm items-center justify-center ">
          {links?.map((link) => {
            return (
              <li className="hover:bg-gray-300 py-2 px-2 rounded-full">
                {link?.name}
              </li>
            );
          })}
        </ul>
        <div className="hidden hover:block h-[100px] bg-red-500"></div>
      </nav>
    </header>
  );
};

export default NavBar;
