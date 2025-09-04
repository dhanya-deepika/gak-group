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
    <section className="py-16 sm:py-20 bg-white">
      {/* Wrapper container */}
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-center lg:text-left">
          {/* For Customers */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            {/* Icon + Heading */}
            <div className="flex flex-col items-center gap-4 lg:ml-30">
              <Image
                src="/logos/Customer.png"
                alt="Customer Icon"
                width={74}
                height={121}
                className="w-16 h-16 lg:w-[74px] lg:h-[121px]"
              />
              <p
                className="text-[18px] lg:text-[20px] font-medium text-black"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                FOR CUSTOMERS
              </p>
            </div>

            {/* Services */}
            <div className="mt-8 flex flex-col gap-8 w-full">
              {customerServices.map((service, i) => (
                <div key={i} className="flex gap-4 items-start lg:ml-20">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                  <div>
                    <h3 className="font-semibold text-[16px] lg:text-[18px] text-black">
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.points.map((point, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-[14px] lg:text-[15px] text-black"
                        >
                          <span className="mt-1 w-2 h-2 bg-black rounded-none"></span>
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
          <div className="flex flex-col items-center lg:items-start gap-6 ">
            {/* Icon + Heading */}
            <div className="flex flex-col items-center gap-4 lg:ml-20">
              <Image
                src="/logos/developer.png"
                alt="Developer Icon"
                width={74}
                height={121}
                className="w-16 h-16 lg:w-[74px] lg:h-[121px]"
              />
              <p
                className="text-[18px] lg:text-[20px] font-medium text-black"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                FOR DEVELOPERS
              </p>
            </div>

            {/* Services */}
            <div className="mt-8 flex flex-col gap-8 w-full ">
              {developerServices.map((service, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={40}
                    height={40}
                    className="w-10 h-10 lg:w-12 lg:h-12"
                  />
                  <div>
                    <div>
                      <h3 className="font-semibold text-[16px] lg:text-[18px] text-black">
                        {service.title}
                      </h3>
                      <ul className="space-y-2">
                        {service.points.map((point, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2 text-[14px] lg:text-[15px] text-black"
                          >
                            <span className="mt-1 w-2 h-2 bg-black rounded-none"></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
