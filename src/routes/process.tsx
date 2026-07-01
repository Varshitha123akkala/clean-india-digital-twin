import { createFileRoute } from "@tanstack/react-router";
import { Truck, Recycle, Sprout, Leaf } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process — Clean India" },
      { name: "description", content: "A 5-step waste management workflow from collection to responsible disposal." },
      { property: "og:title", content: "Our Process — Clean India" },
      { property: "og:description", content: "Systematic approach to managing municipal waste." },
    ],
  }),
  component: ProcessPage,
});

const steps = [
  { icon: Truck, num: "01", title: "Waste Collection", desc: "Regular collection from households and commercial establishments." },
  { icon: Truck, num: "02", title: "Transportation", desc: "Efficient transport to segregation and processing facilities." },
  { icon: Recycle, num: "03", title: "Segregation", desc: "Scientific sorting of waste into various categories." },
  { icon: Sprout, num: "04", title: "Recycling", desc: "Processing recyclable materials into valuable resources." },
  { icon: Leaf, num: "05", title: "Responsible Disposal", desc: "Safe disposal of residual waste following environmental norms." },
];

function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="Our Process" title="5-Step Waste Management Workflow" subtitle="From collection to disposal — a systematic approach to managing municipal waste." />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 relative grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] border-t-2 border-dashed border-primary/40" />
          {steps.map((s) => (
            <div key={s.num} className="text-center relative">
              <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center relative z-10 ring-8 ring-white">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <div className="mt-4 text-xs font-semibold text-muted-foreground">Step {s.num}</div>
              <div className="font-semibold mt-1">{s.title}</div>
              <p className="text-xs text-muted-foreground mt-2 max-w-[200px] mx-auto leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}