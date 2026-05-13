"use client";

import { Reveal } from "./reveal";

export function SectionLabel({
  children,
  index,
}: {
  children: React.ReactNode;
  index?: string;
}) {
  return (
    <Reveal>
      <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted flex items-center gap-3 mb-12">
        <span className="block w-6 h-px bg-accent" />
        {index && <span className="text-fg-dim">{index} —</span>}
        <span>{children}</span>
      </div>
    </Reveal>
  );
}

export function DisplayHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal>
      <h2
        className={`font-serif font-normal leading-[0.95] tracking-[-0.025em] text-[3rem] sm:text-[5rem] lg:text-[6.5rem] mb-12 ${className}`}
      >
        {children}
      </h2>
    </Reveal>
  );
}
