"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section
  className="relative w-full h-screen bg-cover bg-center"
  style={{ backgroundImage: "url('/services.png')" }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Centered Text */}
  <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 lg:px-16">
    <h1
      className="text-3xl sm:text-4xl md:text-4xl lg:text-[48px] font-semibold text-white leading-light tracking-light"
      style={{ fontFamily: "Sora" }}
    >
      Our Services
    </h1>
    <p
      className="mt-4 text-base sm:text-lg md:text-xl lg:text-[20px] font-medium text-white"
      style={{ fontFamily: "Sora" }}
    >
      Property Investment and Beyond
    </p>
  </div>
</section>

  );
}
