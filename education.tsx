"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { education } from "@/lib/data";
import { SectionLabel, DisplayHeading } from "@/components/section-bits";
import { Reveal, StaggerReveal } from "@/components/reveal";

export function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  // GPA dial percentage
  const gpaPct = (parseFloat(education.gpa) / parseFloat(education.gpaMax)) * 100;

  return (
    <section
      ref={sectionRef}
      id="education"
      className="relative px-6 md:px-12 py-32 md:py-40 border-t border-line"
    >
      <div className="relative max-w-7xl mx-auto">
        <SectionLabel index="02">EDUCATION</SectionLabel>

        <DisplayHeading>
          Studying at the{" "}
          <span className="font-serif-italic pitt-underline">University of Pittsburgh</span>
        </DisplayHeading>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-20">
          {/* LEFT — degree card with Pitt shield-style ribbon */}
          <Reveal className="lg:col-span-7">
            <div className="relative border border-line bg-bg-2 p-8 md:p-12 overflow-hidden group hover:border-line-strong transition-colors duration-500">
              {/* corner ribbon — Pitt blue/gold */}
              <div className="absolute -top-1 -left-1 flex">
                <div
                  className="h-1 w-20"
                  style={{ background: "var(--pitt-blue)" }}
                />
                <div
                  className="h-1 w-12"
                  style={{ background: "var(--pitt-gold)" }}
                />
              </div>
              <div className="absolute -bottom-1 -right-1 flex">
                <div
                  className="h-1 w-12"
                  style={{ background: "var(--pitt-gold)" }}
                />
                <div
                  className="h-1 w-20"
                  style={{ background: "var(--pitt-blue)" }}
                />
              </div>

              <p
                className="font-mono text-[0.7rem] uppercase tracking-[0.18em] mb-3"
                style={{ color: "var(--pitt-blue)" }}
              >
                {education.school}
              </p>

              <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] mb-8 text-fg">
                {education.degree.split("&")[0]}
                <span className="font-serif-italic" style={{ color: "var(--pitt-gold)" }}>
                  &
                </span>
                {education.degree.split("&")[1]}
              </h3>

              <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm font-mono text-fg-dim">
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted mb-1">
                    Period
                  </span>
                  {education.dates}
                </div>
                <div>
                  <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted mb-1">
                    Location
                  </span>
                  {education.location}
                </div>
              </div>

              {/* H2P accent in the corner — "Hail to Pitt" */}
              <div
                className="absolute bottom-6 right-8 font-serif-italic text-7xl md:text-8xl select-none pointer-events-none opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-700"
                style={{ color: "var(--pitt-blue)" }}
              >
                H2P
              </div>
            </div>
          </Reveal>

          {/* RIGHT — animated GPA dial + Pitt block */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <div className="border border-line bg-bg-2 p-8 md:p-10 h-full flex flex-col justify-center items-center text-center relative overflow-hidden">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted mb-6">
                CUMULATIVE GPA
              </p>

              <GpaDial pct={gpaPct} value={education.gpa} max={education.gpaMax} />

              <p className="mt-8 text-sm font-mono text-fg-dim">
                Dean's List · Honors Program eligible
              </p>
            </div>
          </Reveal>
        </div>

        {/* COURSEWORK */}
        <div className="mt-20">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-dim mb-6">
            Relevant coursework — 12 / 12
          </p>

          <StaggerReveal stagger={0.04}>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {education.coursework.map((course) => (
                <CourseChip key={course} label={course} />
              ))}
            </div>
          </StaggerReveal>
        </div>
      </div>
    </section>
  );
}

/* ──────────────  GPA DIAL  ────────────── */
function GpaDial({
  pct,
  value,
  max,
}: {
  pct: number;
  value: string;
  max: string;
}) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  const r = 70;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;

  return (
    <div className="relative">
      <svg ref={ref} width={170} height={170} viewBox="0 0 170 170">
        {/* track */}
        <circle
          cx="85"
          cy="85"
          r={r}
          fill="none"
          stroke="var(--line-strong)"
          strokeWidth="6"
        />
        {/* Pitt blue arc — high contrast in both themes */}
        <motion.circle
          cx="85"
          cy="85"
          r={r}
          fill="none"
          stroke="var(--pitt-blue)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: inView ? c - dash : c }}
          transition={{ duration: 1.6, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          transform="rotate(-90 85 85)"
        />
        {/* small gold accent dot at the arc's leading edge */}
        <motion.circle
          cx="85"
          cy="15"
          r="5"
          fill="var(--pitt-gold)"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 1.7 }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-serif text-5xl text-fg leading-none">{value}</span>
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.15em] text-fg-dim mt-2">
          / {max}
        </span>
      </div>
    </div>
  );
}

/* ──────────────  COURSE CHIP  ────────────── */
function CourseChip({ label }: { label: string }) {
  return (
    <motion.span
      whileHover={{ y: -2 }}
      className="group relative px-4 py-2 border border-line text-sm font-mono text-fg-dim hover:text-fg transition-colors duration-300 cursor-default overflow-hidden"
    >
      {/* Pitt blue/gold sweep on hover */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"
        style={{
          background:
            "linear-gradient(to right, var(--pitt-blue) 0%, var(--pitt-blue) 50%, var(--pitt-gold) 50%, var(--pitt-gold) 100%)",
          opacity: 0.18,
        }}
      />
      <span className="relative">{label}</span>
    </motion.span>
  );
}
