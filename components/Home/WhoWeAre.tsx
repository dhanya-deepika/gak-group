"use client";
import React from "react";

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-16 px-6 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2
            className="
              text-3xl md:text-5xl 
              font-bold text-gray-900 mb-6 font-[Sora] 
              md:pl-30
            "
          >
            WHO WE ARE
          </h2>
          <p
            className="
              text-sm md:text-base text-gray-700 
              max-w-4xl leading-relaxed font-[Sora] 
              text-justify 
              mx-auto md:mx-0 md:pl-30
            "
          >
            GAK Group is a trusted Real Estate wealth advisory firm specializing
            in strategic real <br /> estate investments. We provide residential
            and commercial real estate advisory <br />
            services, property investment advisory, and real estate risk
            assessment, helping <br />
            clients secure high-potential properties with confidence and
            long-term value.
          </p>
        </div>

        {/* Image with Gradient Border and Play Button */}
        <div className="mb-16 flex justify-center">
          <div className="p-[0.5px] rounded-[20px] bg-gradient-to-r from-[#B74254] to-[#231F51]">
            <div className="relative rounded-[20px] overflow-hidden shadow-2xl bg-white">
              <img
                src="/whowe.jpg"
                alt="GAK Group Team Meeting"
                className="w-full max-w-[1160px] h-auto object-cover rounded-[40px]"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/90 hover:bg-white rounded-full p-6 shadow-lg transition-all duration-300 hover:scale-110">
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
      </div>
    </section>
  );
}
