// Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import { z } from "zod";

const Contact = () => {
  const contactSchema = z.object({
    name: z.string().min(2, "IDENTITY VERIFICATION FAILED").max(50, "NAME TOO LONG"),
    email: z.string().email("INVALID TRANSMISSION PROTOCOL"),
    message: z.string().min(10, "MESSAGE TOO SHORT").max(500, "DATA OVERFLOW"),
  });

  const [formValues, setFormValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = () => {
    try {
      contactSchema.parse(formValues);
      setErrors({});
      return true;
    } catch (validationError) {
      const errorMessages = validationError.errors.reduce((acc, err) => {
        acc[err.path[0]] = err.message;
        return acc;
      }, {});
      setErrors(errorMessages);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setDisabled(true);
    try {
      const { data } = await axios.post("/message/create", formValues);
      if (data.success) {
        toast.success("TRANSMISSION SUCCESSFUL!");
        setFormValues({ name: "", email: "", message: "" });
      }
    } catch (error) {
      toast.error("SERVER CONNECTION TERMINATED");
    } finally {
      setDisabled(false);
    }
  };

  return (
    <div className="relative py-20 px-4 bg-gray-900 border-b border-cyan-400/20 flex justify-center items-center flex-col" id="contact">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              opacity: [0, 0.5, 0],
              transition: {
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 2
              }
            }}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl sm:text-5xl font-bold mb-12 text-center text-cyan-400 font-mono "
      >
        > initiate_contact_ protocol
      </motion.h2>

    < motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.5, delay: 0.2 }}
                 className="max-w-2xl  relative p-4 bg-gray-900/50 rounded-xl border border-cyan-400/20 hover:border-cyan-400/40 transition-colors"
               >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-cyan-300 font-mono">$ user_identity:</label>
            <input
              name="name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-cyan-400/30 rounded px-4 py-3 text-cyan-300 font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
              placeholder="Enter your callsign"
            />
            {errors.name && <p className="text-red-400/80 font-mono text-sm">! {errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-cyan-300 font-mono flex whitespace-nowrap">$ transmission_frequency:</label>
            <input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-cyan-400/30 rounded px-4 py-3 text-cyan-300 font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
              placeholder="Enter comms channel(mailId)"
            />
            {errors.email && <p className="text-red-400/80 font-mono text-sm">! {errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label className="text-cyan-300 font-mono">$ message_payload:</label>
            <textarea
              name="message"
              rows="4"
              value={formValues.message}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-cyan-400/30 rounded px-4 py-3 text-cyan-300 font-mono focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/50"
              placeholder="Encode your message..."
            />
            {errors.message && <p className="text-red-400/80 font-mono text-sm">! {errors.message}</p>}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={disabled}
            className="w-full bg-cyan-400/10 border border-cyan-400/30 rounded-lg py-3 text-cyan-300 font-mono hover:bg-cyan-400/20 transition-colors flex items-center justify-center gap-2"
          >
            <span className="animate-pulse">⨳</span>
            INITIATE TRANSMISSION
            <span className="animate-pulse">⨳</span>
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;