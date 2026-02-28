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

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[#2c3e50]/80 -z-10"></div>

        <div className="container relative z-10 px-4 mt-20 fade-in visible">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Data Engineering & <br className="hidden md:block" /> AI Solutions
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            We help businesses scale with robust data pipelines, analytics, and intelligent RAG applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full bg-[#3498db] text-white font-medium hover:bg-[#2980b9] transition-colors flex items-center gap-2"
            >
              Explore Our Work <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-transparent border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Expertise</h2>
            <p>Specialized in Microsoft Azure Technologies and modern AI paradigms.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Database size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50] mb-3">Azure Data Engineering</h3>
              <p className="text-gray-600">Architecting scalable lakes and warehouses using ADF, Synapse Analytics, and Data Lake Gen2.</p>
            </div>

            <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <BarChart size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50] mb-3">Big Data & Analytics</h3>
              <p className="text-gray-600">Processing massive datasets with Azure Databricks and visualizing insights through Power BI.</p>
            </div>

            <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Terminal size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50] mb-3">RAG Applications</h3>
              <p className="text-gray-600">Building intelligent AI applications using Python, LangChain, and advanced vector search.</p>
            </div>

            <div className="p-6 bg-[#f8f9fa] rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Server size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#2c3e50] mb-3">.NET Web Apps</h3>
              <p className="text-gray-600">Developing robust, fully-managed, and highly scalable enterprise applications using .NET Core.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
