"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/reveal";
import { Footer } from "@/components/sections/footer";
import { Marquee } from "@/components/marquee";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="overflow-x-hidden">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-40 pb-16">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-accent" />
            Index of Work · 2024 — 2026
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-serif font-normal leading-[0.95] tracking-[-0.03em] text-[3.5rem] sm:text-[6rem] lg:text-[8rem] mb-8">
            Projects, in <em className="italic text-accent">full</em>.
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="font-serif italic text-xl md:text-2xl text-fg-dim max-w-[55ch]">
            A long-form list of the things I&rsquo;ve actually built —
            transformer LLMs, ML pipelines, computer-vision systems, and a few
            web tools along the way.
          </p>
        </Reveal>
      </section>

      <Marquee
        items={[
          "AI",
          "Machine Learning",
          "Computer Vision",
          "Full-Stack",
          "Data Science",
          "SaaS",
          "Predictive Modeling",
        ]}
      />

      <section className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">
        <div className="flex flex-col gap-0 border-t border-line">
          {projects.map((p, i) => (
            <ProjectCard key={p.num} project={p} index={i} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
      className="grid md:grid-cols-[120px_1fr] gap-5 md:gap-10 py-9 md:py-10 border-b border-line"
    >
      {/* left rail — number + date */}
      <div>
        <div className="font-serif italic text-[2.75rem] text-accent leading-none">
          {project.num}
        </div>
        <div className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-muted mt-2.5">
          {project.dateLong}
        </div>
      </div>

      {/* main column */}
      <div className="flex flex-col gap-3.5">
        <div>
          <h2 className="font-serif text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.05] tracking-[-0.02em] mb-2">
            {project.title}
          </h2>
          <p className="font-serif italic text-lg md:text-xl text-fg-dim max-w-[55ch]">
            {project.blurb}
          </p>
        </div>

        {/* tech stack as inline pills — compact, single row */}
        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-fg-dim border border-line px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <ul className="flex flex-col gap-1.5 text-fg-dim leading-[1.55] text-[0.95rem] max-w-[70ch]">
          {project.details.map((d, j) => (
            <li key={j} className="relative pl-5">
              <span className="absolute left-0 text-accent">—</span>
              {d}
            </li>
          ))}
        </ul>

        {/* visit buttons — github + live site when both exist, side by side */}
        {(project.github || project.site) && (
          <div className="flex flex-wrap gap-2.5 mt-1">
            {project.site && (
              <a
                href={project.site}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] bg-accent text-bg border border-accent px-4 py-2.5 hover:bg-transparent hover:text-accent transition-colors duration-300 group"
              >
                Visit live site
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] border border-line px-4 py-2.5 hover:border-accent hover:text-accent transition-colors duration-300 group"
              >
                View on GitHub
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
