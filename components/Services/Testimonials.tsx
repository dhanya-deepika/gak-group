"use client";
import { useState } from "react";
import { Play } from "lucide-react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const smallVideos = [
    { src: "/video/video2.jpg", alt: "testimonial small video", play: true },
    {
      src: "/video/video3.jpg",
      alt: "testimonial property",
      overlay: "Residential property in Sienna",
    },
    { src: "/video/video4.jpg", alt: "New video", play: true },
  ];

  const handlePlay = (index: number) => {
    setPlayingIndex(index);
  };

  return (
    <section className="flex justify-center py-16 bg-white">
      {/* OUTER WRAPPER with gradient border */}
      <div className="relative max-w-[1156px] w-full rounded-[40px] p-[2px] bg-gradient-to-tr from-[#231F51] via-[#B94255] to-transparent">
        {/* INNER WHITE CARD */}
        <div className="flex flex-col p-8 gap-10 rounded-[40px] bg-white w-full h-full">
          
          {/* === HEADING === */}
          <h2 className="text-3xl  text-black font-sora ml-5">
            Testimonials
          </h2>

          {/* === TOP ROW === */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* LEFT SIDE – MAIN VIDEO */}
            <div className="relative md:w-1/2 w-full aspect-[548/379] rounded-[40px] overflow-hidden cursor-pointer"
              onClick={() => handlePlay(0)}
            >
              {playingIndex === 0 ? (
                <video
                  src="/video/video1.mp4"
                  controls
                  autoPlay
                  className="w-full h-full object-cover rounded-[40px]"
                />
              ) : (
                <>
                  <img
                    src="/video/video1.jpg"
                    alt="testimonial video"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-md">
                      <Play className="w-8 h-8 text-black" fill="black" />
                    </div>
                  </div>
                </>
              )}
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
          <div className="overflow-x-auto w-full flex gap-4">
            {smallVideos.map((video, idx) => (
              <div
                key={idx}
                className="relative w-[326px] flex-shrink-0 aspect-[326/215] rounded-[30px] overflow-hidden cursor-pointer"
                onClick={() => handlePlay(idx + 1)} // +1 because main video is 0
              >
                {playingIndex === idx + 1 ? (
                  <video
                    src={`/video/video${idx + 2}.mp4`}
                    controls
                    autoPlay
                    className="w-full h-full object-cover rounded-[30px]"
                  />
                ) : (
                  <>
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
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-md">
                          <Play className="w-6 h-6 text-black" fill="black" />
                        </div>
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
