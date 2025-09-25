"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About us" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      <div
        className="absolute top-0 left-0 w-[200%] h-[120px] backdrop-blur-sm pointer-events-none"
        style={{
          background: `linear-gradient(
      2.47deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 30%,
      rgba(255, 255, 255, 0.7) 60%,
      rgba(255, 255, 255, 0) 100%
    )`,
          transform: "translateX(-25%)",
        }}
      />

      {/* Navbar Content */}
      <div
        className="relative w-full h-[100px] sm:h-[120px] flex justify-between items-center max-w-7xl mx-auto  sm:px-10 z-10 pl-0 sm:pl-2
"
      >
        {/* Logo */}
        <Link href="/">
          <Image
            src="/gakicon.png"
            alt="GAK Group Logo"
            width={120}
            height={90}
            priority
          />
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="sm:hidden block text-3xl text-gray-900 z-20"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        {/* Desktop Links */}
        <div className="hidden sm:flex gap-12 font-medium z-20">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 text-lg tracking-wide transition-colors duration-300 ${
                pathname === link.href
                  ? "text-black"
                  : "text-gray-800 hover:text-black"
              } group`}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[3px] w-full transition-transform duration-300 ${
                  pathname === link.href ? "scale-x-100" : "scale-x-0"
                } group-hover:scale-x-100 bg-gradient-to-r from-transparent via-[#B94255] to-[#231F51]`}
                style={{ transformOrigin: "left" }}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 backdrop-blur-sm sm:hidden`}
        style={{
          background:
            "linear-gradient(2.47deg, rgba(255,255,255,0) 2.06%, rgba(255,255,255,0.7) 53.69%)",
          transform: open ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div className="flex flex-col mt-24 gap-8 px-8 font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-lg tracking-wide ${
                pathname === link.href
                  ? "text-black"
                  : "text-gray-800 hover:text-black"
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState } from "react";
// import Image from "next/image";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/services", label: "Services" },
//     { href: "/projects", label: "Projects" },
//     { href: "/about", label: "About us" },
//   ];

//   return (
//     <nav className="fixed top-0 w-full z-50">
//       {/* Navbar Background Image */}
//       <div
//         className="absolute top-0 left-0 w-full h-[120px] bg-cover bg-center pointer-events-none"
//         style={{
//           backgroundImage: "url('/nav2.png')", // 👈 replace with your image in /public
//         }}
//       />

//       {/* Navbar Content */}
//       <div className="relative w-full h-[100px] sm:h-[120px] flex justify-between items-center max-w-7xl mx-auto sm:px-10 z-10 pl-0 sm:pl-2">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/gakicon.png"
//             alt="GAK Group Logo"
//             width={120}
//             height={90}
//             priority
//           />
//         </Link>

//         {/* Hamburger (Mobile) */}
//         <button
//           className="sm:hidden block text-3xl text-gray-900 z-20"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? "✕" : "☰"}
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden sm:flex gap-12 font-medium z-20">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`relative pb-1 text-lg tracking-wide transition-colors duration-300 ${
//                 pathname === link.href
//                   ? "text-black"
//                   : "text-gray-800 hover:text-black"
//               } group`}
//             >
//               {link.label}
//               <span
//                 className={`absolute left-0 -bottom-1 h-[3px] w-full transition-transform duration-300 ${
//                   pathname === link.href ? "scale-x-100" : "scale-x-0"
//                 } group-hover:scale-x-100 bg-gradient-to-r from-transparent via-[#B94255] to-[#231F51]`}
//                 style={{ transformOrigin: "left" }}
//               />
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 transform transition-transform duration-300 backdrop-blur-sm sm:hidden`}
//         style={{
//           background:
//             "linear-gradient(2.47deg, rgba(255,255,255,0) 2.06%, rgba(255,255,255,0.7) 53.69%)",
//           transform: open ? "translateX(0)" : "translateX(100%)",
//         }}
//       >
//         <div className="flex flex-col mt-24 gap-8 px-8 font-medium">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className={`text-lg tracking-wide ${
//                 pathname === link.href
//                   ? "text-black"
//                   : "text-gray-800 hover:text-black"
//               }`}
//               onClick={() => setOpen(false)}
//             >
//               {link.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }
