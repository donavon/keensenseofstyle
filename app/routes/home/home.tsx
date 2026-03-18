import { Hero } from "./hero";
import { StyleConsulting } from "./style-consulting";
import { PrivateEvents } from "./private-events";
import { Contact } from "./contact";
import { Footer } from "./footer";

export default function Home() {
  return (
    <main className="bg-neutral-950">
      <Hero />
      <StyleConsulting />
      <PrivateEvents />
      <Contact />
      <Footer />
    </main>
  );
}
