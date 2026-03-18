import styleConsultingPhoto from "./photos/style-consulting.webp";

export function StyleConsulting() {
  return (
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
            Your wardrobe should tell the story you want to tell. Whether you're
            building a look from scratch or refining what you already have, I
            work with you to develop a personal style that feels effortless and
            authentically yours.
          </p>
          <p className="font-sans text-white/60 text-sm leading-relaxed">
            Services include wardrobe edits, personal shopping, outfit curation,
            and styling for special occasions. Every session is tailored — no
            two clients, no two closets, no two visions are ever the same.
          </p>
          <p className="font-sans text-white/60 text-sm leading-relaxed">
            Style isn't about following trends. It's about knowing yourself.
          </p>
        </div>
      </div>
    </section>
  );
}
