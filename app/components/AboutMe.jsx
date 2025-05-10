"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SiOpenai, SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiPostman } from "react-icons/si";
import Typewriter from "typewriter-effect";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const techStackIcons = [
  <SiHtml5
    key="html"
    className="text-3xl md:text-5xl text-[#e34f26] border-1 rounded-3xl p-1"
  />,
  <SiCss3
    key="css"
    className="text-3xl md:text-5xl text-[#1572B6] border-1 rounded-3xl p-1"
  />,
  <SiTailwindcss
    key="tailwind"
    className="text-3xl md:text-5xl text-[#38bdf8] border-1 rounded-3xl p-1"
  />,
  <SiJavascript
    key="js"
    className="text-3xl md:text-5xl text-[#f7df1e] border-1 rounded-3xl p-1"
  />,
  <SiReact
    key="react"
    className="text-3xl md:text-5xl text-[#61DBFB] border-1 rounded-3xl p-1"
  />,
  <SiNextdotjs
    key="next"
    className="text-3xl md:text-5xl text-black border-1 rounded-3xl p-1"
  />,
  <SiNodedotjs
    key="node"
    className="text-3xl md:text-5xl text-[#339933] border-1 rounded-3xl p-1"
  />,
  <SiExpress
    key="express"
    className="text-3xl md:text-5xl text-gray-600 border-1 rounded-3xl p-1"
  />,
  <SiMongodb
    key="mongo"
    className="text-3xl md:text-5xl text-[#4DB33D] border-1 rounded-3xl p-1"
  />,
  <SiMysql
    key="sql"
    className="text-3xl md:text-5xl text-[#00758F] border-1 rounded-3xl p-1"
  />,
];

const toolIcons = [
  <SiOpenai
    key="openai"
    className="text-3xl md:text-5xl text-[#00a67e] border-1 rounded-3xl p-1"
  />,
  <FaGithub
    key="github"
    className="text-3xl md:text-5xl text-[#181717] border-1 rounded-3xl p-1"
  />,
  <SiVercel
    key="vercel"
    className="text-3xl md:text-5xl text-black border-1 rounded-3xl p-1"
  />,
  <GiArtificialIntelligence
    key="cursonai"
    className="text-3xl md:text-5xl text-[#4b5563]"
  />,
  <AiFillHeart
    key="loveableai-heart"
    className="text-3xl md:text-5xl text-[#ff6b81]"
  />,
  <SiPostman key="postman" className="text-3xl md:text-5xl text-[#ff6b81]" />,
];

function AboutMe() {
  return (
    <div className=" text-[#2c2c2c] px-5 rounded-lg min-h-[80vh] md:min-h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#201c1c]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("About Me").start();
          }}
        />
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto">
        I’ve always been fascinated by tech — not just using it, but making it
        work for me. What started with a love for video games grew into a deeper
        interest in how computers think and operate.
        <br />
        <br />
        <strong>What I do:</strong> I build responsive, functional web apps —
        from frontend design to backend logic.
        <br />
        <br />
        <strong>What I’m exploring now:</strong> AI integration in web
        development, especially using LLMs and agents. A simple spreadsheet
        automation kicked off this journey, and I’ve been hooked ever since.
        <br />
        <br />
      </p>

      {/* Tech Stack */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-5 text-[#201c1c] text-center">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techStackIcons}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div>
        <h3 className="text-2xl font-semibold mb-5 text-[#201c1c] text-center">
          Tools & Platforms
        </h3>
        <div className="flex justify-center text-xl">
          <span className="text-gray-600 flex gap-4 flex-wrap justify-center">
            {toolIcons}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
