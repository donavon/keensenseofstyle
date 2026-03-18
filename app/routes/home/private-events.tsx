import privateEventsPhoto from "./photos/private-events.webp";

export function PrivateEvents() {
  return (
    <section className="bg-neutral-950 flex flex-col md:flex-row-reverse">
      <div className="w-full md:w-1/2 h-[60vw] md:h-auto">
        <img
          src={privateEventsPhoto}
          alt="Private events"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center md:justify-end px-10 py-20 md:px-16 lg:px-24">
        <div className="flex flex-col gap-6 max-w-lg md:items-end">
          <p className="font-sans text-white/40 text-xs tracking-[0.45em] uppercase md:text-right">
            Private Events
          </p>
          <div className="w-12 h-px bg-white/20" />
          <h2 className="font-sans font-bold uppercase text-white tracking-[0.22em] text-3xl md:text-4xl md:text-right">
            Curated Experiences
          </h2>
          <p className="font-sans text-white/60 text-sm leading-relaxed md:text-right">
            From intimate dinner parties to larger celebrations, I bring the
            same attention to detail and sense of occasion to every event I'm
            part of. Bartending is at the heart of what I offer — crafted
            cocktails, considered presentation, and a warm presence behind the
            bar.
          </p>
          <p className="font-sans text-white/60 text-sm leading-relaxed md:text-right">
            But the bar is just the beginning. Whether you need additional
            event support, styling for the occasion, or simply someone who
            knows how to make a room feel right — reach out and let's talk
            about what you have in mind.
          </p>
        </div>
      </div>
    </section>
  );
}
