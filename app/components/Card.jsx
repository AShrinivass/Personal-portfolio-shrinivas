"use client";
import React from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

function Card() {
  return (
    <>
      <h1 className="text-center text-3xl md:text-5xl text-white font-bold">
        Recent <span className="text-purple-500">{`{Projects}`}</span>
      </h1>
      <div className="overflow-x-auto flex snap-x snap-mandatory w-screen h-screen scrollbar-hide">
        {projects.map((project) => {
          return (
            <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-center snap-start flex-shrink-0">
              <motion.div
                key={project.id}
                className="w-[80%] flex flex-col md:flex-row gap-15"
              >
                {/* Left Image Section */}
                <div className="w-full lg:w-[48%]">
                  <motion.img
                    src="lul.jpg"
                    alt="cover"
                    className="w-full h-full object-cover rounded-2xl aspect-video shadow shadow-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-[52%] flex flex-col text-white mt-3">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 transition-colors duration-300 hover:text-purple-400">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-3 text-gray-400 mb-3 hover:text-gray-300 transition-colors duration-300">
                    {project.desc}
                  </p>
                  <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3 text-gray-400 mb-3 hover:text-gray-300 transition-colors duration-300">
                    {project.bulletPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  <div className="flex items-end mt-5 gap-10">
                    <div className="flex -space-x-1.5">
                      {project.iconLists.map((icon, idx) => (
                        <img
                          key={idx}
                          src={icon}
                          alt=""
                          className="w-8 h-8 lg:w-10 lg:h-10 bg-[#232336] rounded-full p-1.5 shadow shadow-white/10 hover:scale-110 transition-transform border border-white/20"
                        />
                      ))}
                    </div>

                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Card;
