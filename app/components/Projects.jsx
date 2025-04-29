import React from "react";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="p-5 flex items-center flex-wrap justify-center gap-8">
      {projects.map((project) => (
        <div
          key={project.id}
          className=" p-5 bg-gradient-to-br from-[#04071D] via-[#04071D] to-[#0C0E23] rounded-[23px] border border-[#363749] w-[80vw] sm:w-96 h-[550px] flex flex-col justify-between"
        >
          <div className="w-full h-48 overflow-hidden rounded-2xl mb-6 relative">
            <img
              src="lul.jpg"
              alt="cover"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>

          <h1 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h1>

          <p className="text-gray-400 text-base mb-4 overflow-hidden max-h-24 custom-scroll">
            {project.desc}
          </p>
          <div className="text-gray-400 text-base mb-4 overflow-hidden max-h-24 custom-scroll">
            {project.bulletPoints.map((point, index) => {
              return (
                <li key={index} className="">
                  {point}
                </li>
              );
            })}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 mt-4">
              {project.iconLists.map((icon, index) => (
                <img
                  key={index}
                  src={icon}
                  alt=""
                  className="border border-white/20 
                 shadow-md shadow-white/10 
                 rounded-full 
                 bg-[#232336] 
                 lg:w-10 lg:h-10 w-8 h-8 
                 flex justify-center items-center 
                 -ml-5 first:ml-0 
                 backdrop-blur-sm 
                 transition-transform hover:scale-110
                 p-1.5"
                />
              ))}
            </div>

            <button className="mt-6 border border-[#363749] p-1.5 rounded-lg flex items-center hover:bg-[#232336]">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 flex items-center gap-1 text-sm"
              >
                Check Live Site
                <span>↗</span>
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
