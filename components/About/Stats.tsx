const stats = [
  { number: "10+", label: <>Years of<br />Service</> },
  { number: "400+", label: <>Satisfied<br />Customers</> },
  { number: "2500+", label: <>Channel<br />Partners</> },
  { number: "50+", label: "Projects" },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 flex justify-center bg-white">
      {/* Outer wrapper with gradient + rounded corners */}
      <div
        className="p-[2px] rounded-[40px] w-[90%] max-w-[1140px]"
        style={{
          background: "linear-gradient(90deg, #B74254 0%, #231F51 100%)",
        }}
      >
        {/* Inner content box */}
        <div className="bg-white rounded-[38px] w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center px-6 sm:px-8 py-8 sm:py-10">
          {stats.map((s, i) => (
            <div key={i}>
              <h4 className="text-3xl sm:text-4xl font-bold text-[#231F51]">{s.number}</h4>
              <p className="text-gray-600 text-sm sm:text-base">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
