import { Button } from "@/src/shared/ui/button";
import React from "react";

export const SignupBtn: React.FC = () => {
  return (
    <Button
      variant="default"
      size="default"
      className="rounded-[18px] px-[27px] py-[18px] font-semibold text-[#f9f9f9] bg-[#6c5fbc] border-transparent transition-all duration-300"
    >
      Sign Up
    </Button>
  );
};
