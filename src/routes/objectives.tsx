import { createFileRoute } from "@tanstack/react-router";
import { CircleDot, Cloud, Sparkles, Trees, Package, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/objectives")({
  head: () => ({
    meta: [
      { title: "Objectives — Clean India" },
      { name: "description", content: "Our environmental and community objectives for a sustainable Bhuvanagiri." },
      { property: "og:title", content: "Objectives — Clean India" },
      { property: "og:description", content: "Reducing pollution and improving public sanitation." },
    ],
  }),
  component: ObjectivesPage,
});

const objectives = [
  { icon: CircleDot, title: "Reduced Pollution", desc: "Minimize air, water and soil pollution across the municipality." },
  { icon: Cloud, title: "Reduced Greenhouse Gas Emissions", desc: "Lower emissions through recycling and resource recovery." },
  { icon: Sparkles, title: "Improved Sanitation", desc: "Cleaner streets, neighborhoods and public spaces." },
  { icon: Trees, title: "Cleaner Public Spaces", desc: "Well-maintained parks, roads and community areas." },
  { icon: Package, title: "Better Waste Recovery", desc: "Maximize value recovered from every waste stream." },
  { icon: Users, title: "Community Awareness", desc: "Empower residents through education and outreach programs." },
];

function ObjectivesPage() {
  return (
    <>
      <PageHero eyebrow="Objectives" title="Positive Environmental Impact" subtitle="Our commitments toward a cleaner, healthier and more sustainable Bhuvanagiri." />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {objectives.map((o) => (
            <div key={o.title} className="rounded-xl bg-white p-6 border border-border shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <o.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}