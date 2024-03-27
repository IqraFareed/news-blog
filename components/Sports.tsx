import React from "react";
import Image from "next/image";
import imrs from "@/public/Hero-Month-1-3-1200x800.jpg";
const Sports = () => {
  return (
    <section>
      {" "}
      <h2 className="h2-font">Sports</h2>
      <div className="grid grid-cols-12 gap-x-1">
        <div className="col-span-6">
          {" "}
          <div>
            {" "}
            <Image
              src={imrs}
              alt=""
              width="600"
              height="392"
              quality="95"
              priority={true}
              className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
            />
            <h2 className="h2-font">
              This warm broccoli grain salad might turn vegetable skeptics into
              fans
            </h2>
          </div>
        </div>
        <div className="col-span-6">
          <div className="grid grid-cols-12 gap-x-1">
            <div className="col-span-6">
              {" "}
              <div>
                {" "}
                <Image
                  src={imrs}
                  alt=""
                  width="600"
                  height="392"
                  quality="95"
                  priority={true}
                  className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
                />
                <h2 className="h2-font">
                  This warm broccoli grain salad might turn vegetable skeptics
                  into fans
                </h2>
              </div>
            </div>
            <div className="col-span-6">
              {" "}
              <div>
                {" "}
                <Image
                  src={imrs}
                  alt=""
                  width="600"
                  height="392"
                  quality="95"
                  priority={true}
                  className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
                />
                <h2 className="h2-font">
                  This warm broccoli grain salad might turn vegetable skeptics
                  into fans
                </h2>
              </div>
            </div>
            <div className="col-span-6">
              {" "}
              <div>
                {" "}
                <Image
                  src={imrs}
                  alt=""
                  width="600"
                  height="392"
                  quality="95"
                  priority={true}
                  className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
                />
                <h2 className="h2-font">
                  This warm broccoli grain salad might turn vegetable skeptics
                  into fans
                </h2>
              </div>
            </div>
            <div className="col-span-6">
              {" "}
              <div>
                {" "}
                <Image
                  src={imrs}
                  alt=""
                  width="600"
                  height="392"
                  quality="95"
                  priority={true}
                  className=" h-88 w-88  object-cover border-[0.15rem] shadow-xl"
                />
                <h2 className="h2-font">
                  This warm broccoli grain salad might turn vegetable skeptics
                  into fans
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sports;
