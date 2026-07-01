import { Link } from "@tanstack/react-router";
import { Leaf, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="text-[color:var(--footer-foreground)]"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.32 0.09 150) 0%, oklch(0.22 0.07 150) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-bold text-lg">Clean India</div>
              <div className="text-[11px] opacity-80">Municipal Waste Management</div>
            </div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            Clean India is a municipal waste segregation and recycling project based in
            Bhuvanagiri, Telangana, dedicated to building a cleaner and sustainable urban
            environment through professional waste management services.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/services" className="hover:text-white">Our Services</Link></li>
            <li><Link to="/process" className="hover:text-white">Our Process</Link></li>
            <li><Link to="/objectives" className="hover:text-white">Objectives</Link></li>
            <li><Link to="/why-choose-us" className="hover:text-white">Why Choose Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Waste Collection</li>
            <li>Waste Segregation</li>
            <li>Plastic Recycling</li>
            <li>Paper Recycling</li>
            <li>Metal Recycling</li>
            <li>Safe Disposal</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Bhuvanagiri, Telangana 508001</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@cleanindia.in</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> Mon – Sat: 7:00 AM – 7:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-80">
          <p>© 2026 Clean India — Municipal Waste Segregation and Recycling Project. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Facebook className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
            <Instagram className="h-4 w-4" />
            <Linkedin className="h-4 w-4" />
          </div>
        </div>
      </div>
    </footer>
  );
}