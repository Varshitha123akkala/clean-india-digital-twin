import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import objectiveImg from "@/assets/objective.png";

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

function ObjectivesPage() {
  return (
    <>
      <section className="py-6 bg-white objectives-page-container">
        {/* Background Decorative Greenery */}
        <div className="absolute top-[10%] left-[-5%] w-64 h-64 text-primary/[0.07] pointer-events-none floating-leaf-1 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
            <path d="M10,90 Q30,60 90,10 Q60,40 10,90 M35,65 Q15,45 30,40 Q45,50 35,65 M60,40 Q45,20 55,15 Q70,25 60,40 M20,80 Q5,65 15,55 Q30,65 20,80" />
          </svg>
        </div>
        <div className="absolute top-[15%] right-[-10%] w-60 h-60 text-primary/[0.06] pointer-events-none floating-leaf-2 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current transform scale-x-[-1] rotate-[45deg]">
            <path d="M10,90 Q30,60 90,10 Q60,40 10,90 M35,65 Q15,45 30,40 Q45,50 35,65 M60,40 Q45,20 55,15 Q70,25 60,40" />
          </svg>
        </div>
        <div className="absolute bottom-[10%] left-[2%] w-56 h-56 text-primary/[0.08] pointer-events-none floating-leaf-3 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current rotate-[120deg]">
            <path d="M10,90 Q30,60 90,10 Q60,40 10,90 M35,65 Q15,45 30,40 Q45,50 35,65" />
          </svg>
        </div>
        <div className="absolute bottom-[8%] right-[-12%] w-64 h-64 text-primary/[0.07] pointer-events-none floating-leaf-4 hidden lg:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-current rotate-[-30deg]">
            <path d="M10,90 Q30,60 90,10 Q60,40 10,90 M35,65 Q15,45 30,40 Q45,50 35,65 M60,40 Q45,20 55,15 Q70,25 60,40 M20,80 Q5,65 15,55 Q30,65 20,80" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center relative z-10">
          {/* Shared Unified Header */}
          <div className="max-w-5xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full text-xs mb-3">
              <Leaf className="h-3 w-3" /> Objectives <Leaf className="h-3 w-3" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Positive Environmental Impact</h2>
            <p className="mt-3 text-sm text-slate-600">
              Our core commitments toward a cleaner, healthier, and more sustainable Bhuvanagiri.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-primary/30" />
              <Leaf className="h-4 w-4 text-primary" />
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
          </div>

          {/* Centered Infographic Graphic */}
          <div className="flex justify-center items-center mt-6">
            <img src={objectiveImg} alt="Clean India Objectives Infographic" loading="lazy" className="w-full max-w-[860px] max-h-[350px] object-contain mx-auto mix-blend-multiply" style={{ filter: 'brightness(1.04) contrast(1.02)' }} />
          </div>
        </div>
      </section>
    </>
  );
}