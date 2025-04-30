"use client";
import React from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

function Projects() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-20 mb-10">
        <h1 className="font-inter font-bold text-[48px] leading-[100%] text-white mb-4 mt-30">
          Recent{" "}
          <span className="font-inter font-bold text-[48px] leading-[100%] text-purple-500">
            projects
          </span>
        </h1>
      </div>
      <div className="p-5 flex items-center flex-wrap justify-center gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className=" p-5 bg-gradient-to-br from-[#04071D] via-[#04071D] to-[#0C0E23] rounded-[23px] border border-[#363749] w-[80vw] sm:w-96 h-[550px] flex flex-col justify-between"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 10px 25px rgba(128, 90, 213, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Projects;
