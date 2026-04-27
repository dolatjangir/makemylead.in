"use client";

import { useState } from "react";
import {
  Brain,
  Workflow,
  Bot,
  BarChart3,
  ShieldCheck,
  Zap,
  ArrowRight,
  MessageCircle,
  Quote,
  Sparkles,
  Users,
  TrendingUp,
  GraduationCap,
  ChevronRight,
  Star,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Send,
  Rocket,
  Target,
  Award
} from "lucide-react";

const stats = [
  { value: "10K+", label: "Students Enrolled", icon: Users },
  { value: "98%", label: "Lead Conversion", icon: TrendingUp },
  { value: "24/7", label: "AI Support", icon: Bot },
  { value: "150+", label: "Partner Institutions", icon: GraduationCap },
];

const services = [
  {
    icon: Brain,
    title: "Intelligent Lead Capture",
    desc: "AI-powered forms and chat interfaces that qualify prospects in real-time, ensuring only high-intent inquiries reach your admissions team.",
    color: "blue",
  },
  {
    icon: Workflow,
    title: "Smart Counselor Routing",
    desc: "Machine learning algorithms automatically distribute leads to the most suitable counselor based on course interest, location, and language preference.",
    color: "warm",
  },
  {
    icon: Zap,
    title: "Enrollment Automation",
    desc: "End-to-end pipeline automation from first inquiry to final admission, with smart reminders and personalized follow-ups at every stage.",
    color: "blue",
  },
  {
    icon: Bot,
    title: "Conversational AI",
    desc: "Deploy intelligent chatbots across WhatsApp, web, and social platforms to engage prospects instantly, 24/7, in multiple languages.",
    color: "warm",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    desc: "Advanced dashboards and forecasting models that identify enrollment trends, optimize marketing spend, and predict student behavior.",
    color: "blue",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Security",
    desc: "Enterprise-grade data protection with GDPR compliance, encrypted lead storage, and automated consent management for student data.",
    color: "warm",
  },
];

const features = [
  {
    title: "Neural Lead Scoring",
    desc: "AI evaluates and ranks every inquiry based on 50+ behavioral signals to prioritize your hottest prospects.",
  },
  {
    title: "Omnichannel Engagement",
    desc: "Unified inbox for WhatsApp, email, SMS, and social media — never miss a student query again.",
  },
  {
    title: "Dynamic Landing Pages",
    desc: "Auto-generate personalized course pages that adapt content based on visitor demographics and interests.",
  },
  {
    title: "Video Interview Scheduling",
    desc: "Integrated calendar and video conferencing for seamless counselor-student consultations.",
  },
  {
    title: "Document Intelligence",
    desc: "AI extracts and verifies student documents automatically, reducing manual processing by 90%.",
  },
  {
    title: "Scholarship Matching",
    desc: "Smart algorithm matches eligible students with relevant financial aid opportunities instantly.",
  },
];

const testimonials = [
  {
    quote: "MakeMyLeads transformed our admission process. We saw a 340% increase in qualified inquiries within the first quarter. The AI routing alone saved our team 20+ hours per week.",
    author: "Dr. Arjun Kumar",
    role: "Director of Admissions",
    institution: "Global Institute of Technology",
    rating: 5,
  },
  {
    quote: "The predictive analytics dashboard is a game-changer. We can now forecast enrollment numbers with 95% accuracy and optimize our marketing budget in real-time.",
    author: "Priya Sharma",
    role: "VP of Enrollment",
    institution: "Excellence University",
    rating: 5,
  },
  {
    quote: "Their WhatsApp chatbot handles 80% of our initial queries automatically. Students love the instant responses, and our counselors focus only on serious applicants.",
    author: "Rajesh Menon",
    role: "Head of Digital Strategy",
    institution: "Premier Business School",
    rating: 5,
  },
];

const faqs = [
  {
    q: "How quickly can we integrate MakeMyLeads with our existing CRM?",
    a: "Our API-first architecture enables seamless integration with popular CRMs like Salesforce, HubSpot, and Zoho within 48 hours. We also offer custom integrations for legacy systems.",
  },
  {
    q: "Is the AI chatbot customizable for our institution's brand voice?",
    a: "Absolutely. Our conversational AI is fully trainable on your institution's specific courses, admission criteria, and brand guidelines. You can customize tone, language, and response flows.",
  },
  {
    q: "What kind of ROI can we expect?",
    a: "Institutions typically see a 3-5x return on investment within the first 6 months through increased enrollments, reduced manual work, and optimized marketing spend.",
  },
];

export default function EducationPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    inquiryType: "General Inquiry",
    message: "",
  });

  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Our team will contact you shortly.");
  };

  return (
    <main className="bg-[#f5f4f0] text-[#1a1a2e] overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION — DARK THEME (UNCHANGED)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 overflow-hidden bg-[#0d0f1a]">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/066/608/240/large_2x/abstract-dark-blue-technology-background-with-glowing-hexagonal-structures-and-connectivity-futuristic-network-design-free-photo.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0d0f1a]/80 via-[#072a83]/60 to-[#0d0f1a]" />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#086ad8]/20 rounded-full blur-[100px] animate-pulse z-[2]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d2a98e]/10 rounded-full blur-[120px] animate-pulse z-[2]" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <Sparkles className="w-4 h-4 text-[#d2a98e]" />
            <span className="text-sm text-white/80">Trusted by 150+ Educational Institutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent">Transform</span>
            <br />
            <span className="text-white">Student Enrollment</span>
            <br />
            <span className="text-[#d2a98e]">With AI Intelligence</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            The next-generation lead generation platform built exclusively for educational institutions. 
            Capture, nurture, and convert prospects with precision AI.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-8 py-4 bg-[#086ad8] hover:bg-[#054fa0] text-white rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#086ad8]/25">
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-2 border border-white/20">
              <MessageCircle className="w-5 h-5" />
              Talk to an Expert
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <stat.icon className="w-6 h-6 text-[#086ad8] mb-3 mx-auto group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          ABOUT SECTION — LIGHT THEME
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#086ad8]/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#086ad8]/10 to-[#d2a98e]/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 border border-[#e5e5e5] shadow-xl shadow-black/5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-[#f5f4f0] p-4 rounded-xl border border-[#e5e5e5]">
                      <Brain className="w-8 h-8 text-[#086ad8] mb-2" />
                      <div className="text-2xl font-bold text-[#1a1a2e]">AI-Powered</div>
                      <div className="text-sm text-[#696969]">Smart Qualification</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#d2a98e]/10 to-transparent p-4 rounded-xl border border-[#e5e5e5]">
                      <TrendingUp className="w-8 h-8 text-[#d2a98e] mb-2" />
                      <div className="text-2xl font-bold text-[#1a1a2e]">340%</div>
                      <div className="text-sm text-[#696969]">Avg. ROI Increase</div>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-gradient-to-br from-[#086ad8]/10 to-transparent p-4 rounded-xl border border-[#e5e5e5]">
                      <Users className="w-8 h-8 text-[#086ad8] mb-2" />
                      <div className="text-2xl font-bold text-[#1a1a2e]">50K+</div>
                      <div className="text-sm text-[#696969]">Leads Processed</div>
                    </div>
                    <div className="bg-[#f5f4f0] p-4 rounded-xl border border-[#e5e5e5]">
                      <ShieldCheck className="w-8 h-8 text-[#d2a98e] mb-2" />
                      <div className="text-2xl font-bold text-[#1a1a2e]">99.9%</div>
                      <div className="text-sm text-[#696969]">Uptime SLA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#086ad8]/10 border border-[#086ad8]/20 text-[#086ad8] text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#0d0f1a]">
                Built for Modern
                <span className="text-[#d2a98e]"> Educational </span>
                Institutions
              </h2>
              <p className="text-[#696969] text-lg leading-relaxed mb-8">
                We understand the unique challenges of educational marketing. Our platform combines 
                cutting-edge AI with deep industry expertise to deliver qualified student leads that 
                actually enroll. No more wasted ad spend on unqualified inquiries.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time lead qualification using behavioral AI",
                  "Automated multi-channel nurture sequences",
                  "Deep analytics for every touchpoint"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#086ad8] flex-shrink-0" />
                    <span className="text-[#1a1a2e]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SERVICES SECTION — LIGHT THEME
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative bg-white">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#d2a98e]/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d2a98e]/10 border border-[#d2a98e]/20 text-[#c4967a] text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d0f1a]">
              Everything You Need to
              <span className="bg-gradient-to-r from-[#086ad8] to-[#002fa6] bg-clip-text text-transparent"> Scale Enrollment</span>
            </h2>
            <p className="text-[#696969] text-lg">
              A complete suite of AI-powered tools designed specifically for the education sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-8 border border-[#e5e5e5] hover:border-[#086ad8]/30 hover:shadow-xl hover:shadow-[#086ad8]/5 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border ${service.color === 'blue' ? 'bg-[#086ad8]/10 border-[#086ad8]/20' : 'bg-[#d2a98e]/10 border-[#d2a98e]/20'}`}>
                    <service.icon className={`w-7 h-7 ${service.color === 'blue' ? 'text-[#086ad8]' : 'text-[#c4967a]'}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#0d0f1a] group-hover:text-[#086ad8] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#696969] leading-relaxed text-sm">
                    {service.desc}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-[#086ad8] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FEATURES SECTION — LIGHT THEME
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#086ad8]/10 border border-[#086ad8]/20 text-[#086ad8] text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Platform Features
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#0d0f1a]">
                Advanced Intelligence for
                <span className="text-[#086ad8]"> Maximum Impact</span>
              </h2>
              <p className="text-[#696969] text-lg mb-10">
                Every feature is engineered to reduce manual work and increase conversion rates through intelligent automation.
              </p>

              <div className="space-y-6">
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer border border-transparent hover:border-[#e5e5e5] hover:shadow-lg"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#086ad8]/10 flex items-center justify-center flex-shrink-0 border border-[#086ad8]/20 group-hover:bg-[#086ad8] group-hover:border-[#086ad8] transition-colors">
                      <span className="text-[#086ad8] font-bold text-sm group-hover:text-white transition-colors">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1 text-[#0d0f1a] group-hover:text-[#086ad8] transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-[#696969] text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#086ad8]/5 to-[#d2a98e]/5 rounded-3xl blur-2xl" />
              <div className="relative bg-white rounded-3xl p-8 border border-[#e5e5e5] shadow-xl shadow-black/5 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#086ad8]/10 rounded-full blur-[60px]" />
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-sm font-semibold text-[#0d0f1a]">Live Lead Pipeline</div>
                    <div className="px-2 py-1 rounded bg-green-500/10 text-green-600 text-xs font-medium">Live</div>
                  </div>
                  
                  {[
                    { name: "Rahul Verma", course: "MBA Program", score: 95, status: "Hot Lead" },
                    { name: "Ananya Patel", course: "Data Science", score: 88, status: "Warm" },
                    { name: "Karan Singh", course: "Engineering", score: 72, status: "Nurture" },
                    { name: "Meera Joshi", course: "Design", score: 91, status: "Hot Lead" },
                  ].map((lead, i) => (
                    <div key={i} className="bg-[#f5f4f0] p-4 rounded-xl border border-[#e5e5e5] flex items-center justify-between group hover:border-[#086ad8]/30 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#086ad8]/20 to-[#002fa6]/20 flex items-center justify-center text-sm font-bold text-[#086ad8]">
                          {lead.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-sm text-[#0d0f1a]">{lead.name}</div>
                          <div className="text-xs text-[#696969]">{lead.course}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-[#d2a98e] font-bold text-sm">{lead.score}%</div>
                        <div className="text-xs text-[#696969]">{lead.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS — LIGHT THEME
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative bg-white">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#086ad8]/5 rounded-full blur-[150px]" />
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d2a98e]/10 border border-[#d2a98e]/20 text-[#c4967a] text-sm font-medium mb-6">
              <Quote className="w-4 h-4" />
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d0f1a]">
              Trusted by Education
              <span className="bg-gradient-to-r from-[#086ad8] to-[#002fa6] bg-clip-text text-transparent"> Leaders Worldwide</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-8 border border-[#e5e5e5] hover:border-[#086ad8]/20 hover:shadow-xl hover:shadow-[#086ad8]/5 transition-all duration-500"
              >
                <div className="absolute top-4 right-4 text-[#086ad8]/10 group-hover:text-[#086ad8]/20 transition-colors">
                  <Quote className="w-10 h-10" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#d2a98e] text-[#d2a98e]" />
                  ))}
                </div>

                <p className="text-[#696969] leading-relaxed mb-6 text-sm">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-[#e5e5e5]">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#086ad8]/20 to-[#d2a98e]/20 flex items-center justify-center font-bold text-lg text-[#086ad8]">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-[#0d0f1a]">{testimonial.author}</div>
                    <div className="text-sm text-[#696969]">{testimonial.role}</div>
                    <div className="text-xs text-[#086ad8]">{testimonial.institution}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FAQ SECTION — LIGHT THEME
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-[#0d0f1a]">
              Frequently Asked <span className="text-[#086ad8]">Questions</span>
            </h2>
            <p className="text-[#696969]">Everything you need to know about our platform.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-[#e5e5e5] overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f5f4f0] transition-colors"
                >
                  <span className="font-semibold text-lg pr-4 text-[#0d0f1a]">{faq.q}</span>
                  <ChevronRight 
                    className={`w-5 h-5 text-[#086ad8] flex-shrink-0 transition-transform duration-300 ${activeFaq === i ? 'rotate-90' : ''}`} 
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="px-6 pb-6 text-[#696969] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA SECTION — UNIQUE DESIGN (Terracotta/Warm Theme)
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 relative overflow-hidden bg-[#1a1f36]">
        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#d2a98e]/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#086ad8]/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#d2a98e]/5 rounded-full blur-[120px]" />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(#d2a98e 1px, transparent 1px), linear-gradient(90deg, #d2a98e 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d2a98e]/20 border border-[#d2a98e]/30 text-[#d2a98e] text-sm font-medium mb-6">
                <Rocket className="w-4 h-4" />
                Limited Time Offer
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                Start Your Journey to
                <span className="text-[#d2a98e]"> 10x Enrollment </span>
                Growth
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Join institutions that have replaced manual processes with intelligent automation. 
                Get your first 500 AI-qualified leads free when you sign up this month.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#d2a98e]/20 flex items-center justify-center border border-[#d2a98e]/30">
                    <Target className="w-6 h-6 text-[#d2a98e]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">500 Free Leads</div>
                    <div className="text-white/50 text-sm">No credit card required</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#086ad8]/20 flex items-center justify-center border border-[#086ad8]/30">
                    <Award className="w-6 h-6 text-[#086ad8]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Free Setup</div>
                    <div className="text-white/50 text-sm">Worth $2,500</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="group px-8 py-4 bg-[#d2a98e] hover:bg-[#c4967a] text-[#1a1f36] rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg shadow-[#d2a98e]/25 flex items-center gap-2">
                  Claim Your Free Leads
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white rounded-2xl font-semibold text-lg transition-all duration-300 border border-white/20">
                  View Pricing Plans
                </button>
              </div>

              <p className="text-white/40 text-sm mt-4">
                * Offer valid for educational institutions only. Setup includes CRM integration and staff training.
              </p>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#d2a98e]/20 to-[#086ad8]/10 rounded-3xl blur-2xl" />
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-white font-semibold">Enrollment Growth</div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">+340%</div>
                  </div>
                  
                  {/* Chart Bars */}
                  <div className="flex items-end gap-3 h-48">
                    {[40, 55, 45, 70, 85, 60, 90, 75, 95, 100].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className={`w-full rounded-t-lg transition-all duration-1000 ${i >= 7 ? 'bg-[#d2a98e]' : 'bg-white/20'}`}
                          style={{ height: `${height}%` }}
                        />
                        <span className="text-xs text-white/40">{['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O'][i]}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/60">Before MakeMyLeads</span>
                      <span className="text-white/60">After MakeMyLeads</span>
                    </div>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="h-2 flex-1 bg-white/20 rounded-full" />
                      <div className="h-2 flex-[2] bg-[#d2a98e] rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CONTACT SECTION — LIGHT THEME
          ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#086ad8]/10 border border-[#086ad8]/20 text-[#086ad8] text-sm font-medium mb-6">
                <Send className="w-4 h-4" />
                Get In Touch
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#0d0f1a]">
                Let's Discuss Your
                <span className="text-[#d2a98e]"> Growth Plan</span>
              </h2>
              <p className="text-[#696969] text-lg mb-10 leading-relaxed">
                Our education specialists are ready to analyze your current funnel and show you exactly how MakeMyLeads can 10x your qualified inquiries.
              </p>

              <div className="space-y-6">
                {[
                  { icon: Phone, label: "Call Us", value: "+91 98765 43210" },
                  { icon: Mail, label: "Email", value: "hello@makemyleads.com" },
                  { icon: MapPin, label: "Office", value: "Bangalore, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-[#f5f4f0] rounded-xl border border-[#e5e5e5]">
                    <div className="w-12 h-12 rounded-xl bg-[#086ad8]/10 flex items-center justify-center border border-[#086ad8]/20">
                      <item.icon className="w-5 h-5 text-[#086ad8]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#696969]">{item.label}</div>
                      <div className="font-semibold text-[#0d0f1a]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#086ad8]/5 to-[#d2a98e]/5 rounded-3xl blur-2xl" />
              <form 
                onSubmit={handleSubmit}
                className="relative bg-white rounded-3xl p-8 border border-[#e5e5e5] shadow-xl shadow-black/5 space-y-5"
              >
                <h3 className="text-2xl font-bold mb-6 text-center text-[#0d0f1a]">Book a Free Consultation</h3>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-[#696969] ml-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-[#f5f4f0] border border-[#e5e5e5] focus:border-[#086ad8] focus:outline-none focus:ring-2 focus:ring-[#086ad8]/20 transition-all text-[#1a1a2e] placeholder:text-[#696969]/50"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#696969] ml-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@institution.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-[#f5f4f0] border border-[#e5e5e5] focus:border-[#086ad8] focus:outline-none focus:ring-2 focus:ring-[#086ad8]/20 transition-all text-[#1a1a2e] placeholder:text-[#696969]/50"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm text-[#696969] ml-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-[#f5f4f0] border border-[#e5e5e5] focus:border-[#086ad8] focus:outline-none focus:ring-2 focus:ring-[#086ad8]/20 transition-all text-[#1a1a2e] placeholder:text-[#696969]/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-[#696969] ml-1">Institution Name</label>
                    <input
                      type="text"
                      placeholder="Your University"
                      value={formData.institution}
                      onChange={(e) => setFormData({...formData, institution: e.target.value})}
                      className="w-full p-3.5 rounded-xl bg-[#f5f4f0] border border-[#e5e5e5] focus:border-[#086ad8] focus:outline-none focus:ring-2 focus:ring-[#086ad8]/20 transition-all text-[#1a1a2e] placeholder:text-[#696969]/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#696969] ml-1">Inquiry Type</label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-[#f5f4f0] border border-[#e5e5e5] focus:border-[#086ad8] focus:outline-none focus:ring-2 focus:ring-[#086ad8]/20 transition-all text-[#1a1a2e] appearance-none cursor-pointer"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Demo Request">Schedule a Demo</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Enterprise">Enterprise Solution</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-[#696969] ml-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current enrollment challenges..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full p-3.5 rounded-xl bg-[#f5f4f0] border border-[#e5e5e5] focus:border-[#086ad8] focus:outline-none focus:ring-2 focus:ring-[#086ad8]/20 transition-all text-[#1a1a2e] placeholder:text-[#696969]/50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#086ad8] to-[#002fa6] hover:from-[#054fa0] hover:to-[#002fa6] text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg shadow-[#086ad8]/25 flex items-center justify-center gap-2 group"
                >
                  Submit Request
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-[#696969] mt-4">
                  We respect your privacy. Your data is encrypted and never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FOOTER — LIGHT THEME
          ═══════════════════════════════════════════════════════════════ */}
      <footer className="border-t border-[#e5e5e5] py-12 px-6 bg-[#f5f4f0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#086ad8] to-[#002fa6] flex items-center justify-center font-bold text-sm text-white">
              M
            </div>
            <span className="font-bold text-xl text-[#0d0f1a]">MakeMyLeads</span>
          </div>
          <div className="text-[#696969] text-sm">
            © 2026 MakeMyLeads. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Security"].map((item) => (
              <a key={item} href="#" className="text-sm text-[#696969] hover:text-[#086ad8] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}