const FRAGMENTS = [
  { text: "strategy", top: "12%", left: "6%", size: "1.1rem", drift: "drift-slow" },
  { text: "design", top: "24%", left: "82%", size: "1.4rem", drift: "drift-slower" },
  { text: "technology", top: "68%", left: "9%", size: "1.2rem", drift: "drift-slower" },
  { text: "creativity", top: "78%", left: "74%", size: "1rem", drift: "drift-slow" },
  { text: "learning", top: "46%", left: "91%", size: "0.95rem", drift: "drift-slow" },
  { text: "clarity", top: "86%", left: "42%", size: "1rem", drift: "drift-slower" },
  { text: "craft", top: "8%", left: "56%", size: "0.95rem", drift: "drift-slower" },
];

const DOTS = [
  { top: "18%", left: "24%" },
  { top: "34%", left: "12%" },
  { top: "62%", left: "30%" },
  { top: "22%", left: "70%" },
  { top: "58%", left: "86%" },
  { top: "82%", left: "60%" },
  { top: "40%", left: "48%" },
  { top: "90%", left: "18%" },
];

export function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {FRAGMENTS.map((f) => (
        <span
          key={f.text}
          className={`absolute font-display lowercase tracking-tight text-foreground/[0.07] ${f.drift}`}
          style={{ top: f.top, left: f.left, fontSize: f.size }}
        >
          {f.text}
        </span>
      ))}
      {DOTS.map((d, i) => (
        <span
          key={i}
          className={`absolute h-1.5 w-1.5 rounded-full ${i % 3 === 0 ? "bg-accent/25" : "bg-foreground/10"} ${
            i % 2 === 0 ? "drift-slow" : "drift-slower"
          }`}
          style={{ top: d.top, left: d.left }}
        />
      ))}
    </div>
  );
}
