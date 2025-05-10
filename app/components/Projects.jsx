"use client";
import React from "react";
import { projects } from "../data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

function Projects() {
  return (
    <div className="bg-[#7d98a1] rounded-t-3xl px-4 sm:px-10 will-change-transform my-0 min-h-[50vh] md:min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-[#fff4e4] font-extrabold text-4xl sm:text-5xl tracking-wide">
          BUILT WITH{" "}
          <span className="text-[#ffb084] drop-shadow-sm">PASSION</span>
        </h1>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={30}
        loop={true}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 80,
          modifier: 1.8,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {projects.map((project) => (
          <SwiperSlide
            key={project.id}
            style={{ width: "100%", maxWidth: "400px", height: "70%" }}
            className="bg-[#fdf6ec] rounded-[20px] p-4 shadow-lg md:w-[400px] sm:w-[320px] transition-all duration-300 will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d]"
          >
            <img
              src="lul.jpg"
              alt={project.title}
              loading="lazy"
              className="rounded-lg mb-4 w-full h-[200px] object-cover"
            />
            <h2 className="text-[#3a2f2b] text-xl font-bold mb-2">
              {project.title}
            </h2>
            <p className="text-[#4b413b] text-sm mb-3 max-h-20 overflow-hidden">
              {project.desc}
            </p>
            <ul className="text-[#645f59] text-sm list-disc list-inside space-y-1 mb-4">
              {project.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-auto">
              <div className="flex -space-x-2">
                {project.iconLists.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    loading="lazy"
                    alt=""
                    className="p-1 w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-black/20 bg-[#fbf5eb] hover:scale-110 transition-transform duration-300 ease-out"
                  />
                ))}
              </div>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a85e3e] border border-[#d2a67a] px-3 py-1 rounded-full text-sm hover:bg-[#ffe5c0] transition"
              >
                View Site ↗
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Projects;
