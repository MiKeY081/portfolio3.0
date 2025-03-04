// Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Tailwind", level: 90 },
    { name: "NextJs", level: 85 },
    { name: "NodeJs", level: 90 },
    { name: "Mongoose, Prisma", level: 80 },
    { name: "C, C++", level: 85 },
    { name: "Java", level: 75 },
    { name: "PHP", level: 70 },
    { name: "SQL", level: 85 },
  ];

  return (
    <div className="relative py-20 px-4 bg-gray-900/80 backdrop-blur-md border-t border-cyan-400/20" id="skills">
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

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-bold mb-12 text-center text-cyan-400 font-mono"
      >
        > skill_matrix --visualize
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-4 bg-gray-900/50 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg text-cyan-300 font-mono w-32">
                {skill.name}
              </span>
              
              <div className="flex-1 h-3 bg-cyan-400/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.3)]"
                />
              </div>

              <span className="text-cyan-400 font-mono w-12">
                {skill.level}%
              </span>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-cyan-400/5" />
              <div className="absolute inset-0 border border-cyan-400/30 rounded-xl" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;