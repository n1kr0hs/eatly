import React from "react";
import { Logo } from "./logo";
import { LoginBtn, SignupBtn } from "../../auth";
import { Container } from "@/src/shared/ui";
import { Nav } from "@/src/shared/ui/nav";
import { items } from "./config";
export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white">
      <Container>
        <div className="relative flex justify-between items-center py-[30px] pb-[25px] border-b-2 border-gray-300 gap-[3%]">
          <Logo />
          <Nav items={items} className="flex-1" />
          <div>
            <LoginBtn />
            <SignupBtn />
          </div>
        </div>
      </Container>
    </header>
  );
};
