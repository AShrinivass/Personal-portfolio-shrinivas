"use client";
import React from "react";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

function Card() {
  return (
    <>
      <div className="flex justify-center items-center flex-col mt-20 mb-10">
        <h1 className="font-inter font-bold text-[48px] leading-[100%] text-white mb-4 mt-10">
          Recent{" "}
          <span className="font-inter font-bold text-[48px] leading-[100%] text-purple-500">
            projects
          </span>
        </h1>
      </div>
      <div className="p-5 flex overflow-x-auto snap-x snap-mandatory space-x-6 scrollbar-hide">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex-shrink-0 w-[calc(100vw-40px)] snap-center flex flex-col lg:flex-row items-center rounded-[23px] p-6 gap-6 max-w-none mx-auto"
          >
            {/* Left Image Section */}
            <div className="w-full lg:w-[48%] h-38 lg:h-auto">
              <img
                src="lul.jpg"
                alt="cover"
                className="w-full h-full object-cover rounded-2xl aspect-video"
              />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[52%] flex flex-col text-white justify-between pl-10">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-3">{project.desc}</p>

                <ul className="text-gray-400 list-disc list-inside space-y-1 mb-3">
                  {project.bulletPoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-end mt-auto">
                {/* Overlapping icons */}
                <div className="flex -space-x-1.5">
                  {project.iconLists.map((icon, idx) => (
                    <img
                      key={idx}
                      src={icon}
                      alt=""
                      className="w-8 h-8 lg:w-10 lg:h-10 bg-[#232336] rounded-full p-1.5 shadow shadow-white/10 hover:scale-110 transition-transform"
                    />
                  ))}
                </div>

                {/* Button */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Card;
