import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import NotificationCard from "./NotificationCard";
import { FaArrowLeft, FaSatelliteDish } from "react-icons/fa";

const NotificationsPage = () => {
  const [messages, setMessages] = useState([]);
  const [unseenMessages, setUnseenMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleBackToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get("/message/get");
        setMessages(data.messages);
      } catch (error) {
        console.error("Protocol failure:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    setUnseenMessages(messages?.filter((message) => !message.read));
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 p-6 md:p-12 relative overflow-hidden">
      {/* Holographic Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="flex justify-between items-center mb-12 p-6 bg-gray-900/80 backdrop-blur-lg rounded-xl border border-cyan-400/20"
        >
          <div className="flex items-center gap-4">
            <FaSatelliteDish className="text-cyan-400 text-2xl" />
            <h1 className="text-2xl font-mono text-cyan-300">
              INCOMING TRANSMISSIONS
              <span className="text-cyan-400/60 ml-2 font-normal">
                [{unseenMessages?.length || 0} UNREAD]
              </span>
            </h1>
          </div>
          
          <motion.button
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBackToHome}
            className="flex items-center gap-2 px-6 py-3 bg-cyan-400/10 border border-cyan-400/30 rounded-lg text-cyan-300 font-mono hover:bg-cyan-400/20 transition-colors"
          >
            <FaArrowLeft className="text-sm" />
            RETURN TO MAINFRAME
          </motion.button>
        </motion.div>

        {/* Content Section */}
        <AnimatePresence>
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center items-center h-64"
            >
              <div className="flex items-center gap-3 text-cyan-400 font-mono">
                <div className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                DECRYPTING TRANSMISSIONS...
              </div>
            </motion.div>
          ) : messages?.length > 0 ? (
            <motion.div
              key="messages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid gap-6"
            >
              {messages.map((message, index) => (
                <NotificationCard
                  key={message.id}
                  id={message.id}
                  message={message}
                  setMessages={setMessages}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center items-center h-64"
            >
              <div className="text-center text-cyan-400/60 font-mono">
                <div className="text-xl mb-2">NO INCOMING TRANSMISSIONS</div>
                <div className="flex items-center gap-2 justify-center">
                  <span className="blinking-cursor">_</span>
                  <span className="text-sm">Awaiting communications...</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_24%,_rgba(34,211,238,0.1)_25%,_transparent_26%,_transparent_49%,_rgba(34,211,238,0.1)_50%,_transparent_51%)] bg-[length:100%_4px] animate-scanline" />
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          initial={{
            x: Math.random() * 100 - 50 + "%",
            y: Math.random() * 100 - 50 + "%",
            scale: 0,
          }}
          animate={{
            scale: [0, 0.8, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default NotificationsPage;