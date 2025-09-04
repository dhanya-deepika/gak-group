"use client";
import React from "react";
import Image from "next/image";

export default function ServiceIcons() {
  const items = [
    { title: "FOR CUSTOMERS", icon: "/logos/Customer.png" },
    { title: "FOR DEVELOPERS", icon: "/logos/developer.png" },
  ];

  return (
    <section className="bg-white px-6 sm:px-10 lg:px-20 py-12 pt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 text-center">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            {/* Icon */}
            <Image
              src={item.icon}
              alt={item.title}
              width={74}
              height={121}
              className="object-contain"
            />

            {/* Text */}
            <p className="mt-6 font-sora text-lg sm:text-xl md:text-2xl font-normal leading-none tracking-[-0.02em] text-black">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
