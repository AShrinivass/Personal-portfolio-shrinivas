"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
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
  <SiHtml5 key="html" className="text-5xl text-[#e34f26]" />,
  <SiCss3 key="css" className="text-5xl text-[#1572B6]" />,
  <SiTailwindcss key="tailwind" className="text-5xl text-[#38bdf8]" />,
  <SiJavascript key="js" className="text-5xl text-[#f7df1e]" />,
  <SiReact key="react" className="text-5xl text-[#61DBFB]" />,
  <SiNextdotjs key="next" className="text-5xl text-black" />,
  <SiNodedotjs key="node" className="text-5xl text-[#339933]" />,
  <SiExpress key="express" className="text-5xl text-gray-600" />,
  <SiMongodb key="mongo" className="text-5xl text-[#4DB33D]" />,
  <SiMysql key="sql" className="text-5xl text-[#00758F]" />,
];

function AboutMe() {
  return (
    <div className=" text-[#2c2c2c] px-5 py-12 rounded-lg">
      <h2 className="text-4xl font-bold mb-8 text-center text-[#201c1c]">
        About Me
      </h2>
      <p className="text-lg md:text-xl leading-relaxed text-center max-w-4xl mx-auto pb-10">
        What can I say... I love tech. By "tech," I mean the idea of interacting
        with a computer and making it do things — it's always intrigued me. What
        started as a plain love for video games eventually led me to pursue a
        career in technology.
        <br />
        <br />
        <strong>What I do:</strong> I build webpages that are both functional
        and responsive. Over time, I’ve expanded my skill set from frontend to
        backend development, and I’ve built web apps that handle both client and
        server-side logic.
        <br />
        <br />
        <strong>What I’m doing right now:</strong> I’m diving into the exciting
        world of AI — especially learning how to integrate LLMs and AI agents
        into web apps. It genuinely fascinates me.
        <br /> It all started with a basic automation task — filling up
        spreadsheets — and that’s what sparked the interest. Now, I want to see
        how far I can go with such powerful tech at my fingertips.
        <br />
        <br />
        I’ve got a lot more to share, but I’ll stop here for now. Let’s get to
        know each other professionally —
        <a
          href="#contact"
          className="text-blue-500 underline hover:text-blue-700 transition duration-300"
        >
          contact me here
        </a>
        .
      </p>

      {/* Tech Stack */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-5 text-[#201c1c] text-center">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {techStackIcons}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div>
        <h3 className="text-2xl font-semibold mb-5 text-[#201c1c] text-center">
          Tools & Platforms
        </h3>
        <div className="flex justify-center text-xl">
          <span className="text-gray-600">Coming soon...</span>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
