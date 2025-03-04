import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaTerminal, FaRegClock, FaEye, FaEyeSlash } from "react-icons/fa";

const NotificationCard = ({ id, message, setMessages }) => {
  const [isRead, setIsRead] = useState(message.read);
  const createdAt = new Date(message.createdAt).toLocaleString();

  const handleRead = async () => {
    try {
      await axios.put("/message/read", { id });
      setIsRead(!isRead);
      setMessages((messages) =>
        messages.map((msg) => (msg.id === id ? { ...msg, read: !isRead } : msg))
      );
    } catch (error) {
      console.error("Protocol failure:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative p-6 rounded-xl backdrop-blur-sm border ${
        !isRead 
          ? "border-cyan-400 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.1)]"
          : "border-cyan-400/20 bg-gray-900/50"
      }`}
    >
      {/* Hover Effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-cyan-400/5" />
      </div>

      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FaTerminal className="text-cyan-400 text-lg" />
            <h3 className="font-mono text-cyan-300 text-lg">
              {message.name}
            </h3>
          </div>
          <span className="text-cyan-400/60 text-sm font-mono">
            ID: #{id.slice(0,6)}
          </span>
        </div>

        {/* Metadata */}
        <div className="flex flex-col gap-2 pl-8">
          <div className="flex items-center gap-2 text-cyan-400/80">
            <FaRegClock className="text-sm" />
            <span className="font-mono text-sm">{createdAt}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm">FROM:</span>
            <span className="text-cyan-300 text-sm">{message.email}</span>
          </div>
        </div>

        {/* Message Body */}
        <div className="pl-8 border-l-2 border-cyan-400/20 ml-3">
          <p className="text-cyan-200 font-mono text-base leading-relaxed">
            {message.message}
          </p>
        </div>

        {/* Action Panel */}
        <motion.div 
          className="flex justify-end mt-4"
          whileHover={{ x: 5 }}
        >
          <button
            onClick={handleRead}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-sm ${
              isRead
                ? "text-cyan-400/60 hover:text-cyan-300 bg-cyan-400/5 hover:bg-cyan-400/10"
                : "text-cyan-300 bg-cyan-400/10 hover:bg-cyan-400/20"
            } transition-all`}
          >
            {isRead ? (
              <>
                <FaEyeSlash className="text-xs" />
                MARK ACTIVE
              </>
            ) : (
              <>
                <FaEye className="text-xs" />
                ARCHIVE
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Status Indicator */}
      {!isRead && (
        <div className="absolute top-3 right-3 flex items-center gap-1">
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          <span className="text-cyan-400 text-xs font-mono">UNREAD</span>
        </div>
      )}
    </motion.div>
  );
};

export default NotificationCard;