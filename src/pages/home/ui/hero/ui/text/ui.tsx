import React from "react";

export const Text: React.FC = () => {
  return (
    <>
      <p className="relative pl-[60px] uppercase font-semibold text-[15px] tracking-[2px] text-gray-400 mb-5 before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-[54px] before:h-[2px] before:bg-gray-300">
        Over 1000 Users
      </p>
      <h1 className="font-bold text-[75px] leading-[1.2] tracking-[-3px] text-[#201F1F] mb-5">
        Enjoy Foods All Over The <span className="text-[#6c5fbc]">World</span>
      </h1>
      <p className="text-lg leading-[1.56] text-gray-600 opacity-70 mb-14 w-96">
        Eatly help you set saving goals, earn cash back offers, and get
        paychecks up to two days early.
        <span className="text-[#6c5fbc]"> Get a $20 bonus.</span>
      </p>
    </>
  );
};
