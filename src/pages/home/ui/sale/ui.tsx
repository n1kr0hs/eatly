import { Container } from "@/src/shared/ui";
import React from "react";

export const Sale = () => {
  return (
    <div className="mb-[100px]">
      <Container>
        <div className="relative p-[40px_65px] rounded-[14px] bg-[#6c5fbc] bg-[url('/images/sale-bg.jpg')] bg-cover bg-center">
          <div className="absolute top-[30%] right-[5%] w-[274px] h-[276px] bg-[url('/images/food.png')] bg-cover bg-center"></div>

          <h2 className="font-poppins uppercase font-extrabold text-[70px] text-white mb-[20px]">
            Get 50%
          </h2>

          <form className="inline-block relative">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="w-[440px] h-[68px] bg-white shadow-[0_7px_45px_rgba(0,0,0,0.1)] rounded-[14px] font-poppins text-[16px] tracking-[0.03em]  pl-[20px]"
            />
            <div className="absolute right-[8px] top-1/2 transform -translate-y-1/2">
              <button
                type="submit"
                className="text-[15px] tracking-[0.03em] uppercase py-[15px] px-[25px] rounded-[11px] bg-[#6c5fbc] text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};
