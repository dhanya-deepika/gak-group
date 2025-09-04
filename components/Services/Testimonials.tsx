// 


"use client";
import { useState } from "react";
import { Play } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const smallVideos = [
    { src: "/video/video2.jpg", alt: "testimonial small video", play: true },
    {
      src: "/video/video3.jpg",
      alt: "testimonial property",
      overlay: "Residential property in Sienna",
    },
    { src: "/video/video4.jpg", alt: "New video", play: true },
  ];

  return (
    <section className="flex justify-center py-16 bg-white">
      {/* OUTER WRAPPER with gradient border */}
      <div className="relative max-w-[1156px] w-full rounded-[40px] p-[2px] bg-gradient-to-tr from-[#231F51] via-[#B94255] to-transparent">
        {/* INNER WHITE CARD */}
        <div className="flex flex-col p-8 gap-10 rounded-[40px] bg-white w-full h-full">
          {/* === TOP ROW === */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT SIDE – MAIN VIDEO */}
            <div className="relative md:w-1/2 w-full aspect-[548/379] rounded-[40px] overflow-hidden">
              <img
                src="/video/video1.jpg"
                alt="testimonial video"
                className="w-full h-full object-cover"
              />
              <button className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
                  <Play className="w-8 h-8 text-black" fill="black" />
                </div>
              </button>
            </div>

            {/* RIGHT SIDE – TEXT */}
            <div className="flex flex-col md:w-1/2 justify-start">
              <h3 className="mb-4 text-black font-sora text-[30px] font-normal leading-tight tracking-tight">
                Lorem ipsum dolor sit amet,
              </h3>
              <p className="text-black font-sora text-base font-normal leading-relaxed tracking-tight">
                consectetur adipiscing elit. Fusce at magna nibh. Nam sed est
                arcu. Vivamus ac volutpat orci, eget eleifend metus. Quisque non
                lobortis leo. Integer lacinia pulvinar nunc, eu semper quam
                dapibus id. Mauris ac massa risus. Praesent vulputate vitae ex
                id euismod.
                <br />
                <br />
                Mauris interdum iaculis viverra. Suspendisse ac quam ornare,
                dictum ante non, cursus erat. Aenean vestibulum tortor sem, non
                sagittis ex fringilla sit amet. Donec ac orci vel urna ornare
                mollis in vel sapien. Suspendisse luctus accumsan lectus in
                suscipit. Nunc non mi vitae nisi accumsan aliquet vel sed orci.
                Nunc placerat urna quis ante mattis pulvinar eget ut arcu. Donec
              </p>
            </div>
          </div>

          {/* === BOTTOM ROW – CAROUSEL === */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {smallVideos.map((video, idx) => (
                <div key={idx} className="flex-shrink-0 w-full sm:w-1/3 px-2">
                  <div className="relative w-full aspect-[326/215] rounded-[30px] overflow-hidden">
                    <img
                      src={video.src}
                      alt={video.alt}
                      className="w-full h-full object-cover"
                    />

                    {video.overlay ? (
                      <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                        <p className="text-white font-semibold text-sm">
                          {video.overlay}
                        </p>
                      </div>
                    ) : video.play ? (
                      <button className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
                          <Play className="w-6 h-6 text-black" fill="black" />
                        </div>
                      </button>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* === Pagination Dots === */}
          <div className="flex justify-center mt-4 gap-3">
            {smallVideos.map((_, dot) => (
              <button
                key={dot}
                onClick={() => setCurrentIndex(dot)}
                className={`w-3 h-3 rounded-full border-2 transition-all duration-300
                  ${
                    currentIndex === dot
                      ? "[background:linear-gradient(90deg,#B74254,#231F51)] border-transparent"
                      : "bg-white [border-image:linear-gradient(90deg,#B74254,#231F51)_1]"
                  }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
