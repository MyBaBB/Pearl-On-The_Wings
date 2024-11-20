// eslint-disable-next-line no-unused-vars
import React from "react";
 

function Copyright() {
  return (
    <div
      className="copyright w-fit  absolute bottom-4 right-9    border-solid border-black
          bg-gradient-to-b from-[#e7c282] to-[#bd954f]
          rounded-3xl
       hover:shadow-[0_0_10px_rgb(0,0,0,0.4)] hover:scale-110 transition-all duration-200 ease-in-out"
    >
      <a href="https://mybabb.com">
        <p className="relative z-10  p-1   m-auto flex w-fit whitespace-nowrap font-Sansita-Regular ">
          <span className="z-1 text-[7px]    text-white sm:text-[10px]">
            <span className="text-white">&lt;&lt;&lt;&nbsp;</span>&copy;
            <span className="fonts-Sansita-Regular text-[#2e5fc2]">
              &nbsp;Brett&apos;s
            </span>{" "}
            <em>9-2024</em>
            <span className="text-white">&nbsp;&gt;&gt;&gt;</span>
          </span>
        </p>
      </a>
    </div>
  );
}

export default Copyright;
