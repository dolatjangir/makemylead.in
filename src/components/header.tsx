"use client"

import { useState, useEffect, useRef } from "react";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Company",
    href: "#",
    children: [
      { label: "About Us", href: "/company/about-us" },
      { label: "Contact Us", href: "/company/contact-us" },
      { label: "Why Choose Us", href: "/company/why-choose-us" },
      { label: "FAQs", href: "/company/faqs" },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      { label: "Education", href: "/industries/education" },
      { label: "Medical", href: "/industries/medical" },
      { label: "Finance", href: "/industries/finance" },
      { label: "Real Estate", href: "/industries/realestate" },
    ],
  },
  { label: "Services", href: "/our-services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blogs-2" },
];

function Header() {
     const [scrolled, setScrolled] = useState(false);
       const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
 useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
     <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          transition: "all 0.3s",
        }}
      >
        {/* Topbar */}
        <div style={{ background: "var(--ink)", padding: "6px 0" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 24, fontSize: 12, color: "var(--white-55)", fontWeight: 500 }}>
              <span>📞 +91 9950602330</span>
              <span>✉ info@makemyleads.com</span>
            </div>
            <div style={{ display: "flex", gap: 16, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>
              {["TW", "FB", "IG", "LI"].map(s => (
                <a key={s} href="#" style={{ color: "var(--white-40)", transition: "color 0.2s", textDecoration: "none" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--blue)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--white-40)")}>{s}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Main nav */}
        <nav style={{
          background: scrolled ? "var(--paper-97)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid var(--black-08)` : `1px solid var(--white-10)`,
          transition: "all 0.35s",
        }}>
          <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", height: 64 }}>
            {/* Logo */}
            <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginRight: 48, textDecoration: "none" }}>
              <div style={{
                width: 36, height: 36, background: "var(--gradient-blue)",
                borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: scrolled ? "var(--ink)" : "var(--white)", letterSpacing: "-0.02em", lineHeight: 1 }}>
                  MakeMyLeads
                </div>
                <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: "2.5px", color: scrolled ? "var(--blue)" : "var(--white-60)", textTransform: "uppercase" }}>
                  AI Lead Generation
                </div>
              </div>
            </a>

            {/* Links */}
            <div className="nav-links" style={{ display: "flex", flex: 1, gap: 2 }}>
              {navItems.map(item => (
                <div key={item.label} style={{ position: "relative" }}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}>
                  <a href={item.href} style={{
                    display: "flex", alignItems: "center", gap: 4, padding: "0 14px", height: 64,
                    fontSize: 14, fontWeight: 500,
                    color: scrolled ? "var(--body-text-75)" : "var(--white-80)",
                    textDecoration: "none", transition: "color 0.2s", whiteSpace: "nowrap"
                  }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = scrolled ? "var(--blue)" : "var(--white)")}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = scrolled ? "var(--body-text-75)" : "var(--white-80)")}>
                    {item.label}
                    {item.children && <span style={{ fontSize: 10, opacity: 0.6 }}>▾</span>}
                  </a>
                  {item.children && activeDropdown === item.label && (
                    <div style={{
                      position: "absolute", top: "100%", left: 0, minWidth: 200,
                      background: "var(--white)", borderRadius: 12, boxShadow: `0 12px 40px var(--black-12)`,
                      border: `1px solid var(--black-07)`, padding: "8px 0",
                      animation: "fadeIn 0.18s ease"
                    }}>
                      {item.children.map(c => (
                        <a key={c.label} href={c.href} style={{
                          display: "block", padding: "8px 18px", fontSize: 13,
                          color: "var(--dropdown-fg)", textDecoration: "none", transition: "all 0.15s"
                        }}
                          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--blue)"; (e.currentTarget as HTMLElement).style.paddingLeft = "24px"; }}
                          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "var(--dropdown-fg)"; (e.currentTarget as HTMLElement).style.paddingLeft = "18px"; }}>
                          {c.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <a href="tel:+919950602330" style={{
              display: "flex", alignItems: "center", gap: 8, padding: "0 20px", height: 40,
              background: scrolled ? "var(--blue)" : "var(--white-15)",
              border: scrolled ? "none" : `1px solid var(--white-30)`,
              borderRadius: 8, fontSize: 13, fontWeight: 700,
              color: "var(--white)", textDecoration: "none", transition: "all 0.2s"
            }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = scrolled ? "var(--blue-dark)" : "var(--white-25)")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = scrolled ? "var(--blue)" : "var(--white-15)")}>
              Get Started →
            </a>
          </div>
        </nav>
      </header>
  )
}

export default Header
