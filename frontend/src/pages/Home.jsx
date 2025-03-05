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
    <div className="grid place-items-center max-w-screen h-screen overflow-hidden bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        className="text-green-500 font-mono text-xl"
      >
        > Booting system... [MadhuOS v1.0]
      </motion.div>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="scroll-smooth max-w-screen min-h-screen bg-gray-900 "
    >
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTopButton />
      <MenuEffect/>
    </motion.div>
  );
};

export default Home;