import React from "react";
import Hero from "./hero";
import { Info } from "./info";
import { Download } from "./download";
import { Restaurants } from "./restaurants";
import { Dishes } from "./dishes";
import { Purchases } from "./purchases";
import { Sale } from "./sale";

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Info />
      <Download />
      <Restaurants />
      <Dishes />
      <Purchases />
      <Sale />
    </>
  );
};
