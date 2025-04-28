import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconMail,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconDownload,
  IconFileText,
} from "@tabler/icons-react";

function Hero() {
  return (
    <>
      <div className="relative flex justify-center items-center h-screen overflow-hidden pt-15">
        <div className="relative z-10 text-center min-w-screen h-1/2 text-white">
          <SparklesCore
            id="tsparticles"
            className="absolute inset-0 z-0 min-w-2xs h-[300px]"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            speed={2}
            particleColor="#ffffff"
            particleDensity={200}
          />
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
          <div className="mt-35">
            <FloatingDock
              items={[
                { title: "Github", icon: <IconBrandGithub />, href: "/" },
                {
                  title: "Linkedin",
                  icon: <IconBrandLinkedin />,
                  href: "/projects",
                },
                { title: "Email", icon: <IconMail />, href: "/contact" },
              ]}
              desktopClassName="fixed bottom-4"
              mobileClassName="fixed bottom-4 right-4"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
