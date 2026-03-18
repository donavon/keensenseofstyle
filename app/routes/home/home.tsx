import { Hero } from "./hero";
import { StyleConsulting } from "./style-consulting";
import { PrivateEvents } from "./private-events";
import { Contact } from "./contact";
import { Footer } from "./footer";

export function meta() {
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
