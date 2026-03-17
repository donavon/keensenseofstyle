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
import styleConsultingPhoto from "./photos/style-consulting.webp";
import privateEventsPhoto from "./photos/private-events.webp";

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
    {
      name: "description",
      content:
        "Personal styling, wardrobe consulting, and private event services in New York City.",
    },
  ];
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-neutral-950">
      {/* Hero */}
      <section className="relative h-[90vh] bg-neutral-950 flex items-center justify-center overflow-hidden">
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
            New York · Style · Events
          </p>
        </div>
      </section>

      {/* Style Consulting */}
      <section className="bg-neutral-900 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 h-[60vw] md:h-auto">
          <img
            src={styleConsultingPhoto}
            alt="Personal style consulting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center px-10 py-20 md:px-16 lg:px-24">
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="font-sans text-white/40 text-xs tracking-[0.45em] uppercase">
              Services
            </p>
            <div className="w-12 h-px bg-white/20" />
            <h2 className="font-sans font-bold uppercase text-white tracking-[0.22em] text-3xl md:text-4xl">
              Personal Style Consulting
            </h2>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              Your wardrobe should tell the story you want to tell. Whether
              you're building a look from scratch or refining what you already
              have, I work with you to develop a personal style that feels
              effortless and authentically yours.
            </p>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              Services include wardrobe edits, personal shopping, outfit
              curation, and styling for special occasions. Every session is
              tailored — no two clients, no two closets, no two visions are
              ever the same.
            </p>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              Style isn't about following trends. It's about knowing yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="bg-neutral-950 flex flex-col md:flex-row-reverse">
        <div className="w-full md:w-1/2 h-[60vw] md:h-auto">
          <img
            src={privateEventsPhoto}
            alt="Private events"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center px-10 py-20 md:px-16 lg:px-24">
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="font-sans text-white/40 text-xs tracking-[0.45em] uppercase">
              Private Events
            </p>
            <div className="w-12 h-px bg-white/20" />
            <h2 className="font-sans font-bold uppercase text-white tracking-[0.22em] text-3xl md:text-4xl">
              Curated Experiences
            </h2>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              From intimate dinner parties to larger celebrations, I bring the
              same attention to detail and sense of occasion to every event I'm
              part of. Bartending is at the heart of what I offer — crafted
              cocktails, considered presentation, and a warm presence behind the
              bar.
            </p>
            <p className="font-sans text-white/60 text-sm leading-relaxed">
              But the bar is just the beginning. Whether you need additional
              event support, styling for the occasion, or simply someone who
              knows how to make a room feel right — reach out and let's talk
              about what you have in mind.
            </p>
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-neutral-900 flex flex-col items-center justify-center py-28 px-8 text-center">
        <div className="flex flex-col items-center gap-6 max-w-xl">
          <p className="font-sans text-white/40 text-xs tracking-[0.45em] uppercase">
            Get in Touch
          </p>
          <div className="w-12 h-px bg-white/20" />
          <h2 className="font-sans font-bold uppercase text-white tracking-[0.22em] text-3xl md:text-4xl">
            Let's Work Together
          </h2>
          <p className="font-sans text-white/60 text-sm leading-relaxed">
            Ready to elevate your style or plan your next event? Slide into my
            DMs on Instagram — I'd love to hear from you.
          </p>
          <a
            href="https://instagram.com/KeenSenseofStyle"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 font-sans text-white/80 text-xs tracking-[0.35em] uppercase border border-white/20 px-8 py-4 hover:bg-white hover:text-neutral-950 transition-colors duration-300"
          >
            @KeenSenseofStyle
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-white/10 flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-2">
        <p className="font-sans text-white/30 text-xs tracking-[0.2em]">
          © {year} Keen Sense of Style
        </p>
        <p className="font-sans text-white/30 text-xs tracking-[0.2em]">
          Made with ❤️ in NYC by Keen
        </p>
      </footer>
    </div>
  );
}
