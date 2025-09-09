"use client";
import React from "react";
export default function GuidenceImage() {
  return (
    <div className="relative flex justify-center py-12 px-4 bg-white overflow-hidden">
      {/* Decorative Lines in the Background */}
      <img
        src="/lines/vector(3).png"
        alt="Decorative lines"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 
        w-[1900px] h-auto object-cover opacity-100"
      />
      {/* Main Guidance Image */}
      <img
        src="/Guidence.png"
        alt="Guidence"
        className="relative w-full 
        max-w-[1127px] h-auto rounded-[40px] object-cover"
      />
    </div>
  );
}
