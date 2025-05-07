import React from "react";

function Hero() {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-[#b26e70]">
        <div className="text-center min-w-screen h-1/2 text-white">
          <div className="h-1/2 my-20 ">
            <h1
              className="md:text-8xl text-3xl font-bold text-amber-50
"
            >
              Hi, I'm A Shrinivas
            </h1>
            <p
              className="md:text-xl text-md mt-4 text-amber-50
"
            >
              Web Dev | Fullstack | Tech enthusiast
            </p>
          </div>
          <div className="mt-35"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
