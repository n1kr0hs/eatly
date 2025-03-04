import React from "react";
import { Logo } from "./logo";
import { Nav } from "./nav";
import { LoginBtn, SignupBtn } from "../../auth";
import { Container } from "@/src/shared/ui";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 left-0 w-full z-50   ">
      <Container>
        <div className="relative flex justify-between items-center py-[30px] pb-[25px] border-b-2 border-gray-300 gap-[3%]">
          <Logo />
          <Nav />
          <div>
            <LoginBtn />
            <SignupBtn />
          </div>
        </div>
      </Container>
    </header>
  );
};
