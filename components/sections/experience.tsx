"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { experience, involvement } from "@/lib/data";
import { SectionLabel, DisplayHeading } from "@/components/section-bits";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-6 md:px-12 py-32 md:py-40 border-t border-line overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <SectionLabel index="04">EXPERIENCE</SectionLabel>
        <DisplayHeading>
          Where I've{" "}
          <span className="font-serif-italic text-accent">worked</span>
        </DisplayHeading>

        {/* TIMELINE */}
        <div className="relative mt-24">
          {/* Center dotted line — desktop only */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] timeline-dashed"
          />

          <div className="space-y-20 lg:space-y-32">
            {experience.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>

        {/* CAMPUS INVOLVEMENT */}
        <div className="mt-32">
          <Reveal>
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-dim mb-3">
              05 — CAMPUS INVOLVEMENT
            </p>
            <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] text-fg mb-12">
              Beyond the{" "}
              <span className="font-serif-italic text-accent">classroom</span>
            </h3>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {involvement.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.1}>
                <div className="group relative border border-line bg-bg-2 p-6 md:p-8 h-full hover:border-accent/40 transition-all duration-500">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-serif text-2xl md:text-3xl text-fg leading-tight">
                        {item.name}
                      </h4>
                      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent mt-2">
                        {item.role}
                      </p>
                    </div>
                    <span className="font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fg-dim text-right shrink-0 pt-1">
                      {item.dates}
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-fg-dim leading-relaxed text-[0.95rem]">
                    {item.points.map((p, idx) => (
                      <li
                        key={idx}
                        className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────  TIMELINE ITEM (alternating)  ───────────── */
function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experience)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative">
      {/* CENTER NODE — desktop only */}
      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative w-4 h-4"
        >
          {/* outer pulse */}
          <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
          {/* dot */}
          <span className="relative block w-4 h-4 rounded-full bg-accent" />
          {/* outer ring (static) */}
          <span className="absolute -inset-2 rounded-full border border-accent/30" />
        </motion.div>
      </div>

      {/* GRID — flip on alternating rows */}
      <div className="grid lg:grid-cols-2 gap-y-6 lg:gap-x-16">
        {/* LEFT side card OR spacer depending on index */}
        {isLeft ? (
          <>
            <ExperienceCard exp={exp} inView={inView} side="left" />
            <div className="hidden lg:block" />
          </>
        ) : (
          <>
            <div className="hidden lg:block" />
            <ExperienceCard exp={exp} inView={inView} side="right" />
          </>
        )}
      </div>

      {/* MOBILE NODE on the left */}
      <div className="lg:hidden absolute -left-2 top-2 z-10">
        <span className="relative block w-3 h-3">
          <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
          <span className="relative block w-3 h-3 rounded-full bg-accent" />
        </span>
      </div>
    </div>
  );
}

function ExperienceCard({
  exp,
  inView,
  side,
}: {
  exp: (typeof experience)[number];
  inView: boolean;
  side: "left" | "right";
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === "left" ? -40 : 40,
        rotateY: side === "left" ? -8 : 8,
      }}
      animate={
        inView
          ? { opacity: 1, x: 0, rotateY: 0 }
          : {}
      }
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: [0.2, 0.8, 0.2, 1],
      }}
      style={{ perspective: 1000 }}
      className={`group relative border border-line bg-bg-2 p-6 md:p-8 hover:border-accent/40 transition-all duration-500 ${
        side === "right" ? "lg:text-left" : ""
      }`}
    >
      {/* tiny tab connecting to center line */}
      <span
        aria-hidden
        className={`hidden lg:block absolute top-10 h-px w-12 bg-line-strong ${
          side === "left" ? "right-[-3rem]" : "left-[-3rem]"
        }`}
      />

      {/* Date */}
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-accent mb-4">
        {exp.dates}
      </p>

      {/* Role */}
      <h3 className="font-serif text-2xl md:text-3xl leading-tight text-fg mb-1">
        <span className="font-serif-italic">{exp.roleHighlight}</span>
        {exp.role && <span className="text-fg-dim"> {exp.role}</span>}
      </h3>

      {/* Company · Location */}
      <p className="font-mono text-[0.78rem] uppercase tracking-[0.12em] text-fg-dim mt-2 mb-6">
        {exp.company} <span className="text-muted">— {exp.location}</span>
      </p>

      {/* Points */}
      <ul className="space-y-3 text-fg-dim leading-relaxed text-[0.95rem]">
        {exp.points.map((p, idx) => (
          <li
            key={idx}
            className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-accent before:rounded-full"
          >
            {p}
          </li>
        ))}
      </ul>

      {/* corner notch — subtle aesthetic detail */}
      <span
        aria-hidden
        className="absolute top-0 right-0 w-4 h-4 border-t border-r border-accent/0 group-hover:border-accent transition-colors duration-500"
      />
    </motion.div>
  );
}
