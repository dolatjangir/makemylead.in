"use client";

import { useState, useEffect, useRef } from "react";

// ─── Static Data ─────────────────────────────────────────────────────────────

const COUNTERS = [
  { end: 1790, label: "Happy Clients", icon: "😊", suffix: "+" },
  { end: 491,  label: "Projects Delivered", icon: "🚀", suffix: "+" },
  { end: 245,  label: "Skilled Experts", icon: "🧠", suffix: "+" },
  { end: 1090, label: "Media Posts", icon: "📣", suffix: "+" },
];

const CARDS = [
  {
    emoji: "🤖",
    title: "What we can do?",
    text: "At MakeMyLeads, we combine the power of artificial intelligence with deep industry expertise to identify, segment, and nurture high-intent leads—automatically.",
  },
  {
    emoji: "🤝",
    title: "Become our partners?",
    text: "Scale your business faster with our intelligent lead pipelines. Whether you want sales-ready leads or predictive analytics, our solutions adapt to your growth goals.",
  },
  {
    emoji: "🛠️",
    title: "Need a hand?",
    text: "Our AI-powered support team is here 24/7. We analyze every interaction to serve you faster and better—solving your problems before they even arise.",
  },
];

const FEATURES = [
  {
    icon: "🔒",
    title: "Warranty Management IT",
    desc: "Our service offerings enhance customer experience throughout secure & highly functional end-to-end warranty management.",
  },
  {
    icon: "🎯",
    title: "AI-Powered Lead Targeting",
    desc: "Reach the right audience at the right time using intelligent algorithms that identify high-converting leads with precision.",
  },
  {
    icon: "✅",
    title: "Quality Control System",
    desc: "It's more than a responsibility—it's a guarantee from us to gain customer trust with a highly reliable quality control system.",
  },
  {
    icon: "💬",
    title: "Voice + Chatbot Engagement Tools",
    desc: "Enhance customer experience with AI chatbots and voice assistants that provide instant, human-like support 24/7.",
  },
  {
    icon: "👨‍💼",
    title: "Highly Professional Staff",
    desc: "Having obtained formal training in IT technology and technical fields, our staff know more than what they show.",
  },
  {
    icon: "⚙️",
    title: "AI-Powered Quality Control",
    desc: "Ensure consistent service and output with AI tools that monitor quality metrics and automatically flag anomalies or errors.",
  },
];

const TESTIMONIALS = [
  {
    name: "Rajesh Singh",
    role: "Real Estate Developer",
    text: "MakeMyLeads.com helped us expand our client base rapidly, making them an invaluable partner in our growth journey.",
    initials: "RS",
    rating: 5,
    color: "from-[#086ad8] to-[#002fa6]",
  },
  {
    name: "Priya Sharma",
    role: "Property Broker",
    text: "Their lead generation strategies have been instrumental in boosting our business revenue by over 3x in six months.",
    initials: "PS",
    rating: 5,
    color: "from-[#d2a98e] to-[#c4967a]",
  },
  {
    name: "Arjun Kumar",
    role: "Real Estate Agent",
    text: "Their leads are not just leads; they are opportunities waiting to be explored and converted into profitable deals.",
    initials: "AK",
    rating: 5,
    color: "from-[#072a83] to-[#086ad8]",
  },
  {
    name: "Divya Jain",
    role: "Builder & Developer",
    text: "MakeMyLeads.com understands our business needs and delivers tailored solutions every single time without fail.",
    initials: "DJ",
    rating: 5,
    color: "from-[#0d0f1a] to-[#072a83]",
  },
];

const PARTNERS = [
  "PropTiger", "99Acres", "MagicBricks", "Housing.com",
  "NoBroker", "Square Yards", "CommonFloor", "Sulekha",
];

// ─── Animated Counter ─────────────────────────────────────────────────────────

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) { setCount(end); clearInterval(timer); }
            else setCount(Math.floor(current));
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─── Star Rating ──────────────────────────────────────────────────────────────

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-amber-400 text-sm">★</span>
      ))}
    </div>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    // placeholder download action
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'DM Sans', sans-serif", background: "var(--ink)" }}
    >
      {/* ── Google Fonts (link only, no style tag) ── */}
      {/* Add this to your _document or layout.tsx:
          <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" /> */}

      {/* ══════════════════════════════════════════════
          HERO — full‑bleed, real‑estate city bg
      ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://makemyleads.com/wp-content/uploads/2025/07/45184678_9117392-scaled.jpg')",
          }}
        />

        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.52 }}
        />

        {/* Glow blobs */}
        <div
          className="absolute top-[-15%] right-[-8%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(8,106,216,0.3) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(7,42,131,0.35) 0%, transparent 70%)" }}
        />

        {/* Diagonal accent line */}
        <div
          className="absolute top-0 right-[22%] w-px h-full pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(8,106,216,0.35), transparent)" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8 "
            style={{
    background: "rgba(8,106,216,0.2)",
    border: "1px solid rgba(8,106,216,0.4)",
    color: "#86b4f0",
    letterSpacing: "0.5px",
    animation: "fadeUp 0.6s ease forwards",
  }}
          >
            <span>🏢</span> India's Most Trusted AI Lead Platform
          </div>

          {/* Headline */}
          <h1
  className="text-5xl md:text-7xl font-black leading-[1.05] text-white mb-6"
  style={{
    fontFamily: "'Playfair Display', serif",
    animation: "fadeUp 0.7s ease 0.1s forwards",
    opacity: 0,
  }}
>
            About{" "}
            <span
              style={{
                background: "var(--gradient-text-white)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Make My
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #d2a98e, #c4967a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Leads
            </span>
          </h1>

          {/* Sub */}
        <p
  className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
  style={{
    color: "var(--white-70)",
    animation: "fadeUp 0.7s ease 0.2s forwards",
    opacity: 0,
  }}
>
            Explore a world where AI-driven lead generation accelerates business growth. We transform data into opportunities, helping brands navigate the digital future with smart, scalable solutions that unlock real revenue.
          </p>

          {/* CTA pair */}
         <div
  className="flex flex-wrap gap-4 justify-center"
  style={{
    animation: "fadeUp 0.7s ease 0.3s forwards",
    opacity: 0,
  }}
>
            <a
              href="#our-company"
              className="px-8 py-4 rounded-full font-semibold text-white text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{ background: "var(--gradient-blue)", boxShadow: "0 0 24px rgba(8,106,216,0.35)" }}
            >
              Discover Our Story →
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-medium text-white text-[15px] transition-all duration-300 hover:bg-white hover:text-[var(--ink)]"
              style={{
                border: "1px solid var(--white-30)",
                background: "var(--white-08)",
                backdropFilter: "blur(10px)",
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Scroll arrow */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs tracking-[3px]" style={{ color: "var(--white-40)" }}>SCROLL</span>
            <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, var(--white-40), transparent)" }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          OUR COMPANY — split layout
      ══════════════════════════════════════════════ */}
      <section id="our-company" className="py-28 px-6" style={{ background: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto">

          {/* Tag */}
          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(8,106,216,0.1)",
                border: "1px solid rgba(8,106,216,0.3)",
                color: "var(--blue)",
              }}
            >
              🏗️ Our Company
            </span>
          </div>

          <h2
            className="text-center text-4xl md:text-5xl font-bold leading-tight mb-16 max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
          >
            We run all kinds of{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #086ad8, #002fa6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              AI-powered
            </span>{" "}
            lead generation & IT services that vow your success
          </h2>

          {/* Two-col */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left — big number + label */}
            <div className="relative">
              <div
                className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-20 pointer-events-none"
                style={{ background: "var(--gradient-blue)" }}
              />
              <div
                className="text-8xl font-black leading-none mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "var(--gradient-blue)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                11
              </div>
              <div
                className="text-2xl font-bold mb-4 pl-1"
                style={{ color: "var(--ink)" }}
              >
                Years' Experience in IT
              </div>
              <div
                className="text-lg font-semibold mb-2 pl-1"
                style={{
                  color: "var(--blue)",
                  borderLeft: "3px solid var(--blue)",
                  paddingLeft: "16px",
                }}
              >
                More About Our Success Stories
              </div>

              {/* Mini stats strip */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { val: "3200+", label: "Happy Clients" },
                  { val: "98%", label: "Retention Rate" },
                  { val: "50+", label: "Industries" },
                  { val: "24/7", label: "AI Support" },
                ].map((s) => (
                  <div
                    key={s.val}
                    className="p-4 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(8,106,216,0.06)",
                      border: "1px solid rgba(8,106,216,0.15)",
                    }}
                  >
                    <div
                      className="text-2xl font-extrabold mb-1"
                      style={{ color: "var(--blue)", fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.val}
                    </div>
                    <div className="text-xs font-medium" style={{ color: "var(--mid)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — text + discover */}
            <div>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--mid)" }}>
                From traditional IT roots to advanced AI integrations, our journey has spanned over a decade—driving measurable success for our clients. Today, our AI solutions automate lead scoring, improve targeting accuracy, and deliver superior conversion outcomes.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--mid)" }}>
                We've partnered with 3,200+ businesses across real estate, healthcare, finance, and e-commerce—building pipelines that generate consistent, qualified leads at scale using the latest in machine learning and behavioral targeting.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-3 text-base font-semibold transition-all duration-300 hover:gap-5"
                style={{ color: "var(--blue)" }}
              >
                Discover now <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PARTNERS MARQUEE
      ══════════════════════════════════════════════ */}
     <section
  className="py-12 overflow-hidden border-t border-gray-200 border-b border-gray-200"
  style={{ background: "var(--paper)" }}
>
  <div className="flex w-max animate-[marquee_22s_linear_infinite]">

    {[...PARTNERS, ...PARTNERS].map((name, i) => (
      <div
        key={i}
        className="group flex items-center gap-2 px-10 py-4 mx-3 rounded-xl whitespace-nowrap text-sm font-semibold tracking-wide bg-white border border-gray-200 text-gray-500 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
      >
        <span className="text-lg text-blue-500 group-hover:scale-110 transition">
          🏢
        </span>

        <span className="group-hover:text-gray-800 transition">
          {name}
        </span>
      </div>
    ))}

  </div>
</section>
   {/* ══════════════════════════════════════════════
          CONTACT / FOOTER CTA
      ══════════════════════════════════════════════ */}
      <section id="contact" className="py-28 px-6" style={{ background: "var(--paper)" }}>
        <div className="max-w-5xl mx-auto">

          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(8,106,216,0.08)",
                border: "1px solid rgba(8,106,216,0.25)",
                color: "var(--blue)",
              }}
            >
              📞 Let's Connect
            </span>
          </div>

          <h2
            className="text-center text-4xl md:text-5xl font-bold mb-4 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
          >
            Let's build something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #086ad8, #002fa6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              remarkable
            </span>{" "}
            together
          </h2>
          <p className="text-center text-base mb-16 max-w-xl mx-auto" style={{ color: "var(--mid)" }}>
            Reach out to our team and discover how AI-powered lead generation can transform your business growth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Left info */}
            <div>
              {/* Rating */}
              <div className="flex items-center gap-3 mb-8">
                <Stars count={5} />
                <span className="font-bold text-lg" style={{ color: "var(--ink)" }}>4.9/5.0</span>
                <span className="text-sm" style={{ color: "var(--mid)" }}>by 700+ customers</span>
              </div>

              {/* Contact items */}
              {[
                { icon: "📞", label: "Call for advice now!", value: "+91 9950602330", href: "tel:9950602330" },
                { icon: "✉️", label: "Say hello", value: "info@makemyleads.com", href: "mailto:info@makemyleads.com" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-5 p-5 rounded-2xl mb-4 transition-all duration-300 no-underline group"
                  style={{
                    background: "rgba(8,106,216,0.04)",
                    border: "1px solid rgba(8,106,216,0.15)",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(8,106,216,0.09)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(8,106,216,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(6px)";
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "rgba(8,106,216,0.04)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(8,106,216,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: "var(--gradient-blue)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm mb-0.5" style={{ color: "var(--ink)" }}>{item.label}</div>
                    <div className="text-sm font-medium" style={{ color: "var(--blue)" }}>{item.value}</div>
                  </div>
                </a>
              ))}

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3 mt-6">
                {["🔒 RERA Compliant", "✅ GDPR Secure", "⚡ 24/7 AI Support"].map((b) => (
                  <span
                    key={b}
                    className="px-4 py-2 rounded-full text-sm font-semibold"
                    style={{
                      background: "rgba(8,106,216,0.08)",
                      border: "1px solid rgba(8,106,216,0.25)",
                      color: "var(--blue)",
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div
              className="p-10 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.7)",
                boxShadow: "0 8px 40px rgba(8,106,216,0.08)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
              >
                Book an Appointment
              </h3>
              <p className="text-sm mb-7" style={{ color: "var(--mid)" }}>
                It's our pleasure to have a chance to cooperate.
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "var(--ink)" }}>Thank you!</h4>
                  <p style={{ color: "var(--mid)" }}>We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {[
                    { placeholder: "Your Name *", type: "text", key: "name" as const },
                    { placeholder: "Email Address *", type: "email", key: "email" as const },
                  ].map((field) => (
                    <input
                      key={field.key}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-300 mb-4"
                      style={{
                        border: "1px solid rgba(8,106,216,0.2)",
                        background: "rgba(8,106,216,0.03)",
                        color: "var(--ink)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "var(--blue)";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(8,106,216,0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "rgba(8,106,216,0.2)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  ))}

                  <select
                    className="w-full px-5 py-4 rounded-xl text-sm outline-none transition-all duration-300 mb-6"
                    style={{
                      border: "1px solid rgba(8,106,216,0.2)",
                      background: "rgba(8,106,216,0.03)",
                      color: "var(--mid)",
                      fontFamily: "'DM Sans', sans-serif",
                      cursor: "pointer",
                    }}
                  >
                    <option>Your inquiry about</option>
                    <option>AI Lead Generation</option>
                    <option>Real Estate Leads</option>
                    <option>CRM Integration</option>
                    <option>Partner Relations</option>
                    <option>Careers</option>
                  </select>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full font-semibold text-white text-base transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    style={{ background: "var(--gradient-blue)", boxShadow: "0 0 20px rgba(8,106,216,0.3)" }}
                  >
                    Submit Request →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* ══════════════════════════════════════════════
          THREE CARDS — what/partner/support
      ══════════════════════════════════════════════ */}
  <section className="py-28 px-6 relative overflow-hidden bg-[#f8fafc]">

  {/* Soft background glow */}
  <div
    className="absolute top-[-80px] right-[10%] w-[300px] h-[300px] rounded-full blur-3xl opacity-30"
    style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }}
  />

  <div className="max-w-6xl mx-auto relative z-10">

    {/* Heading */}
    <h2
      className="text-center text-3xl md:text-4xl font-bold text-[#0f172a] mb-4"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      Challenges are just{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">
        opportunities in disguise
      </span>
    </h2>

    <p className="text-center mb-16 text-base text-[#64748b]">
      <a
        href="#"
        className="font-semibold text-[#2563eb] hover:underline transition"
      >
        Take the challenge! →
      </a>
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {CARDS.map((card, i) => (
        <div
          key={i}
          className="group p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
        >
          {/* Icon */}
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            {card.emoji}
          </div>

          {/* Title */}
          <h3
            className="text-xl font-bold text-[#0f172a] mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {card.title}
          </h3>

          {/* Text */}
          <p className="text-sm text-[#64748b] leading-relaxed mb-6">
            {card.text}
          </p>

          {/* Link */}
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
          >
            Discover now →
          </a>

          {/* Hover gradient border glow */}
          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"
            style={{
              background:
                "linear-gradient(120deg, rgba(37,99,235,0.15), transparent, rgba(245,158,11,0.15))",
            }}
          />
        </div>
      ))}
    </div>
  </div>
</section>

   {/* ══════════════════════════════════════════════
          RESOURCES BANNER — glassmorphism on dark bg image
      ══════════════════════════════════════════════ */}
      <section
        className="relative py-24 px-6 overflow-hidden"
        style={{ background: "var(--navy-deep)" }}
      >
        {/* bg image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600&q=80')" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)", opacity: 0.85 }}
        />
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(to right, transparent, var(--warm), transparent)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left */}
            <div>
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
                style={{
                  background: "rgba(8,106,216,0.2)",
                  border: "1px solid rgba(8,106,216,0.4)",
                  color: "#86b4f0",
                }}
              >
                📚 Resources
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get a free copy of our{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #d2a98e, #c4967a)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Brand New AI Tech
                </span>{" "}
                Brochure
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "var(--white-60)" }}>
                Everything you need to know about AI-powered lead generation—strategies, tools, and proven frameworks used by 3,200+ clients across India.
              </p>
              <a
                href="#"
                onClick={handleDownload}
                className="inline-block px-8 py-4 rounded-full font-semibold text-white text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ background: "var(--gradient-blue)", boxShadow: "0 0 24px rgba(8,106,216,0.3)" }}
              >
                Download now (3MB) →
              </a>
            </div>

            {/* Right — glass card */}
            <div
              className="p-10 rounded-3xl text-center"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="text-7xl mb-5">📋</div>
              <div
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                MakeMyLeads AI Guide 2024
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--white-50)" }}>
                Complete lead generation playbook crafted for India's fastest-growing industries.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {["50+ Pages", "Case Studies", "AI Toolkit", "ROI Frameworks"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      background: "rgba(8,106,216,0.2)",
                      border: "1px solid rgba(8,106,216,0.4)",
                      color: "#86b4f0",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* ══════════════════════════════════════════════
          FEATURES — checklist on light bg
      ══════════════════════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: "var(--paper)" }}>
        <div className="max-w-6xl mx-auto">

          <div className="flex justify-center mb-6">
            <span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                background: "rgba(8,106,216,0.08)",
                border: "1px solid rgba(8,106,216,0.25)",
                color: "var(--blue)",
              }}
            >
              ✨ Our Capabilities
            </span>
          </div>
          <h2
            className="text-center text-4xl md:text-5xl font-bold mb-16 max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
          >
            We excel in delivering{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #086ad8, #002fa6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              optimal solutions
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 rounded-2xl transition-all duration-300 group cursor-pointer"
                style={{
                  background: "rgba(8,106,216,0.03)",
                  border: "1px solid rgba(8,106,216,0.12)",
                }}
                onMouseOver={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(8,106,216,0.07)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(8,106,216,0.35)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(8px)";
                }}
                onMouseOut={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "rgba(8,106,216,0.03)";
                  (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(8,106,216,0.12)";
                  (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 mt-0.5"
                  style={{ background: "var(--gradient-blue)" }}
                >
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1" style={{ color: "var(--ink)" }}>
                    {f.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--mid)" }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   

  

      {/* ══════════════════════════════════════════════
          COUNTERS — dark glass strip
      ══════════════════════════════════════════════ */}
   <section className="py-24 px-6 bg-[#f8fafc] relative overflow-hidden">

  {/* subtle top + bottom divider */}
  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

  {/* soft background glow */}
  <div
    className="absolute top-[-100px] left-[50%] -translate-x-1/2 w-[400px] h-[400px] rounded-full blur-3xl opacity-30"
    style={{
      background:
        "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
    }}
  />

  <div className="max-w-5xl mx-auto relative z-10">

    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

      {COUNTERS.map((c, i) => (
        <div
          key={c.label}
          className="group text-center p-8 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3"
        >
          {/* Icon */}
          <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            {c.icon}
          </div>

          {/* Number */}
          <div
            className="text-4xl font-extrabold text-[#0f172a] mb-2"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <AnimatedCounter end={c.end} suffix={c.suffix} />
          </div>

          {/* Label */}
          <div className="text-sm font-medium text-[#64748b]">
            {c.label}
          </div>

          {/* hover accent line */}
          <div className="mt-4 h-[2px] w-0 bg-blue-500 mx-auto transition-all duration-500 group-hover:w-10" />
        </div>
      ))}

    </div>
  </div>
</section>

      {/* ══════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════ */}
     <section className="py-28 px-6 bg-[#f8fafc] relative overflow-hidden">

  {/* soft background glow */}
  <div
    className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] blur-3xl opacity-30 pointer-events-none"
    style={{
      background:
        "radial-gradient(ellipse, rgba(37,99,235,0.25) 0%, transparent 70%)",
    }}
  />

  <div className="max-w-6xl mx-auto relative z-10">

    {/* Badge */}
    <div className="flex justify-center mb-4">
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-600 border border-blue-100">
        💬 Testimonials
      </span>
    </div>

    {/* Heading */}
    <h2
      className="text-center text-4xl md:text-5xl font-bold text-[#0f172a] mb-16"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      How our services bring about{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#f97316]">
        success
      </span>
    </h2>

    {/* Tabs */}
    <div className="flex justify-center gap-3 mb-12 flex-wrap">
      {TESTIMONIALS.map((t, i) => (
        <button
          key={i}
          onClick={() => setActiveTab(i)}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
            activeTab === i
              ? "bg-blue-600 text-white shadow-md"
              : "bg-white text-gray-500 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {t.initials}
        </button>
      ))}
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {TESTIMONIALS.map((t, i) => (
        <div
          key={i}
          onClick={() => setActiveTab(i)}
          className={`group p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${
            i === activeTab
              ? "bg-white border-blue-300 shadow-xl scale-[1.02]"
              : "bg-white border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2"
          }`}
        >
          {/* Top */}
          <div className="flex items-center gap-4 mb-5">
            {/* Avatar */}
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg text-white flex-shrink-0 bg-gradient-to-br ${t.color}`}
            >
              {t.initials}
            </div>

            <div className="flex-1">
              <div className="font-bold text-[#0f172a] text-base">
                {t.name}
              </div>
              <div className="text-xs text-gray-500">{t.role}</div>
            </div>

            <Stars count={t.rating} />
          </div>

          {/* Quote */}
          <div className="text-3xl text-blue-200 mb-2">"</div>

          <p className="text-sm text-gray-600 leading-relaxed italic">
            {t.text}
          </p>

          {/* Bottom accent line */}
          <div
            className={`mt-6 h-[2px] transition-all duration-500 ${
              i === activeTab
                ? "w-12 bg-blue-500"
                : "w-0 group-hover:w-10 bg-blue-400"
            }`}
          />
        </div>
      ))}
    </div>
  </div>
</section>



   


    
    </main>
  );
}