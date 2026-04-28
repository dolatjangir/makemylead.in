"use client";
import { useState, useEffect, useRef } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  initials: string;
  gradient: string;
}

interface Service {
  icon: string;
  title: string;
  desc: string;
}

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────
const services: Service[] = [
  {
    icon: "🤖",
    title: "AI Real Estate Lead Engine",
    desc: "Our intelligent platform captures high-intent buyer and tenant leads using AI behavior analysis, geo-targeting, and search intent prediction. No wasted leads—only real prospects.",
  },
  {
    icon: "🛡️",
    title: "Verified & Secure Property Leads",
    desc: "Leads go through multi-level AI checks for location interest, property type, contact validity, and fraud detection—ensuring each lead is qualified and CRM-ready.",
  },
  {
    icon: "🔄",
    title: "Smart Real Estate Lead Lifecycle",
    desc: "We manage the full journey—from capture to conversion—with smart automation. Property-specific funnels, instant response systems, and predictive nurturing keep engagement high.",
  },
  {
    icon: "🧠",
    title: "AI-Trained Real Estate Experts",
    desc: "Our team blends deep real estate experience with advanced AI tools to match leads with properties based on lifestyle preferences, budget, and locality demand.",
  },
  {
    icon: "⚙️",
    title: "End-to-End Automation for Real Estate Sales",
    desc: "From chatbot qualification to CRM syncing, our AI ecosystem automates your real estate workflow—reducing manual tasks and increasing deal closures.",
  },
  {
    icon: "📊",
    title: "Lead Quality Intelligence",
    desc: "Our real-time AI engine filters, scores, and updates every lead using machine learning. You get only clean, ready-to-contact leads sorted by purchase potential.",
  },
];

const features: Feature[] = [
  {
    icon: "🎯",
    title: "AI-Based Funnel Personalization",
    desc: "Design AI-driven property funnels that adapt based on user behavior, location preferences, budget, and interaction stage—fully automated.",
  },
  {
    icon: "🔗",
    title: "Automated Sales Pipeline & CRM Sync",
    desc: "No more manual work—our AI connects your site, CRM, and WhatsApp/email in one flow. Every lead is tracked, followed up, and updated in real-time.",
  },
  {
    icon: "🔒",
    title: "Compliance & Data Security for Real Estate",
    desc: "We secure every lead under strict encryption, OTP validation, and full RERA/GDPR compliance—keeping your data and clients safe.",
  },
  {
    icon: "🛠️",
    title: "AI-Powered Sales Toolkit",
    desc: "Use smart tools like virtual property assistants, intelligent property matching, and dynamic pricing models to convert faster and smarter.",
  },
  {
    icon: "🚀",
    title: "Launch-Ready Infrastructure Support",
    desc: "Going live with a new project? Our AI systems scale instantly—handling high traffic, instant chat replies, and lead routing under pressure.",
  },
  {
    icon: "✅",
    title: "24/7 AI Lead Verification & Spam Control",
    desc: "Filter out junk leads with real-time AI validation, spam blocking, and phone/email/IP screening—so your sales team never wastes time.",
  },
];

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Singh",
    role: "Real Estate Developer",
    text: "MakeMyLeads.com helped us expand our client base rapidly, making them an invaluable partner in our growth journey.",
    rating: 5,
    initials: "RS",
    gradient: "linear-gradient(135deg, #086ad8, #002fa6)",
  },
  {
    name: "Priya Sharma",
    role: "Property Broker",
    text: "Their lead generation strategies have been instrumental in boosting our business revenue by over 3x in just 6 months.",
    rating: 5,
    initials: "PS",
    gradient: "linear-gradient(135deg, #d2a98e, #c4967a)",
  },
  {
    name: "Arjun Kumar",
    role: "Real Estate Agent",
    text: "Their leads are not just leads; they are opportunities waiting to be explored and converted into profitable deals.",
    rating: 5,
    initials: "AK",
    gradient: "linear-gradient(135deg, #072a83, #086ad8)",
  },
  {
    name: "Divya Jain",
    role: "Builder & Developer",
    text: "MakeMyLeads.com understands our business needs and delivers tailored solutions every single time without fail.",
    rating: 5,
    initials: "DJ",
    gradient: "linear-gradient(135deg, #0d0f1a, #072a83)",
  },
];

const stats = [
  { value: "10K+", label: "Qualified Leads" },
  { value: "3200+", label: "Happy Clients" },
  { value: "4.9★", label: "Average Rating" },
  { value: "98%", label: "Conversion Rate" },
];

// ─── Components ──────────────────────────────────────────────────────────────

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: "14px" }}>★</span>
      ))}
    </div>
  );
}

// Pre-computed static particle data to avoid SSR/client mismatch
const PARTICLES = [
  { w: 3.2, h: 2.8, bg: "var(--blue)",              left: 12.4, top: 22.1, dur: 6.2, delay: 1.4 },
  { w: 2.1, h: 3.5, bg: "var(--warm)",              left: 28.7, top: 67.3, dur: 8.1, delay: 0.8 },
  { w: 4.0, h: 2.2, bg: "rgba(255,255,255,0.4)",    left: 45.2, top: 15.8, dur: 5.4, delay: 2.1 },
  { w: 1.8, h: 4.1, bg: "var(--blue)",              left: 63.9, top: 82.4, dur: 7.3, delay: 3.2 },
  { w: 3.6, h: 1.9, bg: "var(--warm)",              left: 78.5, top: 38.6, dur: 9.0, delay: 0.5 },
  { w: 2.4, h: 3.8, bg: "rgba(255,255,255,0.4)",    left:  8.3, top: 55.1, dur: 6.8, delay: 1.9 },
  { w: 1.5, h: 2.6, bg: "var(--blue)",              left: 91.1, top: 72.9, dur: 5.9, delay: 2.7 },
  { w: 4.2, h: 1.7, bg: "var(--warm)",              left: 34.6, top:  9.4, dur: 7.6, delay: 0.3 },
  { w: 2.9, h: 3.3, bg: "rgba(255,255,255,0.4)",    left: 56.8, top: 44.7, dur: 8.5, delay: 3.6 },
  { w: 1.3, h: 4.5, bg: "var(--blue)",              left: 19.2, top: 91.3, dur: 4.7, delay: 1.1 },
  { w: 3.8, h: 2.4, bg: "var(--warm)",              left: 72.4, top: 28.5, dur: 6.4, delay: 2.4 },
  { w: 2.2, h: 1.6, bg: "rgba(255,255,255,0.4)",    left: 84.7, top: 61.8, dur: 9.2, delay: 0.9 },
  { w: 4.6, h: 3.1, bg: "var(--blue)",              left: 41.3, top: 33.2, dur: 5.1, delay: 3.8 },
  { w: 1.9, h: 2.9, bg: "var(--warm)",              left: 67.1, top: 88.6, dur: 7.8, delay: 1.6 },
  { w: 3.4, h: 4.3, bg: "rgba(255,255,255,0.4)",    left:  5.9, top: 47.4, dur: 8.9, delay: 2.0 },
  { w: 2.7, h: 1.4, bg: "var(--blue)",              left: 52.6, top: 74.1, dur: 6.1, delay: 0.6 },
  { w: 1.1, h: 3.7, bg: "var(--warm)",              left: 95.3, top: 18.9, dur: 4.9, delay: 3.3 },
  { w: 4.4, h: 2.0, bg: "rgba(255,255,255,0.4)",    left: 23.8, top: 52.7, dur: 7.4, delay: 1.7 },
  { w: 3.0, h: 4.8, bg: "var(--blue)",              left: 38.5, top: 96.2, dur: 5.6, delay: 2.9 },
  { w: 2.5, h: 2.3, bg: "var(--warm)",              left: 81.9, top: 41.5, dur: 8.3, delay: 0.2 },
];

function FloatingParticles() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${p.w}px`,
            height: `${p.h}px`,
            background: p.bg,
            borderRadius: "50%",
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `float ${p.dur}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function RealEstatePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", inquiry: "Your inquiry about" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --blue: #086ad8;
          --blue-dark: #054fa0;
          --navy: #002fa6;
          --navy-deep: #072a83;
          --warm: #d2a98e;
          --warm-dark: #c4967a;
          --ink: #0d0f1a;
          --body-text: #1a1a2e;
          --paper: #f5f4f0;
          --mid: #696969;
          --white: #ffffff;
          --card-dark: #1a1f36;
          --footer-bg: #0a0b14;
          --white-05: rgba(255,255,255,0.05);
          --white-08: rgba(255,255,255,0.08);
          --white-10: rgba(255,255,255,0.10);
          --white-12: rgba(255,255,255,0.12);
          --white-15: rgba(255,255,255,0.15);
          --white-20: rgba(255,255,255,0.20);
          --white-30: rgba(255,255,255,0.30);
          --white-50: rgba(255,255,255,0.50);
          --white-70: rgba(255,255,255,0.70);
          --blue-20: rgba(8,106,216,0.20);
          --blue-40: rgba(8,106,216,0.40);
          --warm-15: rgba(210,169,142,0.15);
          --gradient-hero: linear-gradient(150deg, #0d0f1a 0%, #072a83 55%, #086ad8 100%);
          --gradient-blue: linear-gradient(135deg, #086ad8, #002fa6);
          --gradient-text-white: linear-gradient(90deg, #ffffff 40%, rgba(255,255,255,0.50));
        }

        body { font-family: 'DM Sans', sans-serif; overflow-x: hidden; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.6; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(8,106,216,0.3); }
          50% { box-shadow: 0 0 40px rgba(8,106,216,0.6), 0 0 80px rgba(8,106,216,0.2); }
        }
        @keyframes borderRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
        .animate-slideIn { animation: slideIn 0.8s ease forwards; }
        .animate-scaleIn { animation: scaleIn 0.6s ease forwards; }

        .glass-card {
          background: var(--white-05);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--white-10);
          border-radius: 20px;
          transition: all 0.4s ease;
        }
        .glass-card:hover {
          background: var(--white-08);
          border-color: var(--white-20);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(8,106,216,0.2);
        }

        .glass-light {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.6);
          border-radius: 20px;
        }

        .gradient-text {
          background: var(--gradient-text-white);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-blue {
          background: linear-gradient(135deg, #086ad8, #002fa6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-warm {
          background: linear-gradient(135deg, #d2a98e, #c4967a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .btn-primary {
          background: var(--gradient-blue);
          color: var(--white);
          border: none;
          padding: 14px 32px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          animation: pulse-glow 3s infinite;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(8,106,216,0.5);
        }

        .btn-secondary {
          border: 1px solid var(--white-30);
          color: var(--white);
          padding: 14px 32px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          background: var(--white-08);
          backdrop-filter: blur(10px);
        }
        .btn-secondary:hover {
          background: var(--white);
          color: var(--ink);
          border-color: var(--white);
        }

        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--blue-20);
          border: 1px solid var(--blue-40);
          color: #86b4f0;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.5px;
          margin-bottom: 20px;
        }

        .service-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 20px;
          background: var(--blue-20);
          border: 1px solid var(--blue-40);
          transition: all 0.3s ease;
        }
        .glass-card:hover .service-icon-wrap {
          background: var(--gradient-blue);
          border-color: transparent;
          transform: scale(1.1) rotate(5deg);
        }

        .feature-item {
          display: flex;
          gap: 16px;
          padding: 20px;
          border-radius: 16px;
          border: 1px solid rgba(8,106,216,0.15);
          background: rgba(8,106,216,0.03);
          transition: all 0.3s ease;
          margin-bottom: 16px;
        }
        .feature-item:hover {
          border-color: rgba(8,106,216,0.4);
          background: rgba(8,106,216,0.08);
          transform: translateX(8px);
        }
        .feature-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--gradient-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .testimonial-card {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 32px;
          transition: all 0.5s ease;
        }
        .testimonial-card.active {
          border-color: rgba(8,106,216,0.5);
          background: rgba(8,106,216,0.08);
          box-shadow: 0 0 40px rgba(8,106,216,0.15);
        }

        .avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 16px;
          color: white;
          flex-shrink: 0;
        }

        .stat-card {
          text-align: center;
          padding: 28px 20px;
          border-radius: 20px;
          background: var(--white-05);
          backdrop-filter: blur(12px);
          border: 1px solid var(--white-10);
          transition: all 0.3s ease;
        }
        .stat-card:hover {
          background: var(--blue-20);
          border-color: var(--blue-40);
          transform: translateY(-4px);
        }

        .form-input {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid rgba(8,106,216,0.2);
          background: rgba(8,106,216,0.04);
          color: var(--ink);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          outline: none;
          transition: all 0.3s ease;
          margin-bottom: 14px;
        }
        .form-input:focus {
          border-color: var(--blue);
          background: rgba(8,106,216,0.08);
          box-shadow: 0 0 0 3px rgba(8,106,216,0.1);
        }
        .form-input::placeholder { color: #9ca3af; }

        .marquee-track {
          display: flex;
          animation: marquee 30s linear infinite;
          width: max-content;
        }

        .partner-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px 40px;
          margin: 0 12px;
          border-radius: 12px;
          background: var(--white-05);
          border: 1px solid var(--white-08);
          color: var(--white-85);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
          white-space: nowrap;
          transition: all 0.3s ease;
        }

        .contact-icon-box {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          border-radius: 16px;
          background: var(--white-05);
          border: 1px solid var(--white-10);
          margin-bottom: 16px;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .contact-icon-box:hover {
          background: var(--blue-20);
          border-color: var(--blue-40);
          transform: translateX(6px);
        }
        .contact-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--gradient-blue);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: var(--ink); }
        ::-webkit-scrollbar-thumb { background: var(--blue); border-radius: 3px; }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem !important; }
          .grid-3 { grid-template-columns: 1fr !important; }
          .grid-2 { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .hero-buttons { flex-direction: column !important; }
          .split-layout { flex-direction: column !important; }
          .contact-split { flex-direction: column !important; }
        }
      `}</style>

      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "100vh",
          background: "var(--gradient-hero)",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* BG Image overlay — real estate aerial */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
          }}
        />

        {/* Gradient mesh */}
        <div style={{ position: "absolute", inset: 0, background: "var(--gradient-hero)", opacity: 0.88 }} />

        {/* Geometric accent blobs */}
        <div style={{ position: "absolute", top: "-20%", right: "-10%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(8,106,216,0.35) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: "-15%", left: "-8%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(7,42,131,0.4) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "30%", left: "15%", width: "2px", height: "200px", background: "linear-gradient(to bottom, transparent, rgba(8,106,216,0.6), transparent)" }} />
        <div style={{ position: "absolute", top: "20%", right: "20%", width: "200px", height: "2px", background: "linear-gradient(to right, transparent, rgba(210,169,142,0.6), transparent)" }} />

        <FloatingParticles />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 80px", textAlign: "center" }}>
          <div className="animate-fadeUp" style={{ animationDelay: "0.1s" }}>
            <span className="section-tag">
              <span>🏢</span> India's Most Trusted Real Estate Lead Platform
            </span>
          </div>

          <h1
            className="hero-title animate-fadeUp"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              color: "white",
              marginBottom: "28px",
              animationDelay: "0.2s",
            }}
          >
            Redefine{" "}
            <span className="gradient-text-warm">Real Estate</span>
            <br />
            Lead Generation with{" "}
            <span className="gradient-text">AI Power</span>
          </h1>

          <p
            className="animate-fadeUp"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              color: "var(--white-70)",
              maxWidth: "680px",
              margin: "0 auto 44px",
              lineHeight: 1.7,
              animationDelay: "0.3s",
            }}
          >
            MakeMyLeads.com delivers high-quality, conversion-ready real estate leads using AI and automation. From residential sales to commercial investments—close deals faster and smarter.
          </p>

          <div className="hero-buttons animate-fadeUp" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", animationDelay: "0.4s" }}>
            <a href="#contact" className="btn-primary">Get a FREE Quote →</a>
            <a href="#services" className="btn-secondary">Explore Services</a>
          </div>

          {/* Stats row */}
          <div
            className="animate-fadeUp"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
              marginTop: "80px",
              maxWidth: "700px",
              margin: "80px auto 0",
              animationDelay: "0.5s",
            }}
          >
            {stats.map((s) => (
              <div key={s.value} className="stat-card">
                <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "white", fontFamily: "'Playfair Display', serif" }}>{s.value}</div>
                <div style={{ fontSize: "12px", color: "var(--white-50)", marginTop: "4px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "var(--white-40)", fontSize: "12px", letterSpacing: "2px" }}>SCROLL</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--white-40), transparent)" }} />
        </div>
      </section>

      {/* ── Intro Section ────────────────────────────────────────────────── */}
      <section
        id="intro"
        ref={setRef("intro")}
        style={{ padding: "100px 24px", background: "var(--paper)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="split-layout" style={{ display: "flex", gap: "80px", alignItems: "center" }}>
            {/* Left */}
            <div style={{ flex: "0 0 42%" }}>
              <span className="section-tag" style={{ background: "var(--blue-20)", border: "1px solid var(--blue-40)", color: "var(--blue)" }}>
                <span>🏗️</span> Real Estate for Industries
              </span>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 700,
                  color: "var(--ink)",
                  lineHeight: 1.25,
                  borderLeft: "4px solid var(--blue)",
                  paddingLeft: "24px",
                  marginBottom: "0",
                }}
              >
                At MakeMyLeads.com, we redefine{" "}
                <span className="gradient-text-blue">real estate lead generation</span>{" "}
                using AI automation, deep buyer insights, and advanced targeting.
              </h2>
            </div>

            {/* Right */}
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "1.1rem", color: "var(--mid)", lineHeight: 1.8, marginBottom: "32px" }}>
                MakeMyLeads.com delivers high-quality, conversion-ready real estate leads using AI and automation. From residential sales to commercial investments, our tailored lead strategies help brokers, developers, and agents close deals faster and smarter.
              </p>
              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <a href="#contact" className="btn-primary" style={{ background: "var(--gradient-blue)", animation: "none" }}>
                  Get a FREE no-obligation quote
                </a>
                <a
                  href="tel:9950602330"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "14px 24px",
                    borderRadius: "50px",
                    border: "1px solid var(--blue-40)",
                    color: "var(--blue)",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    background: "var(--blue-20)",
                  }}
                >
                  📞 Live Chat with Consultant
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services Section ─────────────────────────────────────────────── */}
      <section
        id="services"
        ref={setRef("services")}
        style={{
          padding: "100px 24px",
          background: "var(--ink)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.3 }} />
        <div style={{ position: "absolute", top: 0, right: "10%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(8,106,216,0.15) 0%, transparent 70%)" }} />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-tag">⚡ AI-Powered Services</span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "white",
                lineHeight: 1.2,
              }}
            >
              AI-Powered Real Estate{" "}
              <span className="gradient-text-warm">Lead Generation Services</span>
            </h2>
          </div>

          <div
            className="grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {services.map((s, i) => (
              <div
                key={i}
                className="glass-card"
                style={{ padding: "32px", animationDelay: `${i * 0.1}s` }}
              >
                <div className="service-icon-wrap">{s.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "white", marginBottom: "12px", lineHeight: 1.3 }}>
                  {s.title}
                </h3>
                <p style={{ color: "var(--white-50)", fontSize: "14px", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features Section ─────────────────────────────────────────────── */}
      <section
        id="features"
        ref={setRef("features")}
        style={{ padding: "100px 24px", background: "var(--paper)" }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <span className="section-tag" style={{ background: "var(--blue-20)", border: "1px solid var(--blue-40)", color: "var(--blue)" }}>
              🎯 Key Features
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1.2,
              }}
            >
              Key Features of Our AI Real Estate{" "}
              <span className="gradient-text-blue">Lead Solutions</span>
            </h2>
          </div>

          <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {features.map((f, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "6px" }}>
                    {f.title}
                  </h4>
                  <p style={{ color: "var(--mid)", fontSize: "14px", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brochure Section ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: "80px 24px",
          background: "var(--gradient-hero)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.3 }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(to right, transparent, var(--warm), transparent)" }} />

        <div style={{ maxWidth: "1100px", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="split-layout" style={{ display: "flex", gap: "64px", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <span className="section-tag">📚 Resources</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 700, color: "white", lineHeight: 1.25, marginBottom: "20px" }}>
                Get your free copy of our{" "}
                <span className="gradient-text-warm">Real Estate AI</span>{" "}
                Lead Generation Guide
              </h2>
              <p style={{ color: "var(--white-60)", lineHeight: 1.7, marginBottom: "32px" }}>
                Everything you need to know about AI-powered lead generation for the real estate industry—strategies, tools, and proven frameworks used by 3,200+ clients.
              </p>
              <a href="#" className="btn-primary">Download Free Guide (PDF) →</a>
            </div>

            <div style={{ flex: "0 0 40%" }}>
              <div
                style={{
                  background: "var(--white-05)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid var(--white-15)",
                  borderRadius: "24px",
                  padding: "40px",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <div style={{ fontSize: "80px", marginBottom: "16px" }}>📋</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "white", marginBottom: "8px" }}>
                  Real Estate AI Guide 2026
                </div>
                <div style={{ color: "var(--white-50)", fontSize: "14px", marginBottom: "24px" }}>
                  Complete lead generation playbook for Indian real estate market
                </div>
                <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                  {["50+ Pages", "Case Studies", "AI Tools List"].map((tag) => (
                    <span key={tag} style={{ padding: "6px 14px", background: "var(--blue-20)", border: "1px solid var(--blue-40)", borderRadius: "50px", color: "#86b4f0", fontSize: "12px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
     <section
  id="testimonials"
  style={{
    padding: "100px 24px",
    background: "#f9fafb",
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Light subtle glow */}
  <div
    style={{
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: "600px",
      height: "400px",
      background:
        "radial-gradient(ellipse, rgba(0, 0, 0, 0.05) 0%, transparent 70%)",
    }}
  />

  <div
    style={{
      maxWidth: "1100px",
      margin: "0 auto",
      position: "relative",
      zIndex: 2,
    }}
  >
    {/* Heading */}
    <div style={{ textAlign: "center", marginBottom: "64px" }}>
      <span className="section-tag" style={{ color: "#6b7280" }}>
        💬 Testimonials
      </span>

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 700,
          color: "#111827",
        }}
      >
        What makes people praise{" "}
        <span style={{ color: "#f59e0b" }}>MakeMyLeads?</span>
      </h2>
    </div>

    {/* Cards */}
    <div
      className="grid-2"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginBottom: "40px",
      }}
    >
      {testimonials.map((t, i) => (
      <div
  key={i}
  className={`testimonial-card ${
    i === activeTestimonial ? "active" : ""
  }`}
  onClick={() => setActiveTestimonial(i)}
  style={{
    cursor: "pointer",
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: "16px",
    padding: "24px",
    transition: "all 0.3s ease",

    // 👇 MAIN LOGIC HERE
    transform: i === activeTestimonial ? "scale(1.07)" : "scale(1)",
    boxShadow:
      i === activeTestimonial
        ? "0 20px 40px rgba(37, 99, 235, 0.50)" // blue glow
        : "0 8px 20px rgba(0,0,0,0.05)",
  }}
>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginBottom: "20px",
            }}
          >
            <div className="avatar" style={{ background: t.gradient }}>
              {t.initials}
            </div>

            <div>
              <div
                style={{
                  fontWeight: 700,
                  color: "#111827",
                  fontSize: "15px",
                }}
              >
                {t.name}
              </div>
              <div style={{ color: "#6b7280", fontSize: "13px" }}>
                {t.role}
              </div>
            </div>

            <div style={{ marginLeft: "auto" }}>
              <StarRating count={t.rating} />
            </div>
          </div>

          <p
            style={{
              color: "#4b5563",
              lineHeight: 1.7,
              fontSize: "14px",
              fontStyle: "italic",
            }}
          >
            "{t.text}"
          </p>
        </div>
      ))}
    </div>

    {/* Dots */}
    <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
      {testimonials.map((_, i) => (
        <button
          key={i}
          onClick={() => setActiveTestimonial(i)}
          style={{
            width: i === activeTestimonial ? "28px" : "8px",
            height: "8px",
            borderRadius: "4px",
            background: i === activeTestimonial ? "#2563eb" : "#d1d5db",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        />
      ))}
    </div>
  </div>
</section>

      {/* ── Partners Marquee ─────────────────────────────────────────────── */}
      <section style={{ padding: "48px 0", background: "var(--navy-deep)", overflow: "hidden", borderTop: "1px solid var(--white-08)", borderBottom: "1px solid var(--white-08)" }}>
        <div style={{ overflow: "hidden" }}>
          <div className="marquee-track">
            {["PropTiger", "99Acres", "MagicBricks", "Housing.com", "NoBroker", "Square Yards", "CommonFloor", "Sulekha"].concat(["PropTiger", "99Acres", "MagicBricks", "Housing.com", "NoBroker", "Square Yards", "CommonFloor", "Sulekha"]).map((name, i) => (
              <div key={i} className="partner-logo">
                <span style={{ marginRight: "8px", fontSize: "18px" }}>🏢</span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact Section ──────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{ padding: "100px 24px", background: "var(--paper)", position: "relative" }}
      >
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div className="contact-split" style={{ display: "flex", gap: "64px", alignItems: "flex-start" }}>
            {/* Left - Info */}
            <div style={{ flex: "0 0 38%" }}>
              <span className="section-tag" style={{ background: "var(--blue-20)", border: "1px solid var(--blue-40)", color: "var(--blue)" }}>
                📞 Get In Touch
              </span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.25, marginBottom: "12px" }}>
                Let's Grow Your Real Estate Business Together
              </h2>
              <div style={{ display: "flex", gap: "4px", marginBottom: "8px" }}>
                <StarRating count={5} />
              </div>
              <p style={{ color: "var(--mid)", marginBottom: "28px", fontSize: "15px" }}>
                4.9/5.0 — Rated by 700+ customers for 3,200+ clients
              </p>

              <a href="tel:9950602330" className="contact-icon-box">
                <div className="contact-icon">📞</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: "15px" }}>Call for advice now!</div>
                  <div style={{ color: "var(--blue)", fontSize: "14px" }}>+91 9950602330</div>
                </div>
              </a>

              <a href="mailto:info@makemyleads.com" className="contact-icon-box">
                <div className="contact-icon">✉️</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--ink)", fontSize: "15px" }}>Say hello</div>
                  <div style={{ color: "var(--blue)", fontSize: "14px" }}>info@makemyleads.com</div>
                </div>
              </a>

              {/* Trust badges */}
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "24px" }}>
                {["🔒 RERA Compliant", "✅ GDPR Secure", "⚡ 24/7 Support"].map((badge) => (
                  <span key={badge} style={{ padding: "8px 14px", background: "var(--blue-20)", border: "1px solid var(--blue-40)", borderRadius: "50px", color: "var(--blue)", fontSize: "13px", fontWeight: 600 }}>
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Right - Form */}
            <div style={{ flex: 1 }}>
              <div className="glass-light" style={{ padding: "44px" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>
                  Book an Appointment
                </h3>
                <p style={{ color: "var(--mid)", marginBottom: "28px", fontSize: "14px" }}>
                  It's our pleasure to have a chance to cooperate.
                </p>

                {formSubmitted ? (
                  <div style={{ textAlign: "center", padding: "40px" }}>
                    <div style={{ fontSize: "60px", marginBottom: "16px" }}>✅</div>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "var(--ink)", marginBottom: "8px" }}>
                      Thank you!
                    </h4>
                    <p style={{ color: "var(--mid)" }}>We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      className="form-input"
                      type="text"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <input
                      className="form-input"
                      type="email"
                      placeholder="Email Address *"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <select
                      className="form-input"
                      value={formData.inquiry}
                      onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                      style={{ cursor: "pointer" }}
                    >
                      <option>Your inquiry about</option>
                      <option>Residential Lead Generation</option>
                      <option>Commercial Property Leads</option>
                      <option>AI Automation Setup</option>
                      <option>CRM Integration</option>
                      <option>Partner Relations</option>
                    </select>
                    <button type="submit" className="btn-primary" style={{ width: "100%", animation: "none", fontSize: "16px", padding: "16px" }}>
                      Submit Request →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}