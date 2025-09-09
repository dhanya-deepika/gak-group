"use client";

import { useRef } from "react";

export default function BrandsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByLogos = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const logoWidth = el.firstElementChild
      ? (el.firstElementChild as HTMLElement).offsetWidth + 32 // width + gap
      : 0;

    // check viewport width → decide how many to scroll
    const screenWidth = window.innerWidth;
    let visible = 5; // default large
    if (screenWidth < 640) visible = 1;
    else if (screenWidth < 768) visible = 2;
    else if (screenWidth < 1024) visible = 3;

    const amount = logoWidth * visible;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  // your 26 logos
  const brands = Array.from(
    { length: 27 },
    (_, i) => `/projectlogos/logo${i + 1}.jpg`
  );

  return (
    <section className="relative py-12 bg-white overflow-visible">
      {/* Curved line */}
      <img
        src="/assets/line.png"
        alt=""
        aria-hidden
        className="pointer-events-none select-none absolute -top-6 right-0 w-full max-w-none"
        style={{ transform: "rotate(180deg)" }}
      />

      {/* Heading */}
      <div className="mx-auto w-full flex justify-start px-6 md:ml-15">
        <h2
          className="text-center font-normal mb-8 w-[806.17px] max-w-[90%] text-black"
          style={{fontFamily: "Sora",fontSize: "30px",lineHeight: "100%",letterSpacing: "-0.02em",}}
        >
          OUR TRUSTED CLIENTS
        </h2>
      </div>

      {/* Logos row with arrows */}
      <div className="flex items-center justify-center  gap-6">
        {/* Left arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollByLogos("left")}
          className="select-none text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-[20px] leading-none align-middle">◀</span>
        </button>

        {/* Scroll container */}
        <div
          ref={scrollerRef}
          className="flex gap-8 sm:gap-10 md:gap-12 lg:gap-16 overflow-hidden px-2 w-full max-w-[1100px] sm:w-auto"
        >
          {brands.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`brand ${i + 1}`}
              className="w-32 sm:w-40 md:w-48 lg:w-58 h-20 sm:h-24 md:h-28 lg:h-35 object-contain shrink-0"
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollByLogos("right")}
          className="select-none text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-[20px] leading-none align-middle">▶</span>
        </button>
      </div>
    </section>
  );
}
