import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Phone, ArrowRight, Truck, Recycle, Factory, Leaf, CheckCircle2, Trash2,
  Droplets, FileText, Wrench, ShieldCheck, Sprout, Users, CircleDot, Cloud,
  Sparkles, Trees, Package,
} from "lucide-react";
import heroTruck from "@/assets/hero-truck.jpg";
import cardFleet from "@/assets/card-fleet.jpg";
import cardSegregation from "@/assets/card-segregation.jpg";
import cardRecycling from "@/assets/card-recycling.jpg";
import cardMunicipality from "@/assets/card-municipality.jpg";
import recycleBin from "@/assets/recycle-bin.jpg";
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
  { icon: CircleDot, title: "Reduced Pollution" },
  { icon: Cloud, title: "Reduced Greenhouse Gas Emissions" },
  { icon: Sparkles, title: "Improved Sanitation" },
  { icon: Trees, title: "Cleaner Public Spaces" },
  { icon: Package, title: "Better Waste Recovery" },
];

const whyPoints = [
  "Environmentally Responsible",
  "Recycling-Based Approach",
  "Municipal Service Expertise",
  "Sustainable Operations",
  "Community Awareness Programs",
];

const processIndicators = [
  { icon: Truck, label: "Municipal Waste Collection" },
  { icon: Recycle, label: "Segregation" },
  { icon: Factory, label: "Comprehensive Recycling" },
  { icon: Users, label: "Public Awareness Programs" },
  { icon: Leaf, label: "Environmentally Safe Disposal" },
];

function Index() {
  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative bg-gradient-to-b from-[oklch(0.97_0.03_145)] to-white">
        <div className="mx-auto max-w-7xl px-6 pt-14 pb-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Building a Cleaner &amp;<br />
              Sustainable <span className="text-primary">Bhuvanagiri</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Municipal Waste Collection, Segregation, Recycling and Environmental Management Services
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-[var(--primary-dark)]">
                <Phone className="h-4 w-4" /> Contact Us
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-md border border-primary bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative">
            <img src={heroTruck} alt="Clean India waste collection truck with workers" width={1280} height={768} className="w-full h-auto rounded-xl shadow-lg" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((c) => (
              <div key={c.title} className="rounded-xl bg-white shadow-md border border-border overflow-hidden">
                <div className="relative">
                  <img src={c.image} alt={c.title} width={640} height={512} loading="lazy" className="w-full h-32 object-cover" />
                  <div className="absolute -bottom-6 left-5 h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-md ring-4 ring-white">
                    <c.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="p-5 pt-8">
                  <h3 className="font-semibold text-foreground">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-primary text-sm font-semibold mb-2">About Us</div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Leading Sustainable Waste<br />Management in <span className="text-primary">Bhuvanagiri</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Clean India is a municipal waste management and recycling initiative committed to building cleaner cities through responsible waste collection, segregation, recycling, and disposal practices.
            </p>
            <div className="mt-6 space-y-5">
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Municipal Recycling Project</h4>
                  <p className="text-sm text-muted-foreground mt-1">Government-recognized initiative serving Bhuvanagiri Municipality</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Transforming Waste into Resources</h4>
                  <p className="text-sm text-muted-foreground mt-1">Clean India is a dedicated municipal waste management and recycling project based in Bhuvanagiri, Telangana. We work closely with local municipality to provide comprehensive waste collection, segregation, recycling, and responsible disposal services.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="inline-flex mt-8 items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)]">
              Learn More About Us
            </Link>
          </div>
          <div className="relative">
            <div className="flex items-center justify-center">
              <img src={recycleBin} alt="Recycling bin" width={400} height={400} loading="lazy" className="w-64 md:w-80 h-auto" />
            </div>
            <div className="mt-6 space-y-4">
              {processIndicators.map((p) => (
                <div key={p.label} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <p.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-[var(--section-muted)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-primary text-sm font-semibold">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Comprehensive Waste Management Solutions</h2>
            <p className="mt-3 text-muted-foreground">End-to-end municipal waste management services designed for a cleaner and healthier Bhuvanagiri.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)]">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-primary text-sm font-semibold">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">5-Step Waste Management Workflow</h2>
            <p className="mt-3 text-muted-foreground">From collection to disposal — a systematic approach to managing municipal waste.</p>
          </div>
          <div className="mt-12 relative grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="hidden md:block absolute top-8 left-[10%] right-[10%] border-t-2 border-dashed border-primary/40" />
            {steps.map((s) => (
              <div key={s.num} className="text-center relative">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center relative z-10 ring-8 ring-white">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="mt-4 text-xs font-semibold text-muted-foreground">Step {s.num}</div>
                <div className="font-semibold mt-1">{s.title}</div>
                <p className="text-xs text-muted-foreground mt-2 max-w-[180px] mx-auto leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS + WHY */}
      <section className="py-16 bg-[var(--section-muted)]">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
          <div className="rounded-xl bg-white p-8 border border-border shadow-sm">
            <div className="text-primary text-sm font-semibold">Environmental Benefits</div>
            <h3 className="text-2xl font-bold mt-1">Positive Environmental Impact</h3>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-4">
              {benefits.map((b) => (
                <div key={b.title} className="text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <b.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mt-3 text-xs font-medium leading-tight">{b.title}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative rounded-xl overflow-hidden p-8 text-white shadow-md"
            style={{ background: "linear-gradient(135deg, oklch(0.45 0.14 150), oklch(0.32 0.1 150))" }}
          >
            <div className="relative z-10 max-w-sm">
              <div className="text-white/80 text-sm font-semibold">Why Choose Us</div>
              <h3 className="text-2xl font-bold mt-1">Why Clean India</h3>
              <ul className="mt-5 space-y-3">
                {whyPoints.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-white/90 shrink-0" /> {p}
                  </li>
                ))}
              </ul>
            </div>
            <img src={earthHands} alt="Hands holding earth" width={1024} height={768} loading="lazy" className="absolute right-0 bottom-0 h-full w-1/2 object-cover opacity-90 hidden sm:block" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[oklch(0.97_0.03_145)] border-y border-border">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Together Towards a Cleaner Future</h3>
            <p className="mt-2 text-muted-foreground">Partner with Clean India in building a sustainable and cleaner Bhuvanagiri.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)]">
            Partner With Clean India <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
