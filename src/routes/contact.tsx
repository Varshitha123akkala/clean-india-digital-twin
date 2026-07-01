import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock, Leaf } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Clean India" },
      { name: "description", content: "Get in touch with Clean India for municipal waste management services in Bhuvanagiri." },
      { property: "og:title", content: "Contact Clean India" },
      { property: "og:description", content: "Reach us by phone, email, or at our office in Bhuvanagiri, Telangana." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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

        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center relative z-10">
          {/* Shared Unified Header */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-semibold bg-primary/10 px-4 py-1.5 rounded-full text-xs mb-3">
              <Leaf className="h-3 w-3" /> Contact Us <Leaf className="h-3 w-3" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Get in Touch</h2>
            <p className="mt-3 text-sm text-slate-600">
              Partner with Clean India in building a sustainable and cleaner Bhuvanagiri.
            </p>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-primary/30" />
              <Leaf className="h-4 w-4 text-primary" />
              <div className="h-[1px] w-12 bg-primary/30" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
            {[
              { icon: MapPin, label: "Address", value: "Bhuvanagiri, Telangana 508001" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "info@cleanindia.in" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat: 7:00 AM – 7:00 PM" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-xl border border-border/80 p-5 bg-white shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300">
                <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{c.label}</div>
                  <div className="font-semibold mt-0.5 text-slate-700">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}