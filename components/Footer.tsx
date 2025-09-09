"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

export default function FooterSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Limit message to 150 words
    if (e.target.name === "message") {
      const words = e.target.value.split(/\s+/);
      if (words.length > 150) return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    setFormData({ name: "", email: "", number: "", message: "" });
  };

  return (
    <footer className="bg-white py-20 px-6 lg:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* FORM + TEXT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">

          {/* Contact Form */}
          <div className="w-full max-w-md mx-auto p-[2px] rounded-[40px] bg-gradient-to-r from-[#B74254] to-[#231F51]">
            <form
              className="bg-white rounded-[40px] p-8 flex flex-col gap-6"
              onSubmit={handleSubmit}
            >
              {/* Name */}
              <div className="relative mt-5 text-black">
                <label className="absolute -top-7 left-3 text-black text-sm font-medium bg-white px-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  pattern="[A-Za-z\s]+"
                  title="Name should only contain alphabets"
                  required
                  className="w-full px-4 py-3 border rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
                />
              </div>

              {/* Email */}
              <div className="relative mt-5 text-black">
                <label className="absolute -top-7 left-3 text-black text-sm font-medium bg-white px-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="abc@gmail.com"
                  required
                  className="w-full px-4 py-3 border rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
                />
              </div>

              {/* Message */}
              <div className="relative mt-5 text-black">
                <label className="absolute -top-7 left-3 text-black text-sm font-medium bg-white px-1">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  rows={5}
                  className="w-full px-4 py-3 border rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#B74254]"
                />
              </div>

              {/* Gradient border submit button */}
              <div className="w-[118px] h-[40px] rounded-[40px] p-[2px] bg-gradient-to-r from-[#B74254] to-[#231F51]">
                <button
                  type="submit"
                  className="w-full h-full rounded-[40px] bg-white text-gray-800 font-medium"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
{/* Text Block */}
<div className="order-1 md:order-2 w-full">
  <h3
    className="
      text-gray-900 font-sora font-light leading-tight
      bg-white p-4 sm:p-0
      rounded-tl-[40px] sm:rounded-none
    "
    style={{
      fontSize: "clamp(28px, 5vw, 48px)",
      letterSpacing: "-0.02em",
    }}
  >
    LET US GUIDE YOU<br className="hidden md:block" />
    TO GROWTH
  </h3>
</div>


        </div>

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
