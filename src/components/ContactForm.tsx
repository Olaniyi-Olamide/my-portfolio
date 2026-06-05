/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Database,
  Mail,
} from "lucide-react";
import { sendMessage, getSupabaseConfigStatus } from "../lib/supabase";
import { PERSONAL_INFO } from "../data";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
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
        message: message.trim(),
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
        setStatusMessage(
          response.error || "An unexpected database error occurred."
        );
      }
    } catch (err: any) {
      setSubmitStatus("error");
      setStatusMessage(
        err.message || "Failed to reach the persistence endpoint."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex items-center justify-center  bg-[#0a0a0a] rounded-none border border-primary/10 p-6 sm:p-10 backdrop-blur-md lg:w-[60%]"
      id="contact-inner-grid"
    >
      <div className="">
        <h3 className="font-display text-2xl sm:text-3xl font-medium text-white mb-4">
          Let's forge something meaningful together.
        </h3>
        <p className="font-sans text-md text-accent leading-relaxed mb-6 font-light">
          Whether you want to talk about a potential project or ask a question,
          my inbox is always open. I'll do my best to get back to your within 24
          hours!
        </p>
        <button className="w-full flex gap-3 items-center justify-center rounded-full px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition-all duration-300 pointer-events-auto">
          <Mail />
          <a
            href="mailto:olamideolaniyi616@gmail.com"
            className=""
            id="btn-email"
          >
            Send me an Email
          </a>
        </button>
      </div>
    </div>
  );
}
