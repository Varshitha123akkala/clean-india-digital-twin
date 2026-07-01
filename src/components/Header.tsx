import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/process", label: "Our Process" },
  { to: "/objectives", label: "Objectives" },
  { to: "/why-choose-us", label: "Why Choose Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center">
            <Leaf className="h-6 w-6 text-primary" />
          </div>
          <div className="leading-tight">
            <div className="text-primary font-bold text-lg">Clean India</div>
            <div className="text-[11px] text-muted-foreground tracking-wide">
              Municipal Waste Management
            </div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`relative text-sm font-medium transition-colors ${
                  active ? "text-primary" : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>
        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-[var(--primary-dark)] transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}