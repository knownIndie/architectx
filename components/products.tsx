"use client";

import React from "react";

export default function ProductCollection() {
  return (
    <main className="relative w-full min-h-[1800px] bg-[#F4F1EA] text-[#1a1a1a] font-sans px-6 md:px-12 py-10 overflow-x-hidden">

      {/* ── TOP NAV / LABEL ── */}
      <div className="max-w-[1440px] mx-auto border-t border-[#D1CEC7] pt-6 flex items-center gap-2">
        <div className="w-2 h-2 rotate-45 bg-black" />
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase">
          Product Collection
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto relative mt-20">

        {/* ── SECTION 1: DOORS & DESCRIPTION ── */}
        <div className="grid grid-cols-12 gap-4 items-start">
          {/* Spacer */}
          <div className="col-span-1" />

          {/* Main Doors Image (Center-ish) */}
          <div className="col-span-6 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden">
              <img
                src="/images/doors.jpg"
                alt="Doors"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5" />
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-light tracking-tight">
                Doors
              </h2>
            </div>
          </div>

          {/* Text Content (Right) */}
          <div className="col-span-4 pt-20 pl-8">
            <p className="text-[15px] leading-relaxed max-w-[280px] mb-10 text-[#333]">
              Our <span className="font-bold">glazing collection</span> is defined by
              exceptional craftsmanship, refined design, and enduring quality. Made
              for bold architecture and uncompromising vision.
            </p>

            <button className="bg-black text-white px-5 py-3 flex items-center gap-6 group hover:bg-[#222] transition-colors">
              <div className="flex flex-col">
                <svg width="18" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </div>
              <span className="text-[9px] font-bold tracking-[0.3em] uppercase">
                Product Overview
              </span>
            </button>
          </div>
        </div>

        {/* ── SECTION 2: STAGGERED BOTTOM IMAGES ── */}

        {/* Windows - Right Side (Higher up) */}
        <div className="absolute top-[600px] right-0 w-[350px] aspect-[3/4] z-10">
          <div className="relative w-full h-full overflow-hidden">
            <img src="/images/windows.jpg" alt="Windows" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5" />
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-light">
              Windows
            </h3>
          </div>
        </div>

        {/* Structural - Center (Lower) */}
        <div className="absolute top-[850px] left-1/2 -translate-x-1/2 w-[300px] aspect-[4/5] z-10">
          <div className="relative w-full h-full overflow-hidden">
            <img src="/images/structural.jpg" alt="Structural" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5" />
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-light">
              Structural
            </h3>
          </div>
        </div>

        {/* Additional - Left Side (Lowest) */}
        <div className="absolute top-[1050px] left-0 w-[360px] aspect-[3/4] z-10">
          <div className="relative w-full h-full overflow-hidden">
            <img src="/images/additional.jpg" alt="Additional" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/5" />
            <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-light">
              Additional
            </h3>
          </div>
        </div>

      </div>

      {/* ── STICKY NAV BAR (Bottom Center) ── */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#2D2E30] text-white px-8 py-3 flex items-center gap-12 rounded-sm shadow-2xl z-50">
        <div className="w-5 h-5 border border-white/40 flex items-center justify-center rotate-45">
          <div className="w-2 h-2 bg-white" />
        </div>
        <button className="uppercase text-[9px] tracking-[0.4em] font-bold">
          Home
        </button>
        <button className="flex flex-col gap-[4px] opacity-80 hover:opacity-100 transition-opacity">
          <span className="w-5 h-[1.2px] bg-white"></span>
          <span className="w-5 h-[1.2px] bg-white"></span>
        </button>
      </nav>
    </main>
  );
}