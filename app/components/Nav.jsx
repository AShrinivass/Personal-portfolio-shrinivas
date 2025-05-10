"use client";
import { useEffect, useState, useCallback } from "react";
import { Menu, X } from "lucide-react"; // `npm install lucide-react`

function Nav() {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScroll(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={`sticky top-0 z-50 h-17 px-4 sm:px-6 md:px-10 flex items-center justify-between 
      transition-all duration-500 ease-in-out backdrop-blur-lg bg-opacity-30 
      ${isScroll ? "backdrop-blur-md bg-[#b26e70]/20" : "bg-[#b26e70]"}`}
    >
      {/* Left Section */}
      <div className="relative flex items-center">
        <li className="text-amber-50 text-lg cursor-pointer list-none">
          <a className="cursor-pointer" href="#hero">{`{Shrnvs}`}</a>
        </li>
      </div>

      {/* Right Section */}
      <div className="relative flex items-center cursor-pointer">
        <ul className="hidden md:flex gap-6 text-amber-50 items-center mx-4">
          <li>
            <a
              href="#hero"
              className="hover:text-amber-200 transition-colors duration-200 cursor-pointer"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-amber-200 transition-colors duration-200 cursor-pointer"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-amber-200 transition-colors duration-200 cursor-pointer"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-amber-50 z-50"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Bottom Border that Grows from Center */}
      <div
        className={`absolute bottom-0 left-1/2 h-[1px] bg-amber-100 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
          isScroll ? "w-full" : "w-0"
        }`}
      />

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#b26e70]/90 backdrop-blur-md z-40">
          <ul className="flex flex-col items-center gap-4 py-4 text-lg font-bold text-amber-50 ">
            <li
              className="hover:text-amber-200 "
              onClick={() => setMenuOpen(false)}
            >
              <a href="#hero">Home</a>
            </li>
            <li
              className="hover:text-amber-200 "
              onClick={() => setMenuOpen(false)}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className="hover:text-amber-200 "
              onClick={() => setMenuOpen(false)}
            >
              <a href="#contact">Contacts</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Nav;
