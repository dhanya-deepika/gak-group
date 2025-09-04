"use client";
import React from "react";
import Image from "next/image";

export default function ServiceFeatures() {
  const featuresLeft = [
    {
      icon: "/logos/pricing.png",
      title: "Pricing Insights",
      points: [
        "Transparent price tracking",
        "Alerts on price increases or decreases",
        "Zero-commission transactions",
      ],
    },
    {
      icon: "/logos/investment.png",
      title: "Investment Guidance",
      points: [
        "When to invest",
        "What to invest in (property type, size, etc.)",
        "How to invest (steps, support, advisory)",
      ],
    },
    {
      icon: "/logos/strategy.png",
      title: "Market Strategy & Advisory",
      points: [
        "Location analysis & future potential",
        "Capital rotation strategies",
        "Long-term vs. short-term investment outlook",
      ],
    },
    {
      icon: "/logos/decision.png",
      title: "Decision Support",
      points: [
        "Why investing in this market matters",
        "Post-service support",
      ],
    },
  ];

  const featuresRight = [
    {
      icon: "/logos/sales.png",
      title: "Sales Acceleration",
      points: ["Access to pre-qualified buyers & investors"],
    },
    {
      icon: "/logos/investors.png",
      title: "Investor Engagement",
      points: [
        "Connecting with the right investment profiles",
        "Educating buyers on why your project matters",
      ],
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        
        {/* LEFT COLUMN */}
        <div className="space-y-8 sm:space-y-12">
          {featuresLeft.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-6 sm:gap-10">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={90}
                height={110}
                className="object-contain flex-shrink-0"
              />
              <div>
                <h3 className="font-sora text-xl sm:text-[30px] font-medium text-black tracking-[-0.02em] leading-tight">
                  {feature.title}
                </h3>
                <ul className="mt-1 sm:mt-2 list-disc list-inside space-y-1 text-base sm:text-[20px] text-black font-sora font-normal tracking-[-0.02em] leading-snug">
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-8 sm:space-y-12 mt-10 md:mt-0">
          {featuresRight.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-6 sm:gap-10">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={90}
                height={110}
                className="object-contain flex-shrink-0"
              />
              <div>
                <h3 className="font-sora text-xl sm:text-[30px] font-medium text-black tracking-[-0.02em] leading-tight">
                  {feature.title}
                </h3>
                <ul className="mt-1 sm:mt-2 list-disc list-inside space-y-1 text-base sm:text-[20px] text-black font-sora font-normal tracking-[-0.02em] leading-snug">
                  {feature.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
