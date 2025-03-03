import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center">
      <Image
        alt="Eatly"
        className=""
        width={46}
        height={43}
        src="images/logo.svg"
      />
      <span className="ml-1 text-[21px] font-semibold text-[#6c5fbc] font-poppins">
        eatly
      </span>
    </Link>
  );
};
