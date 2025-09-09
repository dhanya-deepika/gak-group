"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ServicesSection() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/services"); // redirect to /services page
  };

  return (
    <section className="relative z-10 isolate flex flex-col items-center py-16 sm:py-20 bg-white overflow-visible">
      {/* Decorative Lines in the Background */}
      <img
        src="/lines/Vector(1).png" // note: case sensitive on Linux servers
        alt="Decorative lines"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2000px] h-auto object-cover opacity-100 mt-20 pointer-events-none z-0"
      />

      {/* Heading */}
      <h2
        className="text-[28px] sm:text-[36px] lg:text-[48px] font-normal text-black text-center relative z-10"
        style={{
          fontFamily: "Sora, sans-serif",
          lineHeight: "100%",
          letterSpacing: "-0.02em",
        }}
      >
        OUR SERVICES
      </h2>

      {/* Services Boxes */}
      <div className="mt-12 grid grid-cols-2 gap-7 sm:gap-6 lg:gap-15 items-stretch relative z-10 px-4 w-full max-w-[900px]">
        {/* For Customers */}
        <div
          onClick={handleRedirect}
          className="
            cursor-pointer
            w-full h-[200px] sm:h-[371px] lg:h-[377px]
            flex flex-col items-center justify-center gap-5
            rounded-[24px] sm:rounded-[30px] lg:rounded-[40px]
            transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:z-20
            transform-gpu p-4
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
            width={74}
            height={121}
            className="w-[64px] h-[88px] sm:w-[80px] sm:h-[104px] lg:w-[70px] lg:h-[121px]"
          />
          <p
            className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal text-black"
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
          onClick={handleRedirect}
          className="
            cursor-pointer
            w-full h-[200px] sm:h-[371px] lg:h-[377px]
            flex flex-col items-center justify-center gap-5
            rounded-[24px] sm:rounded-[30px] lg:rounded-[40px]
            transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:z-20
            transform-gpu p-4
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
            width={64}
            height={88}
            className="w-[64px] h-[88px] sm:w-[80px] sm:h-[104px] lg:w-[70px] lg:h-[121px]"
          />
          <p
            className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal text-black"
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