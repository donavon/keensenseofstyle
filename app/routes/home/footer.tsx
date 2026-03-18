export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 border-t border-white/10 flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-2">
      <p className="font-sans text-white/30 text-xs tracking-[0.2em]">
        © {year} Keen Sense of Style
      </p>
      <p className="font-sans text-white/30 text-xs tracking-[0.2em]">
        Made with ❤️ in NYC by Keen
      </p>
    </footer>
  );
}
