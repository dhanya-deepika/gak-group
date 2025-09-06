const stats = [
  { number: "10+", label: <>Years of<br />Service</> },
  { number: "400+", label: <>Satisfied<br />Customers</> },
  { number: "2500+", label: <>Channel<br />Partners</> },
  { number: "50+", label: "Projects" },
];

export default function Stats() {
  return (
    <section className="relative py-2 sm:py-4 lg:py-1 flex justify-center bg-white overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <img
          src="/lines/vector(1).png"
          alt="Decorative lines"
          className="left-[-150px] bottom-0 w-[1963px] h-[1910px] object-contain opacity-100"
        />
      </div>

      {/* Outer gradient wrapper */}
      <div
        className="p-[1px] sm:p-[2px] rounded-[40px] w-[90%] max-w-[1140px] relative z-10"
        style={{
          background:
            "linear-gradient(to bottom right, #FFFFFF 0%, #B74254 20%, #231F51 80%, #FFFFFF 100%)",
        }}
      >
        {/* Inner white box */}
        <div className="bg-white rounded-[38px] w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center px-2 sm:px-8 py-2 sm:py-8">
          {stats.map((s, i) => (
            <div key={i}>
              <h4 className="text-3xl sm:text-4xl font-bold text-[#231F51]">
                {s.number}
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
