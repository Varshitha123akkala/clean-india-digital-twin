import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import logoFooterImg from "@/assets/logo-footer.png";

export function Footer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const handleActiveScroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  };

  return (
    <footer
      className="text-[color:var(--footer-foreground)]"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.32 0.09 150) 0%, oklch(0.22 0.07 150) 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14 grid gap-8 sm:gap-10 grid-cols-2 lg:grid-cols-4">
        <div className="col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logoFooterImg} alt="Clean India Logo" className="h-14 w-auto object-contain" />
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
          <h4 className="font-semibold mb-3 sm:mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>
              <Link
                to="/about"
                onClick={() => {
                  if (pathname === "/about") {
                    handleActiveScroll();
                  }
                }}
                className="hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                onClick={() => {
                  if (pathname === "/services") {
                    handleActiveScroll();
                  }
                }}
                className="hover:text-white"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/process"
                onClick={() => {
                  if (pathname === "/process") {
                    handleActiveScroll();
                  }
                }}
                className="hover:text-white"
              >
                Our Process
              </Link>
            </li>
            <li>
              <Link
                to="/objectives"
                onClick={() => {
                  if (pathname === "/objectives") {
                    handleActiveScroll();
                  }
                }}
                className="hover:text-white"
              >
                Objectives
              </Link>
            </li>
            <li>
              <Link
                to="/why-choose-us"
                onClick={() => {
                  if (pathname === "/why-choose-us") {
                    handleActiveScroll();
                  }
                }}
                className="hover:text-white"
              >
                Why Choose Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 sm:mb-4">Services</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li>Waste Collection</li>
            <li>Waste Segregation</li>
            <li>Plastic Recycling</li>
            <li>Paper Recycling</li>
            <li>Metal Recycling</li>
            <li>Safe Disposal</li>
          </ul>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h4 className="font-semibold mb-3 sm:mb-4">Contact</h4>
          <ul className="space-y-2.5 sm:space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Bhuvanagiri, Telangana 508001</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" /> info@cleanindia.in</li>
            <li className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> Mon – Sat: 7:00 AM – 7:00 PM</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-80 text-center sm:text-left">
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