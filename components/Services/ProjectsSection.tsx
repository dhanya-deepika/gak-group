"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const projects = [
    
{
      name: "Financial District",
      companies: [
        "Sunshine Destino",
        "4 BHK",
        "Under-Construction",
        "2800 - 3500 SFT",
      ],
      image: "/images/sunshine.jpg",
      description:
        "Spread over approximately 5.5 acres in Nanakramguda's Financial District,Sunshine Destino is a high-rise,nature-blended residential oasis by Sunshine Developers.It offers thoughfully designed 3 & 4 BHK apartments in earthen tones and embraces biophilic,eco-friendly living with green balconies and lower carbon footprint features,all while louging in luxe.",
    },
    {
      name: "Financial District",
      companies: [
        "Sumadhura Olympus",
        "3 & 4 BHK",
        "1,670-3,000 SFT",
        "Under Construction",
        
      ],
      image: "/images/candeur.jpg",
      description:
        "Sumadhura's Olympus towers rise majestically as twin 44-storey skyscrapers,among Hyderabad's tallest, offering sweeping skyline views.It features ultra-luxury 3 & 4 BHK homes with a premium clubhouse - Club Zeus boasting over 80 lifestyle amenities like a sports bar,co-working zones,a mini-theatre,cafe,and wellness lounges.Set on 5.06 acres,this is where opulence flirts with biophilic charm and city connectivity.",
    },
    {
      name: "Financial District",
      companies: ["Raghava Cinq","4 BHK","3,575-3,644 SFT","Under Constrction"],
      image: "/images/dsr.jpg",
      description:
        "CINQ by Raghava is a vertical urban ecosystem across five grand towers with 61 floors each.It's a walk-to-work concept with stilt-level car-free zones,butterfly walkways,skate park,amphitheatre,infinity pools,sky lounges,a and a 55,000 sq ft nature, and community beautifully.",
    },
    {
      name: "Financial District",
      companies: ["Aurum/TARANG by Sree Varaaha","4 BHK","3,180-9,800 SFT","Pre-Launch"],
      image: "/images/myhome.jpg",
      description:
        "Aurum (also called TARANG) by Sree Vaaraha is a G+54 ultra-luxury residential development sprawled across 6 acrs,featuring four towers, a 50,000 sq ft clubhouse,and in-tower ground-level amenities.It promises uninterrupted views,neighbourhood harmon,and top-tier access via ORR exits.",
    },
    {
      name: "Kokapet",
      companies: ["My Home APAS", "3 BHK","2,765-3860 SFT","Under Construction"],
      image: "/images/prinia.jpg",
      description:
        "Set gracefully across 13.52 acres,My Home Apas overlooks the tranquil vistas of kokapet and Osman Sagar lakes,offering a serene yet sophisticated retreat.Six slleek towers with generous 3 BHK residences deliver ultramodern,luxury living envelopedd in calm.",
    },
    {
      name: "kokapet",
      companies: ["DSR-The Classe", "3 & 4 BHK","2,552-3,939 SFT","Under Construction"],
      image: "/images/dsr.jpg",
      description:
        "Nestled beside Gandipet Lake,The Classes is a statuesque 28-storey marvel(four towers) that reshapes Kokapet's skyline.its corner apartments boast abundant natural light,and a no-car stilt level enhances privacy and safety,rooted in luxury and timeless elegance",
    },

  ];

  return (
    <section className="relative bg-white py-20 px-6 lg:px-16 overflow-hidden">
      {/* Decorative Lines */}
      <img
        src="/lines/vector2.png"
        alt="Decorative lines"
        className="absolute bottom-0 left-180 transform -translate-x-1/2 w-[1500px] h-auto object-cover opacity-100"
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap justify-start items-center mb-18 gap-4 sm:gap-6 px-4 sm:px-0 relative z-10">
        <h2 className="font-sora text-2xl sm:text-[48px] font-normal text-black tracking-[-0.02em] leading-[100%] sm:ml-30">
          Projects
        </h2>
        <div
          className="rounded-[20px] sm:rounded-[40px] p-[1px] inline-block"
          style={{
            background: "linear-gradient(90deg, #B74254 0%, #231F51 100%)",
          }}
        >
          <Link href="/projects">
            <button className="px-3 py-1.5 sm:px-6 sm:py-2 bg-white rounded-[20px] sm:rounded-[40px] text-black font-sora text-sm sm:text-base font-normal">
              View All Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="flex justify-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 items-stretch">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="cursor-pointer rounded-[40px] p-[1px] w-full max-w-[340px] flex flex-col mx-auto"
              style={{
                background: "linear-gradient(90deg, #B74254 0%, #231F51 100%)",
              }}
            >
              <div className="bg-white rounded-[39px] w-full h-full p-6 flex flex-col overflow-hidden">
                {/* Image */}
                <div className="relative w-full aspect-[4/5]">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover rounded-[32px]"
                  />
                </div>

                {/* Title / Company */}
                <h3 className="font-source-sans text-[20px] font-semibold underline tracking-[-0.02em] leading-[100%] text-black mt-4">
                  {project.companies[0]}
                </h3>

                {/* Icons Row */}
                <div className="space-y-2 text-[15px] text-black mt-2">
                  <p className="flex items-center gap-2">
                    <Image
                      src="/icons/location.png"
                      alt="location"
                      width={20}
                      height={20}
                    />
                    {project.name}
                  </p>
                  <p className="flex items-center gap-2">
                    <Image
                      src="/icons/bed.png"
                      alt="bhk"
                      width={20}
                      height={20}
                    />
                    3, 3.5, 4 & 4.5 BHK
                  </p>
                  <p className="flex items-center gap-2">
                    <Image
                      src="/icons/time.png"
                      alt="launch"
                      width={20}
                      height={20}
                    />
                    Pre Launch
                  </p>
                  <p className="flex items-center gap-2">
                    <Image
                      src="/icons/slide.png"
                      alt="area"
                      width={20}
                      height={20}
                    />
                    1680 sqft - 4550 sqft
                  </p>
                </div>

                {/* Short Description + Read More */}
                <div className="mt-3 text-sm text-gray-600 flex flex-col flex-grow">
                  <p className={expandedCard === idx ? "" : "line-clamp-4"}>
                    {project.description}
                  </p>
                  <button
                    onClick={() =>
                      setExpandedCard(expandedCard === idx ? null : idx)
                    }
                    className="self-start mt-1 text-sm font-medium text-[#231F51]"
                  >
                    {expandedCard === idx ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
