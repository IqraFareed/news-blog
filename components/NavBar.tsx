import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-[#fff] p-4 border-b-4 border-black-500">
      <ul className="flex gap-6  font-bold text-sm">
        <li>Politics</li>
        <li>Opinions</li>
        <li>Style</li>
        <li>Investigations</li>
        <li>Climate</li>
        <li>Well being</li>
        <li>Tech</li>
        <li>World</li>
        <li>Sports</li>
      </ul>
      <div>
        <button className="mx-2">Subscribe</button>
        <button>Sign in</button>
      </div>
    </nav>
  );
};

export default NavBar;
