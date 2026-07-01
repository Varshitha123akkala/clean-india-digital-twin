import { createFileRoute } from "@tanstack/react-router";
import { Truck, Trash2, Droplets, FileText, Wrench, ShieldCheck, Leaf, Users } from "lucide-react";
import { useEffect, useState, useRef } from "react";

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
  const servicesRef = useRef<HTMLDivElement>(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setServicesVisible(true);
    };

    const timer = setTimeout(trigger, 800);

    const handleScroll = () => {
      trigger();
      window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          trigger();
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section ref={servicesRef} className="py-12 bg-white objectives-page-container">
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

        <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center relative z-10">
          {/* Shared Unified Header */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full text-xs mb-3">
              <Leaf className="h-3 w-3" /> Our Services <Leaf className="h-3 w-3" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Comprehensive Waste Management Solutions</h2>
            <p className="mt-3 text-sm text-slate-600">
              End-to-end municipal waste management services designed for a cleaner, healthier, and greener Bhuvanagiri.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-primary/30" />
              <Leaf className="h-4 w-4 text-primary" />
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
          </div>

          <div className={`premium-services-staggered-grid ${servicesVisible ? "is-visible" : ""}`}>
            {services.map((s, index) => (
              <div key={s.title} className={`premium-service-card staggered-card-${index}`}>
                <div className="premium-service-card-icon-wrap">
                  <s.icon />
                </div>
                <h3 className="premium-service-card-title">{s.title}</h3>
                <p className="premium-service-card-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}