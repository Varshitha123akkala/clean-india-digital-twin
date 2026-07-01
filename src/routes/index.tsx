import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Phone, ArrowRight, Truck, Recycle, Factory, Leaf, CheckCircle2, Trash2,
  Droplets, FileText, Wrench, ShieldCheck, Sprout, Users, CircleDot, Cloud,
  Sparkles, Trees, Package,
} from "lucide-react";
import heroTruck from "@/assets/hero-truck.png";
import cardFleet from "@/assets/card-fleet.jpg";
import cardSegregation from "@/assets/card-segregation.jpg";
import cardRecycling from "@/assets/card-recycling.jpg";
import cardMunicipality from "@/assets/card-municipality.jpg";
import recycleBin from "@/assets/recycle-bin.png";
import earthHands from "@/assets/earth-hands.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clean India — Building a Cleaner Bhuvanagiri" },
      { name: "description", content: "Municipal waste collection, segregation, recycling and environmental management services for Bhuvanagiri, Telangana." },
      { property: "og:title", content: "Clean India — Municipal Waste Management" },
      { property: "og:description", content: "Building a cleaner and sustainable Bhuvanagiri." },
    ],
  }),
  component: Index,
});

const featureCards = [
  { icon: Truck, image: cardFleet, title: "Waste Collection Fleet", desc: "Modern collection vehicles serving Bhuvanagiri" },
  { icon: Recycle, image: cardSegregation, title: "Segregation Facility", desc: "Advanced sorting and processing" },
  { icon: Factory, image: cardRecycling, title: "Recycling Operations", desc: "Plastic, paper & metal recovery" },
  { icon: Leaf, image: cardMunicipality, title: "Clean Municipality", desc: "Sustainable urban environment" },
];

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

const steps = [
  { icon: Truck, num: "01", title: "Waste Collection", desc: "Regular collection from households and commercial establishments" },
  { icon: Truck, num: "02", title: "Transportation", desc: "Efficient transport to segregation and processing facilities" },
  { icon: Recycle, num: "03", title: "Segregation", desc: "Scientific sorting of waste into various categories" },
  { icon: Sprout, num: "04", title: "Recycling", desc: "Processing recyclable materials into valuable resources" },
  { icon: Leaf, num: "05", title: "Responsible Disposal", desc: "Safe disposal of residual waste following environmental norms" },
];

const benefits = [
  { icon: Cloud, title: "Reduced Pollution" },
  { icon: Leaf, title: "Reduced Greenhouse Gas Emissions" },
  { icon: Droplets, title: "Improved Sanitation" },
  { icon: Trees, title: "Cleaner Public Spaces" },
  { icon: Recycle, title: "Better Waste Recovery" },
];

const whyPoints = [
  "Environmentally Responsible",
  "Recycling-Based Approach",
  "Municipal Service Expertise",
  "Sustainable Operations",
  "Community Awareness Programs",
];



function Index() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [servicesVisible, setServicesVisible] = useState(false);

  useEffect(() => {
    let triggered = false;
    const trigger = () => {
      if (triggered) return;
      triggered = true;
      setServicesVisible(true);
    };

    // Fallback 1: Timer (always trigger after 800ms on mount as safety)
    const timer = setTimeout(trigger, 800);

    // Fallback 2: Any scroll on the window
    const handleScroll = () => {
      trigger();
      window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Primary: IntersectionObserver
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
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative bg-[#F5FAF4] pb-3 lg:pb-4 pt-0 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side: Text content container */}
            <div className="lg:col-span-6 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Building a Cleaner &amp; Sustainable <span className="text-primary">Bhuvanagiri</span>
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-muted-foreground max-w-lg">
                Municipal Waste Collection, Segregation, Recycling and Environmental Management Services
              </p>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-[var(--primary-dark)]">
                  <Phone className="h-4 w-4" /> Contact Us
                </Link>
                <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-primary bg-white px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-primary hover:bg-primary/5">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Image (Desktop only) */}
            <div className="hidden lg:flex lg:col-span-6 justify-center lg:justify-end">
              <img
                src={heroTruck}
                alt="Clean India waste collection truck with workers"
                className="w-full h-auto object-contain rounded-2xl shadow-lg border border-border/40"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Feature cards */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pb-8 mt-2 lg:mt-3 premium-hero-feature-cards">
          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
            {featureCards.map((c) => (
              <div key={c.title} className="rounded-xl bg-white shadow-md border border-border overflow-hidden">
                <div className="relative">
                  <img src={c.image} alt={c.title} width={640} height={512} loading="lazy" className="w-full h-24 sm:h-32 object-cover" />
                  <div className="absolute -bottom-5 sm:-bottom-6 left-4 sm:left-5 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-primary flex items-center justify-center shadow-md ring-4 ring-white">
                    <c.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
                <div className="p-3 sm:p-5 pt-7 sm:pt-8">
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{c.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      {/* ABOUT */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-primary text-sm font-semibold mb-2">About Us</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Leading Sustainable Waste<br className="hidden sm:block" /> Management in <span className="text-primary">Bhuvanagiri</span>
            </h2>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Clean India is a municipal waste management and recycling initiative committed to building cleaner cities through responsible waste collection, segregation, recycling, and disposal practices.
            </p>
            <Link to="/about" className="inline-flex mt-5 sm:mt-6 items-center gap-2 rounded-md bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)]">
              Learn More About Us
            </Link>
          </div>
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            <img src={recycleBin} alt="Recycling bin" loading="lazy" className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[540px] h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={servicesRef} className="py-16 premium-services-section">
        {/* Decorative concentric circles */}
        <div className="absolute top-10 right-10 w-64 h-64 opacity-20 pointer-events-none z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#4CAF50]">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>
        <div className="absolute bottom-10 left-10 w-64 h-64 opacity-20 pointer-events-none z-0">
          <svg viewBox="0 0 100 100" className="w-full h-full text-[#4CAF50]">
            <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
          </svg>
        </div>

        {/* Decorative connecting paths for 4-column desktop layout */}
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <svg viewBox="0 0 1200 600" className="w-full h-full text-[#4CAF50]/15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 6">
            <path d="M 150 140 Q 300 180, 450 140 T 750 140 T 1050 140" />
            <path d="M 150 380 Q 300 420, 450 380 T 750 380 T 1050 380" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-10"> {/* Reduced bottom margin to 40px */}
            <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full text-xs mb-4">
              <Leaf className="h-3 w-3" /> Our Services <Leaf className="h-3 w-3" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-[#0F172A]">
              Comprehensive Waste Management Solutions
            </h2>
            <p className="mt-4 text-slate-600">
              End-to-end municipal waste management services designed for a cleaner and healthier Bharatvarsh.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-[1px] w-12 bg-primary/30" />
              <Leaf className="h-5 w-5 text-primary" />
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
          
          <div className="text-center mt-12"> {/* Reduced margin-top to 48px */}
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)]">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-10 sm:py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-primary text-sm font-semibold">Our Process</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">5-Step Waste Management Workflow</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground">From collection to disposal — a systematic approach to managing municipal waste.</p>
          </div>
          <div className="mt-10 sm:mt-12 relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] border-t-2 border-dashed border-primary/40" />
            {steps.map((s) => (
              <div key={s.num} className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 relative sm:block">
                <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-primary/10 flex items-center justify-center relative z-10 ring-4 sm:ring-8 ring-white shrink-0">
                  <s.icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
                </div>
                <div className="text-left sm:text-center">
                  <div className="sm:mt-4 text-xs font-semibold text-muted-foreground">Step {s.num}</div>
                  <div className="font-semibold mt-0.5 sm:mt-1">{s.title}</div>
                  <p className="text-xs text-muted-foreground mt-1 sm:mt-2 sm:max-w-[180px] sm:mx-auto leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + WHY */}
      <section className="py-10 sm:py-12 bg-[var(--section-muted)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="rounded-xl bg-white p-5 sm:p-8 border border-border shadow-sm">
            <div className="text-primary text-sm font-semibold">Environmental Benefits</div>
            <h3 className="text-xl sm:text-2xl font-bold mt-1">Positive Environmental Impact</h3>
            <div className="mt-6 sm:mt-8 grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="text-center">
                  <div className="mx-auto h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <b.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div className="mt-2 sm:mt-3 text-[10px] sm:text-xs font-medium leading-tight">{b.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden p-5 sm:p-8 text-white shadow-md"
            style={{ background: "linear-gradient(135deg, oklch(0.45 0.14 150), oklch(0.32 0.1 150))" }}
          >
            <div className="relative z-10 max-w-sm">
              <div className="text-white/80 text-sm font-semibold">Why Choose Us</div>
              <h3 className="text-xl sm:text-2xl font-bold mt-1">Why Clean India</h3>
              <ul className="mt-4 sm:mt-5 space-y-2.5 sm:space-y-3">
                {whyPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-white/90 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <img src={earthHands} alt="Hands holding earth" width={1024} height={768} loading="lazy" className="absolute right-0 bottom-0 h-full w-1/2 object-cover opacity-90 hidden sm:block" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 sm:py-10 bg-[oklch(0.97_0.03_145)] border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">Together Towards a Cleaner Future</h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground">Partner with Clean India in building a sustainable and cleaner Bhuvanagiri.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)] shrink-0">
            Partner With Clean India <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
