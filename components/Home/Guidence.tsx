// "use client";
// import React from "react";

// export default function Guidance() {
//   const steps = [
//     {
//       step: "Step 1",
//       title: "Understanding Customer Requirements",
//       position: "left"
//     },
//     {
//       step: "Step 2", 
//       title: "Identification of Potential Projects by Trusted Builders",
//       position: "right"
//     },
//     {
//       step: "Step 3",
//       title: "Evaluating Lifestyle and Livability Quotient", 
//       position: "left"
//     },
//     {
//       step: "Step 4",
//       title: "Evaluating Growth & Resale Potential",
//       position: "right"
//     },
//     {
//       step: "Step 5",
//       title: "Arranging Site Visits",
//       position: "left"
//     },
//     {
//       step: "Step 6", 
//       title: "Securing the Best Quote",
//       position: "right"
//     },
//     {
//       step: "Step 7",
//       title: "Finalizing with Confidence",
//       position: "center"
//     }
//   ];

//   return (
//     <section id="guidance" className="py-16 px-8 bg-gray-50">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 font-[Sora]">
//             OUR STEP-BY-STEP GUIDANCE
//           </h2>
//         </div>

//         {/* Steps Container */}
//         <div className="relative">
//           {/* Main curved path - this will be styled with CSS */}
//           <div className="relative min-h-[800px]">
            
//             {/* Step 1 - Top Left */}
//             <div className="absolute top-0 left-1/4 transform -translate-x-1/2">
//               <div className="flex items-center space-x-4">
//                 <div className="text-right">
//                   <div className="text-sm font-medium text-gray-600 mb-1">Step 1</div>
//                   <div className="text-lg font-semibold text-gray-800 max-w-48">
//                     Understanding Customer Requirements
//                   </div>
//                 </div>
//                 <div className="w-6 h-6 bg-purple-800 rounded-full border-4 border-white shadow-lg"></div>
//               </div>
//             </div>

//             {/* Connecting line and Step 2 - Top Right */}
//             <div className="absolute top-16 right-1/4 transform translate-x-1/2">
//               <div className="flex items-center space-x-4">
//                 <div className="w-6 h-6 bg-purple-800 rounded-full border-4 border-white shadow-lg"></div>
//                 <div className="text-left">
//                   <div className="text-sm font-medium text-gray-600 mb-1">Step 2</div>
//                   <div className="text-lg font-semibold text-gray-800 max-w-48">
//                     Identification of Potential Projects by Trusted Builders
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Step 3 - Middle Left */}
//             <div className="absolute top-48 left-1/4 transform -translate-x-1/2">
//               <div className="flex items-center space-x-4">
//                 <div className="text-right">
//                   <div className="text-sm font-medium text-gray-600 mb-1">Step 3</div>
//                   <div className="text-lg font-semibold text-gray-800 max-w-48">
//                     Evaluating Lifestyle and Livability Quotient
//                   </div>
//                 </div>
//                 <div className="w-6 h-6 bg-purple-800 rounded-full border-4 border-white shadow-lg"></div>
//               </div>
//             </div>

//             {/* Step 4 - Middle Right */}
//             <div className="absolute top-80 right-1/4 transform translate-x-1/2">
//               <div className="flex items-center space-x-4">
//                 <div className="w-6 h-6 bg-purple-800 rounded-full border-4 border-white shadow-lg"></div>
//                 <div className="text-left">
//                   <div className="text-sm font-medium text-gray-600 mb-1">Step 4</div>
//                   <div className="text-lg font-semibold text-gray-800 max-w-48">
//                     Evaluating Growth & Resale Potential
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Step 5 - Lower Left */}
//             <div className="absolute top-[400px] left-1/4 transform -translate-x-1/2">
//               <div className="flex items-center space-x-4">
//                 <div className="text-right">
//                   <div className="text-sm font-medium text-gray-600 mb-1">Step 5</div>
//                   <div className="text-lg font-semibold text-gray-800 max-w-48">
//                     Arranging Site Visits
//                   </div>
//                 </div>
//                 <div className="w-6 h-6 bg-purple-800 rounded-full border-4 border-white shadow-lg"></div>
//               </div>
//             </div>

//             {/* Step 6 - Lower Right */}
//             <div className="absolute top-[480px] right-1/4 transform translate-x-1/2">
//               <div className="flex items-center space-x-4">
//                 <div className="w-6 h-6 bg-purple-800 rounded-full border-4 border-white shadow-lg"></div>
//                 <div className="text-left">
//                   <div className="text-sm font-medium text-gray-600 mb-1">Step 6</div>
//                   <div className="text-lg font-semibold text-gray-800 max-w-48">
//                     Securing the Best Quote
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Step 7 - Bottom Center */}
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
//               <div className="text-center">
//                 <div className="w-8 h-8 bg-purple-800 rounded-full border-4 border-white shadow-lg mx-auto mb-3"></div>
//                 <div className="text-sm font-medium text-gray-600 mb-1">Step 7</div>
//                 <div className="text-lg font-semibold text-gray-800">
//                   Finalizing with Confidence
//                 </div>
//               </div>
//             </div>

//             {/* SVG Path for the curved line */}
//             <svg 
//               className="absolute inset-0 w-full h-full pointer-events-none" 
//               viewBox="0 0 800 600"
//               style={{ zIndex: -1 }}
//             >
//               <defs>
//                 <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                   <stop offset="0%" stopColor="#7c3aed" />
//                   <stop offset="50%" stopColor="#a855f7" />
//                   <stop offset="100%" stopColor="#ec4899" />
//                 </linearGradient>
//               </defs>
//               <path
//                 d="M 200 50 Q 400 30 600 80 Q 650 120 600 200 Q 550 280 600 360 Q 650 440 600 480 Q 500 520 400 500 Q 300 480 200 520 Q 150 540 200 580 Q 300 620 400 600"
//                 stroke="url(#pathGradient)"
//                 strokeWidth="3"
//                 fill="none"
//                 strokeLinecap="round"
//                 opacity="0.6"
//               />
//             </svg>

//             {/* Special marker for the middle connection */}
//             {/* <div className="absolute top-32 left-1/2 transform -translate-x-1/2">
//               <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
//                 <span className="text-white text-sm font-bold">M</span>
//               </div>
//             </div> */}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React from "react";

export default function GuidenceImage() {
  return (
    <div className="relative flex justify-center py-12 px-4 bg-white overflow-hidden">
      
      {/* Decorative Lines in the Background */}
      <img
        src="/lines/vector(3).png"
        alt="Decorative lines"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1900px] h-auto object-cover opacity-100"
      />

      {/* Main Guidance Image */}
      <img
        src="/Guidence.png"
        alt="Guidence"
        className="relative w-full max-w-[1127px] h-auto rounded-[40px] object-cover"
      />
    </div>
  );
}

