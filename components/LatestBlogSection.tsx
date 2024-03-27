import React from "react";
import Image from "next/image";
import imrs from "@/public/Hero-Month-1-3-1200x800.jpg";
import Divider from "./Divider";
const LatestBlogSection = () => {
  return (
    <section className="  border-l-2 border-gray-300 px-4">
      <h6 className="font-medium text-sm mb-2">LATEST FROM THE POST</h6>
      <Image
        src={imrs}
        alt=""
        width="532"
        height="392"
        quality="95"
        priority={true}
        className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
      />
      <h2 className=" mt-2 h2-font">These Mobile Games Are for the Birds</h2>
      <p>
        How do you design an app for a parrot? Consider games that are “made to
        be licked,” a new study suggests.
      </p>
      <p className="text-xs mt-2">3 MIN READ</p>
      <Divider />
    </section>
  );
};

export default LatestBlogSection;
