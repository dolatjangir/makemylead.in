"use client";

import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Clock,
  Headphones,
  Globe,
  ArrowRight,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Contact Us Page — MakeMyLeads
   Glassmorphism · Modern Layout · Next.js 15 + Tailwind v4
   ───────────────────────────────────────────────────────────── */

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)] overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION — Full-bleed with animated gradient mesh
         ═══════════════════════════════════════════════════════ */}
    {/* ═══════════════════════════════════════════════════════
    HERO SECTION — Light Theme + Background Image
═══════════════════════════════════════════════════════ */}
<section className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.openai.com/static-rsc-4/rSZDDruSsSDsrQYuU049aAtw-ysUvdpO08X0Qs9QMfU7cfnp_PTrEBnQTu4uJXxCHkrW08wsMTwaPH3EMUraJJoywxFy48KflaBTWad7TfaBY6GtqxumYlYd9JJqiSWygYSqto-Ao3kiROaM8CLPX_cUpSLH-dK-Gaoo6I1eQyeW1NXjbOm9YRRdbphlNaJ1?purpose=fullsize"
      alt="Contact Background"
      className="w-full h-full object-cover scale-105"
    />

    {/* 🔥 Deep luxury overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,42,131,0.85)_0%,rgba(8,106,216,0.75)_50%,rgba(0,0,0,0.7)_100%)]" />

    {/* ✨ Soft blur layer */}
    <div className="absolute inset-0 backdrop-blur-[2px]" />
  </div>

  {/* 🔥 Radial glow layers (like about page) */}
  <div className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]" />
  <div className="absolute bottom-[-15%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]" />

  {/* Gradient fade bottom */}
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--navy-deep)]/90" />

  {/* Content */}
  <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-sm text-white mt-24 mb-3 shadow-lg">
      <Sparkles className="w-4 h-4 text-[var(--warm)]" />
      <span className="tracking-wide">AI-Powered Lead Generation</span>
    </div>

    {/* Heading */}
    <h1
      className="text-4xl md:text-6xl font-black leading-[1.1] mb-6"
      style={{ fontFamily: "'Playfair Display', serif" }}
    >
      <span className="text-white">
        Let’s Talk About Your
      </span>{" "}
      <br />
      <span
        style={{
          background: "linear-gradient(135deg, #ffffff, #c7d2fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Growth
      </span>
    </h1>

    {/* Subtext */}
    <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
      Have questions or need more leads? Our team is here to help you scale faster
      with smart automation and AI-powered strategies that drive real results.
    </p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

      <a
        href="#contact-form"
        className="px-8 py-4 rounded-xl font-semibold text-white text-[15px] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
        style={{
          background: "var(--gradient-blue)",
          boxShadow: "0 10px 40px rgba(8,106,216,0.45)",
        }}
      >
        Send Message →
      </a>

      <a
        href="tel:+919950602330"
        className="px-8 py-4 rounded-xl font-medium text-white text-[15px] transition-all duration-300 hover:bg-white hover:text-[var(--ink)]"
        style={{
          border: "1px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
        }}
      >
        Call Us
      </a>
    </div>

    {/* Stats */}
    <div className="flex flex-wrap justify-center gap-6 mt-8">
      {[
        { icon: Clock, label: "Response Time", value: "2 Hours" },
        { icon: Headphones, label: "Support", value: "24/7 Available" },
        { icon: Globe, label: "Clients", value: "3200+" },
      ].map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/15 bg-white/10 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
        >
          <stat.icon className="w-5 h-5 text-[var(--warm)]" />
          <div className="text-left">
            <div className="text-sm font-bold text-white">
              {stat.value}
            </div>
            <div className="text-xs text-white/60">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ═══════════════════════════════════════════════════════
          CONTACT FORM + INFO SECTION
         ═══════════════════════════════════════════════════════ */}
  <section className="relative px-6 py-20 md:py-28">
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--paper)] to-[var(--paper)]" />

  <div className="relative z-10 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
      
      {/* LEFT */}
      <div className="lg:col-span-2 space-y-5">
        <span className="text-[var(--blue)] text-sm font-semibold tracking-widest uppercase">
          Get in Touch
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--ink)]">
          Contact <span style={{ color: "var(--warm)" }}>Information</span>
        </h2>

        {[
          {
            icon: MapPin,
            title: "Headquarters",
            lines: [
              "30-A, Sultan Nagar, Gurjar Ki Thadi",
              "Jaipur, Rajasthan — 302019, India",
            ],
          },
          {
            icon: Phone,
            title: "Phone Support",
            lines: ["+91 96499 02000", "+91 99506 02330"],
          },
          {
            icon: Mail,
            title: "Email Us",
            lines: ["info@makemyleads.com", "contact.info@makemyleads.com"],
          },
        ].map((card) => (
          <div
            key={card.title}
            className="p-6 rounded-3xl bg-white border border-[var(--black-08)] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--blue-08)] flex items-center justify-center">
                <card.icon className="w-5 h-5 text-[var(--blue)]" />
              </div>

              <div>
                <h3 className="font-semibold text-[var(--ink)]">
                  {card.title}
                </h3>
                {card.lines.map((line, i) => (
                  <p key={i} className="text-sm text-[var(--mid)]">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* WhatsApp */}
        <a className="block p-6 rounded-3xl bg-[#25d366]/10 border border-[#25d366]/30 hover:bg-[#25d366]/15 transition">
          <div className="flex items-center gap-4">
            <MessageCircle className="text-[#25d366]" />
            <div>
              <h3 className="font-semibold text-[var(--ink)]">
                Chat on WhatsApp
              </h3>
              <p className="text-sm text-[var(--mid)]">
                Instant replies during business hours
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* RIGHT FORM */}
      <div className="lg:col-span-3">
        <div className="p-8 md:p-10 rounded-[2rem] bg-white border border-[var(--black-08)] shadow-xl">
          
          <h3 className="text-2xl font-bold text-[var(--ink)] mb-2">
            Send us a Message
          </h3>

          <p className="text-[var(--mid)] text-sm mb-8">
            Fill out the form below and we'll get back to you within 2 working days.
          </p>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              
              <input
                placeholder="Full Name"
                className="w-full px-5 py-3 rounded-xl bg-white border border-[var(--black-08)] focus:border-[var(--blue)] outline-none"
              />

              <input
                placeholder="Email"
                className="w-full px-5 py-3 rounded-xl bg-white border border-[var(--black-08)] focus:border-[var(--blue)] outline-none"
              />
            </div>

            <input
              placeholder="Subject"
              className="w-full px-5 py-3 rounded-xl bg-white border border-[var(--black-08)] focus:border-[var(--blue)] outline-none"
            />

            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full px-5 py-3 rounded-xl bg-white border border-[var(--black-08)] focus:border-[var(--blue)] outline-none"
            />

            <button className="px-8 py-4 rounded-xl bg-[var(--blue)] text-white font-semibold hover:bg-[var(--blue-dark)] transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* ═══════════════════════════════════════════════════════
          TRUST BADGE / SOCIAL PROOF SECTION
         ═══════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-[var(--navy-deep)]/[0.8] to-[var(--navy)]/[0.8] backdrop-blur-2xl border border-white/[0.08] overflow-hidden">
            {/* Decorative glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#086ad8]/8 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#d2a98e]/6 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Rating */}
              <div className="flex-shrink-0 text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  4.9<span className="text-3xl text-white/30">/5.0</span>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#d2a98e]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="h-px w-full md:w-px md:h-20 bg-white/10" />

              <div className="flex-1 text-center md:text-left">
                <p className="text-lg text-white/70 leading-relaxed">
                  Trusted by <span className="text-white font-semibold">700+ customers</span> who have generated over{" "}
                  <span className="text-[#d2a98e] font-semibold">3,200+ successful leads</span>{" "}
                  for businesses across Education, Medical, Finance, Real Estate, and more.
                </p>
              </div>

              <div className="flex-shrink-0">
                <a
                  href="tel:+919950602330"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-[#086ad8]" />
                  <div className="text-left">
                    <div className="text-xs text-white/40">Call for advice</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#d2a98e] transition-colors">
                      +91 99506 02330
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES WE SUPPORT (Quick reference)
         ═══════════════════════════════════════════════════════ */}
      <section className="relative px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#086ad8] text-sm font-semibold tracking-widest uppercase">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 text-[var(--navy-deep)]">
              Specialized Lead Generation for{" "}
              <span className="text-[#d2a98e]">Every Sector</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Education", icon: "🎓" },
              { name: "Medical", icon: "🏥" },
              { name: "Finance", icon: "💰" },
              { name: "Real Estate", icon: "🏢" },
              { name: "Rental", icon: "🔑" },
              { name: "Consultancy", icon: "📊" },
            ].map((industry) => (
              <div
                key={industry.name}
                className="group p-5 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] hover:bg-white/[0.06] hover:border-[#086ad8]/20 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {industry.icon}
                </div>
                <div className="text-sm font-medium  text-[var(--navy-deep)] group-hover: text-[var(--navy-deep)]/70 transition-colors">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          BOTTOM CTA BANNER
         ═══════════════════════════════════════════════════════ */}
      <section className="relative px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--navy-deep)] via-[var(--navy-deep)]/80 to-[var(--navy-deep)]/90 p-10 md:p-14 text-center">
            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to 10x Your Leads?
              </h3>
              <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
                We run all kinds of AI-powered lead generation & IT services
                that vow your success. Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/919950602330?text=Hi%2C%20I%20am%20interested%20in%20your%20services%20from%20MakeMyLeads.com."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 rounded-xl bg-white text-[#002fa6] font-bold flex items-center gap-2 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Let's Talk on WhatsApp</span>
                </a>
                <a
                  href="mailto:info@makemyleads.com"
                  className="group px-8 py-4 rounded-xl bg-white/10 text-white font-semibold border border-white/20 flex items-center gap-2 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}