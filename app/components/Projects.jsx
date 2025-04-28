import React from "react";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="py-20 text-center">
      <h1 className="heading text-amber-50">
        Recent {""}
        <span className="text-purple-300">Projects</span>
      </h1>
      <div className="flex justify-center items-center py-2 ">
        <div className=" text-amber-50">
          {projects.map((project) => {
            return (
              <div key={project.id} className="my-20">
                {project.title}
                {project.img}
                {project.desc}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
