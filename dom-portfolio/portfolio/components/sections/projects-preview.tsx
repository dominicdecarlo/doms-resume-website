"use client";

import Link from "next/link";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { SectionLabel, DisplayHeading } from "../section-bits";
import { projects } from "@/lib/data";

export function ProjectsPreview() {
  return (
    <section
      id="work"
      className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <SectionLabel index="03">SELECTED WORK</SectionLabel>
      <DisplayHeading>
        Things I have <em className="italic text-accent">built</em>.
      </DisplayHeading>

      <div className="border-t border-line">
        {projects.slice(0, 5).map((p, i) => (
          <ProjectRow key={p.num} {...p} index={i} />
        ))}
      </div>

      <Link
        href="/projects"
        className="mt-12 inline-flex items-center gap-4 font-mono text-sm uppercase tracking-[0.18em] text-fg px-6 py-4 border border-line hover:bg-accent hover:text-bg hover:border-accent transition-colors duration-300 group"
      >
        View All Projects
        <span className="transition-transform duration-300 group-hover:translate-x-1.5">
          →
        </span>
      </Link>
    </section>
  );
}

type RowProps = (typeof projects)[number] & { index: number };

function ProjectRow({ num, title, blurb, date, index }: RowProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.7 }}
    >
      <Link
        ref={ref}
        href="/projects"
        className="group relative grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-baseline py-10 border-b border-line transition-[padding] duration-500 hover:pl-8"
      >
        <span className="absolute left-0 top-0 bottom-0 w-0 bg-accent transition-all duration-500 group-hover:w-[3px]" />
        <span className="font-mono text-sm text-muted">{num}</span>
        <span className="flex flex-col">
          <span className="font-serif text-[clamp(1.5rem,3vw,2.5rem)] leading-tight transition-colors duration-300 group-hover:text-accent">
            {title}
          </span>
          {/* hover-revealed blurb — collapsed by default, expands on hover */}
          <span
            className="font-mono text-[0.78rem] tracking-[0.04em] text-fg-dim mt-0 max-h-0 opacity-0 overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-out group-hover:max-h-[60px] group-hover:opacity-100 group-hover:mt-3"
          >
            {blurb}
          </span>
        </span>
        <span className="font-mono text-xs text-fg-dim text-right min-w-[80px]">
          {date}
        </span>
      </Link>
    </motion.div>
  );
}
