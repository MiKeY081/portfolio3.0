import React from "react";
import mikeyImage from "../../public/photos/mikie.jpg";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTerminal } from "react-icons/fa";

const Main = () => {
  const iconVariants = {
    hover: { 
      scale: 1.3,
      color: "#5eead4",
      textShadow: "0 0 12px rgba(94, 234, 212, 0.5)",
      transition: { type: "spring", stiffness: 300 } 
    },
    initial: { scale: 1, color: "#ffffff" },
  };

  return (
    <div className="min-h-screen bg-gray-900 flex lg:flex-row-reverse flex-col items-center justify-center relative overflow-hidden px-4 sm:px-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')]" />
      </div>

      {/* Profile Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="relative z-10 lg:w-1/2 flex justify-center items-center py-16"
      >
        <div className="relative">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"
          />
          <motion.img
            src={mikeyImage}
            alt="Madhu Kunwar"
            className="relative h-64 w-64 lg:h-96 lg:w-96 object-cover border-4 border-cyan-400 rounded-full shadow-2xl shadow-cyan-400/30 backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="lg:w-1/2 font-mono space-y-8 relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 text-cyan-400">
            <FaTerminal className="text-xl" />
            <span className="text-sm">user@terminal:~</span>
          </div>

          {/* Typewriter Effect */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-cyan-300 text-4xl lg:text-6xl font-bold"
            >
              $&gt;{' '}
              <Typewriter
                options={{
                  strings: ["Madhu Kunwar", "Full-Stack Dev", "Code Alchemist"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                  deleteSpeed: 50,
                  cursor: "▋",
                  cursorClassName: "Typewriter__cursor text-cyan-400"
                }}
              />
            </motion.div>
          </div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-cyan-200 text-lg leading-relaxed space-y-4"
          >
            <p>
              <span className="text-cyan-400">SYSTEM INIT:</span> Full-stack dev 
              exploring the digital cosmos. Specializing in web alchemy and 
              UI/UX constellations.
            </p>
            <p>
              <span className="text-cyan-400">CURRENT MISSION:</span> Engineering 
              immersive experiences at light speed.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(94, 234, 212, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-cyan-400/20 border-2 border-cyan-400 rounded-lg text-cyan-300 hover:bg-cyan-400/30 transition-all duration-300 group"
          >
            <span className="flex items-center gap-2">
              <span className="group-hover:animate-pulse">⨳</span>
              INITIATE_CONTACT_PROTOCOL
            </span>
          </motion.a>

          {/* Social Links */}
          <motion.div 
            className="flex gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {[
              { href: "mailto:your.kcmadhu081@gmail.com", Icon: FaEnvelope, label: "Transmission" },
              { href: "https://github.com/MiKeY081", Icon: FaGithub, label: "Codebase" },
              { href: "https://www.linkedin.com/in/...", Icon: FaLinkedin, label: "Network" },
            ].map(({ href, Icon, label }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover="hover"
                initial="initial"
                className="relative p-3 rounded-full border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
              >
                <Icon className="text-2xl" />
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none z-20 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_24%,_rgba(34,211,238,0.1)_25%,_transparent_26%,_transparent_49%,_rgba(34,211,238,0.1)_50%,_transparent_51%)] bg-[length:100%_4px] animate-scanline" />
      </div>
    </div>
  );
};

export default Main;