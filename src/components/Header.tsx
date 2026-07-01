import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logoImg from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/process", label: "Our Process" },
  { to: "/objectives", label: "Objectives" },
  { to: "/why-choose-us", label: "Why Choose Us" },
] as const;

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Dynamically calculate the active link size and position
  const updatePill = () => {
    if (activeRef.current && containerRef.current) {
      const activeEl = activeRef.current;
      const containerEl = containerRef.current;
      const activeRect = activeEl.getBoundingClientRect();
      const containerRect = containerEl.getBoundingClientRect();

      setPillStyle({
        left: activeRect.left - containerRect.left,
        width: activeRect.width,
      });
    } else {
      setPillStyle({ left: 0, width: 0 });
    }
  };

  // Callback ref to capture layout metrics on every render/mount cycle
  const activeRefCallback = (node: HTMLAnchorElement | null) => {
    if (node) {
      activeRef.current = node;
      // Calculate immediately
      const containerEl = containerRef.current;
      if (containerEl) {
        const activeRect = node.getBoundingClientRect();
        const containerRect = containerEl.getBoundingClientRect();
        setPillStyle({
          left: activeRect.left - containerRect.left,
          width: activeRect.width,
        });
      }
    }
  };

  useEffect(() => {
    updatePill();

    // Re-verify after a brief delay to handle async layout settles / CSS loading
    const timer = setTimeout(updatePill, 100);

    // Recalculate on window resize to keep it aligned
    window.addEventListener("resize", updatePill);
    return () => {
      window.removeEventListener("resize", updatePill);
      clearTimeout(timer);
    };
  }, [pathname]);

  // Smooth scroll handler for active nav tab click (deferred to let router re-mount finish)
  const handleActiveScroll = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      document.body.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  };

  // Magnetic hover effect handler
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.22}px, ${y * 0.20}px) scale(1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    el.style.transform = "";
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <img src={logoImg} alt="Clean India Logo" className="h-9 w-9 sm:h-11 sm:w-11 object-contain" />
          <div className="leading-tight">
            <div className="text-primary font-bold text-base sm:text-lg">Clean India</div>
            <div className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide hidden sm:block">
              Municipal Waste Management
            </div>
          </div>
        </Link>

        {/* Premium redesigned pill-style nav */}
        <nav
          ref={containerRef}
          className="hidden lg:flex items-center gap-1.5 relative py-2 px-1 bg-slate-50 rounded-full border border-slate-100"
        >
          {/* Sliding active pill background */}
          {pillStyle.width > 0 && (
            <div
              className="absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_4px_12px_rgba(76,175,80,0.3)] will-change-[left,width]"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
              }}
            />
          )}

          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                ref={active ? (activeRefCallback as any) : null}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                  if (pathname === item.to) {
                    handleActiveScroll();
                  }
                }}
                className={`relative z-10 px-4 py-1.5 text-sm font-medium transition-colors duration-300 flex items-center justify-center rounded-full select-none cursor-pointer`}
                style={{
                  color: active ? "#ffffff" : "rgba(15, 23, 42, 0.75)",
                  transition: "color 300ms ease, transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA + Mobile hamburger */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-[var(--primary-dark)] transition-colors"
          >
            Contact Us
          </Link>

          {/* Hamburger button — visible below lg */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {nav.map((item) => {
              const active = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => {
                    if (pathname === item.to) {
                      handleActiveScroll();
                      setMobileOpen(false);
                    }
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-primary/5 hover:text-primary"
                  }`}
                >
                  {active && <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />}
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-border">
              <Link
                to="/contact"
                className="flex items-center justify-center w-full rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-[var(--primary-dark)] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}