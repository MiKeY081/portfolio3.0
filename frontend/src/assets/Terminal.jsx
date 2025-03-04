import * as React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import { FaTerminal } from "react-icons/fa";

export default function Terminal() {
  const [open, setOpen] = useState(false);
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleClose = () => setOpen(false);

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const trimmedCommand = command.trim().toLowerCase();
      if (!trimmedCommand) return;

      const output = processCommand(trimmedCommand);
      const newHistory = [...history, { command: trimmedCommand, output }];

      if (trimmedCommand === "clear") {
        setHistory([]);
        setCommand("");
        return;
      }

      setHistory(newHistory);
      setCommand("");
    }
  };

  const processCommand = (cmd) => {
    switch (cmd) {
      case "about": navigate("/about"); return "> Redirecting to sysinfo --about...";
      case "home": navigate("/"); return "> Booting Home sequence...";
      case "main": navigate("/main"); return "> Loading Main core...";
      case "contact": navigate("/contact"); return "> Opening send_packet --to=madhu...";
      case "projects": navigate("/projects"); return "> Fetching projects --deployed...";
      case "admin": navigate("/admin/login"); return "> Accessing admin --auth required...";
      case "help": return "> Commands: home, about, main, contact, projects, admin, help, clear, exit, hack";
      case "exit": setOpen(false); return "> Shutting down terminal...";
      case "clear": return "> Resetting terminal buffer...";
      case "hack": return "> Initiating glitch protocol... [easter egg activated]";
      default: return `> ERROR 404: '${cmd}' not found. Type 'help' for command list.`;
    }
  };

  const terminalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2, color: "#86efac" }}
        whileTap={{ scale: 0.9 }}
        className="text-2xl text-white cursor-pointer z-50 relative terminal-icon"
      >
        <FaTerminal
          onClick={handleOpen}
          className="inline-block"
          onMouseEnter={(e) => e.stopPropagation()}
          onMouseLeave={(e) => e.stopPropagation()}
        />
      </motion.div>
      {open && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 2 }}
          open={open}
          onClick={handleClose}
        >
          <motion.div
            variants={terminalVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-900 text-green-500 max-h-[80vh] md:w-[700px] w-[90vw] flex flex-col p-5 rounded-lg shadow-lg shadow-green-500/20 font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-2 text-lg flex justify-between items-center">
              <span>> MadhuOS Terminal v1.0</span>
              <motion.button
                whileHover={{ scale: 1.1, color: "#ff5555" }}
                onClick={handleClose}
                className="text-sm"
              >
                [X]
              </motion.button>
            </div>
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800 max-h-[calc(80vh-80px)]">
              {history.map((entry, index) => (
                <div key={index} className="mb-2">
                  <div className="text-base text-green-400">
                    madhu@portfolio:~$ {entry.command}
                  </div>
                  <div className="text-sm text-gray-300">{entry.output}</div>
                </div>
              ))}
              <div className="flex items-center mt-2 sticky bottom-0 bg-gray-900">
                <span className="text-base text-green-400">madhu@portfolio:~$ </span>
                <input
                  ref={inputRef}
                  type="text"
                  className="bg-transparent border-none outline-none text-base flex-1 ml-2 text-green-500 placeholder-gray-600"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleCommand}
                  placeholder="Type 'help' for commands..."
                />
              </div>
            </div>
          </motion.div>
        </Backdrop>
      )}
    </>
  );
}