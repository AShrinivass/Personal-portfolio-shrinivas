"use client";
import { useEffect, useState, useCallback } from "react";

function Nav() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScroll(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={`flex items-center px-10 h-20 sticky top-0 z-50 
      transition-all duration-500 ease-in-out backdrop-blur-lg bg-opacity-30`}
    >
      {/* Left border with grow effect */}
      <div className="flex-1 h-full relative overflow-hidden">
        <div
          className={`absolute bottom-0 left-0 h-px bg-amber-50 
          transition-all duration-700 ease-in-out
          ${isScroll ? "w-full" : "w-0"}`}
          style={{ transformOrigin: "left center" }}
        />
        <span className="font-bold h-full text-amber-50 flex items-center mx-10">
          A Shrinivas
        </span>
      </div>

      {/* Gap between the left and right borders */}
      <div className="flex-1"></div>

      {/* Center logo with growing center line */}
      <div
        className={`absolute bottom-0 left-1/2 h-px bg-amber-50 
        transition-all duration-700 ease-in-out
        ${isScroll ? "w-full" : "w-0"}`}
        style={{
          transform: isScroll
            ? "translateX(-50%)"
            : "translateX(-50%) scaleX(0)",
          transformOrigin: "center",
        }}
      />
      <div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
        font-bold text-2xl text-amber-50"
      >
        {`{Shrnvs}`}
      </div>

      {/* Right border with grow effect */}
      <div className="flex-1 h-full relative overflow-hidden">
        <div
          className={`absolute bottom-0 right-0 h-px bg-amber-50 
          transition-all duration-700 ease-in-out
          ${isScroll ? "w-full" : "w-0"}`}
          style={{ transformOrigin: "right center" }}
        />
        <ul className="flex justify-between font-bold h-full text-amber-50 items-center mx-10">
          <li className="hover:text-amber-200 transition-colors duration-200">
            Home
          </li>
          <li className="hover:text-amber-200 transition-colors duration-200">
            Projects
          </li>
          <li className="hover:text-amber-200 transition-colors duration-200">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
