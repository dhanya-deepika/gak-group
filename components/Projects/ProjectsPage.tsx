// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import ProjectPopup from "../../components/ProjectPopup";

// export default function ProjectsPage() {
//   const [selectedProject, setSelectedProject] = useState<any>(null);

//   const projects = [
//     {
//       name: "Moosapet",
//       companies: ["SAS Soul of earth"],
//       image: "/images/project7.jpg",
//     },
//     {
//       name: "Neopolis",
//       companies: [
//         "Yula & Globus - Plot No. 11",
//         "Sattva LakeRidge",
//         "MSN Realty – One",
//         "GHR Infra – The Cascades",
//         "S&S – Fortune Surabhan Grande",
//       ],
//       image: "/images/project2.jpg",
//     },
//     {
//       name: "Kismatpur",
//       companies: ["SDD Prithvi"],
//       image: "/images/project3.jpg",
//     },
//     {
//       name: "Financial District",
//       companies: [
//         "Sunshine Destino",
//         "Sumadhura Olympus",
//         "Raghava Cling",
//         "Axiom/TARANG by Sree Varasha",
//       ],
//       image: "/images/project4.jpg",
//     },
//     {
//       name: "Kollur",
//       companies: ["Anvita Ivana Phase I", "Anvita Ivana Phase II"],
//       image: "/images/project3.jpg",
//     },
//     {
//       name: "Manchiruvela",
//       companies: ["Rajapushpa Infinia", "Vertex Bayleaf"],
//       image: "/images/project6.jpg",
//     },
//     {
//       name: "Osman Sagar",
//       companies: [
//         "DSR Altitudes",
//         "Raghava Wave",
//         "West City – Vijaya",
//         "Ananda Homes SKY 49",
//       ],
//       image: "/images/project4.jpg",
//     },
//     {
//       name: "Rajendra Nagar",
//       companies: ["Godrej Regal Pavilion", "Ramky"],
//       image: "/images/project3.jpg",
//     },
//     {
//       name: "Kokapet",
//       companies: [
//         "My Home Apas",
//         "Rajapushpa",
//         "DSR – The Classe",
//         "Pristinia",
//         "E-infra by PVR",
//         "AVR Evana",
//         "Skyven",
//         "Navanaami K3",
//       ],
//       image: "/images/project4.jpg",
//     },
//     {
//       name: "Tellapur",
//       companies: ["Vision Arsha", "Anvita High 9", "Prosper"],
//       image: "/images/project2.jpg",
//     },
//     {
//       name: "Nankramguda",
//       companies: ["Rajapushpa Provincia", "Aparna Zenon"],
//       image: "/images/project1.jpg",
//     },
//     {
//       name: "Lingampally",
//       companies: ["Candeur Crescent"],
//       image: "/images/project4.jpg",
//     },
//     {
//       name: "Miyapur",
//       companies: ["Urbanrise Sky Habitat"],
//       image: "/images/project6.jpg",
//     },
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-white">
//       <main className="flex-1 px-6 sm:px-6 lg:px-12 pt-20 pb-12">
//         <h1 className="text-5xl sm:text-5xl font-light text-black text-left mb-12 mt-24 ml-25">
//           OUR PROJECTS
//         </h1>

//         {/* PROJECT CARDS */}
// <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[-1] gap-y-8 place-items-center">
//           {projects.map((project, index) => (
//             <div
//               key={index}
//               onClick={() => setSelectedProject(project)}
//               className="rounded-[60px] p-[0.5px] cursor-pointer"
//               style={{
//               background: "linear-gradient(90deg, #E88796 0%, #8C82C0 100%)",
//            }}

//             >
//               <div
//                 className="rounded-[60px] bg-white p-[23px] flex flex-col gap-4"
//                 style={{ width: "352px" }}
//               >
//                 {/* Image */}
//                 <div className="relative w-[309px] h-[365px] rounded-[40px] overflow-hidden mx-auto">
//                   <Image
//                     src={project.image}
//                     alt={project.name}
//                     fill
//                     className="object-cover rounded-[40px]"
//                   />
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-[24px] font-medium text-black font-sora mt-4">
//                   {project.name}
//                 </h2>

//                 {/* Companies List */}
//                 <ul className="text-[16px] font-sora font-normal text-black mt-4 space-y-1">
//                   {project.companies.map((company, i) => (
//                     <li key={i} className="underline">
//                       {company}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>

//       {/* Popup */}
//       <ProjectPopup
//         project={selectedProject}
//         onClose={() => setSelectedProject(null)}
//       />
//     </div>
//   );
// }

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
      name: "Moosapet",
      companies: ["SAS Soul of earth"],
      image: "/images/project7.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
    {
      name: "Neopolis",
      companies: [
        "Yula & Globus - Plot No. 11",
        "Sattva LakeRidge",
        "MSN Realty – One",
        "GHR Infra – The Cascades",
        "S&S – Fortune Surabhan Grande",
      ],
      image: "/images/project2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
    {
      name: "Kismatpur",
      companies: ["SDD Prithvi"],
      image: "/images/project3.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
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
    {
      name: "Tellapur",
      companies: ["Vision Arsha", "Anvita High 9", "Prosper"],
      image: "/images/project2.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis metus sapien. Morbi at quam id odio euismod bibendum. Pellentesque eget dui egestas, gravida erat et, auctor leo. Quisque consectetur nisi tortor, vitae suscipit est vestibulum at. Pellentesque vel est ac erat luctus auctor at in augue. Vestibulum eros ante, imperdiet at faucibus et, egestas sed quam. Fusce euismod dictum felis ut scelerisque. Cras dapibus, ex mattis consectetur scelerisque, urna dui cursus arcu, ac egestas arcu augue eget est. Duis enim nunc, consectetur.",
    },
    {
      name: "Nankramguda",
      companies: ["Rajapushpa Provincia", "Aparna Zenon"],
      image: "/images/project1.jpg",
    },
    {
      name: "Lingampally",
      companies: ["Candeur Crescent"],
      image: "/images/project4.jpg",
    },
    {
      name: "Miyapur",
      companies: ["Urbanrise Sky Habitat"],
      image: "/images/project6.jpg",
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
      {/* Background Lines */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/projectlines.png"
          alt="Background lines"
          fill
          className="object-cover opacity-60"
        />
      </div>

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
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 mb-12">
            {/* Search Box */}
            <div className="flex-1 max-w-[450px]">
              <div
                className="p-[1px] rounded-full border border-transparent"
                style={{
                  borderImage:
                    "linear-gradient(90deg,#B74254 0%,#231F51 100%) 1",
                }}
              >
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
            <div className="flex flex-wrap gap-2">
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
