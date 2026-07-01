import { createFileRoute } from "@tanstack/react-router";
import { Leaf } from "lucide-react";
import whyUs from "@/assets/why-us.png";

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

function WhyPage() {
  return (
    <>
      <section className="py-4 bg-white objectives-page-container">
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

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left Side: Why Choose Us text block */}
            <div className="text-left max-w-xl order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full text-xs mb-3">
                <Leaf className="h-3 w-3" /> Why Choose Us <Leaf className="h-3 w-3" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 tracking-tight leading-tight">
                Why Clean India
              </h2>
              <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-700 font-semibold leading-normal">
                A trusted partner combining expertise, sustainability, and community focus.
              </p>
              <div className="h-[2px] w-16 bg-primary/45 my-4" />
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  Our municipal recycling initiative is structured around ecological responsibility, circular resource recovery, and active public-private partnerships.
                </p>
                <p>
                  By deploying automated sorting hubs, standardized waste collection fleets, and educational campaign templates, we serve Bhuvanagiri municipality with professional, modern, and zero-landfill goals.
                </p>
              </div>
            </div>

            {/* Right Side: Tree infographic sticker */}
            <div className="flex justify-center items-center order-1 lg:order-2">
              <img src={whyUs} alt="Why Choose Us Diagram" loading="lazy" className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[390px] h-auto object-contain mx-auto mix-blend-multiply" style={{ filter: 'brightness(1.04) contrast(1.02)' }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}