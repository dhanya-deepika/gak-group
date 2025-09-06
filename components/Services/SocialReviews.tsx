"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SocialReviews() {
  const reviews = [
    {
      logo: "/logos/mimimail.png",
      platform: "Google reviews",
      text: "Mauris interdum iaculis viverra. Suspendisse ac quam ornare, dictum ante erat. Aenean vestibulum tortor sem, non sagittis ex fringilla sit amet. Donec urna ornare mollis in vel sapien.",
      author: "Sarah Miller",
    },
    {
      logo: "/logos/mimimail.png",
      platform: "Facebook reviews",
      text: "Suspendisse luctus accumsan lectus in suscipit. Donec urna ornare mollis in vel sapien.",
      author: "John Carter",
    },
  ];

  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % reviews.length);
  const prev = () => setActive((active - 1 + reviews.length) % reviews.length);

  return (
    <section className="bg-white py-16 sm:py-20 flex flex-col items-center px-4 sm:px-8">
      {/* Heading */}
      <h2
        className="font-normal text-black mb-8 sm:mb-12 text-center sm:text-left lg:ml-165 w-full"
        style={{
          fontFamily: "Sora",
          fontSize: "clamp(24px, 5vw, 48px)",
          lineHeight: "110%",
          letterSpacing: "-0.02em",
        }}
      >
        Social channels reviews
      </h2>

      {/* Content wrapper */}
      <div className="relative flex items-center justify-center w-full max-w-[1000px]">
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute -left-4 sm:-left-8 text-black text-base sm:text-lg hover:scale-110 transition"
        >
          ◀
        </button>

        {/* Review Content */}
        <div className="flex flex-col sm:flex-row w-full max-w-[950px] min-h-[220px] sm:min-h-[256px]">
          {/* Logo side */}
          <div className="flex items-center justify-center sm:w-[220px] w-full h-[160px] sm:h-[240px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl shadow-md">
            <Image
              src={reviews[active].logo}
              alt="brand logo"
              width={100}
              height={100}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-4 sm:px-6 py-4 sm:py-6 text-black sm:w-[700px] w-full">
            <p
              className="text-xs sm:text-sm mb-2"
              style={{ fontFamily: "Sora", color: "#7a7a5c" }}
            >
              {reviews[active].platform}
            </p>
            <p
              className="text-sm sm:text-base leading-snug mb-2"
              style={{
                fontFamily: "Sora",
                maxWidth: "700px",
              }}
            >
              {reviews[active].text}
            </p>
            <p
              className="text-xs sm:text-sm"
              style={{ fontFamily: "Sora", color: "#7a7a5c" }}
            >
              {reviews[active].author}
            </p>
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute -right-4 sm:-right-8 text-black text-base sm:text-lg hover:scale-110 transition"
        >
          ▶
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 mt-6 sm:mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              active === i ? "bg-[#231F51]" : "bg-white"
            }`}
            style={{
              border: "2px solid transparent",
              borderRadius: "50%",
              backgroundClip:
                active === i ? "padding-box" : "content-box, border-box",
              backgroundOrigin: "border-box",
              backgroundImage:
                active === i
                  ? "linear-gradient(90deg, #231F51, #231F51)"
                  : "linear-gradient(white, white), linear-gradient(90deg, #B74254, #231F51)",
            }}
          ></button>
        ))}
      </div>
    </section>
  );
}
