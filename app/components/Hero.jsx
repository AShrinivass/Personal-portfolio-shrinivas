import React from "react";
import { Spotlight } from "./ui/Spotlight";

function Hero() {
  return (
    <>
      <div className="relative flex justify-center items-center mt-32 h-[600px] overflow-hidden bg-[#000319]">
        <Spotlight className="top-0 left-0 opacity-100 z-0" fill="white" />
        <Spotlight
          className="absolute top-[-100px] left-[-100px] opacity-100 z-0 animate-spotlight-bottom-right"
          fill="white"
        />

        {/* Top-right */}
        <Spotlight
          className="absolute top-[-100px] right-[-100px] opacity-100 z-0 animate-spotlight-top-right"
          fill="white"
        />
        <Spotlight
          className="absolute top-[-100px] right-[-100px] opacity-100 z-0 animate-spotlight-top-right"
          fill="white"
        />

        {/* Bottom-left */}
        <Spotlight
          className="absolute bottom-[-100px] left-[-100px] opacity-100 z-0 animate-spotlight-bottom-left"
          fill="white"
        />
        <Spotlight
          className="absolute bottom-[-100px] left-[-100px] opacity-100 z-0 animate-spotlight-top-right"
          fill="white"
        />

        {/* Bottom-right */}
        <Spotlight
          className="absolute bottom-[-100px] right-[-100px] opacity-100 z-0 animate-spotlight-bottom-right"
          fill="white"
        />
        <Spotlight
          className="absolute bottom-[-100px] right-[-100px] opacity-100 z-0 animate-spotlight-top-left"
          fill="white"
        />
        <Spotlight
          className="absolute top-0 left-[50%] opacity-100 z-0 animate-spotlight-bottom-center"
          fill="white"
        />

        <div className="relative z-10 text-6xl text-center max-w-2xl text-white">
          Hi I'm Shrinivas <br />
          <span className="text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            voluptatem quis dolorem cumque repudiandae magni consequatur a enim
            sunt quas
          </span>
        </div>

        <div className="relative w-64 h-64 overflow-hidden rounded-full ml-10 z-10">
          <img
            src="lul.jpg"
            alt="Shrinivas"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
