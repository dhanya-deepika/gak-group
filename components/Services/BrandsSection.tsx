// "use client";
// import { useRef } from "react";

// export default function BrandsSection() {
//   const scrollerRef = useRef<HTMLDivElement>(null);

//   const scrollByLogos = (dir: "left" | "right") => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const amount = Math.round(el.clientWidth * 0.6); // scroll ~60% of visible width
//     el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
//   };

//   const brands = [
//     "/logos/logo1.png",
//     "/logos/logo2.png",
//     "/logos/logo3.png",
//     "/logos/logo4.png",
//     "/logos/logo5.png",
  
//   ];

//   return (
//     <section className="relative py-12 bg-white overflow-visible">
//       {/* Thin curved line asset (place your asset file here) */}
//      <img
//   src="/assets/line.png"
//   alt=""
//   aria-hidden
//   className="pointer-events-none select-none absolute -top-6 right-0 w-full max-w-none"
//   style={{
//     transform: "rotate(180deg)",
//   }}
// />

//       {/* Heading */}
// <div className="mx-auto w-full flex justify-start px-6 md:ml-40">
//         <h2
//           className="text-center font-normal mb-8 w-[806.17px] max-w-[90%] text-black ml-35"
//           style={{
//             fontFamily: "Sora",
//             fontSize: "30px",
//             lineHeight: "100%",
//             letterSpacing: "-0.02em",
//           }}
//         >
//           Associated brands & projects
//         </h2>
//       </div>

//       {/* Logos row with triangle arrows */}
//       <div className="flex items-center justify-center gap-6">
//         {/* Left triangle (looks like the screenshot) */}
//         <button
//           aria-label="Scroll left"
//           onClick={() => scrollByLogos("left")}
//           className="select-none text-black hover:opacity-80 transition-opacity"
//         >
//           <span className="text-[18px] leading-none align-middle">◀</span>
//         </button>

//         {/* Scroll container */}
//         <div
//           ref={scrollerRef}
//           className="flex gap-16 overflow-x-hidden scroll-smooth px-2"
//           style={{ scrollBehavior: "smooth" }}
//         >
//           {brands.map((logo, i) => (
//             <img
//               key={i}
//               src={logo}
//               alt={`brand ${i + 1}`}
//               className="h-16 w-auto object-contain shrink-0"
//             />
//           ))}
//         </div>

//         {/* Right triangle */}
//         <button
//           aria-label="Scroll right"
//           onClick={() => scrollByLogos("right")}
//           className="select-none text-black hover:opacity-80 transition-opacity"
//         >
//           <span className="text-[18px] leading-none align-middle">▶</span>
//         </button>
//       </div>
//     </section>
//   );
// }


 


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
  const brands = Array.from({ length: 27 }, (_, i) => `/projectlogos/logo${i + 1}.jpg`);

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

      {/* Logos row with arrows */}
      <div className="flex items-center justify-center  gap-6">
        {/* Left arrow */}
        <button
          aria-label="Scroll left"
          onClick={() => scrollByLogos("left")}
          className="select-none text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-[18px] leading-none align-middle">◀</span>
        </button>

        {/* Scroll container */}
        <div
          ref={scrollerRef}
          className="
            flex gap-8 sm:gap-10 md:gap-12 lg:gap-16 
            overflow-hidden px-2
            w-full max-w-[1100px]
          "
        >
          {brands.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt={`brand ${i + 1}`}
              className="
                h-24 sm:h-14 md:h-26 lg:h-20 
                w-24 sm:w-28 md:w-32 lg:w-40 
                object-contain shrink-0
              "
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          aria-label="Scroll right"
          onClick={() => scrollByLogos("right")}
          className="select-none text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-[18px] leading-none align-middle">▶</span>
        </button>
      </div>
    </section>
  );
}
