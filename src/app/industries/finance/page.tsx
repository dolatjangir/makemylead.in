"use client";

import React, { useState } from "react";
import {
  Brain,
  Shield,
  Zap,
  Users,
  Workflow,
  CheckCircle,
  Phone,
  Mail,
  Star,
  ArrowRight,
  Download,
  BarChart3,
  Lock,
  Sparkles,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Finance Lead Engine",
    desc: "We use AI to streamline lead collection, analysis, and targeting, providing a smarter way to reach high-value financial customers.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Secure AI-Driven Profiles",
    desc: "Our platform verifies and enriches finance leads using machine learning, ensuring regulatory compliance and trustworthy engagement.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Full-Spectrum AI Solutions",
    desc: "Get AI-powered solutions for every part of your lead funnel—from predictive lead scoring to CRM syncing and automation.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Trained AI Finance Experts",
    desc: "Our team blends financial domain expertise with AI technology to generate data-driven results for banks, lenders, and fintech firms.",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Unified AI Lead Workflow",
    desc: "We provide an integrated framework for finance lead modernization—removing silos and aligning data, decisions, and outreach.",
  },
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "AI-Verified Quality Control",
    desc: "Every lead is validated through AI filters to remove spam, duplicates, and low-intent entries—improving conversion and ROI.",
  },
];

const solutions = [
  {
    title: "Smart Finance Funnel Design",
    desc: "We create lead funnel systems tailored to financial workflows, improving response rates and customer trust through AI-driven interfaces.",
  },
  {
    title: "AI Lead Process Automation",
    desc: "Automate lead distribution, follow-ups, and qualification using using intelligent workflows that adapt to behavior and segment intent.",
  },
  {
    title: "Encrypted Data Governance",
    desc: "All financial lead data is secured through AI-based encryption, backups, and permission layers aligned with regulatory mandates.",
  },
  {
    title: "Fintech Growth Transformation",
    desc: "We bring automation, analytics, and AI transformation to old financial systems—boosting results while cutting overhead.",
  },
  {
    title: "AI-Optimized Infra for Finance Leads",
    desc: "From chatbots to real-time scoring, our tech infrastructure is tailored to support high lead traffic with zero friction.",
  },
  {
    title: "Proactive Threat Detection",
    desc: "AI-based firewalls and anomaly detection secure your leads from fraud, scraping, and unauthorized access—24/7.",
  },
];

const testimonials = [
  {
    name: "Rajesh Singh",
    role: "CEO, FinStart India",
    text: "MakeMyLeads.com helped us expand our client base rapidly, making them an invaluable partner in our growth journey.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Head of Marketing, NBFC Corp",
    text: "Their lead generation strategies have been instrumental in boosting our business revenue by 3x in just two quarters.",
    rating: 5,
  },
  {
    name: "Rahul Gupta",
    role: "Founder, PayScale Fintech",
    text: "MakeMyLeads.com truly exceeded our expectations, delivering high-quality leads consistently without the noise.",
    rating: 5,
  },
  {
    name: "Sanjay Verma",
    role: "Marketing Director",
    text: "Exceptional service and exceptional results! Highly recommend MakeMyLeads.com for any finance lead generation needs.",
    rating: 5,
  },
  {
    name: "Ananya Mishra",
    role: "COO, LendSwift",
    text: "Working with MakeMyLeads.com has been a game-changer for our company's growth trajectory and market expansion.",
    rating: 4,
  },
  {
    name: "Arjun Kumar",
    role: "VP Sales, BankOne",
    text: "Their leads are not just leads; they are opportunities waiting to be explored and converted into real revenue.",
    rating: 5,
  },
  {
    name: "Divya Jain",
    role: "Growth Lead, InsureTech",
    text: "MakeMyLeads.com understands our business needs and delivers tailored solutions every single time.",
    rating: 5,
  },
];

const clients = [
  "TechFin Solutions",
  "Global NBFC",
  "InsureMax",
  "PayNext",
  "LendSwift",
  "WealthAxis",
];

/* ──────────────────────────────────────────────────────────────────────────
   COMPONENT
   ────────────────────────────────────────────────────────────────────────── */

export default function FinancePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiry: "General Information Request",
  });
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly.");
    setFormData({ name: "", email: "", inquiry: "General Information Request" });
  };

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION — Glassmorphism over abstract fintech bg
          ═══════════════════════════════════════════════════════════════════ */}
   <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
  {/* Background image with dark overlay */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage:
        "url(/finance-bg.png)",
    }}
  />
  {/* Dark overlay + subtle blue tint */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1c]/95 via-[#0f172a]/90 to-[#1e293b]/85" />

  {/* Floating glass orbs - enhanced for dark mode */}
  <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--blue)]/20 blur-3xl animate-pulse" />
  <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[var(--warm)]/15 blur-3xl animate-pulse delay-1000" />
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--blue)]/10 blur-3xl" />

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    {/* Glass badge - dark variant */}
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8">
      <Sparkles className="w-4 h-4 text-[var(--blue)]" />
      <span className="text-sm font-medium text-[var(--blue)]">
        Next-Gen AI Lead Generation
      </span>
    </div>

    {/* Headline - light text on dark */}
    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
      AI-Powered Finance
      <br />
      <span className="text-[var(--blue)]">Lead Generation</span>
    </h1>

    {/* Subtitle - softer contrast for dark mode */}
    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
      Reach India's most trusted finance clients with precision AI
      technology and hyper-personalized lead automation.
    </p>

    {/* CTAs */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-8 py-4 rounded-2xl bg-[var(--blue)] text-white text-lg font-semibold shadow-lg shadow-[var(--blue)]/40 hover:shadow-xl hover:shadow-[var(--blue)]/50 transition-all hover:-translate-y-0.5">
        Get a FREE Quote
      </button>
      <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-lg font-semibold hover:bg-white/20 transition-all hover:-translate-y-0.5">
        Live Chat with Consultant
      </button>
    </div>
  </div>
</section>

      {/* ═══════════════════════════════════════════════════════════════════
          INDUSTRIES INTRO
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--ink)] mb-4">
              Finance for <span className="text-[var(--blue)]">Industries</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--ink)] leading-snug">
                At MakeMyLeads.com, we bring intelligent lead generation to the
                finance sector—automating targeting, outreach, and qualification
                using cutting-edge{" "}
                <span className="text-[var(--blue)]">AI tools.</span>
              </h3>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-[var(--mid)] leading-relaxed">
                From NBFCs and fintech startups to insurance providers and banks,
                our AI-driven platform simplifies financial lead generation
                through strategic segmentation, adaptive learning, and risk-aware
                targeting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3 rounded-xl btn-primary font-medium">
                  Get a FREE no-obligation quote
                </button>
                <button className="px-6 py-3 rounded-xl border-2 border-[var(--blue)] text-[var(--blue)] font-medium hover:bg-[var(--blue)] hover:text-white transition-all">
                  Live chat with a consultant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SERVICES GRID — Glassmorphism Cards
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-b from-transparent to-[var(--blue-03)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--ink)]">
              Reliable Finance Lead Generation Services for{" "}
              <span className="text-[var(--blue)]">Businesses</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl glass bg-white/40 hover:bg-white/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--blue)]/10 border border-white/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-[var(--blue-08)] flex items-center justify-center text-[var(--blue)] mb-6 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-xl font-bold text-[var(--ink)] mb-3">
                  {s.title}
                </h4>
                <p className="text-[var(--mid)] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SOLUTIONS LIST
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--ink)]">
              AI Technology Solutions for
              <br />
              <span className="text-[var(--blue)]">
                Financial Lead Success.
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="flex gap-6 p-6 rounded-2xl glass bg-white/30 hover:bg-white/60 transition-all group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[var(--blue)]/10 flex items-center justify-center text-[var(--blue)] group-hover:bg-[var(--blue)] group-hover:text-white transition-all">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div>
                  <h6 className="text-lg font-bold text-[var(--ink)] mb-2">
                    {sol.title}
                  </h6>
                  <p className="text-[var(--mid)] leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          RESOURCES / BROCHURE
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-r from-[var(--blue-03)] to-[var(--warm-08)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sm font-semibold text-[var(--blue)] uppercase tracking-wider">
              Resources
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-[var(--ink)] leading-tight">
              Get a copy of brochure on
              <br />
              <span className="text-[var(--blue)]">Brand New IT Tech.</span>
            </h3>
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary font-medium group">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download now (3MB)
            </button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[var(--blue)]/10 rounded-3xl blur-2xl" />
            <div className="relative glass bg-white/50 p-8 rounded-3xl border border-white/60">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[var(--blue)] to-[var(--navy)] flex items-center justify-center text-white">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <span className="text-lg font-semibold">
                    2026 Finance AI Report
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          TESTIMONIALS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-[var(--blue)] uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--ink)] mt-4">
              What makes people praise{" "}
              <span className="text-[var(--blue)]">MakeMyLeads?</span>
            </h2>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="w-full md:w-1/2 flex-shrink-0 px-3"
                  >
                    <div className="glass bg-white/40 p-8 rounded-3xl border border-white/50 h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--blue)] to-[var(--warm)] flex items-center justify-center text-white font-bold text-xl">
                          {t.name[0]}
                        </div>
                        <div>
                          <h6 className="font-bold text-[var(--ink)]">
                            {t.name}
                          </h6>
                          <p className="text-sm text-[var(--mid)]">{t.role}</p>
                        </div>
                      </div>
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            className={`w-4 h-4 ${
                              j < t.rating
                                ? "text-[var(--warm)] fill-[var(--warm)]"
                                : "text-[var(--light-gray)]"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-[var(--body-text)] leading-relaxed italic">
                        "{t.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full glass bg-white/50 hover:bg-white transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-[var(--ink)]" />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === testimonialIndex
                        ? "bg-[var(--blue)] w-8"
                        : "bg-[var(--light-gray)]"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full glass bg-white/50 hover:bg-white transition-all"
              >
                <ChevronRight className="w-5 h-5 text-[var(--ink)]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CLIENT LOGOS
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-6 bg-[var(--paper)]/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex items-center justify-center h-16 glass bg-white/30 rounded-xl px-4 hover:opacity-100 transition-opacity"
              >
                <span className="font-bold text-[var(--ink)] text-sm tracking-wide">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTACT / BOOK APPOINTMENT
          ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-gradient-to-br from-[var(--blue-03)] via-transparent to-[var(--warm-08)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-6xl font-bold text-[var(--ink)] mb-2">
                4.9/5.0
              </h3>
              <div className="flex gap-1 justify-center md:justify-start mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 text-[var(--warm)] fill-[var(--warm)]"
                  />
                ))}
              </div>
              <p className="text-[var(--mid)]">
                by 700+ customers for 3200+ clients
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:9950602330"
                className="flex items-center gap-4 p-4 rounded-2xl glass bg-white/40 hover:bg-white/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue)]/10 flex items-center justify-center text-[var(--blue)] group-hover:bg-[var(--blue)] group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--mid)]">Call for advice now!</p>
                  <p className="font-bold text-[var(--ink)]">9950602330</p>
                </div>
              </a>

              <a
                href="mailto:info@makemyleads.com"
                className="flex items-center gap-4 p-4 rounded-2xl glass bg-white/40 hover:bg-white/70 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--blue)]/10 flex items-center justify-center text-[var(--blue)] group-hover:bg-[var(--blue)] group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-[var(--mid)]">Say hello</p>
                  <p className="font-bold text-[var(--ink)]">
                    info@makemyleads.com
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="glass bg-white/50 p-8 md:p-10 rounded-3xl border border-white/60 shadow-xl">
            <h4 className="text-2xl font-bold text-[var(--ink)] mb-2">
              Book appointment
            </h4>
            <p className="text-[var(--mid)] mb-8">
              It's our pleasure to have a chance to cooperate.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-white/70 border border-[var(--black-07)] focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-20)] outline-none transition-all placeholder:text-[var(--mid)]"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-white/70 border border-[var(--black-07)] focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-20)] outline-none transition-all placeholder:text-[var(--mid)]"
                />
              </div>
              <div>
                <select
                  value={formData.inquiry}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiry: e.target.value })
                  }
                  className="w-full px-5 py-4 rounded-xl bg-white/70 border border-[var(--black-07)] focus:border-[var(--blue)] focus:ring-2 focus:ring-[var(--blue-20)] outline-none transition-all text-[var(--body-text)]"
                >
                  <option>General Information Request</option>
                  <option>Partner Relations</option>
                  <option>Careers</option>
                  <option>Software Licencing</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl btn-primary font-semibold text-lg flex items-center justify-center gap-2 group"
              >
                Submit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════════════════ */}
      <footer className="py-8 px-6 border-t border-[var(--black-07)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--mid)] text-sm">
            © 2026 MakeMyLeads.com. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[var(--mid)] hover:text-[var(--blue)] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--mid)] hover:text-[var(--blue)] text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}