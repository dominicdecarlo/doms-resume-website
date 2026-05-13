"use client";

import Link from "next/link";
import { Reveal } from "../reveal";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative px-6 md:px-10 pt-32 pb-12 border-t border-line bg-bg-2 mt-24">
      <div className="max-w-[1400px] mx-auto">
        <Reveal>
          <h2 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[0.95] tracking-[-0.03em] mb-16">
            Let&rsquo;s build{" "}
            <em className="italic text-accent">something</em>.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12 pt-12 border-t border-line">
          <Reveal>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-3">
              Email
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="block font-serif text-xl leading-tight hover:text-accent transition-colors"
            >
              {profile.email}
            </a>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mt-6 mb-3">
              Phone
            </div>
            <a
              href={`tel:${profile.phoneRaw}`}
              className="block font-serif text-xl leading-tight hover:text-accent transition-colors"
            >
              {profile.phone}
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-3">
              Elsewhere
            </div>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="block font-serif text-xl leading-tight py-1 hover:text-accent transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              className="block font-serif text-xl leading-tight py-1 hover:text-accent transition-colors"
            >
              GitHub ↗
            </a>
            <Link
              href="/resume"
              className="block font-serif text-xl leading-tight py-1 hover:text-accent transition-colors"
            >
              Resume ↗
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-3">
              Status
            </div>
            <p className="font-serif text-xl leading-tight">
              <span className="text-accent">●</span> {profile.status}
            </p>
            <p className="font-serif text-xl leading-tight mt-1 text-fg-dim">
              Based in {profile.location}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 pt-8 border-t border-line font-mono text-[0.7rem] uppercase tracking-[0.15em] text-muted">
          © 2026 Dominic DeCarlo
        </div>
      </div>
    </footer>
  );
}
