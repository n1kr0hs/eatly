import React from "react";
import { Container } from "@/src/shared/ui";
import { Logo } from "../../header/ui/logo";
import { Nav } from "@/src/shared/ui/nav";
import { items } from "../config";
import { LogoList } from "../logoList";

export const Footer = () => {
  return (
    <footer className="bg-[#eaeaea] py-20 pb-10">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 pb-10 border-b-2 border-gray-300">
          <Logo />
          <Nav items={items} />
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center pt-12">
          <p className="text-lg font-semibold text-[#999999]">
            © 2025 EATLY All Rights Reserved.
          </p>
          <LogoList />
        </div>
      </Container>
    </footer>
  );
};
