import React from "react";
import { items } from "./config";
import Link from "next/link";

export const Nav: React.FC = () => {
  return (
    <nav className="flex-1">
      <ul className="flex gap-6">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href="/"
              className="text-lg font-inter font-medium  text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
