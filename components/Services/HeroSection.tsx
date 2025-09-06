"use client";
import React, { useState, useEffect } from "react";

export default function HeroSection() {
  const slides = [
    "/ourservices/our1.jpg",
    "/ourservices/our2.jpg",
    "/ourservices/our3.jpg",
    "/ourservices/our4.jpg",
    
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex h-full w-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className="h-screen w-full flex-shrink-0 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${img})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-8 lg:px-16">
              <h1
                className="
                  text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-6xl
                  font-bold mb-6
                "
              >
               Our Services

              </h1>
              
              <p
                className="
                  text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-2xl
                  max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl
                  leading-relaxed mb-8
                "
              >
                Property Investment and Beyond
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-50">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            className="w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300"
            style={
              i === current
                ? {
                    background:
                      "linear-gradient(90deg, #B74254 0%, #231F51 100%)",
                  }
                : {
                    background:
                      "linear-gradient(white, white) padding-box, linear-gradient(90deg, #B74254, #231F51) border-box",
                    border: "2px solid transparent",
                  }
            }
          />
        ))}
      </div>
    </section>
  );
}
