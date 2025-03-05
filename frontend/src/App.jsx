import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Adding Framer Motion for slick transitions
import About from "./Components/About";
import Home from "./pages/Home";
import Main from "./Components/Main";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import AdminLogin from "./Admin/AdminLogin";
import NotificationsPage from "./Admin/Notification";
import Layout from "./Components/Layout/Layout";
import Skills from "./Components/Skills";

// Sample project data (move this to a separate file later if you want)
const projectData = [
  { id: 1, title: "Project 1", description: "Mind-blowing thing", image: "/images/project1.jpg" },
  { id: 2, title: "Project 2", description: "Next-level creation", image: "/images/project2.jpg" },
  { id: 3, title: "Project 3", description: "Wild innovation", image: "/images/project3.jpg" },
];

function App() {
  // State for interactivity (e.g., projects shared across components)
  const [projects] = useState(projectData);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simple load effect for that mind-boggling entrance
  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 500); // Fake a smooth load-in
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className="app-container"
    >
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route
            path="/projects"
            element={<Projects projects={projects} />}
          />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/notifications" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </motion.div>
  );
}

export default App;