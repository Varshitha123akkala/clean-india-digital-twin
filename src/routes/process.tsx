import { createFileRoute } from "@tanstack/react-router";
import { Truck, Recycle, Sprout, Leaf } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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
  const [visibleCount, setVisibleCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
          setVisibleCount(1);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  useEffect(() => {
    if (visibleCount > 0 && visibleCount < 5) {
      // Step duration is 350ms. Delay before next step is 250ms.
      // Total delay = 350ms + 250ms = 600ms.
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <>
      <section ref={sectionRef} className="py-12 bg-white objectives-page-container">
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
          <div className="max-w-5xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full text-xs mb-3">
              <Leaf className="h-3 w-3" /> Our Process <Leaf className="h-3 w-3" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">5-Step Waste Management Workflow</h2>
            <p className="mt-3 text-sm text-slate-600">
              From collection to disposal — a systematic approach to managing municipal waste.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-primary/30" />
              <Leaf className="h-4 w-4 text-primary" />
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 min-h-[220px]">
            {/* Connecting line segments on desktop */}
            <div
              className="hidden md:block absolute top-8 border-t-2 border-dashed border-primary/45 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: "10%",
                width: visibleCount >= 2 ? "20%" : "0%",
                opacity: visibleCount >= 2 ? 1 : 0,
              }}
            />
            <div
              className="hidden md:block absolute top-8 border-t-2 border-dashed border-primary/45 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: "30%",
                width: visibleCount >= 3 ? "20%" : "0%",
                opacity: visibleCount >= 3 ? 1 : 0,
              }}
            />
            <div
              className="hidden md:block absolute top-8 border-t-2 border-dashed border-primary/45 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: "50%",
                width: visibleCount >= 4 ? "20%" : "0%",
                opacity: visibleCount >= 4 ? 1 : 0,
              }}
            />
            <div
              className="hidden md:block absolute top-8 border-t-2 border-dashed border-primary/45 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                left: "70%",
                width: visibleCount >= 5 ? "20%" : "0%",
                opacity: visibleCount >= 5 ? 1 : 0,
              }}
            />

            {steps.map((s, index) => {
              const isVisible = visibleCount >= index + 1;
              return (
                <div
                  key={s.num}
                  className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 relative sm:block transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(24px)",
                    pointerEvents: isVisible ? "auto" : "none",
                  }}
                >
                  <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center relative z-10 ring-4 sm:ring-8 ring-white shrink-0">
                    <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                  </div>
                  <div className="text-left sm:text-center">
                    <div className="sm:mt-4 text-xs font-semibold text-muted-foreground">Step {s.num}</div>
                    <div className="font-semibold mt-0.5 sm:mt-1">{s.title}</div>
                    <p className="text-xs text-muted-foreground mt-1 sm:mt-2 sm:max-w-[200px] sm:mx-auto leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}