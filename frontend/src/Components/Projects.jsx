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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
            className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative bg-gray-900 rounded-xl max-w-4xl w-full overflow-hidden border border-cyan-400/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-cyan-400 hover:text-cyan-300 z-50"
              >
                <FaTimes className="text-2xl" />
              </button>

              <div className="h-96 bg-gray-800">
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

              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-mono text-cyan-300">
                    {selectedProject.title}
                  </h2>
                  <div className="flex gap-4">
                    {selectedProject.link && (
                      <a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-400/20 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        Live
                      </a>
                    )}
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-300 hover:bg-cyan-400/20 transition-colors"
                    >
                      <FaGithub />
                      Code
                    </a>
                  </div>
                </div>

                <p className="text-cyan-200 leading-relaxed">
                  {selectedProject.moreDescription}
                </p>

                <div className="space-y-4">
                  <h4 className="text-cyan-400 font-mono text-lg">
                    Tech Stack
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.technologies.map((tech, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-cyan-300 text-sm">
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