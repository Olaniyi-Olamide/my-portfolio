/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const principles = [
  {
    id: 1,
    title: "Component-Driven",
    icon: <Boxes />,
  },
  {
    id: 2,
    title: "Responsive Design",
    icon: <Smartphone />,
  },
  {
    id: 3,
    title: "Optimized Performance",
    icon: <Zap />,
  },
  {
    id: 4,
    title: "Type-Safe & Robust",
    icon: <ShieldCheck />,
  },
];

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  ChevronRight,
  Download,
  MapPin,
  Briefcase,
  Calendar,
  Award,
  Sparkles,
  ExternalLink,
  Plus,
  Twitter,
  Linkedin,
  Boxes,
  Smartphone,
  Zap,
  ShieldCheck,
} from "lucide-react";

import { Navbar } from "./components/Navbar";
import { SectionHeading } from "./components/SectionHeading";
import { TechGrid } from "./components/TechGrid";
import { ProjectCard } from "./components/ProjectCard";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { PERSONAL_INFO, PROJECTS, EXPERIENCE_HISTORY } from "./data";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeTab, setActiveTab] = useState<"highlights" | "all">("all");

  // Track mouse coordinates on desktop for the ambient highlight cursor
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse, { passive: true });
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  const featuredProjects = PROJECTS.filter((p) => p.featured);
  // const remainingProjects = PROJECTS.filter((p) => !p.featured);

  const selectedProjects =
    activeTab === "highlights" ? featuredProjects : PROJECTS;

  return (
    <div className="min-h-screen bg-black text-neutral-300 selection:bg-primary selection:text-white relative overflow-hidden font-sans">
      {/* 1. Ambient Background Cursor Spotlight Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000 hidden md:block"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(121, 92, 52, 0.08), transparent 80%)`,
        }}
      />

      {/* Decorative vertical grid lines (structural accentuating) */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-between max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 opacity-5">
        <div className="w-[1px] h-full bg-primary" />
        <div className="w-[1px] h-full bg-primary hidden md:block" />
        <div className="w-[1px] h-full bg-primary hidden lg:block" />
        <div className="w-[1px] h-full bg-primary" />
      </div>

      {/* 2. Floating Header Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <header
        className="relative min-h-screen flex items-center justify-center pt-24 pb-16 z-10 px-6 sm:px-8 lg:px-12"
        id="hero"
      >
        <div className="max-w-4xl mx-auto text-center space-y-8 sm:space-y-10">
          {/* Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full"
            id="hero-tag-badge"
          >
            <Sparkles size={11} className="text-primary animate-pulse" />
            <span className="font-mono text-[14px]  tracking-widest text-accent uppercase font-medium">
              {PERSONAL_INFO.role}
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="font-display text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white leading-[1.1]"
              id="hero-main-title"
            >
              Hello, I am <br />
              <span className="font-bold italic text-primary">Olamide.</span>
            </motion.h1>

            {/* Invisible Stack Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-2xl mx-auto font-sans text-lg text-accent font-light leading-relaxed tracking-wider"
              id="hero-subtitle"
            >
              I am a frontend developer who loves bringing ideas to life in the
              browser. Take a look around!
            </motion.p>
          </div>

          {/* Interactive Calls-To-Action (CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 text-center"
            id="hero-cta-group"
          >
            <a
              href="#projects"
              className="rounded-full w-full sm:w-auto px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-all duration-300 pointer-events-auto"
              id="btn-hero-projects"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="rounded-full w-full sm:w-auto px-8 py-4 border border-primary text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition-all duration-300 pointer-events-auto"
              id="btn-hero-contact"
            >
              Let's Talk
            </a>
          </motion.div>

          {/* Floating visual scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, delay: 1 }}
            className="pt-12 sm:pt-20 flex flex-col items-center gap-1.5 font-mono text-[9px] uppercase text-neutral-500 tracking-widest cursor-pointer select-none"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            id="hero-scroll-indicator"
          >
            <span>Read Bio & Experience</span>
            <div className="w-1.5 h-6 border border-neutral-600 rounded-full flex justify-center p-0.5">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-0.5 h-1.5 bg-primary rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* 4. About Section */}
      <section
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32"
        id="about"
      >
        <SectionHeading
          title="About Me."
          subtitle="I love building softwares and solving problems!"
          badge="/ My Identity"
        />

        <div
          className="grid grid-cols-1  lg:grid-cols-12 gap-12 sm:gap-16 items-start"
          id="about-contents-grid"
        >
          {/* Profile Bio Context Block */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <p className="font-sans text-lg text-accent leading-relaxed font-light">
              I am a Computer Science student and frontend developer with a
              passion for turning complex problems into intuitive digital
              experiences. My journey in tech is fueled by a deep curiosity
              about how things work and a passion for creating impactful user
              experiences on the web.
            </p>

            <p className="font-sans text-lg sm:text-base text-accent leading-relaxed font-light">
              Beyond the code editor, I am committed to continuous growth. When
              I am not coding or building, I am watching football or playing
              video games.
            </p>
            <div className="border-l-4 border-accent pl-1 rounded-l-lg">
              <h3 className="font-display text-xl sm:text-2xl font-normal text-white leading-relaxed">
                "Visual perfection is not just a layout exercise; it is an
                optimized bundle size, smooth animation choreography, and
                reliable database feedback loops."
              </h3>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              className="lg:col-span-5 bg-[#0a0a0a] border border-primary/10 rounded-none p-6 sm:p-8 backdrop-blur-sm relative overflow-hidden space-y-7"
              id="my-approach"
            >
              <h3 className="italic font-bold text-xl">My Approach</h3>

              <div className="grid grid-cols-2 text-primary gap-4">
                {principles.map((p) => (
                  <span
                    key={p.id}
                    className="border rounded-xl border-accent p-3 flex flex-col gap-2"
                  >
                    {p.icon}
                    <p className="text-[1rem] font-bold">{p.title}</p>
                  </span>
                ))}
              </div>
            </div>

            <p className="font-sans text-lg text-accent leading-relaxed font-light my-[1rem]">
              If you would like to collaborate or just talk, feel free to reach
              out!
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/10">
              <div className="space-y-1">
                <span className="block font-mono text-xs uppercase text-neutral-500">
                  LinkdIn
                </span>
                <span className="flex items-center gap-1 font-sans text-lg text-neutral-200">
                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2 bg-primary/5 hover:bg-primary/20 border border-primary/10 hover:border-primary/30 rounded-lg text-primary hover:text-white transition-all duration-300"
                    id="footer-social-linkedin"
                  >
                    <Linkedin size={20} />
                  </a>
                </span>
              </div>
              <div className="space-y-1">
                <span className="block font-mono text-xs uppercase text-neutral-500">
                  Twitter
                </span>
                <span className="flex items-center gap-1 font-sans text-lg text-neutral-200">
                  <a
                    href={PERSONAL_INFO.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter X Profile"
                    className="p-2 bg-primary/5 hover:bg-primary/20 border border-primary/10 hover:border-primary/30 rounded-lg text-primary hover:text-white transition-all duration-300"
                    id="footer-social-twitter"
                  >
                    <Twitter size={20} />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tech Stack Section */}
      <section
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32"
        id="tech-stack"
      >
        <SectionHeading
          title="My Tech Stack."
          subtitle="Here are some of the tools I work with."
          badge="/ Tools"
        />

        {/* Modular Tech Badge Grid with category filtering */}
        <TechGrid />
      </section>

      {/* 6. Projects Section */}
      <section
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32"
        id="projects"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 sm:mb-12">
          <SectionHeading
            title="Selected Projects"
            subtitle="Here are some of the projects I've worked on."
            badge="/ Projects"
          />

          {/* Toggle Tab filters between Featured Highlights and All archives */}
          <div
            className="flex items-center gap-1 border border-primary/20 p-1 bg-black/60 backdrop-blur rounded-none mb-8 sm:mb-0 shrink-0"
            id="project-toggle-tabs"
          >
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 font-mono text-xs tracking-wider uppercase rounded-none transition-colors duration-300 ${
                activeTab === "all"
                  ? "bg-primary text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
              id="tab-projects-highlights"
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveTab("highlights")}
              className={`px-4 py-1.5 font-mono text-xs tracking-wider uppercase rounded-none transition-colors duration-300 ${
                activeTab === "highlights"
                  ? "bg-primary text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
              id="tab-projects-all"
            >
              Completed
            </button>
          </div>
        </div>

        {/* Interactive Grid of Projects */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          id="projects-grid-root"
        >
          <AnimatePresence mode="popLayout">
            {selectedProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* 7. Career/Experience Timeline Section */}
      <section
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32"
        id="experience"
      >
        <SectionHeading
          title="Work Experience."
          subtitle="My professional contributions across tech ventures."
          badge="/ Experience"
        />

        <div
          className="max-w-4xl space-y-12 sm:space-y-16 relative"
          id="experience-timeline-container"
        >
          {/* Vertical axis line connecting milestones */}
          <div className="absolute top-4 bottom-4 left-6 md:left-1/2 w-[1px] bg-gradient-to-b from-primary/30 via-primary/50 to-transparent pointer-events-none" />

          {EXPERIENCE_HISTORY.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-stretch gap-6 md:gap-12 md:text-left ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
                id={`timeline-item-${index}`}
              >
                {/* Timeline node circle center */}
                <div className="absolute left-[20px] md:left-1/2 top-1.5 -translate-x-1.5 md:-translate-x-2.5 z-20 flex h-4 w-4 md:h-5 md:w-5 items-center justify-center rounded-full bg-black border-2 border-primary border-glow">
                  <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-primary" />
                </div>

                {/* Content card left/right side */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 flex flex-col justify-center">
                  <div className="p-6 bg-rich-black/40 border border-primary/10 rounded-2xl hover:border-primary/30 transition-colors duration-300 relative">
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 mb-3 bg-primary/10 border border-primary/15 text-primary rounded font-mono text-[9px] uppercase">
                      <Calendar size={10} />
                      <span>{exp.period}</span>
                    </div>

                    <h3 className="font-display text-xl  font-medium text-white mb-1">
                      {exp.role}
                    </h3>

                    <h4 className="font-mono text-lg text-accent mb-4 flex items-center gap-1.5">
                      <Briefcase size={11} className="text-primary" />
                      <span>{exp.company}</span>
                    </h4>

                    {/* <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                      {exp.description}
                    </p> */}

                    <ul className="marker:text-accent space-y-2 list-disc">
                      {exp.description.map((desc) => (
                        <li
                          key={desc}
                          className="font-sans text-[1rem] text-neutral-50 font-light leading-relaxed"
                        >
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty buffer box to push grid cleanly on screens */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 8. Contact Section */}
      <section
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-32"
        id="contact"
      >
        <SectionHeading title="Get in touch" subtitle="" badge="/ Contact Me" />

        <ContactForm />
      </section>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}
