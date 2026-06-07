/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Project } from "../types";

interface ProjectCardProps {
  project: Project;
  index: number;
  key?: any;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between h-full p-6 sm:p-8 bg-[#0a0a0a] border border-[#795c34]/10 rounded-sm transition-all duration-300 hover:border-[#795c34]/40"
      id={`project-card-${project.id}`}
    >
      {/* Decorative interactive line */}
      <div className="absolute top-0 left-0 w-1/4 h-[2px] bg-primary group-hover:w-full transition-all duration-500 rounded-t-sm" />

      <div>
        {/* Header containing meta/category & links */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-muted-accent tracking-widest uppercase">
              {String(index + 1).padStart(2, "0")} /{" "}
              {project.category.toUpperCase()}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="text-neutral-500 hover:text-white transition-colors duration-200 flex items-center justify-center gap-1.5"
                id={`project-github-${project.id}`}
              >
                View Repo <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                className="text-neutral-500 hover:text-primary transition-colors duration-200 flex items-center justify-center gap-1.5"
                id={`project-live-${project.id}`}
              >
                View Project
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Project Image Preview */}
        {project.image && (
          <div className="w-full aspect-[16/10] overflow-hidden mb-6 bg-black border border-[#795c34]/15 relative">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
        )}

        {/* Title & Tagline */}
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#a68b6d] transition-colors duration-300">
          {project.title}
        </h3>

        <p className="font-sans text-sm text-accent leading-relaxed font-normal mb-4">
          {project.tagline}
        </p>

        {/* Expanded Description */}
        <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      <div>
        {/* Dynamic transition highlighter */}
        <div className="w-8 h-[1px] bg-primary group-hover:w-full transition-all duration-300 mb-6" />

        {/* Tags Footer */}
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#795c34]/10">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[9px] font-mono text-[#a68b6d] border border-[#795c34]/20 rounded-none bg-black"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
