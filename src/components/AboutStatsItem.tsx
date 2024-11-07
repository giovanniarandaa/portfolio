import React from "react";
import AnimatedNumbers from "@/components/AnimatedNumbers";

interface AboutStatsItemProps {
  title: string;
  quantity: number;
}

const AboutStatsItem = ({ title, quantity }: AboutStatsItemProps) => {
  return (
    <div className="flex flex-col items-end justify-center">
      <span className="inline-block text-7xl font-bold">
        <AnimatedNumbers value={quantity} /> +
      </span>
      <h2 className="text-xl font-medium capitalize text-dark/75">{title}</h2>
    </div>
  );
};
export default AboutStatsItem;
