/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, Experience } from "./types";

export const PERSONAL_INFO = {
  name: "Olamide Olaniyi",
  logoName: "Notbadthoo",
  role: "Junior Frontend Developer",
  bio: "I am a Computer Science student and frontend developer with a passion for turning complex problems into intuitive digital experiences. My journey in tech is fueled by a deep curiosity about how things work and a passion for creating impactful user experiences on the web.",
  location: "Lagos, NG",
  email: "olamideolaniyi616@gmail.com",
  phone: "+234 9068295157",
  github: "https://github.com/Olaniyi-Olamide",
  linkedin: "https://linkedin.com/in/olaniyi-olamide-264557366/",
  twitter: "https://x.com/notbadthoo",
};

export const SKILLS: Skill[] = [
  // Languages
  {
    name: "TypeScript",
    category: "Languages",
    iconName: "typescript",
    proficiency: 94,
  },
  {
    name: "JavaScript (ES6+)",
    category: "Languages",
    iconName: "javascript",
    proficiency: 98,
  },
  {
    name: "HTML5 & CSS3",
    category: "Languages",
    iconName: "htmlcss",
    proficiency: 98,
  },

  // Frameworks
  { name: "React", category: "Frameworks", iconName: "react", proficiency: 96 },
  // { name: "Next.js", category: "Frameworks", iconName: "nextjs", proficiency: 90 },
  {
    name: "Tailwind CSS",
    category: "Frameworks",
    iconName: "tailwind",
    proficiency: 98,
  },
  {
    name: "Framer Motion",
    category: "Frameworks",
    iconName: "motion",
    proficiency: 92,
  },

  // Backend & Tools
  {
    name: "Supabase",
    category: "Backend/Tools",
    iconName: "supabase",
    proficiency: 88,
  },
  // { name: "GraphQL", category: "Backend/Tools", iconName: "graphql", proficiency: 80 },
  {
    name: "Git & GitHub",
    category: "Backend/Tools",
    iconName: "github",
    proficiency: 92,
  },
  {
    name: "Vite & Webpack",
    category: "Backend/Tools",
    iconName: "vite",
    proficiency: 90,
  },

  // Design
  { name: "Figma", category: "Design", iconName: "figma", proficiency: 86 },
  {
    name: "Typography",
    category: "Design",
    iconName: "typography",
    proficiency: 94,
  },
  {
    name: "Motion Choreography",
    category: "Design",
    iconName: "motion",
    proficiency: 90,
  },
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    role: "Frontend Developer",
    company: "Challenge Me Now",
    period: "Mar 2026 - Present",
    description: [
      "Creating a mobile-first, responsive UI using Tailwind CSS to guarantee the assessment platform functions seamlessly across all devices",
      "Utilizing TypeScript to strictly type complex data structures (such as quiz schemas and user metrics), ensuring a highly stable and error-free user experience.",
      "Designing and building intuitive dashboards that visualize user analytics, including performance tracking, progress metrics, and pinpointed 'weak areas'.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "finder",
    title: "Country Finder",
    category: "Completed",
    tagline:
      "An app that helps you find information about any country in the world.",
    description:
      "Country Finder is a sleek, responsive web application that allows users to search for and explore detailed information about countries from around the globe. Built with user experience in mind, it features a seamless dark/light theme toggle and fetches real-time data to display key insights.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Shadcn",
    ],
    liveUrl: "https://search-countries-with-rest-api.netlify.app",
    githubUrl:
      "https://github.com/Olaniyi-Olamide/rest-countries-api-with-color-theme-switcher.git",
    image: "/images/country.jpg",
    featured: true,
  },
  {
    id: "todo",
    title: "Todo App",
    category: "Completed",
    tagline:
      "The classic todo app with a few twists! This app includes a dark/light theme toggle ",
    description:
      "Todo App is a dynamic, highly interactive task management application designed to make organizing daily workflows engaging and effortless. Combining powerful organization tools with an interactive UI, it features a playful authentication flow and custom styling to make productivity feel less like a chore.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "Shadcn",
    ],
    liveUrl: "https://personaltodolistapp.netlify.app",
    githubUrl: "https://github.com/Olaniyi-Olamide/personal-todo-list-app.git",
    image: "/images/Todo.jpg",
    featured: true,
  },
  {
    id: "cart",
    title: "Product List With Cart App",
    category: "Completed",
    tagline: "",
    description:
      "Product List with Cart is a highly interactive, state-driven e-commerce interface designed for a seamless shopping experience. It features a responsive product grid, a dynamic real-time shopping cart, and precise state management to handle item quantities, order confirmations, and total calculations effortlessly.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://productlistwithcartapp.netlify.app",
    githubUrl:
      "https://github.com/Olaniyi-Olamide/product-list-with-cart-app.git",
    image: "/images/productListQithCart.jpg",
    featured: true,
  },
  {
    id: "mortgage",
    title: "Mortgage Repayment Calculator",
    category: "Completed",
    tagline: "Built for calculating complex home loans seamlessly.",
    description:
      "Mortgage Repayment Calculator is a high-precision financial tool designed to simplify complex home loan calculations. Built to deliver instant clarity, it estimates monthly payments and total long-term interest based on loan amounts, interest rates, and terms, providing a comprehensive financial breakdown with a clean, user-friendly interface.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://mortgage-repayment-calculator-app.netlify.app",
    githubUrl:
      "https://github.com/Olaniyi-Olamide/mortgage-repayment-calculator.git",
    image: "/images/mortgageCalculator.jpg",
    featured: true,
  },
  {
    id: "e-commerce",
    title: "E-commerce Product Page",
    category: "Completed",
    tagline: "",
    description:
      "E-commerce Product Page is a premium, feature-rich product showcase designed with conversion and user immersion in mind. It replicates a high-end retail experience, featuring fluid image galleries, responsive interactive states, and a dynamic cart preview, all packaged within a polished, accessible user interface.",
    tech: ["HTML", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://e-commerceproductpage-abc.netlify.app",
    githubUrl: "https://github.com/Olaniyi-Olamide/E-COMMERCE-PRODUCT-PAGE.git",
    image: "/images/e-comerce.jpg",
    featured: true,
  },
  {
    id: "advise",
    title: "Advise Generator App",
    category: "Completed",
    tagline: "A simple application that generates advice.",
    description:
      "Advice Generator is a minimalist, responsive web application designed to deliver a quick dose of wisdom or inspiration at the click of a button.",
    tech: ["HTML", "JavaScript", "CSS"],
    liveUrl: "https://advicegeneratorappproject.netlify.app",
    githubUrl: "https://github.com/Olaniyi-Olamide/ADVICE-GENERATOR-APP.git",
    image: "/images/advisegenerator.jpg",
    featured: true,
  },
  {
    id: "age",
    title: "Age Calculator App",
    category: "Completed",
    tagline: "A simple app for calculating how old you are.",
    description:
      "Age Calculator is a precision web application that instantly determines a user's exact age based on their birthdate. Built with custom validation and a flawless layout, it breaks down age into precise metrics while offering a personalized UI experience.",
    tech: ["HTML", "JavaScript", "CSS"],
    liveUrl: "https://agecalculatorprojectapp.netlify.app",
    githubUrl: "https://github.com/Olaniyi-Olamide/AGE-CALCULATOR.git",
    image: "/images/ageCalculator.jpg",
    featured: true,
  },
  {
    id: "splitter",
    title: "Splitter",
    category: "Completed",
    tagline: "An app for splitting and calculating tips.",
    description:
      "Splitter is a sleek, highly intuitive tip calculator designed to take the math out of dining out. Whether you're paying solo or splitting a large bill among friends, the app instantly calculates the exact tip amount and total cost per person with zero friction.",
    tech: ["HTML", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://tipcalculatorappproject.netlify.app",
    githubUrl: "https://github.com/Olaniyi-Olamide/Tip-Calculator-App.git",
    image: "/images/tipCalculator.jpg",
    featured: true,
  },
  {
    id: "extentions",
    title: "Extentions",
    category: "Completed",
    tagline: "A simple UI of a browser extension ",
    description:
      "Extensions is a sleek browser extension UI with a modern design with features like theme toogle, sorting, etc",
    tech: ["HTML", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://browserextention.netlify.app",
    githubUrl:
      "https://github.com/Olaniyi-Olamide/BROWSER-EXTENTION-MANAGER-UI.git",
    image: "/images/browserUI.jpg",
    featured: true,
  },
];
