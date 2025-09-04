"use client";

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer2() {
  return (
    <footer className="bg-white py-10 font-sans">
      <div className="max-w-[1820px] mx-auto px-6 sm:px-12 lg:px-24">
        {/* FOOTER BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12">
          {/* Logo + Social */}
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 md:gap-12 w-full sm:w-auto">
            <img
              src="/gakicon.png"
              alt="GAK Group"
              className="h-[66px] w-[90px]"
            />

            {/* Social Media */}
            <div className="flex flex-wrap gap-4 sm:gap-10 mt-4 sm:mt-0 text-black text-xl justify-center sm:justify-start">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0 text-black font-sans text-base sm:text-lg justify-center md:justify-end">
            <a href="/services" className="hover:text-gray-700">
              Services
            </a>
            <a href="/projects" className="hover:text-gray-700">
              Projects
            </a>
            <a href="/about" className="hover:text-gray-700">
              About us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
