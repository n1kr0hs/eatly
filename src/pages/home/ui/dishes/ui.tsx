import Image from "next/image";
import { items } from "./config";
import { Button, Container } from "@/src/shared/ui";
import { ArrowRight, Heart, Plus } from "lucide-react";

export const Dishes = () => {
  return (
    <section className="py-12">
      <Container className=" border-b border-gray-300">
        <h2 className="text-5xl text-[#323142] font-bold text-center mb-[75px]">
          Our Top <span className="text-[#6c5fbc]">Dishes</span>
        </h2>

        <ul className="grid grid-cols-5 gap-[30px] mb-[65px]">
          {items.map((item) => (
            <li
              key={item.id}
              className="bg-white border border-[#f4f4f6] rounded-[35px] shadow-[7px_82px_41px_rgba(229,229,229,0.7)] p-[17px] relative transition-transform duration-300 hover:scale-110"
            >
              <div className="text-center">
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div
                className={` mb-[3px] ${
                  item.tag === "Trending"
                    ? "max-w-fit px-1 rounded-[5px] font-poppins  text-[13px] mb-[5px] text-[#fb461d] bg-[#f7c5ba]"
                    : item.tag === "Healthy"
                    ? "max-w-fit px-1 rounded-[5px] font-poppins  text-[13px] mb-[5px] text-[#daa41a] bg-[#f7edd0]"
                    : "text-green-500"
                }`}
              >
                {item.tag}
              </div>

              <h3 className="font-poppins font-semibold text-[23px] text-[#323142] mb-[3px]">
                {item.name}
              </h3>

              <div className="flex items-center mb-2 gap-1">
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
              </div>

              <div className="flex justify-between items-center">
                <span className="font-manrope font-bold text-[26px] text-[#323142]">
                  ${item.price}
                  <span className="text-[20px] text-[#8e97a6]">.99</span>
                </span>
                <button className="bg-[#323142] p-[10px] rounded-[9px]">
                  <Plus className="w-5 h-5 text-white" />
                </button>
              </div>

              <button className="absolute top-[15px] right-[15px]">
                <Heart className="w-6 h-5" />
              </button>
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
