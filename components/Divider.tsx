import React from "react";

type propsdiv = {
  color: string;
};
const Divider = () => {
  return (
    <div
      className={
        "bg-gray-500 my-[1rem] h-[0.05rem] w-[100%] rounded-full hidden sm:block dark:bg-opacity-20"
      }
    >
      {" "}
    </div>
  );
};

export default Divider;
