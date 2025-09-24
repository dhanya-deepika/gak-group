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
      {/* Decorative Lines in the Background
      <img
        src="/lines/vector(2).png"
        alt="Decorative lines"
        className="absolute bottom-0  left-180 transform -translate-x-1/2 w-[1500px] h-auto object-cover opacity-100 mt-4"
      /> */}

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
                className="w-20 h-30 sm:w-20 sm:h-10 lg:w-[74px] lg:h-[121px]"
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
                <div key={i} className="flex gap-7 items-center lg:ml-20">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={70}
                    height={88}
                    className="w-106px h-127px"
                  />
                  <div>
                    <h3 className="font-semibold text-[18px] lg:text-[20px] text-black leading-[1.4]">
                      {service.title}
                    </h3>

                    <ul className="pl-4 list-none">
                      {service.points.map((point, j) => (
                        <li key={j} className="relative mb-2 flex items-start">
                          {/* Custom bullet */}
                          <span className="flex-shrink-0 w-2 h-2 bg-black mt-2"></span>

                          {/* Text */}
                          <p className="text-[15px] lg:text-[16px] text-black leading-snug ml-3 text-left">
                            {point}
                          </p>
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
                className="w-20 h-30 sm:w-20 sm:h-10 lg:w-[74px] lg:h-[121px]"
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
                <div key={i} className="flex gap-7 items-center">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={70}
                    height={88}
                    className="w-106px h-127px"
                  />
                  <div>
                    <h3 className="font-semibold text-[18px] lg:text-[20px] text-black leading-[1.4]">
                      {service.title}
                    </h3>
                    <ul className="pl-4 list-none">
                      {service.points.map((point, j) => (
                        <li key={j} className="relative mb-2 flex items-start">
                          {/* Custom bullet */}
                          <span className="flex-shrink-0 w-2 h-2 bg-black mt-2"></span>

                          {/* Text */}
                          <p className="text-[15px] lg:text-[16px] text-black leading-snug ml-3 text-left">
                            {point}
                          </p>
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
