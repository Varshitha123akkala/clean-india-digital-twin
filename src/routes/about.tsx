import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Leaf } from "lucide-react";
import recycleBin from "@/assets/recycle-bin.png";

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
    { title: "Municipal Recycling Project", desc: "Government-recognized initiative serving Bhuvanagiri Municipality." },
    { title: "Transforming Waste into Resources", desc: "A dedicated municipal waste management and recycling project based in Bhuvanagiri, Telangana." },
    { title: "Community-Driven Approach", desc: "Working closely with local municipality, residents, and businesses for lasting impact." },
    { title: "Sustainable Operations", desc: "Environmentally responsible practices across every step of the waste lifecycle." },
  ];
  return (
    <>
      <section className="py-6 bg-white objectives-page-container">
        {/* Background Decorative Greenery */}
        <div className="absolute top-[10%] left-[-5%] w-64 h-64 text-primary/[0.07] pointer-events-none floating-leaf-1 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <path d="M10,90 Q30,60 90,10 Q60,40 10,90 M35,65 Q15,45 30,40 Q45,50 35,65 M60,40 Q45,20 55,15 Q70,25 60,40 M20,80 Q5,65 15,55 Q30,65 20,80" />
          </svg>
        </div>
        <div className="absolute top-[15%] right-[-3%] w-72 h-72 text-primary/[0.06] pointer-events-none floating-leaf-2 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform scale-x-[-1] rotate-[45deg]">
            <path d="M10,90 Q30,60 90,10 Q60,40 10,90 M35,65 Q15,45 30,40 Q45,50 35,65 M60,40 Q45,20 55,15 Q70,25 60,40" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] left-[2%] w-56 h-56 text-primary/[0.08] pointer-events-none floating-leaf-3 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current rotate-[120deg]">
            <path d="M10,90 Q30,60 90,10 Q60,40 10,90 M35,65 Q15,45 30,40 Q45,50 35,65" />
          </svg>
        </div>
        <div className="absolute bottom-[8%] right-[-5%] w-80 h-80 text-primary/[0.07] pointer-events-none floating-leaf-4 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current rotate-[-30deg]">
            <path d="M10,90 Q30,60 90,10 Q60,40 10,90 M35,65 Q15,45 30,40 Q45,50 35,65 M60,40 Q45,20 55,15 Q70,25 60,40 M20,80 Q5,65 15,55 Q30,65 20,80" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          {/* Shared Unified Header */}
          <div className="max-w-5xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full text-xs mb-3">
              <Leaf className="h-3 w-3" /> About Us <Leaf className="h-3 w-3" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Leading Sustainable Waste Management</h2>
            <p className="mt-3 text-sm text-slate-600">
              Clean India is a municipal waste management and recycling initiative committed to building cleaner cities through responsible waste practices.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-primary/30" />
              <Leaf className="h-4 w-4 text-primary" />
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center text-left">
            <img src={recycleBin} alt="Recycling bin" loading="lazy" className="w-full max-w-xl mr-auto h-auto object-contain" />
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {points.map((p) => (
                  <div
                    key={p.title}
                    className="flex gap-2.5 rounded-xl bg-white border border-border/80 p-3 shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-[12.5px] leading-tight text-slate-800">{p.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-1">
                <Link to="/contact" className="inline-flex items-center rounded-md bg-primary px-6 py-2.5 text-xs font-semibold text-primary-foreground hover:bg-[var(--primary-dark)]">Get in Touch</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}