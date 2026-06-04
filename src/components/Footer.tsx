/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Linkedin, Twitter, ArrowUp, Send } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-black border-t border-primary/10 py-12 md:py-16 mt-20 relative overflow-hidden" id="main-footer">
      {/* Subtle organic light accent behind footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 max-w-lg h-32 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
        
        {/* Left Side: Brand and short tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="font-display text-base font-semibold text-white tracking-tight">
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-primary">.</span>
          </div>
          <p className="font-mono text-[10px] text-accent/60 tracking-wider uppercase">
            Frontend Developer
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-6" id="footer-social-links">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 bg-primary/5 hover:bg-primary/20 border border-primary/10 hover:border-primary/30 rounded-lg text-primary hover:text-white transition-all duration-300"
            id="footer-social-github"
          >
            <Github size={16} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 bg-primary/5 hover:bg-primary/20 border border-primary/10 hover:border-primary/30 rounded-lg text-primary hover:text-white transition-all duration-300"
            id="footer-social-linkedin"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={PERSONAL_INFO.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter X Profile"
            className="p-2 bg-primary/5 hover:bg-primary/20 border border-primary/10 hover:border-primary/30 rounded-lg text-primary hover:text-white transition-all duration-300"
            id="footer-social-twitter"
          >
            <Twitter size={16} />
          </a>
        </div>

        {/* Right Side: Back to top and copyright row */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right gap-3">
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 hover:bg-primary/10 border border-primary/10 rounded-lg text-xs font-mono text-accent hover:text-white transition-all duration-300"
            id="footer-back-to-top"
          >
            <span className="text-[10px] tracking-wider uppercase">Top</span>
            <ArrowUp size={12} className="text-primary animate-bounce" />
          </button>
          
          <p className="text-xs text-neutral-500 font-sans font-light">
            &copy; {currentYear} Olamide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
