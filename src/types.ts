/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl?: string | null;
  githubUrl?: string | null;
  image?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "Languages" | "Frameworks" | "Backend/Tools" | "Design";
  iconName: string;
  proficiency: number; // percentage, e.g. 90
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
  created_at?: string;
}
