import React, { useEffect, useState } from "react";
import Main from "../Components/Main";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Skills from "../Components/Skills";
import { motion } from "framer-motion";
import MenuEffect from "../assets/MenuEffect";
import ScrollToTopButton from "../assets/ScrollToTop";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return loading ? (
    <div className="grid place-items-center w-screen h-screen bg-gray-900 ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-cyan-400 font-mono text-lg md:text-2xl px-4"
      >
        > Booting system... [MadhuOS v1.0]
      </motion.div>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="scroll-smooth w-screen min-h-screen bg-gray-900 overflow-x-hidden"
    >
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </motion.div>
  );
};

export default Home;