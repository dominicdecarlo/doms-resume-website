"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { Footer } from "@/components/sections/footer";
import { profile } from "@/lib/data";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email || !message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(
      `From: ${name} <${email}>\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="overflow-x-hidden">
      <section className="max-w-[1400px] mx-auto px-6 md:px-10 pt-40 pb-24">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-accent" />
            Get in Touch
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="font-serif font-normal leading-[0.95] tracking-[-0.03em] text-[3.5rem] sm:text-[6rem] lg:text-[8rem] mb-12">
            Drop me a <em className="italic text-accent">line</em>.
          </h1>
        </Reveal>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-20 mt-16">
          {/* form */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-8">
              <Field
                label="Name"
                value={name}
                onChange={setName}
                placeholder="Your name"
              />
              <Field
                label="Email"
                value={email}
                onChange={setEmail}
                placeholder="you@example.com"
                type="email"
              />
              <div className="flex flex-col gap-2">
                <label className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  placeholder="What&rsquo;s on your mind?"
                  className="bg-transparent border-b border-line focus:border-accent outline-none py-3 font-serif text-xl placeholder:text-muted resize-none transition-colors"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="self-start mt-4 inline-flex items-center gap-4 font-mono text-sm uppercase tracking-[0.18em] text-fg px-8 py-4 border border-line hover:bg-accent hover:text-bg hover:border-accent transition-colors duration-300 group"
              >
                Send Message
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                  →
                </span>
              </button>
            </div>
          </Reveal>

          {/* sidebar info */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-10">
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-3">
                  Direct
                </div>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-serif italic text-2xl hover:text-accent transition-colors"
                >
                  {profile.email}
                </a>
              </div>
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-3">
                  Phone
                </div>
                <a
                  href={`tel:${profile.phoneRaw}`}
                  className="font-serif italic text-2xl hover:text-accent transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
              <div>
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-3">
                  Social
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif italic text-2xl hover:text-accent transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="font-serif italic text-2xl hover:text-accent transition-colors"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
              <div className="pt-8 border-t border-line">
                <div className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted mb-3">
                  Currently
                </div>
                <p className="font-serif italic text-xl text-fg-dim">
                  <span className="text-accent">●</span> {profile.status}
                </p>
                <p className="font-serif italic text-xl text-fg-dim mt-1">
                  Based in {profile.location}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent border-b border-line focus:border-accent outline-none py-3 font-serif text-xl placeholder:text-muted transition-colors"
      />
    </div>
  );
}
