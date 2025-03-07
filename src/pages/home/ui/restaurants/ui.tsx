import { Button, Container } from "@/src/shared/ui";
import React from "react";
import { items } from "./config";
import Image from "next/image";
import { ArrowRight, Bookmark } from "lucide-react";

export const Restaurants: React.FC = () => {
  return (
    <section className="py-24 ">
      <Container className="text-center border-b border-gray-300">
        <h2 className="text-5xl text-[#323142] font-bold mb-16">
          Our Top <span className="text-[#6c5fbc]">Restaurants</span>
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px] mb-[65px]">
          {items.map((item) => (
            <li
              key={item.id}
              className="rounded-[30px] overflow-hidden bg-white border border-[#f4f4f6] shadow-[6px_71px_36px_rgba(229,229,229,0.7)] transition-transform duration-300 ease-in-out hover:scale-110"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={`${item.name} image`}
                  width={400}
                  height={300}
                  className="w-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-[rgba(50,49,66,0.1)] z-10"></div>
              </div>
              <div className="text-left p-[10px_10px_17px_35px]">
                <div className="max-w-fit px-1 rounded-[5px] font-poppins text-[13px] mb-[5px] text-[#fb461d] bg-[#f7c5ba]">
                  {item.tag}
                </div>
                <h3 className="font-poppins font-semibold text-[26px] text-[#323142] mb-[5px]">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1 ">
                  <span className="font-manrope text-[20px] text-[#8E97A6]">
                    {item.duration} •
                  </span>
                  <div className="flex items-center text-[20px] text-[#8e97a6] flex-1">
                    <Image
                      src="images/star-purple.svg"
                      alt="Star icon"
                      width={26}
                      height={26}
                    />
                    <span className="ml-1">{item.rating}</span>
                  </div>
                  <div className="bg-[#dbd9ee] p-[7px_10px_7px] rounded-full">
                    <Bookmark
                      className="w-[20px] h-[24px] fill-[#6b5fbc] "
                      stroke="none"
                    />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-end pb-[120px]">
          <Button
            variant={"ghost"}
            className="text-[#acadb9] flex items-center gap-2 text-xl"
          >
            View All
            <ArrowRight className="size-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
};
