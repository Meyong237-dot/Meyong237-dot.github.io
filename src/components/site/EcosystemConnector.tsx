import { useEffect, useRef, useState } from "react";

/**
 * Signature animated connector: one continuous line drawn through the three
 * entity nodes once the section enters view.
 */
export function EcosystemConnector() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
      <svg viewBox="0 0 1200 120" fill="none" className="h-24 w-full">
        <path
          d="M40 60 C 220 -10, 320 130, 500 60 S 800 -10, 960 60 S 1120 100, 1160 60"
          stroke="var(--brand)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={play ? "connector-line" : ""}
          style={play ? undefined : { strokeDasharray: 1200, strokeDashoffset: 1200 }}
        />
        {[200, 600, 1000].map((cx) => (
          <circle key={cx} cx={cx} cy={60} r={4} fill="var(--brand)" opacity={play ? 1 : 0} />
        ))}
      </svg>
    </div>
  );
}
