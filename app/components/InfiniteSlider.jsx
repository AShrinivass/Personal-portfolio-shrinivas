"use client";
import { motion } from "framer-motion";
import React from "react";

export default function InfiniteSlider({ items, reverse = false }) {
  const direction = reverse ? 1 : -1;
  const baseItems = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex gap-4"
        animate={{
          x: [`0%`, `${direction * 50}%`],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: 20,
        }}
      >
        {baseItems.map((item, index) => (
          <span
            key={index}
            className="bg-[#f5e8d4] border border-[#d0c3b0] text-[#201c1c] px-3 py-1 rounded-full text-sm whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
