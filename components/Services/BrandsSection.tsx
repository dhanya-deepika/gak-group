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

    const screenWidth = window.innerWidth;
    let visible = 5;
    if (screenWidth < 640) visible = 3;
    else if (screenWidth < 768) visible = 3;
    else if (screenWidth < 1024) visible = 4;

    const amount = logoWidth * visible;
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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
      <div className="mx-auto w-full px-6">
        <h2
          className="font-normal mb-8 text-black 
          text-center md:text-left md:pl-70"
          style={{
            fontFamily: "Sora",
            fontSize: "30px",
            lineHeight: "100%",
            letterSpacing: "-0.02em",
          }}
        >
          Associated brands & projects
        </h2>
      </div>

      {/* Logos section */}
      <div className="flex items-center justify-center gap-4 sm:gap-6">

        {/* Left Arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollByLogos("left")}
          className="select-none text-black hover:opacity-80 transition-opacity hover:scale-110"
        >
          <span className="text-[20px] leading-none align-middle">◀</span>
        </button>

        {/* Scrollable logos container (both small and large screens) */}
        {/* Scroll container */}
<div
  ref={scrollerRef}
  className="
    flex gap-8 sm:gap-10 md:gap-12 lg:gap-16 
    overflow-hidden px-2
    w-full max-w-[1100px] 
    sm:w-auto
  "
>
  {brands.map((logo, i) => (
    <img
      key={i}
      src={logo}
      alt={`brand ${i + 1}`}
      className="
        w-32 sm:w-40 md:w-48 lg:w-56 
        h-20 sm:h-24 md:h-28 lg:h-32 
        object-contain shrink-0
      "
    />
  ))}
</div>


        {/* Right Arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollByLogos("right")}
          className="select-none text-black hover:opacity-80 transition-opacity hover:scale-110"
        >
          <span className="text-[20px] leading-none align-middle">▶</span>
        </button>
      </div>
    </section>
  );
}
