"use client";

import { Reveal } from "@/components/reveal";
import { Footer } from "@/components/sections/footer";
import {
  profile,
  education,
  experience,
  projects,
  involvement,
  skills,
} from "@/lib/data";

export default function ResumePage() {
  return (
    <main className="overflow-x-hidden">
      <section className="max-w-[1100px] mx-auto px-6 md:px-10 pt-40 pb-12">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-accent" />
            Resume · CV
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-serif font-normal leading-[0.95] tracking-[-0.03em] text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] mb-6">
            Dominic <em className="italic text-accent">DeCarlo</em>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm text-fg-dim mb-12">
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phoneRaw}`}
              className="hover:text-accent"
            >
              {profile.phone}
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent"
            >
              GitHub ↗
            </a>
            <a
              href="/Dom_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:opacity-70"
            >
              Download PDF ↓
            </a>
          </div>
        </Reveal>
      </section>

      {/* EDUCATION */}
      <ResumeSection num="01" title="Education">
        <ResumeRow
          left={
            <>
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                {education.dates}
              </div>
              <div className="font-mono text-xs text-muted">
                {education.location}
              </div>
            </>
          }
          right={
            <>
              <h3 className="font-serif text-2xl md:text-3xl mb-1">
                {education.school}
              </h3>
              <div className="font-mono text-sm text-fg-dim mb-2">
                {education.degree}
              </div>
              <div className="font-mono text-sm text-muted mb-4">
                GPA {education.gpa} / {education.gpaMax}
              </div>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1 border border-line rounded-full text-xs text-fg-dim"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </>
          }
        />
      </ResumeSection>

      {/* EXPERIENCE */}
      <ResumeSection num="02" title="Experience">
        {experience.map((e, i) => (
          <ResumeRow
            key={i}
            left={
              <>
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                  {e.dates}
                </div>
                <div className="font-mono text-xs text-muted">
                  {e.location}
                </div>
              </>
            }
            right={
              <>
                <h3 className="font-serif text-2xl md:text-3xl mb-1 leading-tight">
                  <em className="italic text-accent">{e.roleHighlight}</em>
                  {e.role && <> {e.role}</>}
                </h3>
                <div className="font-mono text-sm text-fg-dim mb-3">
                  {e.company}
                </div>
                <ul className="flex flex-col gap-2 text-fg-dim leading-[1.55] max-w-[60ch]">
                  {e.points.map((pt, j) => (
                    <li key={j} className="relative pl-5">
                      <span className="absolute left-0 text-accent">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        ))}
      </ResumeSection>

      {/* PROJECTS */}
      <ResumeSection num="03" title="Projects">
        {projects.map((p, i) => (
          <ResumeRow
            key={i}
            left={
              <>
                <div className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                  {p.dateLong}
                </div>
                <div className="font-mono text-xs text-muted">
                  {p.tags.join(" · ")}
                </div>
              </>
            }
            right={
              <>
                <h3 className="font-serif text-2xl md:text-3xl mb-3 leading-tight">
                  {p.title}
                </h3>
                <ul className="flex flex-col gap-2 text-fg-dim leading-[1.55] max-w-[60ch]">
                  {p.details.map((d, j) => (
                    <li key={j} className="relative pl-5">
                      <span className="absolute left-0 text-accent">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        ))}
      </ResumeSection>

      {/* INVOLVEMENT */}
      <ResumeSection num="04" title="Campus Involvement">
        {involvement.map((it, i) => (
          <ResumeRow
            key={i}
            left={
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                {it.dates}
              </div>
            }
            right={
              <>
                <h3 className="font-serif text-2xl md:text-3xl mb-1 leading-tight">
                  {it.name}
                </h3>
                <div className="font-mono text-sm text-fg-dim mb-3">
                  {it.role}
                </div>
                <ul className="flex flex-col gap-2 text-fg-dim leading-[1.55] max-w-[60ch]">
                  {it.points.map((pt, j) => (
                    <li key={j} className="relative pl-5">
                      <span className="absolute left-0 text-accent">—</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </>
            }
          />
        ))}
      </ResumeSection>

      {/* SKILLS */}
      <ResumeSection num="05" title="Technical Skills">
        {Object.entries(skills).map(([cat, list]) => (
          <ResumeRow
            key={cat}
            left={
              <div className="font-mono text-xs uppercase tracking-[0.12em] text-accent">
                {cat}
              </div>
            }
            right={
              <p className="font-serif text-xl leading-[1.5]">
                {list.join(", ")}
              </p>
            }
          />
        ))}
      </ResumeSection>

      <Footer />
    </main>
  );
}

function ResumeSection({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="max-w-[1100px] mx-auto px-6 md:px-10 py-16 border-t border-line">
      <Reveal>
        <div className="grid md:grid-cols-[140px_1fr] gap-6 md:gap-12 mb-10">
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {num}
          </div>
          <h2 className="font-serif text-4xl md:text-5xl tracking-[-0.02em]">
            {title}
          </h2>
        </div>
      </Reveal>
      <div className="flex flex-col gap-12">{children}</div>
    </section>
  );
}

function ResumeRow({
  left,
  right,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <Reveal>
      <div className="grid md:grid-cols-[140px_1fr] gap-3 md:gap-12">
        <div className="md:pt-2">{left}</div>
        <div>{right}</div>
      </div>
    </Reveal>
  );
}
