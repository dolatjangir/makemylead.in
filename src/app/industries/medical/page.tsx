import React from 'react';
import { 
  Stethoscope, 
  Shield, 
  Brain, 
  Activity, 
  Users, 
  Zap, 
  Star, 
  Phone, 
  Mail, 
  CheckCircle2,
  ArrowRight,
  Download,
  MessageCircle,
  HeartPulse,
  Database,
  Lock,
  Cpu,
  Globe
} from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

interface StatProps {
  value: string;
  label: string;
}

// ─── Components ────────────────────────────────────────────────────

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, index }) => (
  <div 
    className="group relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] backdrop-blur-xl p-8 transition-all duration-500 hover:bg-[rgba(255,255,255,0.07)] hover:border-[rgba(255,255,255,0.15)] hover:-translate-y-2"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#086ad8]/10 via-transparent to-[#d2a98e]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-[#086ad8] to-[#002fa6] text-white shadow-lg shadow-[#086ad8]/25 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#d2a98e] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-[rgba(255,255,255,0.70)] leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </div>
);

const TestimonialCard: React.FC<TestimonialProps> = ({ name, role, content, rating, avatar }) => (
  <div className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.04)] backdrop-blur-xl p-8 transition-all duration-300 hover:border-[rgba(255,255,255,0.12)]">
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#086ad8]/10 to-transparent rounded-bl-full" />
    <div className="relative z-10">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-[#d2a98e] fill-[#d2a98e]' : 'text-[rgba(255,255,255,0.20)]'}`} 
          />
        ))}
      </div>
      <p className="text-[rgba(255,255,255,0.85)] mb-6 leading-relaxed italic">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#086ad8] to-[#002fa6] flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-[rgba(255,255,255,0.50)] text-sm">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const StatItem: React.FC<StatProps> = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-r from-white to-[rgba(255,255,255,0.50)] bg-clip-text text-transparent">
      {value}
    </div>
    <div className="text-[rgba(255,255,255,0.60)] text-sm uppercase tracking-wider">{label}</div>
  </div>
);

const CheckItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="flex gap-4 items-start group  bg-gradient-to-br from-[#086ad8] to-[#002fa6]  p-4 rounded-lg shadow-2xl">
    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#086ad8] to-[#002fa6] flex items-center justify-center">
      <CheckCircle2 className="w-4 h-4 text-white" />
    </div>
    <div>
      <h4 className="text-white font-semibold mb-1 group-hover:text-[#d2a98e] transition-colors">{title}</h4>
      <p className="text-[rgba(255,255,255,0.60)] text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// ─── Main Page ─────────────────────────────────────────────────────

export default function MedicalPage() {
  const features = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "AI-Powered Medical Lead System",
      description: "Leverage our AI-enabled system to streamline medical lead generation with real-time targeting, accurate filtering, and secure data compliance for clinics, hospitals, and healthcare providers."
    },
    {
      icon: <Database className="w-7 h-7" />,
      title: "Smart Medical Lead Management",
      description: "Our advanced AI platform ensures organized, secure, and compliant medical lead handling—reducing manual errors and boosting efficiency across all healthcare marketing operations."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "End-to-End AI Lead Solutions",
      description: "From automated outreach to follow-up workflows, our AI lead engine supports the full medical sales cycle—covering CRM integration, data enrichment, and HIPAA-compliant communication."
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Quality Control with AI Support",
      description: "Each medical lead goes through rigorous AI-based validation, scoring, and deduplication to ensure only the most relevant, verified, and conversion-ready leads reach your team."
    },
    {
      icon: <Users className="w-7 h-7" />,
      title: "Trained Healthcare AI Experts",
      description: "Our skilled team blends AI technology with medical industry knowledge to generate high-intent leads tailored to your specific healthcare services and business objectives."
    },
    {
      icon: <Activity className="w-7 h-7" />,
      title: "Integrated AI Medical Strategy",
      description: "We offer an AI-first approach to transform and modernize your lead funnel with predictive insights, real-time scoring, and personalized outreach for medical clients."
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Singh",
      role: "Hospital Director",
      content: "MakeMyLeads.com helped us expand our client base rapidly, making them an invaluable partner in our growth journey.",
      rating: 5,
      avatar: "RS"
    },
    {
      name: "Priya Sharma",
      role: "Clinic Owner",
      content: "Their lead generation strategies have been instrumental in boosting our business revenue by 150% in just six months.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "Sanjay Verma",
      role: "Marketing Head",
      content: "Exceptional service and exceptional results! Highly recommend MakeMyLeads.com for healthcare lead generation.",
      rating: 5,
      avatar: "SV"
    },
    {
      name: "Arjun Kumar",
      role: "Healthcare Consultant",
      content: "Their leads are not just leads; they are opportunities waiting to be explored and converted into loyal patients.",
      rating: 5,
      avatar: "AK"
    }
  ];

  const checklistItems = [
    {
      title: "AI-Based Medical Lead Design",
      description: "Creating responsive and high-performing AI-driven designs tailored for healthcare lead generation, ensuring a smooth digital journey for hospitals, clinics, and institutions."
    },
    {
      title: "AI-Powered Lead Management",
      description: "Using intelligent automation to organize, track, and enhance medical lead flow, ensuring fast and secure transitions in your healthcare lead generation strategy."
    },
    {
      title: "AI Health Data Security",
      description: "Securing sensitive medical lead data using AI-driven backups, encryption, and smart access protocols, ensuring complete protection while retaining data availability and integrity."
    },
    {
      title: "Healthcare Automation Solutions",
      description: "Implementing AI-powered healthcare process reforms to simplify workflows and maximize lead generation tailored to clinical and institutional objectives."
    },
    {
      title: "Smart Infrastructure for Healthcare Leads",
      description: "Building scalable, AI-optimized infrastructure for reliable, cost-effective lead support—customized for medical environments with diverse needs and limited IT resources."
    },
    {
      title: "AI-Driven Threat Protection",
      description: "Deploying AI-based firewalls and monitoring to shield medical lead systems from cyber risks, data breaches, and malicious threats in real time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#f5f4f0] overflow-x-hidden">
      
      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center pt-32 justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://kimi-web-img.moonshot.cn/img/static.vecteezy.com/a0379767971c28a0aacce8513940ae6e2a16a93c.jpg')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f1a]/95 via-[#072a83]/85 to-[#086ad8]/80" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        </div>

        {/* Floating Glass Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#086ad8]/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#d2a98e]/10 blur-3xl animate-pulse delay-1000" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(255,255,255,0.12)] mb-8 animate-fade-in-up">
            <HeartPulse className="w-4 h-4 text-[#d2a98e]" />
            <span className="text-[rgba(255,255,255,0.85)] text-sm font-medium">Healthcare Industry Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Accelerate Healthcare
            <br />
            <span className="bg-gradient-to-r from-[#d2a98e] via-[#ffffff] to-[#d2a98e] bg-clip-text text-transparent">
              Growth with AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[rgba(255,255,255,0.75)] max-w-3xl mx-auto mb-12 leading-relaxed">
            Connect with the right patients and partners using intelligent AI-driven tools 
            built for the medical and healthcare industry.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 rounded-full bg-[#086ad8] text-white font-semibold text-lg hover:bg-[#054fa0] transition-all duration-300 shadow-lg shadow-[#086ad8]/30 hover:shadow-[#086ad8]/50 flex items-center gap-2">
              Get a FREE Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-full border border-[rgba(255,255,255,0.20)] text-white font-semibold text-lg hover:bg-white hover:text-[#0d0f1a] transition-all duration-300 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Live Chat with Consultant
            </button>
          </div>

          {/* Stats Bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto p-8 rounded-3xl bg-[rgba(255,255,255,0.05)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)]">
            <StatItem value="4.9/5" label="Client Rating" />
            <StatItem value="700+" label="Happy Clients" />
            <StatItem value="3200+" label="Projects Done" />
            <StatItem value="99%" label="Success Rate" />
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY SECTION ─────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#086ad8]/10 text-[#086ad8] text-sm font-semibold mb-4">
              Industries We Serve
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d0f1a]">
              Medical for <span className="text-[#086ad8]">Industries</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2 space-y-6">
              <div className="w-20 h-1 bg-gradient-to-r from-[#086ad8] to-[#d2a98e] rounded-full" />
              <h3 className="text-3xl font-bold text-[#0d0f1a] leading-tight">
                MakeMyLeads.com delivers advanced AI solutions for the healthcare sector, enhancing lead capture, patient inquiry handling, and{' '}
                <span className="text-[#086ad8]">secure medical data automation.</span>
              </h3>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <p className="text-[#696969] text-lg leading-relaxed">
                At MakeMyLeads.com, we transform medical lead generation through AI-powered strategies tailored for clinics, hospitals, pharma, and wellness providers. Our solutions ensure compliant, high-quality lead acquisition and engagement for the medical industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-full bg-[#086ad8] text-white font-semibold hover:bg-[#054fa0] transition-colors shadow-lg shadow-[#086ad8]/20">
                  Get a FREE no-obligation quote
                </button>
                <button className="px-6 py-3 rounded-full border-2 border-[#0d0f1a] text-[#0d0f1a] font-semibold hover:bg-[#0d0f1a] hover:text-white transition-all">
                  Live chat with a consultant
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURES GRID ────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f1a] via-[#072a83] to-[#086ad8]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[rgba(255,255,255,0.08)] text-[#d2a98e] text-sm font-semibold mb-4 border border-[rgba(255,255,255,0.08)]">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI-Enhanced Lead Generation for
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#d2a98e] to-[#ffffff] bg-clip-text text-transparent">
              Healthcare Professionals.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CHECKLIST SECTION ────────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#f5f4f0]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[#086ad8]/10 text-[#086ad8] text-sm font-semibold mb-4">
              Business IT Support Features
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0d0f1a]">
              Comprehensive <span className="text-[#086ad8]">Healthcare IT</span> Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {checklistItems.map((item, index) => (
              <CheckItem key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── RESOURCES / BROCHURE SECTION ─────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#086ad8] to-[#002fa6]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[rgba(255,255,255,0.03)] backdrop-blur-3xl" style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }} />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="w-20 h-1 bg-[#d2a98e] rounded-full" />
              <span className="text-[#d2a98e] font-semibold tracking-wider uppercase text-sm">Resources</span>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Get a copy of brochure on
                <br />
                <span className="text-[#d2a98e]">Brand New IT Tech.</span>
              </h2>
              <p className="text-[rgba(255,255,255,0.70)] text-lg max-w-lg">
                Discover how our cutting-edge AI technology is transforming healthcare lead generation. Download our comprehensive brochure today.
              </p>
              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#086ad8] font-bold text-lg hover:bg-[#d2a98e] hover:text-white transition-all duration-300 shadow-xl">
                <Download className="w-5 h-5" />
                Download now (3MB)
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d2a98e]/20 to-[#086ad8]/20 rounded-3xl blur-2xl transform rotate-3" />
              <div className="relative bg-[rgba(255,255,255,0.10)] backdrop-blur-xl rounded-3xl p-8 border border-[rgba(255,255,255,0.15)] shadow-2xl transform hover:rotate-1 transition-transform duration-500">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)] flex items-center justify-center border border-[rgba(255,255,255,0.10)]">
                  <div className="text-center">
                    <Cpu className="w-20 h-20 text-[rgba(255,255,255,0.30)] mx-auto mb-4" />
                    <span className="text-[rgba(255,255,255,0.50)] font-semibold">Healthcare AI Brochure</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-bold text-lg">2026 Healthcare AI Guide</h4>
                    <p className="text-[rgba(255,255,255,0.50)] text-sm">PDF • 3.2 MB • 24 pages</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#d2a98e] flex items-center justify-center">
                    <Download className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS SECTION ─────────────────────────────────── */}
      <section className="py-24 px-6 bg-[#0d0f1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#072a83]/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#086ad8]/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[#d2a98e] text-sm font-semibold mb-4 border border-[rgba(255,255,255,0.08)]">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              What makes people praise <span className="text-[#086ad8]">MakeMyLeads?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CLIENT LOGOS SECTION ─────────────────────────────────── */}
      <section className="py-16 px-6 bg-[#f5f4f0] border-y border-[rgba(0,0,0,0.07)]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-[#696969] font-medium uppercase tracking-widest text-sm">Trusted by Leading Healthcare Providers</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['MediCore', 'HealthFirst', 'CarePlus', 'VitaLink', 'MediTech', 'LifeCare'].map((name, i) => (
              <div key={i} className="flex items-center gap-2 text-2xl font-bold text-[#0d0f1a] hover:text-[#086ad8] transition-colors cursor-pointer">
                <Globe className="w-8 h-8" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT / CTA SECTION ────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0f1a] via-[#072a83] to-[#086ad8]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Contact Info */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-6 h-6 text-[#d2a98e] fill-[#d2a98e]" />
                  <Star className="w-6 h-6 text-[#d2a98e] fill-[#d2a98e]" />
                  <Star className="w-6 h-6 text-[#d2a98e] fill-[#d2a98e]" />
                  <Star className="w-6 h-6 text-[#d2a98e] fill-[#d2a98e]" />
                  <Star className="w-6 h-6 text-[#d2a98e] fill-[#d2a98e]" />
                </div>
                <h2 className="text-6xl md:text-7xl font-bold text-white mb-2">4.9/5.0</h2>
                <p className="text-[rgba(255,255,255,0.60)] text-lg">by 700+ customers for 3200+ clients</p>
              </div>

              <div className="space-y-6">
                <a href="tel:9950602330" className="group flex items-center gap-6 p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#086ad8] to-[#002fa6] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[rgba(255,255,255,0.50)] text-sm mb-1">Call for advice now!</p>
                    <p className="text-white text-xl font-bold group-hover:text-[#d2a98e] transition-colors">9950602330</p>
                  </div>
                </a>

                <a href="mailto:info@makemyleads.com" className="group flex items-center gap-6 p-6 rounded-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#d2a98e] to-[#c4967a] flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[rgba(255,255,255,0.50)] text-sm mb-1">Say hello</p>
                    <p className="text-white text-xl font-bold group-hover:text-[#d2a98e] transition-colors">info@makemyleads.com</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#086ad8]/20 to-[#d2a98e]/20 rounded-3xl blur-xl" />
              <div className="relative bg-[rgba(255,255,255,0.05)] backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-[rgba(255,255,255,0.10)] shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-2">Book appointment</h3>
                  <p className="text-[rgba(255,255,255,0.60)]">It's our pleasure to have a chance to cooperate.</p>
                </div>

                <form className="space-y-5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name *" 
                      className="w-full px-5 py-4 rounded-xl bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.10)] text-white placeholder-[rgba(255,255,255,0.40)] focus:outline-none focus:border-[#086ad8] focus:bg-[rgba(255,255,255,0.10)] transition-all"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email *" 
                      className="w-full px-5 py-4 rounded-xl bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.10)] text-white placeholder-[rgba(255,255,255,0.40)] focus:outline-none focus:border-[#086ad8] focus:bg-[rgba(255,255,255,0.10)] transition-all"
                    />
                  </div>
                  <div>
                    <select className="w-full px-5 py-4 rounded-xl bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.10)] text-[rgba(255,255,255,0.60)] focus:outline-none focus:border-[#086ad8] focus:bg-[rgba(255,255,255,0.10)] transition-all appearance-none cursor-pointer">
                      <option>Your inquiry about</option>
                      <option>General Information Request</option>
                      <option>Partner Relations</option>
                      <option>Careers</option>
                      <option>Software Licencing</option>
                    </select>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#086ad8] to-[#002fa6] text-white font-bold text-lg hover:from-[#054fa0] hover:to-[#002080] transition-all duration-300 shadow-lg shadow-[#086ad8]/25 hover:shadow-[#086ad8]/40"
                  >
                    Submit Request
                  </button>
                </form>

                <div className="mt-6 flex items-center gap-2 text-[rgba(255,255,255,0.40)] text-sm">
                  <Lock className="w-4 h-4" />
                  <span>Your information is secure and encrypted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ───────────────────────────────────────────────── */}
      <footer className="bg-[#0a0b14] py-12 px-6 border-t border-[rgba(255,255,255,0.05)]">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#086ad8] to-[#002fa6] flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-bold text-xl">MakeMyLeads</span>
            </div>
            <p className="text-[rgba(255,255,255,0.40)] text-sm">
              © 2026 MakeMyLeads.com. All rights reserved. Healthcare AI Solutions.
            </p>
            <div className="flex gap-6">
              {['Privacy', 'Terms', 'HIPAA Compliance'].map((item) => (
                <a key={item} href="#" className="text-[rgba(255,255,255,0.40)] hover:text-[#d2a98e] text-sm transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}