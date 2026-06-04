/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Sparkles, Database } from "lucide-react";
import { sendMessage, getSupabaseConfigStatus } from "../lib/supabase";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [isDemoMode, setIsDemoMode] = useState(false);
  
  const [emailError, setEmailError] = useState("");

  const configStatus = getSupabaseConfigStatus();

  // Validate email on change
  const handleEmailChange = (val: string) => {
    setEmail(val);
    if (!val) {
      setEmailError("");
    } else {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regex.test(val)) {
        setEmailError("Please supply a valid email address");
      } else {
        setEmailError("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim() || emailError) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await sendMessage({
        name: name.trim(),
        email: email.trim(),
        message: message.trim()
      });

      if (response.success) {
        setSubmitStatus("success");
        setIsDemoMode(response.isDemo);
        // Reset state
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus("error");
        setStatusMessage(response.error || "An unexpected database error occurred.");
      }
    } catch (err: any) {
      setSubmitStatus("error");
      setStatusMessage(err.message || "Failed to reach the persistence endpoint.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 bg-[#0a0a0a] rounded-none border border-primary/10 p-6 sm:p-10 backdrop-blur-md" id="contact-inner-grid">
      
      {/* Left pane: context & integration guidelines */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        <div>
          <span className="font-mono text-xs text-primary uppercase tracking-widest block mb-4">
            / Connection Channels
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">
            Let's forge something meaningful together.
          </h3>
          <p className="font-sans text-sm text-accent leading-relaxed mb-6 font-light">
            Whether you have a specific system spec in mind, want to inquire about contract availability, or simply talk visual math concepts—fill down the contact parameters.
          </p>

          <div className="space-y-4 font-mono text-xs">
            <div className="flex items-center gap-3 text-neutral-400">
              <span className="text-primary font-bold">Email:</span>
              <a href="mailto:alexander.vance@designer.io" className="hover:text-primary transition-colors">
                alexander.vance@designer.io
              </a>
            </div>
            <div className="flex items-center gap-3 text-neutral-400">
              <span className="text-primary font-bold">Hours:</span>
              <span>Mon - Fri, 09:00 - 18:00 UTC</span>
            </div>
          </div>
        </div>

        {/* Supabase Status Indicator Capsule */}
        <div className="pt-6 border-t border-primary/10">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Database size={13} className={configStatus.isConfigured ? "text-primary" : "text-neutral-500"} />
              <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-400">
                Supabase Node Status:
              </span>
            </div>
            {configStatus.isConfigured ? (
              <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-mono text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full">
                Active & Persistent (Table: "messages")
              </span>
            ) : (
              <div className="space-y-1">
                <span className="inline-flex items-center gap-1.5 self-start text-[10px] font-mono text-yellow-600/90 bg-yellow-600/5 border border-yellow-600/15 px-2 py-0.5 rounded-full">
                  Config Offline (Using Local Fallback)
                </span>
                <p className="text-[10px] text-neutral-500 font-sans leading-relaxed">
                  Provide <code className="font-mono text-neutral-400 bg-neutral-900 px-1 rounded">VITE_SUPABASE_URL</code> in secrets panel to enable real database ingestion.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Right pane: Actionable Web Form */}
      <div className="lg:col-span-7">
        <form onSubmit={handleSubmit} className="space-y-6" id="form-contact-fields">
          {/* Form Message Prompts */}
          <AnimatePresence mode="wait">
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-primary/10 border border-primary/30 rounded-xl flex items-start gap-3"
                id="contact-submit-success-banner"
              >
                <CheckCircle2 className="text-primary shrink-0 mt-0.5" size={18} />
                <div className="text-xs">
                  <h4 className="font-bold text-white mb-1">Message Dispatched!</h4>
                  <p className="text-accent leading-relaxed">
                    Thank you, your communication has been saved. {isDemoMode ? (
                      <span className="italic block mt-1 text-primary/80 font-mono">
                        (Demo Mode: Written to browser localStorage because Supabase variables are pending)
                      </span>
                    ) : "We will follow up shortly."}
                  </p>
                </div>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-4 bg-red-950/20 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-300"
                id="contact-submit-error-banner"
              >
                <AlertCircle className="shrink-0 mt-0.5" size={18} />
                <div className="text-xs">
                  <h4 className="font-bold text-red-200 mb-1">Dispatch Interrupted</h4>
                  <p className="text-red-300/80 leading-relaxed">{statusMessage}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="space-y-4">
            {/* Input Name */}
            <div>
              <label htmlFor="input-name" className="block font-mono text-[10px] uppercase text-neutral-400 tracking-wider mb-2">
                Your Identity / Name
              </label>
              <input
                type="text"
                id="input-name"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Katherine Cole"
                className="w-full bg-black/60 border border-primary/15 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/25 rounded-none px-4 py-3 placeholder-neutral-600 text-sm font-sans text-neutral-200 transition-all duration-300"
              />
            </div>

            {/* Input Email */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="input-email" className="block font-mono text-[10px] uppercase text-neutral-400 tracking-wider">
                  Email Address
                </label>
                {emailError && (
                  <span className="font-mono text-[10px] text-red-400 animate-pulse">{emailError}</span>
                )}
              </div>
              <input
                type="email"
                id="input-email"
                name="email"
                required
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                placeholder="kath.cole@example.com"
                className={`w-full bg-black/60 border ${
                  emailError ? "border-red-500/50" : "border-primary/15 hover:border-primary/30"
                } focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/25 rounded-none px-4 py-3 placeholder-neutral-600 text-sm font-sans text-neutral-200 transition-all duration-300`}
              />
            </div>

            {/* Input Message */}
            <div>
              <label htmlFor="input-message" className="block font-mono text-[10px] uppercase text-neutral-400 tracking-wider mb-2">
                Project Spec / Message
              </label>
              <textarea
                id="input-message"
                name="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Detail what high-tier visual system we are planning to build..."
                className="w-full bg-black/60 border border-primary/15 hover:border-primary/30 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/25 rounded-none px-4 py-3 placeholder-neutral-600 text-sm font-sans text-neutral-200 transition-all duration-300 resize-none"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            id="btn-form-submit"
            disabled={isSubmitting || !name || !email || !message || Boolean(emailError)}
            whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
            className={`w-full py-4 px-6 rounded-none text-xs font-bold font-mono tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
              isSubmitting || !name || !email || !message || Boolean(emailError)
                ? "bg-neutral-950 border border-neutral-900 text-neutral-600 cursor-not-allowed"
                : "bg-primary text-black border border-primary/10 hover:opacity-90 font-bold"
            }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Dispatching parameters...</span>
              </>
            ) : (
              <>
                <Send size={12} className="text-white/80" />
                <span>Initialize transmission</span>
              </>
            )}
          </motion.button>
        </form>
      </div>
    </div>
  );
}
