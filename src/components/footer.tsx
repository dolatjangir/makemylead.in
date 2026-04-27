"use client"

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy-deep)", paddingTop: 72 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          {/* Top row */}
          <div className="footer-cols" style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr 1fr 1fr", gap: 48, paddingBottom: 56, borderBottom: `1px solid var(--white-07)` }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, background: "var(--gradient-blue)", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" fill="white" />
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <span style={{ fontWeight: 800, fontSize: 16, color: "var(--white)" }}>MakeMyLeads</span>
              </div>
              <address style={{ fontStyle: "normal", fontSize: 13, color: "var(--white-45)", lineHeight: 1.9 }}>
                30 A, Sultan Nagar #2<br />
                Gurjar Ki Thadi, Jaipur<br />
                Rajasthan, India – 302019
              </address>
              <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
                {["TW", "FB", "IG", "LI"].map(s => (
                  <a key={s} href="#" style={{
                    width: 34, height: 34, borderRadius: 7,
                    background: "var(--white-06)", border: `1px solid var(--white-09)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 11, fontWeight: 800, color: "var(--white-45)",
                    textDecoration: "none", transition: "all 0.2s"
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--blue)"; (e.currentTarget as HTMLElement).style.color = "var(--white)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--white-06)"; (e.currentTarget as HTMLElement).style.color = "var(--white-45)"; }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {[
              { heading: "Services", links: ["Lead Generation", "AI Automation", "CRM Setup", "Data Security", "Consulting"] },
              { heading: "Company", links: ["About Us", "Case Studies", "Blog", "Why Choose Us", "FAQs"] },
              { heading: "Industries", links: ["Finance", "Medical", "Real Estate", "Education", "Rentals"] },
            ].map(col => (
              <div key={col.heading}>
                <h6 style={{ fontWeight: 700, color: "var(--white)", fontSize: 13, marginBottom: 20, letterSpacing: "0.5px" }}>{col.heading}</h6>
                <ul style={{ listStyle: "none" }}>
                  {col.links.map(link => (
                    <li key={link} style={{ marginBottom: 10 }}>
                      <a href="#" style={{ fontSize: 13, color: "var(--white-45)", textDecoration: "none", transition: "color 0.2s" }}
                        onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--warm)")}
                        onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--white-45)")}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", flexWrap: "wrap", gap: 12 }}>
            <p style={{ fontSize: 12, color: "var(--white-30)" }}>
              © 2024 MakeMyLeads.com · All Rights Reserved · Jaipur, India
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              {["Privacy Policy", "Terms of Service", "Sitemap"].map(l => (
                <a key={l} href="#" style={{ fontSize: 12, color: "var(--white-30)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--blue)")}
                  onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--white-30)")}>
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
  )
}
