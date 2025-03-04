import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaYoutube,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const [isHoveringCopyright, setIsHoveringCopyright] = React.useState(false);

  const handleToAdminLoginPage = (e) => {
    e.preventDefault();
    navigate("/admin/login");
  };

  const iconVariants = {
    hover: { 
      scale: 1.3, 
      color: "#5eead4",
      textShadow: "0 0 8px rgba(94, 234, 212, 0.5)",
      transition: { type: "spring", stiffness: 300 }
    },
    initial: { scale: 1, color: "#ffffff" },
  };

  const copyrightVariants = {
    hover: { 
      scale: 1.2, 
      color: "#5eead4",
      textShadow: "0 0 15px rgba(94, 234, 212, 0.7)",
    },
    tap: { 
      rotate: [0, 15, -15, 0], 
      transition: { duration: 0.5 } 
    },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-gray-900/80 backdrop-blur-md border-t border-cyan-400/20  py-4 max-h-7"
    >
      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-10 z-0">
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

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-cyan-400 font-mono text-sm"
            >
              [ CONNECT_NETWORK ]
            </motion.p>
            
            <div className="flex space-x-6">
              {[
                { icon: FaYoutube, href: "https://www.youtube.com/channel/UCKRVpjLlFBLLXm-QAhDbkSg" },
                { icon: FaEnvelope, href: "mailto:your.kcmadhu081@gmail.com" },
                { icon: FaFacebook, href: "https://www.facebook.com/Ryuga.081" },
                { icon: FaInstagram, href: "https://www.instagram.com/madhu_kunwar081" },
                { icon: FaGithub, href: "https://github.com/MiKeY081" },
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={iconVariants}
                  whileHover="hover"
                  initial="initial"
                  className="relative p-2 rounded-full border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
                >
                  <Icon className="text-xl text-cyan-300" />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-cyan-400 opacity-0 hover:opacity-100 transition-opacity">
                    {href.split('.')[1]}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex flex-col items-center md:items-end space-y-2">
            <motion.div
              onHoverStart={() => setIsHoveringCopyright(true)}
              onHoverEnd={() => setIsHoveringCopyright(false)}
              className="flex items-center gap-1 font-mono text-sm text-cyan-300"
            >
              <motion.span
                variants={copyrightVariants}
                whileHover="hover"
                whileTap="tap"
                onClick={handleToAdminLoginPage}
                className="cursor-pointer relative"
              >
                ©
                <AnimatePresence>
                  {isHoveringCopyright && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute -inset-2 bg-cyan-400/10 rounded-full"
                    />
                  )}
                </AnimatePresence>
              </motion.span>
              <span>2003 [ALL_SYSTEMS_NOMINAL]</span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isHoveringCopyright ? 1 : 0 }}
              className="text-xs text-cyan-400/60 font-mono"
            >
              > access admin_portal
            </motion.p>
          </div>
        </div>
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_24%,_rgba(34,211,238,0.1)_25%,_transparent_26%,_transparent_49%,_rgba(34,211,238,0.1)_50%,_transparent_51%)] bg-[length:100%_4px] animate-scanline" />
      </div>
    </motion.footer>
  );
};

export default Footer;