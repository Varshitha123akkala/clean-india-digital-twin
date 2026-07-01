import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import earthHands from "@/assets/earth-hands.jpg";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose Us — Clean India" },
      { name: "description", content: "Why Clean India is the trusted partner for municipal waste management in Bhuvanagiri." },
      { property: "og:title", content: "Why Choose Clean India" },
      { property: "og:description", content: "Environmentally responsible, community-focused waste management." },
    ],
  }),
  component: WhyPage,
});

const points = [
  "Environmentally Responsible",
  "Recycling-Based Approach",
  "Municipal Service Expertise",
  "Sustainable Operations",
  "Community Awareness Programs",
];

function WhyPage() {
  return (
    <>
      <PageHero eyebrow="Why Choose Us" title="Why Clean India" subtitle="A trusted partner combining expertise, sustainability, and community focus." />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
          <img src={earthHands} alt="Hands holding earth" width={1024} height={768} loading="lazy" className="w-full rounded-xl shadow-md" />
          <ul className="space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 rounded-lg bg-[var(--section-muted)] border border-border p-4">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                <span className="font-medium">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}