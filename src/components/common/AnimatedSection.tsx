"use client";

import React, { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  animation?: string;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delayMs = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // Animate ONCE only
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "500ms",
        transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
        transitionDelay: `${delayMs}ms`,
      }}
      className={`transition-all ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-5 pointer-events-none"
      } ${className}`}
    >
      {children}
    </div>
  );
};
