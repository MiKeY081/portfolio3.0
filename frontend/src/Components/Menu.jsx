import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import Terminal from "../assets/Terminal";

const Menu = ({ isOpen, onClose }) => {
  const menuVariants = {
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    closed: {
      x: "100%",
      transition: { delay: 0.2, type: "spring", stiffness: 300, damping: 30 }
    }
  };

  const itemVariants = {
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 + 0.2 }
    }),
    closed: { opacity: 0, x: 50 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-lg"
        >
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute right-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-l border-cyan-400/20 shadow-2xl shadow-cyan-400/10"
          >
            <div className="p-6 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.1, color: "#5eead4" }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="text-cyan-400 text-2xl"
              >
                <FiX />
              </motion.button>
            </div>

            <motion.ul className="flex flex-col items-start px-8 space-y-8">
              <motion.li 
                custom={0}
                variants={itemVariants}
                className="w-full border-b border-cyan-400/20 pb-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-cyan-400"
                >
                  <Terminal className="text-2xl" />
                  <span className="font-mono">Terminal</span>
                </motion.div>
              </motion.li>

              {['About', 'Projects', 'Contact'].map((item, i) => (
                <motion.li
                  key={item}
                  custom={i + 1}
                  variants={itemVariants}
                  className="w-full border-b border-cyan-400/10"
                >
                  <ScrollLink
                    to={item.toLowerCase()}
                    smooth
                    onClick={onClose}
                    className="group flex items-center gap-3 font-mono text-cyan-300 hover:text-cyan-400 cursor-pointer py-4"
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        &gt;
                      </span>
                      {item}
                    </motion.span>
                  </ScrollLink>
                </motion.li>
              ))}
            </motion.ul>

            {/* Holographic Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-cyan-400/10"
                  style={{
                    width: i % 2 === 0 ? '100%' : '2px',
                    height: i % 2 === 0 ? '2px' : '100%',
                    top: `${(i * 8)}%`,
                    left: `${(i * 8)}%`
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;