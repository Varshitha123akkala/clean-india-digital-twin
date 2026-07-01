import { createFileRoute } from "@tanstack/react-router";
import { Truck, Trash2, Droplets, FileText, Wrench, ShieldCheck, Leaf, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Clean India" },
      { name: "description", content: "Comprehensive municipal waste management services: collection, segregation, recycling, and safe disposal." },
      { property: "og:title", content: "Our Services — Clean India" },
      { property: "og:description", content: "End-to-end waste management solutions for Bhuvanagiri." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Truck, title: "Municipal Waste Collection", desc: "Reliable door-to-door and community bin waste collection services." },
  { icon: Trash2, title: "Waste Segregation", desc: "Scientific separation of waste into biodegradable, recyclable, and non-recyclable categories." },
  { icon: Droplets, title: "Plastic Recycling", desc: "Processing and recycling of plastic waste into reusable raw materials." },
  { icon: FileText, title: "Paper Recycling", desc: "Collection and recycling of paper and cardboard waste to reduce deforestation." },
  { icon: Wrench, title: "Metal Recycling", desc: "Recovery and processing of ferrous and non-ferrous metals from municipal waste." },
  { icon: ShieldCheck, title: "Safe Waste Disposal", desc: "Environmentally responsible disposal of non-recyclable and hazardous waste." },
  { icon: Leaf, title: "Resource Recovery", desc: "Extracting valuable materials and energy from waste streams through advanced processes." },
  { icon: Users, title: "Public Awareness Programs", desc: "Community education on waste segregation, recycling practices, and environmental responsibility." },
];

function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Our Services" title="Comprehensive Waste Management Solutions" subtitle="End-to-end municipal waste management services designed for a cleaner and healthier Bhuvanagiri." />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl bg-white p-5 border border-border shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{s.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}