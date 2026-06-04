/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Tech Stack", href: "#tech-stack" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active link detector
      const sections = navLinks.map(l => document.getElementById(l.href.replace("#", "")));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section.id}`);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/60 border-b border-primary/10 backdrop-blur-md py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
      id="main-navigation"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1 font-display text-xl font-bold tracking-tighter uppercase italic text-white hover:text-primary transition-colors"
          id="nav-logo"
        >
          {PERSONAL_INFO.logoName}
          <span className="text-accent underline underline-offset-4 decoration-1 font-normal">.Dev</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, idx) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`font-mono text-xs tracking-wider transition-all duration-300 relative py-1 hover:text-white ${
                activeSection === link.href ? "text-primary font-medium" : "text-neutral-400"
              }`}
              id={`nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
            >
              {link.label}
              {activeSection === link.href && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </motion.a>
          ))}

          {/* Social Anchor or Status Capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full"
            id="nav-status-pouch"
          >
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </div>
            <span className="font-mono text-[10px] tracking-widest text-[#a68b6d] uppercase">
              Available to craft
            </span>
          </motion.div>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="absolute top-full left-0 right-0 bg-rich-black/95 border-b border-primary/25 backdrop-blur-xl px-6 py-8 md:hidden flex flex-col gap-6"
            id="mobile-drawer"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-display text-lg tracking-wide transition-colors py-1 ${
                    activeSection === link.href ? "text-primary font-medium" : "text-neutral-300"
                  }`}
                  id={`mobile-nav-link-${link.label.toLowerCase().replace(" ", "-")}`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-primary/10">
              <div className="flex items-center gap-2 text-xs font-mono text-[#a68b6d]">
                <Globe size={13} className="text-primary animate-pulse" />
                <span>Based in {PERSONAL_INFO.location}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
