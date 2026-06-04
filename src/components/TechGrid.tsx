/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Code, 
  Terminal, 
  Layers, 
  Monitor, 
  Database, 
  Github, 
  Cpu, 
  Zap, 
  PenTool, 
  Type, 
  Sparkles,
  Command
} from "lucide-react";
import { SKILLS } from "../data";
import { Skill } from "../types";

// Dynamic Brand Icon Mapper (renders official lookalike SVGs conforming cleanly to our premium theme)
const getIcon = (name: string) => {
  const normName = name.toLowerCase();
  
  if (normName === "typescript") {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="TypeScript">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm16.711 11.233c1.026 0 1.83.242 2.414.726.584.484.876 1.173.876 2.066 0 .5-.088.94-.265 1.32-.176.381-.433.69-.77.928-.337.237-.733.411-1.189.522-.456.11-1.002.166-1.637.166-.99 0-1.802-.218-2.438-.654-.636-.436-.97-1.1-.998-1.993h2.383c.02.433.153.766.4.998.247.233.642.349 1.185.349.444 0 .8-.094 1.07-.282.269-.188.404-.475.404-.86 0-.324-.112-.573-.335-.747-.223-.174-.632-.321-1.226-.441l-.974-.202c-.99-.204-1.745-.536-2.265-1.001-.52-.464-.78-1.144-.78-2.037 0-.829.283-1.488.85-1.975s1.378-.731 2.439-.731zm-9.362.15v2.016H5.706V24H3.294V13.399H.701v-2.016H8.474z"/>
      </svg>
    );
  }
  
  if (normName.includes("javascript")) {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="JavaScript">
        <path d="M0 0h24v24H0V0zm21.397 18.233c.484-.337.893-.829 1.226-1.474s.5-1.393.5-2.247h-2.585c0 .546-.118 1.004-.355 1.375-.237.371-.591.557-1.061.557-.354 0-.649-.107-.887-.32a1.053 1.053 0 0 1-.355-.8c0-.404.148-.732.444-.984.296-.252.825-.456 1.587-.61l.951-.192c1.079-.218 1.884-.57 2.416-1.056.532-.486.797-1.187.797-2.102 0-.962-.317-1.714-.951-2.257-.633-.542-1.503-.814-2.61-.814-1.066 0-1.954.275-2.664.826-.71.55-1.094 1.343-1.152 2.378h2.646c.038-.501.196-.893.472-1.176.276-.282.684-.424 1.225-.424.364 0 .668.093.914.28.246.185.369.458.369.818 0 .307-.11.551-.331.73-.221.179-.652.333-1.293.46l-.994.192c-1.139.218-1.988.56-2.548 1.026-.56.465-.84 1.15-.84 2.054 0 .93.298 1.666.892 2.207.595.541 1.488.812 2.681.812.98.001 1.776-.226 2.387-.681zM9.914 11.383v8.527c0 .559-.143 1.012-.43 1.359-.286.347-.732.52-1.336.52-.619 0-1.069-.178-1.349-.533s-.42-.888-.42-1.6h-2.585c0 1.28.324 2.234.972 2.863s1.587.943 2.813.943c1.42 0 2.502-.375 3.245-1.127.744-.751 1.116-1.808 1.116-3.171V11.383H9.914z"/>
      </svg>
    );
  }

  if (normName.includes("html5")) {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="HTML5">
        <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm17.3 5.3H6.8l.5 5.5h10l-.5 5.5-4.8 1.6-4.8-1.6-.3-3.3h2.6l.2 1.6 2.3.8 2.3-.8.2-2.7H7.7L6.4 5.3h12.4z"/>
      </svg>
    );
  }

  if (normName === "react") {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" aria-label="React">
        <g stroke="currentColor" strokeWidth="1.6" fill="none">
          <ellipse rx="10" ry="3.8" transform="rotate(0 12 12)" cx="12" cy="12" />
          <ellipse rx="10" ry="3.8" transform="rotate(60 12 12)" cx="12" cy="12" />
          <ellipse rx="10" ry="3.8" transform="rotate(120 12 12)" cx="12" cy="12" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </g>
      </svg>
    );
  }

  if (normName === "next.js") {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Next.js">
        <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm5.17 17.58l-5.69-7.25V17H10V7h1.48l5.69 7.25V7h1.48v10.58zM12 7a5 5 0 1 1-5 5 5 5 0 0 1 5-5z" opacity="0.15"/>
        <path d="M11.48 7H10v10h1.48V10.33l6.23 7.94c.3-.3.57-.63.81-.98l-5.68-7.24H18v-1.5h-4.32z"/>
      </svg>
    );
  }

  if (normName.includes("tailwind")) {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Tailwind CSS">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-2.4 2.6-3.2 4.2-2.4.914.457 1.567 1.11 2.29 1.832C13.681 10.213 14.807 11.34 17 11.34c3.2 0 5.2-1.6 6-4.8-1.2 2.4-2.6 3.2-4.2 2.4-.914-.457-1.567-1.11-2.29-1.832C15.318 6.186 14.19 5.06 12 5.06zm-6 6.54c-3.2 0-5.2 1.6-6 4.8 1.2-2.4 2.6-3.2 4.2-2.4.914.456 1.567 1.109 2.29 1.831 1.188 1.189 2.314 2.315 4.509 2.315 3.2 0 5.2-1.6 6-4.8-1.2 2.4-2.6 3.2-4.2 2.4-.914-.456-1.567-1.109-2.29-1.831-1.192-1.192-2.32-2.318-4.512-2.318z"/>
      </svg>
    );
  }

  if (normName.includes("framer motion") || normName.includes("motion choreography")) {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Framer Motion">
        <path d="M0 0h12L24 12H12L0 24V12h12L0 0z" />
      </svg>
    );
  }

  if (normName === "supabase") {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Supabase">
        <path d="M21.36 11.1H13.1V2c0-.62-.77-.92-1.21-.49L2.24 11.16c-.43.43-.13 1.17.48 1.17h8.26V22c0 .62.77.92 1.21.49l9.65-9.65c.43-.44.12-1.18-.48-1.18z"/>
      </svg>
    );
  }

  if (normName === "graphql") {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="GraphQL">
        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 17.93V14.5a2.5 2.5 0 0 1-2 0v5.43c-3-.41-5.43-2.82-5.84-5.84H11.5a2.5 2.5 0 0 1 0-2H5.16c.41-3 2.82-5.43 5.84-5.84V11.5a2.5 2.5 0 0 1 2 0V5.16c3 .41 5.43 2.82 5.84 5.84H14.5a2.5 2.5 0 0 1 0 2h5.43c-.41 3-2.82 5.43-5.84 5.84z"/>
      </svg>
    );
  }

  if (normName.includes("git")) {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Git">
        <path d="M23.384 11.616l-11-11a.874.874 0 0 0-1.236 0l-11 11a.874.874 0 0 0 0 1.235l11 11a.874.874 0 0 0 1.235 0l11-11a.874.874 0 0 0 0-1.235zM12 17.81a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8zm.842-5.694c0-.442-.35-.794-.793-.794a.795.795 0 0 0-.794.794v1.895a1.898 1.898 0 0 1-1.053 1.705 1.9 1.9 0 1 1-1.4-.41c0-.443.35-.795.794-.795a.795.795 0 0 0 .794-.795V10.12c0-.443.351-.795.794-.795a.795.795 0 0 0 .793.795V12.11z"/>
      </svg>
    );
  }

  if (normName.includes("vite") || normName.includes("webpack")) {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Vite">
        <path d="M19.985 1.729L12 18.333l-7.985-16.604h3.693l4.292 9.042 4.292-9.042z M13.5 11l4.5-9H6l5 10h-2.5l5 10z"/>
      </svg>
    );
  }

  if (normName === "figma") {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Figma">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-4 4c0-2.21 1.79-4 4-4v8c-2.21 0-4-1.79-4-4zm0-8C8 5.79 9.79 4 12 4v8c-2.21 0-4-1.79-4-4zm8 8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4zM12 12H8v4h4v-4z"/>
      </svg>
    );
  }

  if (normName === "typography") {
    return (
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Typography">
        <path d="M12 2L3 21h3.5l2.2-5h6.6l2.2 5H21L12 2zm2.5 11h-5L12 6.5 14.5 13z"/>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" aria-label="Icon">
      <path d="M12 2L1 21h22L12 2zm0 4l6.5 11h-13L12 6z"/>
    </svg>
  );
};

export function TechGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = ["All", "Languages", "Frameworks", "Backend/Tools", "Design"];

  const filteredSkills = activeCategory === "All" 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === activeCategory);

  return (
    <div className="space-y-8" id="tech-selection-container">
      {/* Category Toggles */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-primary/10">
        {categories.map((cat) => (
          <button
            key={cat}
            id={`btn-cat-${cat.toLowerCase().replace("/", "-")}`}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-mono rounded-none transition-all duration-300 relative ${
              activeCategory === cat
                ? "text-white"
                : "text-accent/60 hover:text-white"
            }`}
          >
            {activeCategory === cat && (
              <motion.div
                layoutId="activeCategoryIndicator"
                className="absolute inset-0 bg-primary/20 border border-primary/45 rounded-none -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            {cat}
          </button>
        ))}
      </div>

      {/* Badges Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        id="skills-badges-grid"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={skill.name}
              id={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 0 15px rgba(121, 92, 52, 0.3)"
              }}
              className="flex items-center gap-3 p-4 bg-[#0a0a0a] border border-primary/10 rounded-none cursor-default group transition-all duration-300 hover:border-primary/45 relative overflow-hidden"
            >
              <div className="text-accent/60 group-hover:text-primary transition-colors duration-300 shrink-0">
                {getIcon(skill.name)}
              </div>
              
              <div className="min-w-0 flex-1">
                <span className="block text-sm text-neutral-300 group-hover:text-white transition-colors font-sans truncate">
                  {skill.name}
                </span>
                
                {/* Micro visual gauge bar */}
                <div className="w-full bg-primary/5 h-[2px] mt-1.5 rounded-none overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary" 
                  />
                </div>
              </div>

              {/* Holographic detail popup on badge hover */}
              {hoveredSkill === skill.name && (
                <div className="absolute right-2 top-2 w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Extra Interactive Insight (Displays the hovered proficiency explicitly) */}
      <div className="mt-6 flex items-center gap-2 justify-end text-right">
        <span className="font-mono text-xs text-neutral-500">
          Hover badges for structural depth.
        </span>
        {hoveredSkill && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-1.5 text-xs text-primary font-mono"
            id="skill-info-popover"
          >
            <span>/</span>
            <span>{hoveredSkill} Mastery:</span>
            <span className="font-bold">
              {SKILLS.find(s => s.name === hoveredSkill)?.proficiency}%
            </span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
