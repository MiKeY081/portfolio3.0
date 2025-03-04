import { motion } from "framer-motion";

const About = () => {
  const listItemVariants = {
    hover: {
      x: 10,
      color: "#5eead4",
      transition: { type: "spring", stiffness: 300 }
    },
    initial: { x: 0, color: "#ffffff" }
  };

  return (
    <div className="relative py-16 px-4 sm:px-8 lg:px-16 bg-gray-900/80 backdrop-blur-md rounded-xl border border-cyan-400/20 shadow-[0_0_60px_rgba(34,211,238,0.1)] overflow-hidden" id="about">
      {/* Holographic Grid Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-cyan-400/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            style={{
              width: i % 2 === 0 ? '100%' : '2px',
              height: i % 2 === 0 ? '2px' : '100%',
              top: `${(i * 5)}%`,
              left: `${(i * 5)}%`
            }}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 text-center text-cyan-400 font-mono flex items-center justify-center gap-2"
      >
        <span className="blinking-cursor">_</span>
        $ sysinfo --about
      </motion.h2>

      <div className="flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative w-full lg:w-1/2 flex justify-center group"
        >
          {/* Image Container */}
          <div className="relative rounded-full border-4 border-cyan-400/50 p-2 shadow-2xl shadow-cyan-400/20">
            <motion.img
              src="/photos/aboutimage.jpg"
              alt="Madhu Kunwar"
              className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
              whileHover={{ scale: 1.05 }}
            />
            {/* Hover Particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(12)].map((_, i) => (
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
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          className="w-full lg:w-1/2 space-y-6 text-cyan-300 font-mono text-sm sm:text-base lg:text-lg"
        >
          {/* Info Items */}
          <motion.div whileHover="hover" variants={listItemVariants}>
            <span className="text-cyan-400">$ user:</span> Madhu Kunwar
          </motion.div>

          <motion.div whileHover="hover" variants={listItemVariants}>
            <span className="text-cyan-400">$ origin:</span> 
            <span className="ml-2 px-2 py-1 bg-cyan-400/10 rounded">
              Gulmi, Nepal [terrain: hilly_region]
            </span>
          </motion.div>

          <motion.div whileHover="hover" variants={listItemVariants}>
            <span className="text-cyan-400">$ status:</span> 
            <span className="typing-cursor">B.S. Software Engineering</span>
          </motion.div>

          <motion.div whileHover="hover" variants={listItemVariants}>
            <span className="text-cyan-400">$ focus:</span> 
            <span className="ml-2 animate-pulse">
              {"{ "}full_stack_development {"}"}
            </span>
          </motion.div>

          <div className="space-y-4 pl-4 border-l-2 border-cyan-400/30">
            <motion.div whileHover={{ scale: 1.02 }}>
              <span className="text-cyan-400">:: skills</span>
              <div className="mt-2 space-y-2">
                <div className="flex gap-4">
                  <span className="text-cyan-400">frontend:</span>
                  <span className="text-cyan-300">
                    React, Next.js, TypeScript, Tailwind
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="text-cyan-400">backend:</span>
                  <span className="text-cyan-300">
                    Node.js, MongoDB, Prisma, Mongoose
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }}>
              <span className="text-cyan-400">:: hobbies</span>
              <div className="mt-2 flex gap-2 flex-wrap">
                {["cybersecurity", "web_dev", "chess"].map((hobby, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-cyan-400/10 rounded-full text-sm"
                  >
                    #{hobby}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-6 p-4 bg-cyan-400/10 rounded-lg border border-cyan-400/20"
            whileHover={{ boxShadow: "0 0 30px rgba(34, 211, 238, 0.1)" }}
          >
            <span className="text-cyan-400">$ mission:</span>
            <p className="mt-2 leading-relaxed">
              "Contribute_to(nation, humanity) via ethical_tech"
            </p>
            <div className="mt-4 flex gap-4">
              <span className="animate-pulse">⨳</span>
              <span className="text-cyan-400/80 italic">
                // Let's architect the future
              </span>
            </div>
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

export default About;