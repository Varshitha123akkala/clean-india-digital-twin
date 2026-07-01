import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import recycleBin from "@/assets/recycle-bin.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Clean India" },
      { name: "description", content: "Learn about Clean India's mission to build cleaner, sustainable cities through municipal waste management." },
      { property: "og:title", content: "About Clean India" },
      { property: "og:description", content: "A municipal recycling initiative serving Bhuvanagiri, Telangana." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const points = [
    { title: "Municipal Recycling Project", desc: "Government-recognized initiative serving Bhuvanagiri Municipality" },
    { title: "Transforming Waste into Resources", desc: "A dedicated municipal waste management and recycling project based in Bhuvanagiri, Telangana." },
    { title: "Community-Driven Approach", desc: "Working closely with local municipality, residents, and businesses for lasting impact." },
    { title: "Sustainable Operations", desc: "Environmentally responsible practices across every step of the waste lifecycle." },
  ];
  return (
    <>
      <PageHero eyebrow="About Us" title="Leading Sustainable Waste Management" subtitle="Clean India is a municipal waste management and recycling initiative committed to building cleaner cities through responsible waste practices." />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <img src={recycleBin} alt="Recycling bin" width={600} height={600} loading="lazy" className="w-full max-w-md mx-auto" />
          <div className="space-y-5">
            {points.map((p) => (
              <div key={p.title} className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">{p.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                </div>
              </div>
            ))}
            <Link to="/contact" className="inline-flex mt-4 items-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)]">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}