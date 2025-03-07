import React from "react";
import Link from "next/link";
import { cn } from "../../lib";

interface NavItem {
  text: string;
  href: string;
}

interface NavProps {
  items: NavItem[];
  className?: string;
}

export const Nav: React.FC<NavProps> = ({ items, className = "" }) => {
  return (
    <ul className={cn("flex gap-6", className)}>
      {items.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="text-lg text-[#606060] font-medium hover:text-gray-900 transition-colors"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};
