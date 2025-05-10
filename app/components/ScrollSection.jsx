"use client";
import { motion } from "framer-motion";

export default function ScrollSection({ children, bgColor = "bg-white" }) {
  return (
    <div className="relative -mt-5 md:-mt-10 z-10">
      <motion.section
        initial={{ y: 40 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className={`relative z-20 px-6 py-16 ${bgColor} shadow-lg rounded-t-2xl mx-auto`}
      >
        {children}
      </motion.section>
    </div>
  );
}
