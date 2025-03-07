"use client";

import React from "react";
import { Container } from "@/src/shared/ui";
import Image from "next/image";
import { items } from "./config";

export const Purchases = () => {
  const [timeline, setTimeline] = React.useState("month");

  return (
    <section className="py-10">
      <Container className="pb-30 border-b border-gray-300 flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2">
          <h2 className="text-5xl text-[#323142] font-bold mb-[50px] text-left">
            Control <span className="text-[#6c5fbc]">Purchases</span> Via
            Dashboard
          </h2>
          <ul className="grid grid-cols-[0.7fr]">
            {items.map((item, index) => (
              <li
                key={index}
                className="shadow-lg py-[5px] px-[15px] rounded-2xl flex items-center gap-4 mb-3"
              >
                <div className="w-16 h-16 relative">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain align-top rounded-md "
                  />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className={`text-sm ${item.statusClass}`}>{item.status}</p>
                  <div className="text-gray-400 text-sm text-right ">
                    {item.time}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:w-[47%] bg-white border border-[#edf2f7] rounded-[25px] shadow-[0_20px_30px_rgba(50,49,66,0.2)] p-[43px]">
          <div className="flex justify-between items-center mb-[45px]">
            <h3 className="font-manrope font-extrabold text-[28px] text-[#1a202c]">
              Purchases
            </h3>
            <select
              className="font-manrope font-semibold text-[19px] text-[#1a202c] px-[18px] py-[12px] bg-[#fafafa] rounded-[13px] cursor-pointer"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
            >
              <option value="month">This Month</option>
              <option value="week">This Week</option>
              <option value="year">This Year</option>
            </select>
          </div>

          <ul className="space-y-4">
            <li className="px-[25px] py-[25px] pb-[55px] border border-[#edf2f7] rounded-[19px] relative ">
              <div className="absolute bottom-[25px] left-[25px] right-[25px] h-[9.42px] rounded-[78px] opacity-20 bg-[#6b5fbc]"></div>
              <div className="w-[70%] absolute bottom-[25px] left-[25px] h-[9.42px] rounded-[78px] bg-[#6b5fbc]"></div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#f4f0ff]">
                    <div className="absolute top-[30%] left-[7%] w-[25px] h-[25px] bg-[url('/images/decor/wallet.svg')] bg-top bg-no-repeat"></div>
                  </div>
                  <div className="ml-[15px]">
                    <h4 className="font-manrope font-extrabold text-[19px] text-[#1A202C]">
                      Expense
                    </h4>
                    <p className="font-manrope font-medium text-[16px] text-[#A0AEC0]">
                      Increased By 10%
                    </p>
                  </div>
                </div>
                <div className="font-manrope font-extrabold text-[22px] text-[#1a202c]">
                  $409.00
                </div>
              </div>
            </li>

            <li className="px-[25px] py-[25px] pb-[55px] border border-[#edf2f7] rounded-[19px] relative ">
              <div className="absolute bottom-[25px] left-[25px] right-[25px] h-[9.42px] rounded-[78px] opacity-20 bg-[#fbac18]"></div>
              <div className="w-[60%] absolute bottom-[25px] left-[25px] h-[9.42px] rounded-[78px] bg-[#fbac18]"></div>

              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#f2fdf6]">
                    <div className="absolute top-[30%] left-[7%] w-[25px] h-[25px] bg-[url('/images/decor/money.svg')] bg-top bg-no-repeat"></div>
                  </div>
                  <div className="ml-[15px]">
                    <h4 className="font-manrope font-extrabold text-[19px] text-[#1A202C]">
                      Voucher Usage
                    </h4>
                    <p className="font-manrope font-medium text-[16px] text-[#A0AEC0]">
                      Increased By 10%
                    </p>
                  </div>
                </div>
                <div className="font-manrope font-extrabold text-[22px] text-[#1a202c]">
                  $45.78
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
};
