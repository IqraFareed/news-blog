import React from "react";
import Image from "next/image";
import imrs from "@/public/Hero-Month-1-3-1200x800.jpg";
import Divider from "./Divider";
const BlogSection = () => {
  return (
    <section className="">
      <div className="flex gap-4">
        <div className="w-[22rem]">
          {" "}
          {/* /// title */}
          <h2 className="h2-font  mb-2">
            Amid Security Questions, Russian Media Focus on Different Attack
            Narrative
          </h2>
          {/* ////description */}
          <p className="text-[0.875rem]  text-gray-800 font">
            President Vladimir Putin vowed to punish those responsible for the
            assault, which injured more than 100 people. U.S. officials
            attributed the attack to ISIS-K. Russian investigators said the
            assailants had used automatic weapons and explosives, and had set
            the concert hall on fire with “a flammable liquid.”
          </p>
          {/* ///biliner */}
          <p className="text-[12px] py-2">
            By Catherine Belton and Robyn Dixon1 hour ago
          </p>
        </div>

        <div>
          <Image
            src={imrs}
            alt=""
            width="532"
            height="392"
            quality="95"
            priority={true}
            className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
          />
          <p className="text-[12px]"> A memorial in Moscow. (Reuters)</p>

          {/* ///credits */}
          <p className="text-[14px]">
            By Kelsey Ables, Francesca Ebel, Mary Ilyushina and Robyn Dixon
          </p>
        </div>
      </div>

      <Divider />
    </section>
  );
};

export default BlogSection;
