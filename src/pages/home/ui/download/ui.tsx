import { Button, Container } from "@/src/shared/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Download: React.FC = () => {
  return (
    <section className="">
      <Container className="flex items-center pt-28 pb-32 border-b-2 border-gray-300">
        <div className="relative flex-1">
          <Image
            src="/images/phone.svg"
            alt="mobile screen"
            width={300}
            height={600}
            className="relative z-10"
          />
          <div className="absolute top-[-3%] left-[50%] w-13 h-16  bg-cover bg-center before:bg-[url('/images/decor/pattern-2-1.svg')]  before:content-[''] before:absolute before:w-full before:h-full"></div>
        </div>

        <div className="flex-1 relative">
          <h2 className="text-left text-[#323142] text-3xl lg:text-5xl font-bold mb-10">
            Premium <span className="text-[#6c5fbc]">Quality</span> For Your
            Health
          </h2>
          <ul className="mb-8 list-disc pl-5 text-lg text-gray-600 space-y-4 after:content-[''] after:absolute after:top-[95%] after:left-[25%] after:w-[169px] after:h-[61px] after:z-[2] after:bg-[url('/images/decor/arrow-var2.svg')] after:bg-top after:bg-no-repeat after:bg-cover ">
            <li>
              Premium quality food is made with ingredients that are packed with
              essential vitamins, minerals.
            </li>
            <li>
              These foods promote overall wellness by supporting healthy
              digestion and boosting immunity.
            </li>
          </ul>

          <Button
            variant={"default"}
            size={"default"}
            className="w-[180px] py-8 font-inter font-bold text-[18px] text-[#f9f9f9] bg-[#6c5fbc] rounded-[18px]  "
          >
            Download
            <ArrowRight className="size-5 " />
          </Button>
        </div>
      </Container>
    </section>
  );
};
