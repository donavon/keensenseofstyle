export function Contact() {
  return (
    <section className="bg-neutral-900 flex flex-col items-center justify-center py-28 px-8 text-center">
      <div className="flex flex-col items-center gap-6 max-w-xl">
        <p className="font-sans text-white/40 text-xs tracking-[0.45em] uppercase">
          Get in Touch
        </p>
        <div className="w-12 h-px bg-white/20" />
        <h2 className="font-sans font-bold uppercase text-white tracking-[0.22em] text-3xl md:text-4xl">
          Let's Work Together
        </h2>
        <p className="font-sans text-white/60 text-sm leading-relaxed text-balance">
          Ready to elevate your style or plan your next event? Slide into my
          DMs on Instagram. I'd love to hear from you.
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
  );
}
