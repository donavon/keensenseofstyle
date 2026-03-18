import { OrbitingGallery } from "~/components/orbiting-gallery";
import photo1 from "./photos/photo-1.webp";
import photo2 from "./photos/photo-2.webp";
import photo3 from "./photos/photo-3.webp";
import photo4 from "./photos/photo-4.webp";
import photo5 from "./photos/photo-5.webp";
import photo6 from "./photos/photo-6.webp";
import photo7 from "./photos/photo-7.webp";
import photo8 from "./photos/photo-8.webp";

const photos = [
  { src: photo1, alt: "" },
  { src: photo2, alt: "" },
  { src: photo4, alt: "" },
  { src: photo5, alt: "" },
  { src: photo6, alt: "" },
  { src: photo3, alt: "" },
  { src: photo7, alt: "" },
  { src: photo8, alt: "" },
];

export function Hero() {
  return (
    <section className="relative h-[90vh] bg-neutral-950 flex items-center justify-center overflow-hidden isolate">
      <OrbitingGallery photos={photos} />

      <div
        className="relative flex flex-col items-center gap-5 text-center px-8"
        style={{ zIndex: 20 }}
      >
        <h1 className="flex flex-col items-center gap-2">
          <span
            className="font-sans font-bold uppercase text-white tracking-[0.22em] text-5xl md:text-7xl"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.9)" }}
          >
            Keen Sense
          </span>{" "}
          <span
            className="font-serif italic lowercase text-white/80 text-2xl md:text-3xl tracking-[0.15em]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
          >
            of
          </span>{" "}
          <span
            className="font-sans font-bold uppercase text-white tracking-[0.22em] text-5xl md:text-7xl"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.9)" }}
          >
            Style
          </span>
        </h1>

        <div className="w-12 h-px bg-white/20" />

        <p className="font-sans text-white/40 text-xs tracking-[0.45em] uppercase">
          New York · Style · Events
        </p>
      </div>
    </section>
  );
}
