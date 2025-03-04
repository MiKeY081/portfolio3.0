import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTerminal, FaUserShield } from "react-icons/fa";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const { data } = await axios.post("/user/login", { email, password });
      if (data.success) {
        toast.success("Access granted. Initializing admin protocol...");
        navigate("/admin/notifications");
      } else {
        toast.error("Authentication failure: Invalid credentials");
      }
    } catch (error) {
      toast.error("Security breach detected. Connection terminated.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Holographic Grid Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMWZmZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=')]" />

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="relative bg-gray-900/80 backdrop-blur-lg rounded-xl border border-cyan-400/20 p-8 w-full max-w-md shadow-[0_0_40px_rgba(34,211,238,0.1)]"
      >
        <div className="flex flex-col items-center mb-8">
          <FaUserShield className="text-cyan-400 text-4xl mb-4" />
          <h1 className="text-2xl font-mono text-cyan-300 mb-2">
            SYSTEM ADMIN PORTAL
          </h1>
          <p className="text-cyan-400/60 text-sm font-mono">
            Restricted Access Protocol v2.4.1
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="text-cyan-300 font-mono text-sm">
                SECURE IDENTIFIER:
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-800/50 border border-cyan-400/30 rounded px-4 py-3 text-cyan-300 font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                placeholder="user@domain.io"
              />
            </div>

            <div>
              <label className="text-cyan-300 font-mono text-sm">
                ENCRYPTION KEY:
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-800/50 border border-cyan-400/30 rounded px-4 py-3 text-cyan-300 font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
                placeholder="••••••••••"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isLoading}
            className="w-full bg-cyan-400/10 border border-cyan-400/30 rounded-lg py-3 text-cyan-300 font-mono hover:bg-cyan-400/20 transition-colors flex items-center justify-center gap-2 relative"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                AUTHENTICATING...
              </div>
            ) : (
              <>
                <FaTerminal className="text-cyan-400" />
                INITIATE ACCESS SEQUENCE
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
                </div>
              </>
            )}
          </motion.button>
        </form>

        {/* Scanline Overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_transparent_24%,_rgba(34,211,238,0.1)_25%,_transparent_26%,_transparent_49%,_rgba(34,211,238,0.1)_50%,_transparent_51%)] bg-[length:100%_4px] animate-scanline" />
        </div>
      </motion.div>

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

export default AdminLogin;