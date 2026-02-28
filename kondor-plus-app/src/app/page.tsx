import Link from "next/link";
import { ArrowRight, Database, Terminal, BarChart, Server } from "lucide-react";

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
            Full-Stack Data & Product Studio
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            From Pipeline <br className="hidden md:block" /> to <span className="text-gradient">Pixel</span>
          </h1>
          <p className="text-lg md:text-2xl text-[#94A3B8] mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            We don&apos;t just manage the pipes. We build the infrastructure and the custom web interfaces through which clients see their business.
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
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 relative overflow-hidden">
        {/* Subtle glow effect behind cards */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#38BDF8]/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

        <div className="container mx-auto px-4">
          <div className="section-title mb-12">
            <h2>Our Expertise</h2>
            <p className="text-xl">Architecting the future of enterprise data and custom products.</p>
          </div>

          {/* Pipeline Image Feature */}
          <div className="w-full mb-16 relative rounded-2xl overflow-hidden glass-panel border border-white/10 shadow-[0_0_30px_rgba(56,189,248,0.15)] group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent z-10"></div>
            <img
              src="/images/kondor-data-pipeline.jpg"
              alt="End to End Data Pipeline architecture flowing into Web Applications"
              className="w-full h-auto object-cover opacity-80 mix-blend-screen group-hover:opacity-100 transition-opacity duration-500"
            />
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
              <div className="inline-block px-4 py-1.5 mb-3 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
                The Kondor Plus Approach
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white shadow-black drop-shadow-lg">From Pipeline to Pixel</h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel p-8 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#38BDF8] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#38BDF8]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(56,189,248,0.2)]">
                <Database size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38BDF8] transition-colors">Azure Data Engineering</h3>
              <p className="text-[#94A3B8] leading-relaxed">Architecting scalable lakes and warehouses using ADF, Synapse Analytics, and Data Lake Gen2.</p>
            </div>

            <div className="glass-panel p-8 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#2DD4BF] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#2DD4BF]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(45,212,191,0.2)]">
                <Terminal size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#2DD4BF] transition-colors">AI/ML Infrastructure</h3>
              <p className="text-[#94A3B8] leading-relaxed">Building intelligent AI applications using Python, LangChain, and advanced vector search capabilities.</p>
            </div>

            <div className="glass-panel p-8 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 text-[#818CF8] rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#818CF8]/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(129,140,248,0.2)]">
                <BarChart size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#818CF8] transition-colors">Modern Data Analytics</h3>
              <p className="text-[#94A3B8] leading-relaxed">Processing massive datasets with Azure Databricks and visualizing complex insights through Power BI.</p>
            </div>

            <div className="glass-panel p-8 group">
              <div className="w-14 h-14 bg-white/5 border border-white/10 text-white rounded-xl flex items-center justify-center mb-8 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300 shadow-[0_0_15px_-3px_rgba(255,255,255,0.2)]">
                <Server size={28} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors">Bespoke Web Applications</h3>
              <p className="text-[#94A3B8] leading-relaxed">Developing robust, highly scalable enterprise applications integrating your data using Next.js, React, and .NET.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
