"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // parallax layers
  const yContent = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const yMark = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative min-h-screen flex items-center px-6 md:px-10 overflow-hidden"
    >
      {/* editorial side-mark — a thin vertical rule + tiny number label */}
      <motion.div
        style={{ y: yMark }}
        className="hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 flex-col items-center gap-4 z-0 pointer-events-none"
        aria-hidden
      >
        <span className="block w-px h-32 bg-line" />
        <span className="font-mono text-[0.6rem] tracking-[0.3em] text-muted uppercase rotate-90 mt-8 origin-center">
          PORTFOLIO / 2026
        </span>
        <span className="block w-px h-32 bg-line" />
      </motion.div>

      {/* content */}
      <motion.div
        style={{ y: yContent, opacity: opacityContent }}
        className="relative z-[2] max-w-[1400px] mx-auto w-full grid md:grid-cols-[1.4fr_1fr] gap-8 md:gap-16 items-center pt-24 md:pt-0"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-mono text-xs uppercase tracking-[0.18em] text-muted flex items-center gap-3 mb-6"
          >
            <span className="block w-6 h-px bg-accent" />
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
            Portfolio · 2026
          </motion.div>

          <h1 className="font-serif font-normal leading-[0.92] tracking-[-0.04em] text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10.5rem]">
            <Line>Hi,</Line>
            <Line delay={0.12}>
              I&rsquo;m{" "}
              <em className="italic text-accent inline-block transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-2 hover:-rotate-2 cursor-default">
                Dom
              </em>
              <span className="text-accent">.</span>
            </Line>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-8 font-serif italic text-lg md:text-xl text-fg-dim max-w-md"
          >
            Computer Science &amp; Data Science student at the University of
            Pittsburgh — building things at the intersection of{" "}
            <span className="text-accent">AI</span>, design, and quiet
            ambition.
          </motion.p>
        </div>

        <PhotoCard />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-xs uppercase tracking-[0.2em] text-muted flex flex-col items-center gap-3 z-[3]"
      >
        <span>Scroll</span>
        <span
          className="block w-px h-8 animate-scroll-hint"
          style={{
            background: "linear-gradient(180deg, var(--accent), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}

function Line({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.2, 0.8, 0.2, 1],
        }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function PhotoCard() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 1 }}
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setTilt({ x, y });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      style={{
        transform: `perspective(1000px) rotate(${
          -1.5 + tilt.x * 2
        }deg) rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 6}deg)`,
        transition: "transform 0.4s ease",
      }}
      className="relative aspect-[4/5] border border-line overflow-hidden bg-gradient-to-b from-bg-2 to-bg"
      data-cursor="hover"
    >
      {/* placeholder — replace with <Image src="/dom.jpg" ... /> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted font-mono text-[0.7rem] uppercase tracking-[0.2em] text-center p-8">
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="w-12 h-12 text-accent opacity-60"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" />
        </svg>
        <span>
          Photo
          <br />
          placeholder
        </span>
        <span className="opacity-60">
          drop image at <br />
          /public/dom.jpg
        </span>
      </div>

      {/* gradient overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-bg/60" />

      {/* meta line at bottom */}
      <div className="absolute bottom-5 left-5 right-5 flex justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-dim z-[2]">
        <span>Pittsburgh, PA</span>
        <span>2026</span>
      </div>
    </motion.div>
  );
}
