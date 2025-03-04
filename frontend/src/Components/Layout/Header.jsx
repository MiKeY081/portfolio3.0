import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "../Menu";
import Terminal from "../../assets/Terminal";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHoveringLogo, setIsHoveringLogo] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="flex justify-between items-center text-white px-4 py-2 bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 w-full border-b border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]"
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

      <nav className="hidden md:flex items-center justify-center flex-1">
        <ul className="flex gap-8 items-center">
          <motion.li
            whileHover={{ scale: 1.2 }}
            className="relative group"
          >
            <Terminal className="text-cyan-400 hover:text-cyan-300 transition-colors" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-cyan-400 w-0 group-hover:w-full transition-all duration-300" />
          </motion.li>
          
          {['About', 'Projects', 'Contact'].map((item) => (
            <motion.li
              key={item}
              variants={linkVariants}
              whileHover="hover"
              initial="initial"
              className="relative headerlink"
            >
              <ScrollLink 
                to={item.toLowerCase()} 
                smooth 
                offset={scrollOffset} 
                className="cursor-pointer px-2 py-1"
              >
                {item}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400/30 scale-x-0 origin-left group-hover:scale-x-100 transition-transform" />
              </ScrollLink>
              <div className="absolute -inset-2 blur-md opacity-0 hover:opacity-20 bg-cyan-400/30 transition-opacity pointer-events-none" />
            </motion.li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden flex items-center z-50">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="text-cyan-400 hover:text-cyan-300 text-2xl relative"
        >
          <span className="relative">
            ☰
            <AnimatePresence>
              {isMenuOpen && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  className="absolute -inset-2 bg-cyan-400/20 rounded-full"
                />
              )}
            </AnimatePresence>
          </span>
        </motion.button>
      </div>

      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
      
      {/* Animated scanline overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ opacity: 0.3 }}
        animate={{ y: ["-100%", "100%"] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          background: `linear-gradient(
            to bottom,
            transparent 0%,
            rgba(34, 211, 238, 0.05) 50%,
            transparent 100%
          )`
        }}
      />
    </motion.header>
  );
}

export default Header;