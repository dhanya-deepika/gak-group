"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const [current, setCurrent] = useState(0);

  const slides = [
    { type: "image", src: "/whychoose/why1.jpg" },
    { type: "image", src: "/whychoose/why2.jpg" },
    { type: "image", src: "/whychoose/why3.jpg" },
    { type: "image", src: "/whychoose/why4.jpg" },
    { type: "image", src: "/whychoose/why5.jpg" },
  ];

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-white py-10 sm:py-14 md:py-16 flex items-center justify-center">
      <div className="max-w-[1316px] w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 sm:px-6">

        {/* Text Section */}
        <div className="text-center md:text-right w-full md:w-1/3 lg:w-[320px] mb-6 md:mb-0 px-2 sm:px-4 md:px-0 md:ml-4 lg:ml-8">
          <h2 className="font-sora text-[26px] sm:text-[34px] md:text-[40px] lg:text-[44px] font-normal leading-[110%] tracking-[-0.02em] text-gray-700">
            WHY <br className="hidden md:block" /> CHOOSE <br className="hidden md:block" /> US?
          </h2>
        </div>

        {/* Slider Section */}
        <div className="relative w-full max-w-[90%] sm:max-w-[460px] md:max-w-[540px] h-[260px] sm:h-[360px] md:h-[460px] flex items-center justify-center mx-auto">

          {slides.map((slide, i) => {
            const index = (i - current + slides.length) % slides.length;

            let scale = 1,
              translateX = 0,
              translateY = 40,
              zIndex = 0,
              opacity = 0;

            if (index === 0) {
              scale = 1;
              translateX = 0;
              translateY = 0;
              zIndex = 50;
              opacity = 1;
            } else if (index === 1) {
              scale = 0.9;
              translateX = 60;
              translateY = 20;
              zIndex = 40;
              opacity = 0.9;
            } else if (index === 2) {
              scale = 0.8;
              translateX = 110;
              translateY = 30;
              zIndex = 30;
              opacity = 0.8;
            } else if (index === 3) {
              scale = 0.7;
              translateX = 160;
              translateY = 40;
              zIndex = 20;
              opacity = 0.7;
            } else if (index === 4) {
              scale = 0.6;
              translateX = 210;
              translateY = 50;
              zIndex = 10;
              opacity = 0.6;
            }

            return (
              <div
                key={i}
                className="absolute flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out shadow-xl w-[280px] sm:w-[380px] md:w-[530px] h-[260px] sm:h-[360px] md:h-[485px] rounded-[40px]"
                style={{
                  transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderColor: "transparent",
                  background: "white",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(90deg, #B74254 0%, #231F51 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="object-cover rounded-[36px]"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-lg sm:text-xl md:text-2xl font-medium text-black px-6 text-center">
                    {slide.type}
                  </div>
                )}
              </div>
            );
          })}

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute -left-2 sm:-left-6 md:-left-8 top-1/2 -translate-y-1/2 hover:scale-110 text-black text-base sm:text-lg md:text-xl z-50"
          >
            ◀
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute -right-2 sm:-right-6 md:-right-33 top-1/2 -translate-y-1/2 hover:scale-110 text-black text-base sm:text-lg md:text-xl z-50"
        >
            ▶ 
          </button>

          {/* Dots */}
          <div className="absolute -bottom-8 sm:-bottom-10 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-50">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrent(i)}
                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full cursor-pointer transition-all duration-300"
                style={
                  i === current
                    ? { background: "linear-gradient(90deg, #B74254 0%)" }
                    : {
                        background:
                          "linear-gradient(white, white) padding-box, linear-gradient(90deg, #B74254, #231F51) border-box",
                        border: "2px solid transparent",
                      }
                }
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
