"use client";
import { motion } from "framer-motion";

export default function ScrollSection({ children, bgColor = "bg-white" }) {
  return (
    <div className="relative -mt-5 md:-mt-10 z-10">
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className={`relative z-20 px-6 py-16 ${bgColor} rounded-t-3xl shadow-t-3xl mx-auto`}
      >
        {children}
      </motion.section>
    </div>
  );
}
