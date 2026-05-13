"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { skillsRowA, skillsRowB, skillCategories, type Skill } from "@/lib/data";
import { SectionLabel, DisplayHeading } from "@/components/section-bits";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 md:py-40 border-t border-line overflow-hidden"
    >
      {/* heading container */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <SectionLabel index="06">TECHNICAL SKILLS</SectionLabel>
        <DisplayHeading>
          The{" "}
          <span className="font-serif-italic text-accent">stack</span>{" "}
          I build with
        </DisplayHeading>
      </div>

      {/* MARQUEE BAND — full bleed */}
      <div className="mt-20 mb-24 space-y-5">
        <MarqueeRow items={skillsRowA} direction="left" />
        <MarqueeRow items={skillsRowB} direction="right" />
      </div>

      {/* CATEGORY GRID */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {skillCategories.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.1}>
              <div className="border border-line bg-bg-2 p-7 h-full">
                <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-line">
                  <h3 className="font-serif text-2xl text-fg">{cat.title}</h3>
                  <span className="font-mono text-[0.7rem] tracking-[0.14em] text-fg-dim">
                    {String(cat.items.length).padStart(2, "0")}
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-x-3 gap-y-3">
                  {cat.items.map((skill) => (
                    <SkillRow key={skill.name} skill={skill} />
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────  MARQUEE ROW  ───────────── */
function MarqueeRow({
  items,
  direction,
}: {
  items: Skill[];
  direction: "left" | "right";
}) {
  // duplicate so the loop is seamless
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* edge fades */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--bg) 0%, transparent 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to left, var(--bg) 0%, transparent 100%)",
        }}
      />

      <div
        className={`marquee-track flex gap-3 md:gap-4 whitespace-nowrap ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((skill, i) => (
          <SkillPill key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────  SKILL PILL (in marquee)  ───────────── */
function SkillPill({ skill }: { skill: Skill }) {
  return (
    <div
      className="group inline-flex items-center gap-3 px-5 py-3 border border-line bg-bg-2 hover:border-accent transition-colors duration-300 cursor-default"
    >
      <Image
        src={skill.icon}
        alt={skill.name}
        width={28}
        height={28}
        className="w-7 h-7 object-contain"
      />
      <span className="font-mono text-sm uppercase tracking-[0.1em] text-fg-dim group-hover:text-fg transition-colors">
        {skill.name}
      </span>
    </div>
  );
}

/* ─────────────  SKILL ROW (in category grid)  ───────────── */
function SkillRow({ skill }: { skill: Skill }) {
  return (
    <motion.li
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-3 px-2 py-1.5 -mx-2 hover:bg-bg/40 transition-colors"
    >
      <span className="relative w-6 h-6 shrink-0">
        <Image
          src={skill.icon}
          alt={skill.name}
          width={24}
          height={24}
          className="w-6 h-6 object-contain"
        />
      </span>
      <span className="text-sm text-fg-dim group-hover:text-fg transition-colors truncate">
        {skill.name}
      </span>
    </motion.li>
  );
}
