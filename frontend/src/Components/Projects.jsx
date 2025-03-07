import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { projectData } from "../assets/constant";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
  <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-bold mb-12 text-center text-cyan-400 font-mono"
      >
        > Misson log --projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4">
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="h-64 overflow-hidden rounded-xl">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-xl" />
            
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-mono text-cyan-300 mb-2">
                {project.title}
              </h3>
              <p className="text-cyan-100 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
  {selectedProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      onClick={() => setSelectedProject(null)}
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        className="relative bg-gray-900 rounded-xl max-w-4xl w-full overflow-hidden border border-cyan-400/20 shadow-2xl sm:max-w-2xl md:max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setSelectedProject(null)}
          className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 z-50"
        >
          <FaTimes className="text-2xl" />
        </button>

        <div className="h-64 sm:h-72 md:h-80 bg-gray-800">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            className="h-full"
          >
            {selectedProject.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${selectedProject.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="p-6 sm:p-4 space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h2 className="text-2xl md:text-3xl font-mono text-cyan-300">
              {selectedProject.title}
            </h2>
            <div className="flex gap-2 md:gap-4 mt-2 md:mt-0">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-400/20 transition-colors"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>
              )}
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-400/20 transition-colors"
              >
                <FaGithub />
                Code
              </a>
            </div>
          </div>

          <p className="text-cyan-200 text-sm md:text-base leading-relaxed">
            {selectedProject.moreDescription}
          </p>

          <div className="space-y-4">
            <h4 className="text-cyan-400 font-mono text-lg">Tech Stack</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.technologies.map((tech, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between text-cyan-300 text-xs md:text-sm">
                    <span>{tech.name}</span>
                    <span>{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-cyan-400/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full transition-all duration-500"
                      style={{ width: `${tech.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Projects;