"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import ParticlesBackground from "./ParticlesBackground";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#fef6f6] overflow-hidden">
      {/* Particle background */}
      <ParticlesBackground />

      {/* Main content */}
      <div className="text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-8xl text-3xl font-bold text-transparent bg-clip-text bg-amber-50 "
        >
          Hi, I'm A Shrinivas
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="md:text-xl text-md mt-4 text-amber-50"
        >
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "Fullstack Enthusiast",
                "Tech Explorer",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6"
        >
          <a
            href="#projects"
            className="inline-block px-6 py-2 border-2 border-amber-50 text-amber-50 rounded-full hover:bg-white hover:text-[#b26e70] transition-colors duration-300"
          >
            See My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="ml-4 inline-flex items-center gap-2 px-6 py-2 border-2 border-amber-50 text-amber-50 rounded-full hover:bg-white hover:text-[#b26e70] transition-colors duration-300"
          >
            Resume <FaDownload className="text-sm" />
          </a>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 text-white text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
