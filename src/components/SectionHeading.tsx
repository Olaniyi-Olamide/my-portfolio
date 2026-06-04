/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle: string;
  badge?: string;
}

export function SectionHeading({ id, title, subtitle, badge }: SectionHeadingProps) {
  return (
    <div id={id} className="relative mb-12 sm:mb-16 md:mb-20">
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 mb-4 text-[10px] tracking-[0.25em] uppercase font-mono text-primary bg-primary/5 border border-primary/25 rounded-none"
        >
          {badge}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-4"
      >
        {title}
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl text-accent font-sans text-base sm:text-lg font-light leading-relaxed"
      >
        {subtitle}
      </motion.p>
      
      {/* Decorative premium line */}
      <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/30 to-transparent hidden md:block" />
    </div>
  );
}
