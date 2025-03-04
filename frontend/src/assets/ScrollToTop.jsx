import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const ScrollToTop = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Mission Log", path: "/projects" },
    { name: "Skill Matrix", path: "/skills" },
    { name: "Bio-Scan", path: "/about" },
    { name: "Transmit Signal", path: "/contact" },
  ];

  const hologramVariants = {
    open: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    closed: {
      scale: 0,
      opacity: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const starVariants = {
    open: (i) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 300
      }
    }),
    closed: (i) => ({
      opacity: 0,
      x: (i % 2 === 0 ? -1 : 1) * 50,
      y: (i < 2 ? -1 : 1) * 50
    })
  };

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={() => {
          
          setIsOpen(!isOpen)}}
        className="text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute right-0 top-12"
          >
            {/* Hologram Backdrop */}
            <motion.div
              variants={hologramVariants}
              className="relative bg-black/90 backdrop-blur-lg rounded-lg p-8
                border-2 border-cyan-400/50 shadow-lg shadow-cyan-400/20"
            >
              {/* Grid Lines */}
              <div className="absolute inset-0 overflow-hidden rounded-lg">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bg-cyan-400/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: i % 2 === 0 ? "100%" : "2px",
                      height: i % 2 === 0 ? "2px" : "100%",
                      top: `${(i * 5)}%`,
                      left: `${(i * 5)}%`
                    }}
                  />
                ))}
              </div>

              {/* Navigation Items */}
              <ul className="relative grid gap-6">
                {menuItems.map((item, i) => (
                  <motion.li
                    key={item.name}
                    custom={i}
                    variants={starVariants}
                    whileHover={{ scale: 1.05, color: "#22d3ee" }}
                    className="font-mono text-cyan-300 cursor-pointer
                      hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
                  >
                    <a href={item.path} className="block px-4 py-2">
                      {">_ "}{item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Animated Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                    initial={{
                      opacity: 0,
                      x: Math.random() * 100 - 50,
                      y: Math.random() * 100 - 50
                    }}
                    animate={{
                      opacity: [0, 0.5, 0],
                      scale: [0, 1, 0],
                      transition: {
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollToTop;