"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import ThemeToggle from "./theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[60]"
      />

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-5 flex items-center justify-between transition-colors duration-500 ${
          scrolled ? "backdrop-blur-md bg-bg/70" : ""
        }`}
      >
        <Link
          href="/"
          className="font-serif italic text-2xl tracking-tight text-fg"
        >
          Dom<span className="text-accent">.</span>
        </Link>

        <div className="flex items-center gap-6 md:gap-10">
          <div className="hidden md:flex gap-10 font-mono text-[0.78rem] uppercase tracking-[0.12em]">
            <NavLink href="/">Index</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/resume">Resume</NavLink>
          </div>
          <ThemeToggle />
        </div>
      </motion.nav>
    </>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-fg-dim hover:text-fg transition-colors duration-300 group py-1"
    >
      {children}
      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
