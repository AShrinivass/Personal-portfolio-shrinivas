import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 mt-7 flex justify-center z-15">
      <div className="w-[40%] h-13 bg-[#f5f5f7] rounded-lg items-center flex backdrop-blur-lg shadow-xl mx-5">
        <ul className="flex w-[100%] mx-5">
          <li>
            <Link href="/" className="text-sm mr-10 relative group font-bold">
              A Shrinivas
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="text-sm mr-5 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-red-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-red-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] pb-1 hover:scale-105"
            >
              Bio
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm mr-5 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-red-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-red-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] pb-1 hover:scale-105"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm mr-5 relative text-black cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-200 before:absolute before:bg-red-400 before:origin-center before:h-[2px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-red-400 after:origin-center after:h-[2px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] pb-1 hover:scale-105"
            >
              Contact
            </Link>
          </li>
          <img
            src="/lul.jpg"
            className="border-2 border-white shadow-xs h-8 w-8 b rounded-full ml-auto"
          ></img>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
