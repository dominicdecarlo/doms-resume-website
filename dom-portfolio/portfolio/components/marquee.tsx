export function Marquee({ items }: { items: string[] }) {
  const content = (
    <span className="flex items-center gap-12">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-12 whitespace-nowrap">
          {it}
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
        </span>
      ))}
    </span>
  );

  return (
    <div className="border-y border-line bg-bg-2 py-5 overflow-hidden">
      <div className="flex gap-12 animate-marquee font-serif italic text-2xl md:text-3xl text-fg-dim whitespace-nowrap">
        {content}
        {content}
      </div>
    </div>
  );
}
