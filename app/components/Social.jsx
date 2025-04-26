import React from "react";

function Social() {
  return (
    <div className="text-white flex items-center justify-center gap-4">
      <button className=" rounded-full bg-transparent transition-transform duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center">
        <img
          src="github-mark-white.svg"
          alt="GitHub"
          className="h-[50px] w-[50px]"
        />
      </button>
      <button className=" rounded-full bg-transparent transition-transform duration-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center">
        <img src="email-real.svg" alt="GitHub" className="h-[50px] w-[50px]" />
      </button>
    </div>
  );
}

export default Social;
