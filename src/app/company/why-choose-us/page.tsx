"use client";
  import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  Shield,
  Zap,
  BarChart3,
  Users,
  Clock,
  ArrowRight,
} from "lucide-react";

  const progress = [
    { label: "Data Finding", value: 88 },
    { label: "Branding", value: 80 },
    { label: "Marketing", value: 89 },
    { label: "Cold Calling", value: 95 },
  ];

export default function WhyChooseUs() {
  

const [startAnimation, setStartAnimation] = useState(false);
const sectionRef = useRef<HTMLDivElement | null>(null);
useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setStartAnimation(true);
      }
    },
    { threshold: 0.3 } // trigger when 30% visible
  );

  if (sectionRef.current) {
    observer.observe(sectionRef.current);
  }

  return () => {
    if (sectionRef.current) observer.unobserve(sectionRef.current);
  };
}, []);
  return (
    <main className="bg-[var(--paper)] text-[var(--ink)] overflow-x-hidden">

      {/* ═════════════════════════════════════
          HERO SECTION
      ═════════════════════════════════════ */}
      <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#98bbfd] via-[var(--navy)]/50 to-[#649fda]" />
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[120px]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl px-6">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--blue-08)] border border-[var(--black-08)] text-sm text-[var(--blue)] mb-6">
            <Sparkles className="w-4 h-4" />
            Why Choose Us
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-[var(--blue)] to-indigo-500 bg-clip-text text-transparent">
              Growth
            </span>
            , Designed for Results
          </h1>

          <p className="text-lg md:text-xl text-[var(--mid)] max-w-2xl mx-auto">
            We don’t just generate leads — we create scalable systems that
            convert, nurture, and grow your business consistently.
          </p>
        </div>
      </section>

      {/* ═════════════════════════════════════
          FEATURES GRID
      ═════════════════════════════════════ */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              icon: Zap,
              title: "AI-Powered Automation",
              text: "Smart automation ensures consistent lead flow without manual effort.",
            },
            {
              icon: BarChart3,
              title: "Data-Driven Strategy",
              text: "Every campaign is backed by real insights and performance analytics.",
            },
            {
              icon: Users,
              title: "High-Quality Leads",
              text: "We focus on conversion-ready prospects, not just numbers.",
            },
            {
              icon: Shield,
              title: "Trusted & Secure",
              text: "Your data and campaigns are handled with enterprise-level security.",
            },
            {
              icon: Clock,
              title: "Fast Response",
              text: "We act quickly to capture leads before your competitors do.",
            },
            {
              icon: CheckCircle2,
              title: "Proven Results",
              text: "Thousands of successful campaigns across multiple industries.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white border border-[var(--black-08)] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[var(--blue-08)] mb-5">
                <item.icon className="text-[var(--blue)] w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-[var(--mid)] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═════════════════════════════════════
          WHY DIFFERENT SECTION
      ═════════════════════════════════════ */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What Makes Us{" "}
              <span style={{ color: "var(--blue)" }}>
                Different?
              </span>
            </h2>

            <p className="text-[var(--mid)] mb-6 leading-relaxed">
              Unlike traditional agencies, we focus on automation, scalability,
              and ROI. Our systems work 24/7 to bring you leads while you focus
              on closing deals.
            </p>

            <ul className="space-y-4">
              {[
                "No random leads — only targeted audience",
                "Full funnel optimization",
                "Transparent reporting",
                "Continuous improvement",
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[var(--blue)] w-5 h-5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right (visual card) */}
          <div className="p-10 rounded-3xl bg-gradient-to-br from-[var(--blue-08)] to-white border border-[var(--black-08)] shadow-xl">
            <h3 className="text-xl font-bold mb-4">
              Performance Snapshot
            </h3>

            <div className="space-y-4">
              {[
                "3200+ Leads Generated",
                "700+ Happy Clients",
                "4.9/5 Customer Rating",
                "24/7 Campaign Monitoring",
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white border border-[var(--black-08)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


              {/* 
              progress bars*/}
               <div   ref={sectionRef} className="grid md:grid-cols-2 gap-12 items-center px-8 py-24">

          {/* Left Content */}
          <div >
            <h3 className="text-3xl font-bold text-[var(--foreground)] mb-4">
              11+ Years of Experience in IT & Lead Generation
            </h3>

            <p className="text-[var(--mid)] mb-6">
              With years of experience, we have successfully helped hundreds of businesses generate high-quality leads and achieve measurable growth.
            </p>

            <div className="space-y-3">
              {[
                "Proven success record",
                "AI-powered automation",
                "Transparent communication",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--blue)]" />
                  <span className="text-[var(--foreground)] text-sm">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bars */}
          <div className="space-y-6">
            {progress.map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2 text-[var(--foreground)]">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>

                <div className="w-full h-2 bg-[var(--black-08)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[var(--blue)] rounded-full transition-all duration-700"
                   style={{
  width: startAnimation ? `${item.value}%` : "0%",
  transition: "width 1.2s ease",
}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      {/* ═════════════════════════════════════
          CTA SECTION
      ═════════════════════════════════════ */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-[2rem] p-12 text-center bg-[var(--blue)] text-white">

            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Business?
            </h3>

            <p className="mb-6 text-white/80 max-w-xl mx-auto">
              Let’s build a powerful lead generation system tailored for your business.
            </p>

            <a
              href="/company/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--blue)] rounded-xl font-bold hover:shadow-xl transition"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}