import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";

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
      <PageHero eyebrow="Contact Us" title="Get in Touch" subtitle="Partner with Clean India in building a sustainable and cleaner Bhuvanagiri." />
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            {[
              { icon: MapPin, label: "Address", value: "Bhuvanagiri, Telangana 508001" },
              { icon: Phone, label: "Phone", value: "+91 98765 43210" },
              { icon: Mail, label: "Email", value: "info@cleanindia.in" },
              { icon: Clock, label: "Working Hours", value: "Mon – Sat: 7:00 AM – 7:00 PM" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-xl border border-border p-5 bg-[var(--section-muted)]">
                <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{c.label}</div>
                  <div className="font-medium mt-0.5">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
          <form className="rounded-xl border border-border p-6 bg-white shadow-sm space-y-4">
            <div>
              <label className="text-sm font-medium">Name</label>
              <input type="text" className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input type="email" className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea rows={5} className="mt-1 w-full rounded-md border border-input px-3 py-2 text-sm" placeholder="How can we help?" />
            </div>
            <button type="button" className="w-full rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)]">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}