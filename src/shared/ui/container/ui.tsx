import React from "react";
import { cn } from "../../lib";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={cn("mx-auto max-w-[1280px] py-0 px-[15px] ", className)}>
      {children}
    </div>
  );
};
