"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function SocialReviews() {
  const reviews = [
    {
      logo: "/logos/mimimail.png",
      platform: "Google reviews",
      text: "IMauris interdum iaculis viverra. Suspendisse ac quam ornare, dictum ante erat. Aenean vestibulum tortor sem, non sagittis ex fringilla sit amet. Donec urna ornare mollis in vel sapien. Suspendisse luctus accumsan lectus in suscipit. Nunc non mi vitae nisi.",
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
    <section className="bg-white py-20 flex flex-col items-center px-4">
      {/* Heading */}
      <h2
        className="font-normal text-black mb-12 text-center"
        style={{
          fontFamily: "Sora",
          fontSize: "clamp(28px, 5vw, 48px)",
          lineHeight: "100%",
          letterSpacing: "-0.02em",
        }}
      >
        Social channels reviews
      </h2>

      {/* Content wrapper */}
      <div className="relative flex items-center justify-center w-full max-w-[1100px]">
        {/* Left arrow */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute -left-6 sm:-left-10 text-black text-lg hover:scale-110 transition"
        >
          ◀
        </button>

        {/* Review Content (no card) */}
        <div className="flex flex-col sm:flex-row w-full max-w-[1083px] min-h-[256px]">
          {/* Logo side */}
          <div
            className="flex items-center justify-center sm:w-[256px] w-full h-[200px] sm:h-[256px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-md">
            <Image
              src={reviews[active].logo}
              alt="brand logo"
              width={128}
              height={128}
              className="object-contain rounded-xl"
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-6 py-6 text-black sm:w-[795px] w-full">
            <p
              className="text-sm mb-2"
              style={{ fontFamily: "Sora", color: "#7a7a5c" }}
            >
              {reviews[active].platform}
            </p>
            <p
              className="text-base leading-snug mb-2"
              style={{
                fontFamily: "Sora",
                maxWidth: "795px",
              }}
            >
              {reviews[active].text}
            </p>
            <p
              className="text-sm"
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
          className="absolute -right-6 sm:-right-10 text-black text-lg hover:scale-110 transition"
        >
          ▶
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-3 mt-8">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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
