"use client";

import { Reveal } from "../reveal";
import { SectionLabel, DisplayHeading } from "../section-bits";

const stats = [
  { num: "3.6", label: "GPA", desc: "Computer Science & Data Science." },
  {
    num: "10+",
    label: "Shipped projects",
    desc: "From custom LLMs to live SaaS dashboards.",
  },
  {
    num: "2",
    label: "Internships",
    desc: "Thermo Fisher & National Philanthropic Trust.",
  },
  { num: "10+", label: "Languages", desc: "Python, Java, C/C++, JS/TS & more." },
];

export function About() {
  return (
    <section
      id="about"
      className="relative max-w-[1400px] mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <SectionLabel index="01">ABOUT ME</SectionLabel>
      <DisplayHeading>
        I'm passionate about <em className="italic text-accent">AI/ML</em>,
        <br />
        numbers, and building.
      </DisplayHeading>

      <div className="grid md:grid-cols-2 gap-8 md:gap-16">
        <Reveal>
          <p className="font-serif text-[clamp(1.4rem,2.4vw,2.1rem)] leading-[1.3] max-w-[60ch]">
            I&rsquo;m a senior at the{" "}
            <em className="italic text-accent">University of Pittsburgh</em>{" "}
            studying Computer Science and Data Science. I work on
            machine-learning systems that range from transformer LLMs trained
            to soccer computer-vision pipelines and predictive
            analytics for real businesses.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-fg-dim leading-[1.7] text-[1.05rem]">
            Outside the terminal you&rsquo;ll find me playing/watching sports (especially soccer),
            hanging out with friends, working out, or watching movies. I also love cooking, traveling, music, and my dog 😊.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10 mt-12 pt-12 border-t border-line">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif italic text-[3.5rem] leading-none text-accent">
                  {s.num}
                </div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mt-2">
                  {s.label}
                </div>
                <div className="text-fg-dim text-[0.95rem] leading-[1.5] mt-3">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
