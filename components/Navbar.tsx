"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <Link href="/" className="text-xl font-bold">GAK GROUP</Link>
        
        <button 
          className="sm:hidden block"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={`sm:flex gap-6 ${open ? "block" : "hidden"}`}>
          <Link href="/" className="hover:text-purple-600">Home</Link>
          <Link href="/services" className="hover:text-purple-600">Services</Link>
          <Link href="/projects" className="hover:text-purple-600">Projects</Link>
          <Link href="/about" className="hover:text-purple-600">About us</Link>
        </div>
      </div>
    </nav>
  );
}
