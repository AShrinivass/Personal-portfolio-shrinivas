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
      <div className="w-[90%] md:w-[60%] lg:w-[40%] rounded-lg backdrop-blur-md bg-white/80 dark:bg-[#121826]/80 border border-gray-300 dark:border-white/10 shadow-md dark:shadow-[0_4px_20px_rgba(0,162,255,0.15)] text-gray-800 dark:text-gray-100 flex flex-col md:flex-row items-center p-3 relative">
        <div className="flex items-center w-full">
          <div className="flex items-center space-x-3">
            <img
              src="/lul.jpg"
              alt="Profile"
              className="border-2 border-white shadow-xs h-8 w-8 rounded-full"
            />
            <Link href="/" className="text-sm font-bold">
              A Shrinivas
            </Link>
          </div>
          <button
            className="md:hidden absolute right-4 top-3"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src="/hamburger.svg" alt="menu" className="h-8 w-8" />
          </button>
        </div>

        <div className={`hidden md:flex items-center space-x-8`}>
          <Link href="/" className="text-sm font-bold">
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
        </div>
        {menuOpen && (
          <div
            className={`absolute font-bold flex flex-col rounded-lg backdrop-blur-md bg-white/80 dark:bg-[#121826]/80 border border-gray-300 dark:border-white/10 shadow-md dark:shadow-[0_4px_20px_rgba(0,162,255,0.15)] text-gray-800 dark:text-gray-100 top-full right-0 w-48 mt-2 text-center py-3`}
          >
            <Link
              href="/"
              className="px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition rounded"
            >
              Bio
            </Link>
            <hr className="border-t border-gray-200 dark:border-white/10 my-1 mx-4" />
            <Link
              href="/"
              className="px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition rounded"
            >
              Projects
            </Link>
            <hr className="border-t border-gray-200 dark:border-white/10 my-1 mx-4" />
            <Link
              href="/"
              className="px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition rounded"
            >
              Contact
            </Link>
            <hr className="border-t border-gray-200 dark:border-white/10 my-1 mx-4" />
            <Link
              href="/"
              className="px-4 py-2 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/10 transition rounded"
            >
              Bio
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
}
export default Navbar;
