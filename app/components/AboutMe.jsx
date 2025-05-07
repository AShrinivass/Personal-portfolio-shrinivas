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
  <SiHtml5 key="html" className="text-4xl text-[#e34f26]" />,
  <SiCss3 key="css" className="text-4xl text-[#1572B6]" />,
  <SiTailwindcss key="tailwind" className="text-4xl text-[#38bdf8]" />,
  <SiJavascript key="js" className="text-4xl text-[#f7df1e]" />,
  <SiReact key="react" className="text-4xl text-[#61DBFB]" />,
  <SiNextdotjs key="next" className="text-4xl text-black" />,
  <SiNodedotjs key="node" className="text-4xl text-[#339933]" />,
  <SiExpress key="express" className="text-4xl text-gray-600" />,
  <SiMongodb key="mongo" className="text-4xl text-[#4DB33D]" />,
  <SiMysql key="sql" className="text-4xl text-[#00758F]" />,
];

function AboutMe() {
  return (
    <div className="bg-[#fff4e4] text-[#2c2c2c] px-5">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#201c1c]">
        About Me
      </h2>

      {/* Education */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-[#201c1c] text-center">
          Education
        </h3>
        <div className="space-y-8 text-center   ">
          {[
            {
              degree: "B.E in Computer Science and Engineering",
              school: "Visvesvaraya Technological University, Mysore",
              date: "Aug 2019 - Jun 2023 | 7.49/10 CGPA",
            },
            {
              degree: "II PU (Class XII) – PCMB",
              school: "Marimallappa PU College, Mysore",
              date: "March 2019 | 7.5/10 CGPA",
            },
            {
              degree: "Class X (CBSE)",
              school: "St. Thomas Central School, Mysore",
              date: "March 2017 | 9.2/10 CGPA",
            },
          ].map((edu, index) => (
            <div
              key={index}
              className="flex items-center justify-start space-x-4"
            >
              <div className="w-12 h-12 bg-[#ffb084] text-white rounded-full flex justify-center items-center">
                <i className="fas fa-graduation-cap text-2xl"></i>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#3a2f2b]">
                  {edu.degree}
                </h4>
                <p className="text-[#3d3d3d]">{edu.school}</p>
                <p className="text-[#7d7d7d]">{edu.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-[#201c1c] text-center flex justify-center">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {techStackIcons}
        </div>
      </div>

      {/* Tools & Platforms */}
      <div>
        <h3 className="text-xl font-semibold mb-3 text-[#201c1c] text-center">
          Tools & Platforms
        </h3>
      </div>
    </div>
  );
}

export default AboutMe;
