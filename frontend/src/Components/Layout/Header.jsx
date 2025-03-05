import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Terminal from "../../assets/Terminal";
import MenuEffect from "../../assets/MenuEffect";

function Header() {
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);


  const linkVariants = {
    hover: { 
      scale: 1.1, 
      color: "#5eead4",
      textShadow: "0 0 8px rgba(94, 234, 212, 0.5)",
      transition: { 
        duration: 0.3,
        type: "spring",
        stiffness: 300
      } 
    },
    initial: { scale: 1, color: "#ffffff" },
  };

  const logoVariants = {
    hover: {
      rotate: [0, 3, -3, 0],
      transition: {
        duration: 0.8,
        repeat: Infinity
      }
    },
    tap: {
      scale: 0.95,
      filter: "hue-rotate(45deg)",
      transition: { duration: 0.2 }
    }
  };

  const scrollOffset = -60;

  
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="flex justify-between items-center text-white px-4 py-2 bg-gray-900 sticky top-0 z-50 shadow-lg max-w-screen w-full"
    >
          <RouterLink 
        to="/" 
        className="md:ml-4 ml-2 flex items-center z-50"
        onMouseEnter={() => setIsHoveringLogo(true)}
        onMouseLeave={() => setIsHoveringLogo(false)}
      >
        <motion.div
          variants={logoVariants}
          whileHover="hover"
          whileTap="tap"
          className="flex items-center gap-1 font-mono group"
        >
          <motion.span
            className="text-2xl md:text-3xl text-cyan-400 relative"
            animate={{
              textShadow: isHoveringLogo 
                ? "0 0 15px rgba(94, 234, 212, 0.7)"
                : "0 0 5px rgba(94, 234, 212, 0.3)"
            }}
          >
            ∫
            <AnimatePresence>
              {isHoveringLogo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute -inset-1 bg-cyan-400/10 rounded-full blur-sm"
                />
              )}
            </AnimatePresence>
          </motion.span>
          
          <motion.p
            className="md:text-xl text-sm text-cyan-300 whitespace-nowrap flex items-center gap-1"
            animate={{
              filter: isHoveringLogo ? "hue-rotate(-10deg)" : "none"
            }}
          >
            <span className="text-cyan-100">life(</span>happiness
            <span className="text-cyan-100">)</span>
            <span className="text-cyan-400 ml-1">d(</span>
            <span className="animate-pulse">▮</span>oding
            <span className="text-cyan-400">)</span>
          </motion.p>
        </motion.div>
      </RouterLink>


      <div className="hidden md:flex items-center justify-center flex-1">
        <ul className="flex gap-8 items-center">
          <li className="headerlink bottomLine z-50 border-2 border-cyan-600 rounded px-2 py-1 ">
            <Terminal />
          </li>
       
        </ul>
      </div>
    </motion.div>
  );
}

export default Header;