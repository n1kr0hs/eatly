import React from "react";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { LoginBtn, SignupBtn } from "@/src/features/auth";

export const Header: React.FC = () => {
  return (
    <header>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="relative flex justify-between items-center py-[30px] pb-[25px] border-b-2 border-gray-300 gap-[3%]">
          <Logo />
          <Nav />
          <div>
            <LoginBtn />
            <SignupBtn />
          </div>
        </div>
      </div>
    </header>
  );
};
