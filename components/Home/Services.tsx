"use client";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="flex flex-col items-center py-16 sm:py-20 bg-white">
      {/* Heading */}
      <h2
        className="text-[28px] sm:text-[36px] lg:text-[48px] font-normal text-black text-center"
        style={{
          fontFamily: "Sora, sans-serif",
          lineHeight: "100%",
          letterSpacing: "-0.02em",
        }}
      >
        OUR SERVICES
      </h2>

      {/* Services Boxes */}
      <div className="mt-12 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-25 items-center">
        {/* For Customers */}
        <div
          className="
            w-[250px] h-[260px]   /* mobile */
            sm:w-[300px] sm:h-[320px] /* tablet */
            lg:w-[371px] lg:h-[377px] /* desktop */
            flex flex-col items-center justify-center gap-6 
            rounded-[24px] sm:rounded-[30px] lg:rounded-[40px]
          "
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(90deg, #B74254, #231F51) border-box",
          }}
        >
          <Image
            src="/logos/Customer.png"
            alt="Customer Icon"
            width={60}
            height={90}
            className="sm:w-[70px] sm:h-[100px] lg:w-[74px] lg:h-[121px]"
          />
          <p
            className="text-[14px] sm:text-[18px] lg:text-[20px] font-normal text-black"
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
          className="
            w-[250px] h-[260px]   
            sm:w-[300px] sm:h-[320px] 
            lg:w-[371px] lg:h-[377px] 
            flex flex-col items-center justify-center gap-6 
            rounded-[24px] sm:rounded-[30px] lg:rounded-[40px]
          "
          style={{
            border: "2px solid transparent",
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(90deg, #B74254, #231F51) border-box",
          }}
        >
          <Image
            src="/logos/developer.png"
            alt="Developer Icon"
            width={60}
            height={90}
            className="sm:w-[70px] sm:h-[100px] lg:w-[74px] lg:h-[121px]"
          />
          <p
            className="text-[14px] sm:text-[18px] lg:text-[20px] font-normal text-black"
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
