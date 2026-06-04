/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, Experience } from "./types";

export const PERSONAL_INFO = {
  name: "Olaniyi Olamide",
  logoName: "Notbadthoo",
  role: "Junior Frontend Developer",
  bio: "I specialize in constructing performant, visually refined web applications. By pairing motion choreography with elegant typography, I craft digital environments where engineering meets editorial-grade design.",
  location: "London, UK",
  email: "olamideolaniyi616@gmail.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com/notbadthoo",
};

export const SKILLS: Skill[] = [
  // Languages
  { name: "TypeScript", category: "Languages", iconName: "typescript", proficiency: 94 },
  { name: "JavaScript (ES6+)", category: "Languages", iconName: "javascript", proficiency: 98 },
  { name: "HTML5 & CSS3", category: "Languages", iconName: "htmlcss", proficiency: 98 },
  
  // Frameworks
  { name: "React", category: "Frameworks", iconName: "react", proficiency: 96 },
  // { name: "Next.js", category: "Frameworks", iconName: "nextjs", proficiency: 90 },
  { name: "Tailwind CSS", category: "Frameworks", iconName: "tailwind", proficiency: 98 },
  { name: "Framer Motion", category: "Frameworks", iconName: "motion", proficiency: 92 },
  
  // Backend & Tools
  { name: "Supabase", category: "Backend/Tools", iconName: "supabase", proficiency: 88 },
  // { name: "GraphQL", category: "Backend/Tools", iconName: "graphql", proficiency: 80 },
  { name: "Git & GitHub", category: "Backend/Tools", iconName: "github", proficiency: 92 },
  { name: "Vite & Webpack", category: "Backend/Tools", iconName: "vite", proficiency: 90 },
  
  // Design
  { name: "Figma", category: "Design", iconName: "figma", proficiency: 86 },
  { name: "Typography", category: "Design", iconName: "typography", proficiency: 94 },
  { name: "Motion Choreography", category: "Design", iconName: "motion", proficiency: 90 },
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    role: "Lead Frontend Systems Engineer",
    company: "Aura Design Studio",
    period: "2024 - Present",
    description: "Architecting high-performance serverless React applications and reusable visual language systems. Reduced bundle sizes by 32% and achieved perfect Lighthouse performance scores through aggressive chunk-splitting, tree-shaking, and lazy-rendering patterns.",
  },
  {
    role: "Senior UI/UX Developer",
    company: "Vellum Labs",
    period: "2022 - 2024",
    description: "Designed and engineered web-based publishing workspaces. Lead a team of 4 implementing a custom text formatting editor, real-time sync with offline support, and bespoke canvas layouts with smooth Framer Motion interactions.",
  },
  {
    role: "Frontend Engineer",
    company: "Zenith Software",
    period: "2020 - 2022",
    description: "Built financial analytics dashboards featuring heavy data visualization using D3.js and Recharts. Spearheaded migration from legacy JavaScript to modern strict TypeScript and Tailwind CSS.",
  }
];

export const PROJECTS: Project[] = [
  {
    id: "aether",
    title: "Aether Engine",
    category: "Prototyping & Generative Design",
    tagline: "Procedural web layout engine running on real-time physics constraints.",
    description: "A generative canvas studio designed for creative technologists. Features automatic fluid grid generation, magnetic boundary anchors, and interactive vector generation driven by high-frequency layout computations.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    liveUrl: "https://example.com/aether",
    githubUrl: "https://github.com",
    image: "/src/assets/images/aether_preview_1780554128873.png",
    featured: true,
  },
  {
    id: "vellum",
    title: "Vellum Workspace",
    category: "Productivity",
    tagline: "Minimalist desktop-grade writing browser with local-first file replication.",
    description: "A gorgeous, distraction-free environment for prose, code, and documentation. Powered by offline-first replication, multi-format markdown transformations, and micro-interactivity that adapts to reading velocities.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Lucide React"],
    liveUrl: "https://example.com/vellum",
    githubUrl: "https://github.com",
    image: "/src/assets/images/vellum_preview_1780554153300.png",
    featured: true,
  },
  {
    id: "chronos",
    title: "Chronos Analytics",
    category: "Finance & WebGL",
    tagline: "High-frequency dashboard featuring interactive trading visualizers.",
    description: "A high-performance charting interface displaying complex streaming metrics. Standardized rendering pipelines, sub-millisecond response visualizers, and interactive filters with customized high-contrast telemetry lines.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Motion", "Vite"],
    liveUrl: "https://example.com/chronos",
    githubUrl: "https://github.com",
    image: "/src/assets/images/chronos_preview_1780554173070.png",
    featured: false,
  },
  {
    id: "helix",
    title: "Helix Web Studio",
    category: "SaaS & Collaboration",
    tagline: "Real-time canvas platform for multi-user visual layouts.",
    description: "A collaborative sandbox for digital designers to prototype layouts in real time. Features pixel-perfect cursors, instant style overrides, shared asset libraries, and server-coordinated project persistence.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Supabase"],
    liveUrl: "https://example.com/helix",
    githubUrl: "https://github.com",
    image: "/src/assets/images/helix_preview_1780554191068.png",
    featured: false,
  }
];
