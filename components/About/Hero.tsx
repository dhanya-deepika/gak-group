"use client";
import React from "react";

export default function Hero() {
  return (

     <section
      id="hero"
      className="relative h-screen overflow-hidden bg-cover bg-center"
        style={{
        backgroundImage: "url('/aboutbg.png')",
      }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-8">
 <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl translate-x-2 md:translate-x-4 lg:translate-x-6 translate-y-8">
  About Us
</h1>

</div>

    </section>
  );
}
