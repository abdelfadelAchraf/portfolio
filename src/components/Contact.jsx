import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Validate form data
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    setErrors({});

    emailjs
      .send("service_555mrl71f", "template_n5bmscs", formData, "f11-YM5N3g4PAVum")
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Failed to send message. Please try again."))
      .finally(() => setIsSending(false));
  };

  return (
    <section className="mx-auto max-w-3xl px-4 pt-6" id="contact">
      <Toaster />
      <motion.h2
        className="my-8 text-center text-4xl font-semibold tracking-tighter"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let's Connect
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-800 bg-transparent px-3 py-4  text-sm focus:outline-none"
          />
          {errors.name && <p className="text-sm text-pink-700">{errors.name}</p>}
        </div>

        {/* Email Input */}
        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-800 bg-transparent px-3 py-4 text-sm focus:outline-none"
          />
          {errors.email && <p className="text-sm text-pink-700">{errors.email}</p>}
        </div>

        {/* Message Input */}
        <div>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-800 bg-transparent px-3 py-2 text-sm focus:outline-none"
            rows="6"
          />
          {errors.message && <p className="text-sm text-pink-700">{errors.message}</p>}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          className={`w-full rounded bg-yellow-400 px-4 py-4 text-md font-semibold text-gray-900 
            hover:bg-yellow-500 transition ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
          whileHover={{ scale: 1.02 }}
        >
          {isSending ? "Sending..." : "Send"}
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
