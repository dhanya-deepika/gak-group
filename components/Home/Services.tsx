"use client";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="flex flex-col items-center py-20 bg-white">
      {/* Heading */}
      <h2
        className="text-[48px] font-normal text-black"
        style={{
          fontFamily: "Sora, sans-serif",
          lineHeight: "100%",
          letterSpacing: "-0.02em",
        }}
      >
        OUR SERVICES
      </h2>

      {/* Services Boxes */}
      <div className="mt-16 flex flex-col md:flex-row gap-10">
        {/* For Customers */}
        <div
          className="w-[371px] h-[377px] flex flex-col items-center justify-center gap-6 rounded-[40px]"
          style={{
            border: "2px solid transparent",
            borderRadius: "40px",
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(90deg, #B74254, #231F51) border-box",
          }}
        >
          <Image
            src="/logos/Customer.png" // 👈 replace with your customer icon path
            alt="Customer Icon"
            width={74}
            height={121}
          />
          <p
            className="text-[20px] font-normal text-black"
            style={{
              fontFamily: "Sora, sans-serif",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
            }}
          >
            FOR CUSTOMERS
          </p>
        </div>

        {/* For Developers */}
        <div
          className="w-[371px] h-[377px] flex flex-col items-center justify-center gap-6 rounded-[40px]"
          style={{
            border: "2px solid transparent",
            borderRadius: "40px",
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(90deg, #B74254, #231F51) border-box",
          }}
        >
          <Image
            src="/logos/developer.png" // 👈 replace with your developer icon path
            alt="Developer Icon"
            width={74}
            height={121}
          />
          <p
            className="text-[20px] font-normal text-black"
            style={{
              fontFamily: "Sora, sans-serif",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
            }}
          >
            FOR DEVELOPERS
          </p>
        </div>
      </div>
    </section>
  );
}
