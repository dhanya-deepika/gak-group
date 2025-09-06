"use client";
import Image from "next/image";

export default function ServicesSection() {
  const customerServices = [
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
      points: ["Why investing in this market matters", "Post-service support"],
    },
  ];

  const developerServices = [
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
    <section className="relative py-16 sm:py-20 bg-white overflow-hidden">
      
      {/* Decorative Lines in the Background */}
      <img
        src="/lines/vector(2).png"
        alt="Decorative lines"
        className="absolute bottom-0  left-180 transform -translate-x-1/2 w-[1500px] h-auto object-cover opacity-100 mt-30"
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center lg:text-left">
          {/* For Customers */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="flex flex-col items-center gap-3 lg:ml-35">
              <Image
                src="/logos/Customer.png"
                alt="Customer Icon"
                width={100}
                height={100}
                className="w-30 h-45 sm:w-20 sm:h-10 lg:w-[74px] lg:h-[121px]"
              />
              <p
                className="text-[18px] lg:text-[20px] font-medium text-black"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                FOR CUSTOMERS
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-8 w-full">
              {customerServices.map((service, i) => (
                <div key={i} className="flex gap-4 items-center lg:ml-20">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="w-14 h-14"
                  />
                  <div>
                    <h3 className="font-semibold text-[18px] lg:text-[20px] text-black leading-[1.4]">
                      {service.title}
                    </h3>
                    <ul className="space-y-1">
                      {service.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-[15px] lg:text-[16px] text-black"
                        >
                          <span className="mt-2 w-2 h-2 bg-black rounded-full"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Developers */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="flex flex-col items-center gap-3 lg:ml-20">
              <Image
                src="/logos/developer.png"
                alt="Developer Icon"
                width={100}
                height={100}
                className="w-[100px] h-[120px] sm:w-[110px] sm:h-[130px] md:w-[120px] md:h-[140px] lg:w-[74px] lg:h-[121px]"
              />
              <p
                className="text-[18px] lg:text-[20px] font-medium text-black"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                FOR DEVELOPERS
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-8 w-full">
              {developerServices.map((service, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={50}
                    height={50}
                    className="w-14 h-14"
                  />
                  <div>
                    <h3 className="font-semibold text-[18px] lg:text-[20px] text-black leading-[1.4]">
                      {service.title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1 marker:text-black">
                      {service.points.map((point, j) => (
                        <li
                          key={j}
                          className="text-[15px] lg:text-[16px] text-black leading-relaxed"
                          style={{ wordBreak: "break-word" }}
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
