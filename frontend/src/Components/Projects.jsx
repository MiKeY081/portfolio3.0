import React from "react";
import { motion } from "framer-motion";
import { Card } from "../assets/ProjectCard";
import { projectData } from "../assets/constant";

const Projects = () => {
  const projects = projectData;

  return (
    <div className="projects min-h-screen px-6 sm:px-10 md:px-16 lg:px-32 bg-gray-800 pt-16 pb-10 shadow-green-500/20" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center font-bold mb-10 text-4xl sm:text-5xl lg:text-6xl text-green-500 font-mono"
      >
        > projects --deployed
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
        {projects.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
          >
            <Card project={project} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;