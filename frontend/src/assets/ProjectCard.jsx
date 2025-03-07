import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaTerminal } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function Card({ project, index }) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    hover: {
      scale: 1.03,
      zIndex: 1,
      boxShadow: "0 0 30px rgba(34, 211, 238, 0.3)"
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: isHovered ? 0 : 0.5,
      filter: "brightness(0.8) saturate(1.2)"
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative lg:h-[300px] w-[300px] md:w-[500px] lg:w-[500px] rounded-lg cursor-pointer overflow-hidden border border-cyan-400/20 bg-gray-900/50 backdrop-blur-sm  sm:h-64"
    >
      {/* Holographic Grid Backdrop */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400/10"
            style={{
              width: i % 2 === 0 ? '100%' : '2px',
              height: i % 2 === 0 ? '2px' : '100%',
              top: `${(i * 5)}%`,
              left: `${(i * 5)}%`
            }}
          />
        ))}
      </div>

      <motion.img
        variants={imageVariants}
        src={project.images[0]}
        alt={project.title}
        className="h-full w-full object-cover mix-blend-luminosity"
        style={{ transformOrigin: "center 70%" }}
      />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />

      {/* Diagonal Shimmer Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ 
          x: isHovered ? "100%" : "-100%",
          opacity: isHovered ? 0.3 : 0
        }}
        transition={{ duration: 1.5 }}
      />

      <div 
        className="absolute inset-0 p-6 flex flex-col justify-end space-y-3"
        onClick={(e) => navigate(`/project/${index}`)}
      >
        <div className="relative z-10">
          <h1 className="text-xl font-mono font-semibold text-cyan-300 flex items-center gap-2">
            <FaTerminal className="text-cyan-400 text-sm" />
            <span className="hover:text-cyan-200 transition-colors">
              {project.title}
            </span>
          </h1>
          
          <motion.p
            initial={{ height: 0, opacity: 0 }}
            animate={{ 
              height: isHovered ? "auto" : 0,
              opacity: isHovered ? 1 : 0
            }}
            className="mt-2 text-sm text-cyan-100/80 overflow-hidden font-mono"
          >
            {project.description}
          </motion.p>

          <div className="flex gap-4 mt-3">
            {project.link && (
              <motion.div whileHover={{ x: 5 }}>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-sm font-mono text-cyan-400 hover:text-cyan-300 group"
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="border-b border-cyan-400/30 group-hover:border-cyan-300">
                    [>_ deploy]
                  </span>
                  <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
                </Link>
              </motion.div>
            )}

            {project.github && (
              <motion.div whileHover={{ x: 5 }}>
                <Link
                  to={project.github}
                  className="inline-flex items-center text-sm font-mono text-cyan-400 hover:text-cyan-300 group"
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="border-b border-cyan-400/30 group-hover:border-cyan-300">
                    [src]
                  </span>
                  <FaExternalLinkAlt className="ml-2 text-xs opacity-70" />
                </Link>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Border Glow */}
      <div className="absolute inset-0 rounded-lg pointer-events-none border border-cyan-400/30" />
      <motion.div
        className="absolute inset-0 rounded-lg pointer-events-none border border-cyan-400/50"
        animate={{
          opacity: isHovered ? 1 : 0.3,
          boxShadow: isHovered ? "0 0 30px rgba(34, 211, 238, 0.2)" : "none"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}