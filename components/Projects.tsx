"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Rusty House",
    tags: ["Fluid Window", "Fluid X Vertical (Structural Glazing)", "Fluid X Sliding Door"],
    image: "/projects/rusty-house.png",
  },
  {
    name: "Rosewood Pilates Studio",
    tags: ["Fluid X Sliding Door", "Fluid Glass Skylight / Ridgelight"],
    image: "/projects/rosewood-studio.png",
  },
  {
    name: "Beulah Walk",
    tags: ["Fluid X Vertical (Structural Glazing)", "Fluid Sliding Door", "Fluid Window"],
    image: "/projects/beulah-walk.png",
  },
  {
    name: "Berkeley Road",
    tags: ["Fluid X Sliding Door", "Fluid Sliding Door"],
    image: "/projects/berkeley-road.png",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!headlineRef.current || !sectionRef.current) return;

    const spans = headlineRef.current.querySelectorAll(".clip-word");

    gsap.set(spans, {
      clipPath: "inset(0% 0% 100% 0%)",
      y: 50,
      opacity: 0,
    });
    gsap.set(buttonRef.current, { opacity: 0, y: 12 });

    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        once: true,
      },
    });

    tl.to(spans, {
      clipPath: "inset(0% 0% 0% 0%)",
      y: 0,
      opacity: 1,
      duration: 1.1,
      stagger: 0.13,
    });

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

    // Staggered fade-in for project rows
    rowsRef.current.forEach((row, i) => {
      gsap.set(row, { opacity: 0, y: 16 });
      gsap.to(row, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 88%",
          once: true,
        },
        delay: i * 0.07,
      });
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;600&family=DM+Mono:wght@400;500&display=swap');

        .fp-section {
          background-color: #EDEAE3;
          width: 100%;
          box-sizing: border-box;
          font-family: 'DM Sans', sans-serif;
          padding: 0;
        }

        /* Top rule */
        .fp-top-rule {
          width: 100%;
          height: 1px;
          background-color: #c8c5be;
        }

        /* Header row: label left, headline right */
        .fp-header {
          display: flex;
          align-items: flex-start;
          padding: 28px 44px 0 44px;
          gap: 0;
        }

        .fp-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.20em;
          text-transform: uppercase;
          color: #1a1a1a;
          padding-top: 6px;
          flex-shrink: 0;
          width: 260px;
        }

        .fp-headline-block {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-left: 40px;
        }

        .fp-headline {
          font-family: 'DM Sans', sans-serif;
          font-weight: 200;
          font-size: clamp(44px, 4.8vw, 66px);
          line-height: 1.12;
          color: #1a1a1a;
          letter-spacing: -0.02em;
          margin: 0 0 36px 0;
        }

        .clip-word {
          display: block;
          will-change: clip-path, transform, opacity;
        }

        .fp-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background-color: #1a1a1a;
          color: #EDEAE3;
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 15px 24px;
          border: none;
          cursor: pointer;
          transition: background-color 0.25s ease;
          white-space: nowrap;
        }

        .fp-btn:hover {
          background-color: #333;
        }

        /* Spacer between header and list */
        .fp-spacer {
          height: 80px;
        }

        /* Project list */
        .fp-list {
          width: 100%;
          position: relative;
        }

        .fp-row {
          display: flex;
          align-items: center;
          padding: 24px 44px;
          border-top: 1px solid #c8c5be;
          gap: 0;
          cursor: pointer;
          transition: background-color 0.2s ease;
          position: relative;
          overflow: visible;
        }

        .fp-row:last-child {
          border-bottom: 1px solid #c8c5be;
        }

        .fp-row:hover {
          background-color: rgba(0,0,0,0.02);
          z-index: 10;
        }

        .fp-row-name {
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 22px;
          color: #1a1a1a;
          letter-spacing: -0.01em;
          width: 280px;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }

        .fp-row-tags {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          flex: 1;
          padding-left: 40px;
          position: relative;
          z-index: 2;
        }

        .fp-tag {
          font-family: 'DM Mono', monospace;
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #555;
          border: 1px solid #c8c5be;
          padding: 5px 10px;
          border-radius: 2px;
          white-space: nowrap;
        }

        .fp-row-arrow {
          flex-shrink: 0;
          color: #aaa;
          margin-left: 20px;
          font-family: 'DM Mono', monospace;
          font-size: 14px;
          transition: color 0.2s ease, transform 0.2s ease;
          position: relative;
          z-index: 2;
        }

        .fp-row:hover .fp-row-arrow {
          color: #1a1a1a;
          transform: translateX(3px);
        }

        /* Hover image */
        .fp-row-image {
          position: absolute;
          right: 80px;
          top: 50%;
          transform: translateY(-50%) scale(0.88);
          width: 240px;
          height: 155px;
          border-radius: 6px;
          overflow: hidden;
          opacity: 0;
          pointer-events: none;
          z-index: 3;
          transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
                      transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 12px 40px rgba(0,0,0,0.22), 0 4px 12px rgba(0,0,0,0.10);
        }

        .fp-row-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .fp-row:hover .fp-row-image {
          opacity: 1;
          transform: translateY(-50%) scale(1);
        }
      `}</style>

      <section ref={sectionRef} className="fp-section">
        <div className="fp-top-rule" />

        {/* Header: label + headline */}
        <div className="fp-header">
          <div className="fp-label">
            <svg width="7" height="7" viewBox="0 0 7 7" fill="currentColor">
              <path d="M3.5 0L4.55 2.45L7 3.5L4.55 4.55L3.5 7L2.45 4.55L0 3.5L2.45 2.45L3.5 0Z" />
            </svg>
            Featured Projects
          </div>

          <div className="fp-headline-block">
            <h2 ref={headlineRef} className="fp-headline">
              <span className="clip-word">Each project tells its own story</span>
              <span className="clip-word">of collaboration and precision.</span>
            </h2>

            <button ref={buttonRef} className="fp-btn">
              <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1.5V6.5H11.5M11.5 6.5L7.5 2.5M11.5 6.5L7.5 10.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              View Projects
            </button>
          </div>
        </div>

        {/* Spacer */}
        <div className="fp-spacer" />

        {/* Project rows */}
        <div className="fp-list">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="fp-row"
              ref={(el) => {
                if (el) rowsRef.current[i] = el;
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="fp-row-name">{project.name}</div>
              <div className="fp-row-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="fp-tag">{tag}</span>
                ))}
              </div>
              <div className="fp-row-image">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={260}
                  height={170}
                  style={{ objectFit: "cover" }}
                  priority={hoveredIndex === i}
                />
              </div>
              <span className="fp-row-arrow">↳</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}