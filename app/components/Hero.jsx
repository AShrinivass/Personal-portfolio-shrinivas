import React from "react";
import { Spotlight } from "./ui/Spotlight";

function Hero() {
  return (
    <>
      <Spotlight className={``} />
      <div className="relative flex justify-center items-center h-screen overflow-hidden pt-15">
        <div className="relative z-10 text-center min-w-screen h-1/2 text-white">
          <div className="h-1/2 my-20 ">
            <h1
              className="text-8xl font-bold bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent
"
            >
              Hi, I'm A Shrinivas
            </h1>
            <p
              className="text-xl mt-4 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-transparent
"
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, neque.
            </p>
          </div>
          <div className="mt-35"></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
