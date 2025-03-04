import { Button } from "@/src/shared/ui";
import React from "react";

export const SignupBtn: React.FC = () => {
  return (
    <Button
      variant="default"
      size="default"
      className="rounded-[18px] px-[18px] py-[27px] font-inter font-bold text-[18px] text-[#f9f9f9] bg-[#6c5fbc] "
    >
      Sign Up
    </Button>
  );
};
