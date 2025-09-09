"use client";
import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[60vh] sm:h-[80vh] md:h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/aboutbg.png"
        alt="About Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 lg:px-12">
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
            font-bold mb-6
          "
        >
          About Us
        </h1>
      </div>
    </section>
  );
}
