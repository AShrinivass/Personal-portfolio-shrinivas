"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Navbar() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: showNav ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 mt-7 flex justify-center z-20"
    >
      <div className="w-[90%] md:w-[40%] rounded-lg backdrop-blur-md bg-white/80 dark:bg-[#121826]/80 border border-gray-300 dark:border-white/10 shadow-md dark:shadow-[0_4px_20px_rgba(0,162,255,0.15)] text-gray-800 dark:text-gray-100 flex flex-col md:flex-row items-center p-3">
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="text-sm font-bold">
            A Shrinivas
          </Link>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/hamburger.svg" alt="menu" className="h-8 w-8" />
          </button>
        </div>

        <div
          className={`flex-col md:flex-row md:flex w-full items-center ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <Link href="/" className="text-sm font-bold mt-2 md:mt-0 md:ml-10">
            Bio
          </Link>
          <Link
            href="/about"
            className="text-sm font-bold mt-2 md:mt-0 md:ml-10"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm font-bold mt-2 md:mt-0 md:ml-10"
          >
            Contact
          </Link>
          <img
            src="/lul.jpg"
            alt="Profile"
            className="border-2 border-white shadow-xs h-8 w-8 rounded-full mt-2 md:mt-0 md:ml-auto"
          />
        </div>
      </div>
    </motion.div>
  );
}
export default Navbar;
