"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      {/* Overlay (optional dark filter for readability) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-12 pt-100">
        {/* Heading */}
        <h1
          className="
            text-3xl          /* base (mobile <640px) */
            sm:text-4xl       /* small screens ≥640px */
            md:text-5xl       /* medium screens ≥768px */
            lg:text-6xl       /* large screens ≥1024px */
            xl:text-7xl       /* extra-large screens ≥1280px */
            2xl:text-6xl      /* 2x-large screens ≥1536px */
            font-bold 
            mb-6
          "
        >
          With You Always, All Ways!
        </h1>

        {/* Subheading */}
        <p
          className="
            text-base         /* base (mobile <640px) */
            sm:text-lg        /* small screens ≥640px */
            md:text-xl        /* medium screens ≥768px */
            lg:text-2xl       /* large screens ≥1024px */
            xl:text-3xl       /* extra-large screens ≥1280px */
            2xl:text-2xl      /* 2x-large screens ≥1536px */
            max-w-md          /* limit width on mobile */
            sm:max-w-lg
            md:max-w-2xl
            lg:max-w-3xl
            xl:max-w-4xl
            leading-relaxed
            mb-8
          "
        >
          Your Trusted Strategic Real Estate Wealth Advisory Firm
        </p>
      </div>
    </section>
  );
}
