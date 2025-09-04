"use client";
import { useState } from "react";

const team = [
  { name: "Mr Beeran", role: "Wealth Advisor", image: "/images/beeran.png" },
  { name: "Biju Verma", role: "Investment Analyst", image: "/images/bijuverma.png" },
  { name: "Suresh Kumar", role: "Investment Analyst", image: "/images/riya.png" },
  { name: "Riya Thomas", role: "Finance Specialist", image: "/images/suresh.png" },
  { name: "Micheal", role: "Investment Analyst", image: "/images/bijuverma.png" },
  { name: "Elijah Thomas", role: "Finance Specialist", image: "/images/riya.png" },
  { name: "Emily Jane", role: "Finance Specialist", image: "/images/suresh.png" },
];

export default function Team() {
  const [selected, setSelected] = useState(team[0]);

  return (
    <section className="flex justify-center py-12 sm:py-16 lg:py-20 bg-white px-4">
      {/* Outer Gradient Border */}
      <div
        className="rounded-[40px] p-[4px] w-full max-w-[1200px]"
        style={{
          background:
            "linear-gradient(319.06deg, rgba(185, 66, 85, 0) 7.55%, #B94255 52.45%, #231F51 90.82%)",
        }}
      >
        {/* Inner White Box */}
        <div className="bg-white rounded-[36px] flex flex-col md:flex-row h-auto md:h-[900px] shadow-xl overflow-hidden">
          {/* Left Team List */}
          <div className="md:w-[300px] w-full border-r md:border-r border-gray-200 relative">
            <div className="h-full overflow-y-auto custom-scroll px-4 sm:px-6 py-6 text-black">
              <h2 className="mb-6 text-2xl sm:text-3xl font-semibold" style={{ fontFamily: "Sora, sans-serif" }}>
                Team
              </h2>
              <ul className="space-y-6 sm:space-y-8">
                {team.map((member, idx) => (
                  <li
                    key={idx}
                    onClick={() => setSelected(member)}
                    className="flex items-center gap-4 cursor-pointer"
                  >
                    <div
                      className={`w-[70px] h-[70px] sm:w-[88px] sm:h-[88px] rounded-full overflow-hidden flex items-center justify-center ${
                        selected.name === member.name ? "p-[3px] bg-gradient-to-b from-[#B94255] to-[#0A0267]" : ""
                      }`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg" style={{ fontFamily: "Sora, sans-serif" }}>
                        {member.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: "Sora, sans-serif" }}>
                        {member.role}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Gradient fade top & bottom */}
            <div className="pointer-events-none absolute top-0 left-0 w-full h-10 sm:h-12 bg-gradient-to-b from-white to-transparent"></div>
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-10 sm:h-12 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          {/* Right Profile Section */}
          <div className="flex-1 p-6 sm:p-10 overflow-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={selected.image}
                alt={selected.name}
                className="rounded-[20px] object-cover w-[180px] h-[180px] sm:w-[234px] sm:h-[246px]"
              />
              <div className="text-center sm:text-end">
                <h2 className="text-xl justify-end sm:text-2xl font-semibold text-[#231F51]" style={{ fontFamily: "Sora, sans-serif" }}>
                  {selected.name}
                </h2>
                <p className="text-gray-700 justify-end text-sm sm:text-lg text-[#B74254]" style={{ fontFamily: "Sora, sans-serif" }}>
                  {selected.role}
                </p>
              </div>
            </div>

            {/* About */}
            <div className="mt-6 sm:mt-8 text-black">
              <h3 className="font-bold text-lg sm:text-xl" style={{ fontFamily: "Public Sans, sans-serif" }}>
                About
              </h3>
              <p className="mt-2 text-sm sm:text-base" style={{ lineHeight: "1.6", fontFamily: "Source Sans 3, sans-serif" }}>
                {selected.name}  is a seasoned wealth advisor based in Hyderabad with over 10 years of experience in the financial industry. As part of the GAK Group, he specializes in guiding high-net-worth individuals and families toward their financial goals through tailored investment strategies and comprehensive planning. Mr. Beeran is dedicated to delivering exceptional service and fostering long-term relationships built on trust and transparency.
              </p>
            </div>

            {/* Contact */}
            <div className="mt-6 sm:mt-8 text-black">
              <h3 className="font-bold text-lg sm:text-xl" style={{ fontFamily: "Public Sans, sans-serif" }}>
                Contact
              </h3>
              <div className="mt-4 flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <img src="/assets/phone.png" alt="Phone" className="w-5 h-5 sm:w-6 sm:h-6" />
                  (555) 123-4567
                </div>
                <div className="flex items-center gap-2">
                  <img src="/assets/wats.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6" />
                  (555) 987-6543
                </div>
                <div className="flex items-center gap-2">
                  <img src="/assets/linkedin.png" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
                  {selected.name.split(" ")[0]} M
                </div>
                <div className="flex items-center gap-2">
                  <img src="/assets/mail.png" alt="Email" className="w-5 h-5 sm:w-6 sm:h-6" />
                  {selected.name.toLowerCase().split(" ")[0]}@gak.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scrollbar hidden but gradient fade visible */}
      <style jsx>{`
        .custom-scroll::-webkit-scrollbar {
          display: none;
        }
        .custom-scroll {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
    </section>
  );
}
