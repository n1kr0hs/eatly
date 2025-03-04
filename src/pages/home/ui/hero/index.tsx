import { Button, Container } from "@/src/shared/ui";
import Image from "next/image";
import { Text } from "./ui/text";

export default function Hero() {
  return (
    <section className="pt-32">
      <Container className="flex items-center">
        <div className="flex-1 max-w-[49%]">
          <Text />
          <div className="flex gap-5 mb-10">
            <Button className="px-10 py-7 rounded-[12px] bg-[#6c5fbc] text-white">
              Get Started
            </Button>
            <Button className="px-10 py-7 border border-[#6c5fbc] rounded-[12px] text-[#6c5fbc] bg-gray-100 ">
              Go Pro
            </Button>
          </div>
          <div className="flex gap-8">
            <Image
              src="images/trustpilot.svg"
              alt="Trustpilot logo"
              width={120}
              height={30}
            />
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="images/star.svg"
                  alt="Star icon"
                  width={20}
                  height={20}
                />
              ))}
              <span className="ml-2 text-gray-700 opacity-70 text-[16px] ">
                4900+
              </span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative before:content-[''] before:absolute before:top-[-4%] before:left-[5%] before:w-full before:h-full before:rounded-full before:bg-[#6c5fbc] z-[-1] after:content-[''] after:absolute after:top-[12%] after:right-[-19%] after:w-[100px] after:h-[100px] after:z-[-1] after:bg-[url('/images/arrow.svg')] after:bg-top after:bg-no-repeat after:bg-cover">
            <Image
              src="/images/food.png"
              alt="Chiken hell"
              width={430}
              height={445}
              className="relative"
            />
            <div className="absolute bottom-[95%] left-[50%] w-[73%]">
              <div className="relative bg-white shadow-lg p-3 flex items-center rounded-2xl w-full before:content-[''] before:absolute before:bottom-[100%] before:right-[-5%] before:w-[42px] before:h-[28px] before:bg-[url('/images/pattern-1.svg')] before:bg-top before:bg-no-repeat before:bg-cover">
                <Image
                  src="/images/food.png"
                  alt="Chiken hell"
                  width={60}
                  height={60}
                  className="mr-4"
                />
                <div className="font-poppins w-full">
                  <h2 className="font-semibold text-[16px] text-[#323142] mb-1">
                    Chiken Hell
                  </h2>
                  <p className="font-medium text-[10px] text-[#323142]">
                    On The Way
                  </p>
                  <div className="text-right text-[11px] text-gray-500">
                    3:09 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-15%] left-0 max-w-[50%]">
            <div className="relative bg-white shadow-lg border border-gray-200 rounded-2xl p-2 after:content-[''] after:absolute after:top-[100%] after:left-[-16%] after:w-[38px] after:h-[33px] after:z-[2] after:bg-[url('/images/pattern-2.svg')] after:bg-top after:bg-no-repeat after:bg-cover">
              <Image
                src="/images/graph.png"
                alt="Graph image"
                width={200}
                height={150}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
