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
//     <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-white/70 via-white/70 to-white/0 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center  pr-9 py-5 h-[134px]">
//   {/* Logo */}
//   <Link href="/">
//     <Image
//       src="/gakicon.png"
//       alt="GAK Group Logo"
//       width={152}
//       height={113}
//       priority
//     />
//   </Link>

//         {/* Hamburger */}
//         <button
//           className="sm:hidden block text-3xl text-gray-900"
//           onClick={() => setOpen(!open)} // toggle
//         >
//           {open ? "✕" : "☰"}
//         </button>

//         {/* Desktop Links */}
//         <div className="hidden sm:flex gap-20 font-medium">
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

//       {/* Mobile Sidebar (transparent) */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 ${
//           open ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Links */}
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
      {/* Background Navbar Image */}
      <div className="relative w-full h-[100px] sm:h-[120px]">
        <Image
          src="/Navbar.png" // 👈 put your figma-exported image in /public
          alt="Navbar Background"
          fill
          priority
          className="object-cover"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex justify-between items-center max-w-7xl mx-auto px-6 sm:px-10">
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
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
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
