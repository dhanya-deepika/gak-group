"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const [search, setSearch] = useState("");
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const projects = [
    {
      name: "Financial District",
      companies: [
        "Sunshine Destino",
        "Sumadhura Olympus",
        "Raghava Cling",
        "Axiom/TARANG by Sree Varasha",
      ],
      image: "/images/project4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
    {
      name: "Kollur",
      companies: ["Anvita Ivana Phase I", "Anvita Ivana Phase II"],
      image: "/images/project3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
    {
      name: "Manchiruvela",
      companies: ["Rajapushpa Infinia", "Vertex Bayleaf"],
      image: "/images/project6.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
    {
      name: "Osman Sagar",
      companies: [
        "DSR Altitudes",
        "Raghava Wave",
        "West City – Vijaya",
        "Ananda Homes SKY 49",
      ],
      image: "/images/project4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
    {
      name: "Rajendra Nagar",
      companies: ["Godrej Regal Pavilion", "Ramky"],
      image: "/images/project3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
    {
      name: "Kokapet",
      companies: [
        "My Home Apas",
        "Rajapushpa",
        "DSR – The Classe",
        "Pristinia",
        "E-infra by PVR",
        "AVR Evana",
        "Skyven",
        "Navanaami K3",
      ],
      image: "/images/project4.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 lg:px-16 overflow-x-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto flex flex-wrap sm:flex-nowrap justify-start items-center mb-18 gap-4 sm:gap-6 px-4 sm:px-0">
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

      {/* CARDS */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 items-stretch">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="cursor-pointer rounded-[40px] p-[1px] w-[340px] flex flex-col"
              style={{
                background: "linear-gradient(90deg, #E88796 0%, #8C82C0 100%)",
              }}
            >
              {/* Inner white box */}
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
