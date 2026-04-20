"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!headlineRef.current || !sectionRef.current) return;

    const spans = headlineRef.current.querySelectorAll(".clip-word");

    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      },
    });

    // Set initial states
    gsap.set(labelRef.current, { opacity: 0, y: 8 });
    gsap.set(spans, {
      clipPath: "inset(0% 0% 100% 0%)",
      y: 50,
      opacity: 0,
    });
    gsap.set(buttonRef.current, { opacity: 0, y: 12 });

    // Label fades in first
    tl.to(labelRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    });

    // Headline words clip in
    tl.to(
      spans,
      {
        clipPath: "inset(0% 0% 0% 0%)",
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.12,
      },
      "-=0.2"
    );

    // Button fades in last
    tl.to(
      buttonRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "#EDEBE5" }}
    >
      <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-8">

        {/* Label */}
        <span
          ref={labelRef}
          className="flex items-center gap-2 tracking-[0.2em] uppercase text-xs font-medium"
          style={{
            fontFamily: "'DM Mono', 'Courier New', monospace",
            color: "#1a1a1a",
          }}
        >
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="currentColor"
            className="shrink-0"
          >
            <path d="M4 0L5.2 2.8L8 4L5.2 5.2L4 8L2.8 5.2L0 4L2.8 2.8L4 0Z" />
          </svg>
          About Fluid Glass
        </span>

        {/* Headline */}
        <h2
          ref={headlineRef}
          className="leading-[1.12] text-center"
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontWeight: 300,
            fontSize: "clamp(38px, 4.5vw, 76px)",
            color: "#111111",
            letterSpacing: "-0.01em",
          }}
        >
          <span className="clip-word block">
            We bring architecture to life
          </span>
          <span className="clip-word block">
            through{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              craft
            </span>{" "}
            and{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              innovation.
            </span>
          </span>
          <span className="clip-word block">
            Trusted by architects who
          </span>
          <span className="clip-word block">
            demand{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              precision, beauty,
            </span>{" "}
            and care.
          </span>
        </h2>

        {/* CTA Button */}
        <button
          ref={buttonRef}
          className="group flex items-center gap-3 px-7 py-3 cursor-pointer transition-all duration-300"
          style={{
            backgroundColor: "#111111",
            color: "#EDEBE5",
            fontFamily: "'DM Mono', 'Courier New', monospace",
            fontSize: "11px",
            letterSpacing: "0.18em",
            fontWeight: 500,
            textTransform: "uppercase",
            border: "none",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2a2a2a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#111111";
          }}
        >
          <svg
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M0 5H12M8 1L12 5L8 9"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Who We Are
        </button>
      </div>
    </section>
  );
}