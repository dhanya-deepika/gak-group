"use client";
import React from "react";

export default function WhoWeAre() {
  return (
   <section
  id="who-we-are"
  className="relative py-4 sm:py-16 px-4 sm:px-8 overflow-hidden md:min-h-[80vh]"
>
  <div className="absolute inset-0 -z-10 bg-white">
    <img
      src="/lines/vector(2).png"
      alt="Decorative lines"
      className="hidden sm:block absolute left-[-150px] bottom-0 top-5 w-[1963px] h-[1910px] object-contain opacity-100"
    />
  </div>

  <div className="max-w-7xl mx-auto relative z-10">
    {/* Header */}
    <div className="mb-4 sm:mb-12 text-center md:text-left">
      <h2
        className="text-2xl sm:text-3xl md:text-5xl font-light text-gray-900 mb-2 sm:mb-4 font-[Sora] md:pl-30"
      >
        WHO WE ARE
      </h2>
      <p
        className="text-xs sm:text-sm md:text-base text-gray-700 max-w-4xl leading-relaxed font-[Sora] text-justify mx-auto md:mx-0 md:pl-30"
      >
        GAK Group is a trusted  wealth advisory firm specializing in strategic real estate investments. We provide residential and commercial real estate advisory services, property investment advisory, and real estate risk assessment, helping clients secure high-potential properties with confidence and long-term value.
      </p>
    </div>

    {/* Image with Gradient Border and Play Button */}
    <div className="mb-4 sm:mb-16 flex justify-center">
      <div className="p-[1px] rounded-[40px] bg-gradient-to-r from-[#B74254] to-[#231F51] relative overflow-hidden">
        <img
          src="/whowe.jpg"
          alt="GAK Group Team Meeting"
          className="w-full max-w-[1110px] h-auto object-cover rounded-[40px]"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white/90 hover:bg-white rounded-full p-6 shadow-lg transition-all duration-300 hover:scale-110 translate-y-4 sm:translate-y-0">
            <svg
              className="w-12 h-12 text-gray-800 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
