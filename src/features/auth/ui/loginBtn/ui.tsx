import { Button } from "@/src/shared/ui/button";
import React from "react";

export const LoginBtn: React.FC = () => {
  return (
    <Button
      variant="ghost"
      size="default"
      className="text-gray-600 mr-[35px] font-semibold text-[18px] font-inter"
    >
      Login
    </Button>
  );
};
