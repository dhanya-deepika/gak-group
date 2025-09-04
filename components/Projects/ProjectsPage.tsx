"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectPopup from "../../components/ProjectPopup";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [search, setSearch] = useState("");

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const projects = [
    {
      name: "Financial District",
      companies: [
        "Sunshine Destino",
        "Sumadhura Olympus",
        "Raghava Cinq",
        "Aurum/TARANG by Sree Varaaha",
      ],
      image: "/images/name1.png",
      description:
        "High-rise residential projects offering 3 & 4 BHK luxury apartments with eco-friendly designs, green balconies, and premium amenities. Spread over 5–6 acres with top-tier connectivity and lifestyle features.",
    },
    {
      name: "Kokapet",
      companies: [
        "My Home APAS",
        "DSR – The Classe",
        "E-Infra & PVR Skyven",
        "Rajapushpa Pristinia",
        "AVR Evania",
        "Navanaami K3",
      ],
      image: "/images/name2.png",
      description:
        "Ultra-luxury 3 & 4 BHK residential towers with lakeside views, expansive clubhouses, and world-class amenities. Projects offer serenity, exclusivity, and modern living in Hyderabad's premium corridor.",
    },
    {
      name: "Lingampally",
      companies: ["Candeur Crescent"],
      image: "/images/name1.png",
      description:
        "Luxury 2.5 & 3 BHK apartments with vertical high-rise living, 80% open space, and 62,000 sq ft clubhouse. Close to Lingampally station, offering privacy and premium amenities.",
    },
    {
      name: "Moosapet",
      companies: ["SAS Soul of Earth"],
      image: "/images/name2.png",
      description:
        "Pre-launch luxury 3–4.5 BHK towers with Central Park-style open spaces, water views, and sky villas. Designed for grandeur and expansive living.",
    },
    {
      name: "Manchirevula",
      companies: ["Rajapushpa Infina", "Verdant Bayleaf"],
      image: "/images/name1.png",
      description:
        "High-density gated communities with luxury 2–4 BHK apartments, clubhouses, landscaped courtyards, and convenient connectivity via ORR. Boutique and expansive offerings in Manchirevula.",
    },
    {
      name: "Nanakramguda",
      companies: ["Rajapushpa Provincia", "Aparna Zenon"],
      image: "/images/name2.png",
      description:
        "Gated townships with 2–3 BHK homes across 24–30 acres. Projects feature premium amenities, multiple towers, and strategic locations for investors and homeowners.",
    },
    {
      name: "Neopolis",
      companies: [
        "Yula & Globus - Plot No. 11",
        "Sattva Lakeridge",
        "MSN Realty – One",
        "GHR Infra – The Cascades",
        "SSI – Fortune Surajbhan Grande",
      ],
      image: "/images/name1.png",
      description:
        "Luxury high-rise projects in Neopolis offering 3–5 BHK apartments with panoramic lake views, large clubhouses, and state-of-the-art amenities. Pre-launch and under-construction properties available.",
    },
    {
      name: "Osman Sagar",
      companies: [
        "DSR Altitudes",
        "Raghava Wave",
        "West City – Vajra",
        "Ananda Homes SKY 49",
      ],
      image: "/images/name1.png",
      description:
        "Residential towers with 3–4 BHK units near Osman Sagar lake, emphasizing greenery, skyline views, and luxury amenities including infinity pools, sky lounges, and landscaped gardens.",
    },
    {
      name: "Tellapur",
      companies: ["Vision Arsha", "Anvita High 9", "Prosper"],
      image: "/images/name2.png",
      description:
        "Upcoming gated communities with 2–4 BHK apartments, extensive open spaces, sky villas, and amenities for families. Located near IT hubs with direct ORR access for convenience.",
    },
    {
      name: "Kollur",
      companies: ["Anvita Ivana: Phase I", "Anvita Ivana: Phase II"],
      image: "/images/name1.png",
      description:
        "Boutique projects offering ready-to-move and under-construction 2–4 BHK apartments with cloud villas, resort-grade amenities, and spacious layouts across multiple phases.",
    },
    {
      name: "Rajendranagar",
      companies: ["Godrej Regal Pavilion", "Ramky"],
      image: "/images/name2.png",
      description:
        "Premium residential townships with 2.5–4 BHK apartments, clubhouse facilities, landscaped gardens, and connectivity to key landmarks. Projects are in pre-launch or EOI stages.",
    },
    {
      name: "Miyapur",
      companies: ["Urbanrise Sky Habitat"],
      image: "/images/name1.png",
      description:
        "42-story high-rise with 3 BHK apartments, 100+ amenities, elevated skywalks, and children’s learning hubs. Designed to offer a landmark residential experience by a lake.",
    },
    {
      name: "Kismatpur",
      companies: ["SDG Prinia"],
      image: "/images/name2.png",
      description:
        "Planning-stage luxury gated community with spacious 2,400–2,600 sqft apartments. Suvarna Durga Group brings premium layouts with future-ready infrastructure in Kismatpur.",
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) ||
      project.companies.some((c) =>
        c.toLowerCase().includes(search.toLowerCase())
      )
  );

  const tags = [
    "Moosapet",
    "Sunshine Destino",
    "4 BHK",
    "Pre Launch",
    ">1680 sqft",
    "Label",
    "Label",
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-white">

      <main className="flex-1 px-6 sm:px-6 lg:px-12 pt-10 pb-12 ">
        {/* Title */}
        <h1
          className="text-3xl sm:text-5xl font-light text-black mb-12 mt-24 
             text-center sm:text-left sm:ml-60 "
        >
          OUR PROJECTS
        </h1>

        {/* Wrapper with max-width same as cards */}
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-12">
  {/* Search Box */}
  <div className="flex-1 w-full md:max-w-[450px]">
    <div className="rounded-full p-[2px] bg-gradient-to-r from-[#B74254] to-[#231F51]">
      <div className="flex items-center bg-white rounded-full px-4 h-[46px] gap-2">
        <input
          type="text"
          placeholder="3bhk, Moosapet, Pre-launch"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none text-[15px] font-sora text-black bg-transparent"
        />
        <button className="p-2 rounded-full bg-gradient-to-r from-[#B74254] to-[#231F51] flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Tags */}
  <div className="flex flex-wrap gap-2 w-full md:w-auto">
    {tags.map((tag, i) => (
      <span
        key={i}
        className="px-3 py-1 border border-[#ccc] rounded-full text-sm text-black bg-white"
      >
        {tag}
      </span>
    ))}
  </div>
</div>


          {/* Cards Grid */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 items-stretch">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-[40px] p-[1px] w-[340px] flex flex-col"
                  style={{
                    background:
                      "linear-gradient(90deg, #B74254 0%, #231F51 100%)",
                  }}
                >
                  <div className="bg-white rounded-[40px] w-full h-full px-5 py-6 flex flex-col">
                    {/* Image */}
                    <div
                      className="relative rounded-[40px] overflow-hidden mx-auto"
                      style={{
                        width: "297px",
                        height: "367px",
                      }}
                    >
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover rounded-[40px]"
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
                      <p
                        className={expandedCard === index ? "" : "line-clamp-4"}
                      >
                        {project.description}
                      </p>
                      <button
                        onClick={() =>
                          setExpandedCard(expandedCard === index ? null : index)
                        }
                        className="self-start mt-1 text-sm font-medium text-[#231F51]"
                      >
                        {expandedCard === index ? "Read Less" : "Read More"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
