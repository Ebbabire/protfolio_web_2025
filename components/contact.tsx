"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send, Check, Loader2, AlertCircle } from "lucide-react";
import { PERSONAL_INFO, SOCIALS } from "../constants";
import { toast } from "sonner";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    // Client-side only time to avoid hydration mismatch
    const t = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    t();

    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = "Message cannot be empty";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // send email to ebba.birhanu@gamil.com
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!validate()) return;

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (!res.ok) throw new Error("Email failed");

      setStatus("success");
      // setForm({ name: "", email: "", message: "" });
      setErrors({});

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      if (err instanceof Error) {
        toast.error(`Failed to send message: ${err.message}`);
      }
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <p className="text-gray-400 uppercase tracking-widest mb-4">
            What&apos;s Next?
          </p>
          <h2 className="text-6xl md:text-9xl font-display font-bold uppercase leading-[0.8] tracking-tighter mb-12">
            Let&apos;s work <br />
            <span className="text-gray-600">Together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-white/10 pt-16">
          {/* Left Column: Contact Info */}
          <div className="space-y-12 flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-4">
                  Drop a line
                </h4>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-2xl md:text-4xl font-light text-white hover:text-gray-300 transition-colors inline-flex items-center gap-2 group"
                >
                  {PERSONAL_INFO.email}
                  <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                </a>
              </div>

              <div>
                <h4 className="text-gray-400 uppercase tracking-widest text-sm mb-4">
                  Socials
                </h4>
                <div className="flex gap-8">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-lg text-white hover:text-gray-400 uppercase tracking-wider transition-colors relative group"
                    >
                      {social.platform}
                      <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 text-gray-400 text-sm font-mono flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              ADDIS ABABA, ETHIOPIA • {time}
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 p-8 md:p-12 rounded-3xl border border-white/20 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-8" noValidate>
              <div className="space-y-2 group">
                <div className="flex justify-between">
                  <label
                    htmlFor="name"
                    className={`text-xs uppercase tracking-widest transition-colors ${
                      errors.name
                        ? "text-red-400"
                        : "text-gray-400 group-focus-within:text-white"
                    }`}
                  >
                    Name
                  </label>
                  <AnimatePresence>
                    {errors.name && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="text"
                  id="name"
                  className={`w-full bg-transparent border-b py-4 text-white text-xl focus:outline-none transition-colors placeholder-white/25 ${
                    errors.name
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/20 focus:border-white"
                  }`}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => {
                    setForm({ ...form, name: e.target.value });
                    clearError("name");
                  }}
                />
              </div>

              <div className="space-y-2 group">
                <div className="flex justify-between">
                  <label
                    htmlFor="email"
                    className={`text-xs uppercase tracking-widest transition-colors ${
                      errors.email
                        ? "text-red-400"
                        : "text-gray-400 group-focus-within:text-white"
                    }`}
                  >
                    Email
                  </label>
                  <AnimatePresence>
                    {errors.email && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <input
                  type="email"
                  id="email"
                  className={`w-full bg-transparent border-b py-4 text-white text-xl focus:outline-none transition-colors placeholder-white/25 ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/20 focus:border-white"
                  }`}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => {
                    setForm({ ...form, email: e.target.value });
                    clearError("email");
                  }}
                />
              </div>

              <div className="space-y-2 group">
                <div className="flex justify-between">
                  <label
                    htmlFor="message"
                    className={`text-xs uppercase tracking-widest transition-colors ${
                      errors.message
                        ? "text-red-400"
                        : "text-gray-400 group-focus-within:text-white"
                    }`}
                  >
                    Message
                  </label>
                  <AnimatePresence>
                    {errors.message && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-xs text-red-400 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full bg-transparent border-b py-4 text-white text-xl focus:outline-none transition-colors placeholder-white/25 resize-none ${
                    errors.message
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-white/20 focus:border-white"
                  }`}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                    clearError("message");
                  }}
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="group relative inline-flex items-center gap-4 text-xl uppercase tracking-wider text-white disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {status === "idle" && (
                      <>
                        Send Message{" "}
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                    {status === "submitting" && (
                      <>
                        Sending... <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    )}
                    {status === "success" && (
                      <span className="text-green-400 flex items-center gap-3">
                        Message Sent <Check className="w-5 h-5" />
                      </span>
                    )}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full group-disabled:w-0" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
