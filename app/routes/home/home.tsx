import type { Route } from "./+types/home";
import { OrbitingGallery } from "../../components/orbiting-gallery";
import photo1 from "./photos/photo-1.webp";
import photo2 from "./photos/photo-2.webp";
import photo3 from "./photos/photo-3.webp";
import photo4 from "./photos/photo-4.webp";
import photo5 from "./photos/photo-5.webp";
import photo6 from "./photos/photo-6.webp";
import photo7 from "./photos/photo-7.webp";
import photo8 from "./photos/photo-8.webp";

const PHOTOS = [
  { src: photo1, alt: "Style 1" },
  { src: photo2, alt: "Style 2" },
  { src: photo4, alt: "Style 4" },
  { src: photo5, alt: "Style 5" },
  { src: photo6, alt: "Style 6" },
  { src: photo3, alt: "Style 3" },
  { src: photo7, alt: "Style 7" },
  { src: photo8, alt: "Style 8" },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Keen Sense of Style" },
    { name: "description", content: "Coming Soon" },
  ];
}

export default function Home() {
  return (
    <div className="relative min-h-screen bg-neutral-950 flex items-center justify-center overflow-hidden">
      <OrbitingGallery photos={PHOTOS} />

      <div
        className="relative flex flex-col items-center gap-5 text-center px-8"
        style={{ zIndex: 20 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-sans font-bold uppercase text-white tracking-[0.22em] text-5xl md:text-7xl"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.9)" }}
          >
            Keen Sense
          </span>
          <span
            className="font-serif italic lowercase text-white/80 text-2xl md:text-3xl tracking-[0.15em]"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}
          >
            of
          </span>
          <span
            className="font-sans font-bold uppercase text-white tracking-[0.22em] text-5xl md:text-7xl"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.9)" }}
          >
            Style
          </span>
        </div>

        <div className="w-12 h-px bg-white/20" />

        <p className="font-sans text-white/40 text-xs tracking-[0.45em] uppercase">
          Coming Soon
        </p>
      </div>
    </div>
  );
}
