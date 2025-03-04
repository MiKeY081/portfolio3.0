import React from "react";
import { useParams } from "react-router-dom";
import { projectData } from "../assets/constant";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/parallax";

const ProjectDetails = () => {
  const { index } = useParams();
  const project = projectData[index];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-8 px-4 rounded-xl flex lg:flex-row flex-col text-cyan-100 backdrop-blur-lg bg-gray-900/80 border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.1)] mx-4 my-8"
      >
        <div className="relative w-full lg:w-2/3 group">
          <Swiper
            className="md:h-[600px] md:w-[900px] w-80 h-96 mb-4 md:mb-0 rounded-xl overflow-hidden"
            modules={[Navigation, Pagination, EffectFade, Parallax]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} bg-cyan-400/50 hover:bg-cyan-400 w-3 h-3"></span>`;
              },
            }}
            effect="fade"
            autoplay={{ delay: 5000 }}
            loop={true}
            parallax={true}
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative h-full w-full"
                >
                  <img
                    src={image}
                    className="w-full h-full object-cover rounded-xl brightness-90 contrast-110"
                    alt={`Project Slide ${index + 1}`}
                  />
                  {/* Hover Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </SwiperSlide>
            ))}
            
            {/* Custom Navigation Arrows */}
            <div className="swiper-button-next after:text-cyan-400 hover:after:text-cyan-300" />
            <div className="swiper-button-prev after:text-cyan-400 hover:after:text-cyan-300" />
          </Swiper>
        </div>

        <div className="w-full lg:w-1/3 lg:pl-8 font-mono space-y-6 relative">
          {/* Project Title */}
          <motion.h2 
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="text-4xl font-bold text-cyan-300 mb-4 pt-4 border-b border-cyan-400/30 pb-2"
          >
            {project.title}
          </motion.h2>

          {/* Tech Stack Visualization */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl text-cyan-400 font-semibold">// TECH STACK</h3>
              <div className="space-y-4">
                {project.technologies.map((tech, index) => (
                  <div key={tech.name} className="space-y-2">
                    <div className="flex justify-between text-sm text-cyan-300">
                      <span>{tech.name}</span>
                      <span>{tech.level}%</span>
                    </div>
                    <div className="h-2 bg-cyan-400/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${tech.level}%` }}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="space-y-4">
              <h3 className="text-xl text-cyan-400 font-semibold">// MISSION BRIEF</h3>
              <p className="text-cyan-200 leading-relaxed">
                {project.moreDescription}
              </p>
            </div>

            {/* Project Links */}
            <div className="flex flex-col gap-4 pt-4">
              <motion.a
                whileHover={{ x: 5 }}
                href={project.link}
                className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="mr-2 text-cyan-400" />
                <span className="border-b border-cyan-400/30 group-hover:border-cyan-300">
                  [>_ launch_sequence]
                </span>
              </motion.a>
              
              <motion.a
                whileHover={{ x: 5 }}
                href={project.github}
                className="flex items-center text-cyan-300 hover:text-cyan-200 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="mr-2 text-cyan-400" />
                <span className="border-b border-cyan-400/30 group-hover:border-cyan-300">
                  [src > decrypt_codebase]
                </span>
              </motion.a>
            </div>
          </div>

          {/* Animated Border Effect */}
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent" />
        </div>
      </motion.div>

      {/* Global Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_24%,_rgba(34,211,238,0.1)_25%,_transparent_26%,_transparent_49%,_rgba(34,211,238,0.1)_50%,_transparent_51%)] bg-[length:100%_4px] animate-scanline" />
      </div>
    </div>
  );
};

export default ProjectDetails;