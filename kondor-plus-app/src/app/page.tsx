import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Database, 
  Bot, 
  BarChart3, 
  TrendingUp, 
  Sparkles, 
  Globe 
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden -mt-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/videos/landing_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Cyber-Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#0B1120]/85 -z-10 backdrop-blur-[2px]"></div>

        <div className="container relative z-10 px-4 mt-20 fade-in visible">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
            Data Systems &amp; AI Studio for Growing Businesses
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Systems Built Around <br className="hidden md:block" /> Your <span className="text-gradient">Data.</span>
          </h1>
          <p className="text-lg md:text-2xl text-[#94A3B8] mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            We close the gap between expensive enterprise technology and growing businesses. By engineering custom platforms around your data, we uncover customer insights, automate workflows, and turn your business goals into measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
            <Link
              href="/projects"
              className="px-8 py-4 rounded-xl bg-[#38BDF8] text-[#0B1120] font-bold hover:bg-[#0EA5E9] hover:shadow-[0_0_30px_-5px_#38BDF8] transition-all duration-300 flex items-center gap-2 group"
            >
              Explore Our Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative overflow-hidden">
        {/* Subtle glow effect behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#38BDF8]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="section-title mb-16">
            <h2>What We Do</h2>
            <p className="text-xl">Engineering bespoke data foundations, applied AI intelligence, and high-impact web platforms.</p>
          </div>

          {/* Pipeline Image Feature */}
          <div className="w-full mb-16 relative rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_30px_rgba(56,189,248,0.15)] group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10"></div>
            <Image
              src="/images/kondor-data-pipeline.jpg"
              alt="End to End Data Pipeline architecture flowing into Web Applications"
              width={1200}
              height={600}
              unoptimized
              className="w-full h-auto object-cover opacity-80 mix-blend-screen group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
              <div className="inline-block px-4 py-1.5 mb-3 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                The Kondor Plus Approach
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white shadow-black drop-shadow-lg">From Fragmented Data to Realtime Intelligence</h3>
            </div>
          </div>

          {/* 6-Pillar Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1: Data Migration & Centralization */}
            <div className="glass-panel p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#38BDF8] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#38BDF8]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(56,189,248,0.2)]">
                  <Database size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">Data Migration &amp; Centralization</h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm">
                  We extract data trapped in chaotic spreadsheets (Excel, Google Sheets), siloed apps (Stripe, QuickBooks, POS), and PDF archives, migrating them into a clean, unified, and secure PostgreSQL (Supabase) data hub.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#38BDF8] uppercase tracking-wider">
                Zero Infrastructure Chaos
              </div>
            </div>

            {/* Pillar 2: AI Process Automation */}
            <div className="glass-panel p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#2DD4BF] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#2DD4BF]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(45,212,191,0.2)]">
                  <Bot size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#2DD4BF] transition-colors">AI Process Automation</h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm">
                  We review your operations to identify friction points, deploying tailored Google Gemini agents to automate repetitive back-office tasks, document parsing, invoice extraction, and client communications.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#2DD4BF] uppercase tracking-wider">
                Eliminate Manual Bottlenecks
              </div>
            </div>

            {/* Pillar 3: Actionable Realtime Analytics */}
            <div className="glass-panel p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#818CF8] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#818CF8]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(129,140,248,0.2)]">
                  <BarChart3 size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#818CF8] transition-colors">Actionable Realtime Analytics</h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm">
                  We build custom analytics dashboards directly into your web applications, giving you live telemetry on sales velocity, customer churn, acquisition costs, and inventory without recurring BI seat licenses.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#818CF8] uppercase tracking-wider">
                Live Business Telemetry
              </div>
            </div>

            {/* Pillar 4: Predictive ML & Decision Logic */}
            <div className="glass-panel p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#F59E0B] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#F59E0B]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(245,158,11,0.2)]">
                  <TrendingUp size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F59E0B] transition-colors">Predictive ML &amp; Decision Pipelines</h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm">
                  We engineer inference-ready machine learning pipelines to discover hidden patterns, forecast inventory demand, predict customer retention, and score high-intent leads for decisive strategic action.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#F59E0B] uppercase tracking-wider">
                Anticipate Critical Decisions
              </div>
            </div>

            {/* Pillar 5: Customer-Facing RAG Systems */}
            <div className="glass-panel p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#EC4899] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#EC4899]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(236,72,153,0.2)]">
                  <Sparkles size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#EC4899] transition-colors">On-Demand RAG Knowledge Engines</h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm">
                  We create Retrieval-Augmented Generation (RAG) systems using vector search (`pgvector`) and Gemini, giving your clients and staff 24/7 instant answers grounded exclusively in your verified knowledge base.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-[#EC4899] uppercase tracking-wider">
                Hallucination-Free Intelligence
              </div>
            </div>

            {/* Pillar 6: Bespoke Mission Web Portals */}
            <div className="glass-panel p-8 group flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(255,255,255,0.2)]">
                  <Globe size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">Bespoke Mission Web Portals</h3>
                <p className="text-[#94A3B8] leading-relaxed text-sm">
                  We build custom, high-speed web portals and membership platforms (like Sothis, Coselat, and Nouriva) using Next.js 16 and Vercel—seamlessly connecting your brand vision directly with your data.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 text-xs font-semibold text-white/80 uppercase tracking-wider">
                From Pipeline to Pixel
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
