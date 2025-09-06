"use client";
import { useState } from "react";

const team = [
  { name: "Mr Beeran", role: "Wealth Advisor", image: "/images/beeran.png" },
  {
    name: "Biju Verma",
    role: "Investment Analyst",
    image: "/images/bijuverma.png",
  },
  {
    name: "Suresh Kumar",
    role: "Investment Analyst",
    image: "/images/riya.png",
  },
  {
    name: "Riya Thomas",
    role: "Finance Specialist",
    image: "/images/suresh.png",
  },
  {
    name: "Micheal",
    role: "Investment Analyst",
    image: "/images/bijuverma.png",
  },
  {
    name: "Elijah Thomas",
    role: "Finance Specialist",
    image: "/images/riya.png",
  },
  {
    name: "Emily Jane",
    role: "Finance Specialist",
    image: "/images/suresh.png",
  },
  {
    name: "Suresh Kumar",
    role: "Investment Analyst",
    image: "/images/riya.png",
  },
  { name: "Mr Beeran", role: "Wealth Advisor", image: "/images/beeran.png" },
  {
    name: "Riya Thomas",
    role: "Finance Specialist",
    image: "/images/suresh.png",
  },
  {
    name: "Elijah Thomas",
    role: "Finance Specialist",
    image: "/images/riya.png",
  },
  { name: "Mr Beeran", role: "Wealth Advisor", image: "/images/beeran.png" },
  {
    name: "Biju Verma",
    role: "Investment Analyst",
    image: "/images/bijuverma.png",
  },
  {
    name: "Suresh Kumar",
    role: "Investment Analyst",
    image: "/images/riya.png",
  },
  {
    name: "Riya Thomas",
    role: "Finance Specialist",
    image: "/images/suresh.png",
  },
  {
    name: "Micheal",
    role: "Investment Analyst",
    image: "/images/bijuverma.png",
  },
  {
    name: "Elijah Thomas",
    role: "Finance Specialist",
    image: "/images/riya.png",
  },
  {
    name: "Emily Jane",
    role: "Finance Specialist",
    image: "/images/suresh.png",
  },
  {
    name: "Suresh Kumar",
    role: "Investment Analyst",
    image: "/images/riya.png",
  },
];

export default function Team() {
  const [selected, setSelected] = useState(team[0]);

  const firstName = selected.name.split(" ")[0];
  const email = `${firstName.toLowerCase()}@gak.com`;

  return (
    <section className="relative flex justify-center py-10 sm:py-14 lg:py-20 bg-white px-3 sm:px-4 overflow-hidden">
      {/* Decorative Background Line */}
      <img
        src="/lines/Vector(2).png"
        alt="Decorative lines"
        className="absolute -top-0 left-130 -translate-x-1/2 w-[760px] sm:w-[1100px] md:w-[1200px] opacity-100 pointer-events-none z-0"
      />

      {/* Outer Gradient Border */}
      <div
        className="rounded-[32px] md:rounded-[40px] p-[3px] md:p-[4px] w-full max-w-[1200px] z-10"
        style={{
          background:
            "linear-gradient(319.06deg, rgba(185, 66, 85, 0) 7.55%, #B94255 52.45%, #231F51 90.82%)",
        }}
      >
        {/* Inner White Box with fixed height on mobile so lists scroll instead of expanding */}
        <div className="bg-white rounded-[28px] md:rounded-[36px] flex flex-row h-[560px] sm:h-[620px] md:h-[900px] shadow-xl overflow-hidden">
          {/* Left Team List - compact on mobile */}
          <div className="w-[60px] sm:w-[72px] md:w-[400px] border-r border-gray-200 relative flex-shrink-0">
            <div className="h-full overflow-y-auto custom-scroll px-2 md:px-6 py-4 md:py-6 text-black">
              <h2
                className="mb-2 sm:mb-3 md:mb-6 text-xs sm:text-sm md:text-3xl font-semibold text-left md:text-center"
                style={{ fontFamily: "Sora, sans-serif" }}
              >
                Team
              </h2>

              {/* Compact avatar rail for mobile (no names) */}
              <ul className="md:hidden bg-gray-100/70 rounded-full px-1.5 py-3 flex flex-col items-center gap-3">
                {team.map((member, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => setSelected(member)}
                      className={`block w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full overflow-hidden flex items-center justify-center transition-all ${
                        selected.name === member.name
                          ? "p-[2px] bg-gradient-to-b from-[#B94255] to-[#0A0267]"
                          : ""
                      }`}
                      aria-label={`Select ${member.name}`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Detailed list for tablet/desktop */}
              <ul className="hidden md:block space-y-8">
                {team.map((member, idx) => (
                  <li
                    key={idx}
                    onClick={() => setSelected(member)}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <div
                      className={`w-[88px] h-[88px] rounded-full overflow-hidden flex items-center justify-center ${
                        selected.name === member.name
                          ? "p-[3px] bg-gradient-to-b from-[#B94255] to-[#0A0267]"
                          : ""
                      }`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3
                        className="font-semibold text-lg"
                        style={{ fontFamily: "Sora, sans-serif" }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-gray-600 text-base"
                        style={{ fontFamily: "Sora, sans-serif" }}
                      >
                        {member.role}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gradient fade top & bottom */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-8 sm:h-10 md:h-12 bg-gradient-to-b from-white to-transparent" />
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-8 sm:h-10 md:h-12 bg-gradient-to-t from-white to-transparent" />
          </div>

          {/* Right Profile Section - compact mobile spacing */}
          <div className="flex-1 p-3 sm:p-4 md:p-10 overflow-auto h-full">
            <div className="min-h-full flex flex-col justify-center md:justify-start">
              <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="rounded-[16px] object-cover w-[88px] h-[88px] sm:w-[120px] sm:h-[120px] md:w-[234px] md:h-[246px]"
                />
                <div className="flex-1">
                  <h2
                    className="text-lg sm:text-xl md:text-4xl font-semibold text-black mt-6 sm:mt-40"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {selected.name}
                  </h2>
                  <p
                    className="mt-1 sm:mt-2 text-sm sm:text-base md:text-lg text-black"
                    style={{ fontFamily: "Sora, sans-serif" }}
                  >
                    {selected.role}
                  </p>

                  {/* Contact icon actions - mobile only */}
                  <div className="mt-2 sm:mt-3 flex items-center gap-2.5 sm:gap-3 md:gap-4 md:hidden">
                    <a
                      href={`https://wa.me/15559876543`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white border border-gray-200 shadow flex items-center justify-center"
                    >
                      <img
                        src="/assets/wats.png"
                        alt="WhatsApp"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </a>
                    <a
                      href={`tel:5551234567`}
                      aria-label="Phone"
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white border border-gray-200 shadow flex items-center justify-center"
                    >
                      <img
                        src="/assets/phone.png"
                        alt="Phone"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </a>
                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white border border-gray-200 shadow flex items-center justify-center"
                    >
                      <img
                        src="/assets/linkedin.png"
                        alt="LinkedIn"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </a>
                    <a
                      href={`mailto:${email}`}
                      aria-label="Email"
                      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg bg-white border border-gray-200 shadow flex items-center justify-center"
                    >
                      <img
                        src="/assets/mail.png"
                        alt="Email"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      />
                    </a>
                  </div>
                </div>
              </div>

              {/* About */}
              <div className="mt-4 sm:mt-6 md:mt-8 text-black">
                <h3
                  className="font-bold text-sm sm:text-base md:text-xl"
                  style={{ fontFamily: "Public Sans, sans-serif" }}
                >
                  About
                </h3>
                <p
                  className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base"
                  style={{
                    lineHeight: "1.6",
                    fontFamily: "Source Sans 3, sans-serif",
                  }}
                >
                  {selected.name} is a seasoned wealth advisor based in
                  Hyderabad with over 10 years of experience in the financial
                  industry. As part of the GAK Group, he specializes in guiding
                  high-net-worth individuals and families toward their financial
                  goals through tailored investment strategies and comprehensive
                  planning. Mr. Beeran is dedicated to delivering exceptional
                  service and fostering long-term relationships built on trust
                  and transparency.
                </p>
              </div>

              {/* Contact - desktop/tablet detailed layout */}
              <div className="mt-4 md:mt-6 text-black hidden md:block">
                <h3
                  className="font-bold text-base md:text-xl"
                  style={{ fontFamily: "Public Sans, sans-serif" }}
                >
                  Contact
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/phone.png"
                      alt="Phone"
                      className="w-5 h-5"
                    />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/wats.png"
                      alt="WhatsApp"
                      className="w-5 h-5"
                    />
                    <span>(555) 987-6543</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/linkedin.png"
                      alt="LinkedIn"
                      className="w-5 h-5"
                    />
                    <span>{firstName} M</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/mail.png"
                      alt="Email"
                      className="w-5 h-5"
                    />
                    <span>{email}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollbar with gradient track and thumb */}
      <style jsx>{`
        /* Default (mobile) scrollbar: small */
        .custom-scroll::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: linear-gradient(
            0deg,
            rgba(185, 66, 85, 0) 0%,
            #b94255 34%,
            #0a0267 86%
          );
          border-radius: 7.5px;
          opacity: 1;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: linear-gradient(0deg, #b94255 0%, #0a0267 100%);
          border-radius: 7.5px;
          opacity: 1;
        }
        @media (min-width: 768px) {
          .custom-scroll::-webkit-scrollbar {
            width: 30px;
          }
        }
        /* Firefox */
        .custom-scroll {
          scrollbar-width: thin;
          scrollbar-color: #b94255 #0a0267;
        }
      `}</style>
    </section>
  );
}
