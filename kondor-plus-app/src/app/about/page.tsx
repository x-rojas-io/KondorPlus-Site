import { Metadata } from "next";
import Link from "next/link";
import { 
    Database, 
    CheckCircle, 
    Github, 
    Linkedin, 
    Mail, 
    Sparkles, 
    Cpu, 
    Code2, 
    Layers,
    ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
    title: "About Nestor Rojas",
    description: "Senior Data Platform Engineer, AI Systems Architect, and Founder of Kondor Plus Consulting.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-24 relative z-10">
            {/* Header / Intro */}
            <div className="section-title mb-16 relative">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                    Leadership & Engineering
                </div>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                    Nestor <span className="text-gradient">Rojas</span>
                </h1>
                <p className="text-xl md:text-2xl text-[#94A3B8] max-w-3xl mx-auto font-light leading-relaxed">
                    Senior Data Platform Engineer &amp; AI Systems Architect • Founder of Kondor Plus Consulting
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Main Profile Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                {/* Left Card: Bio & Core Mission */}
                <div className="lg:col-span-7 glass-panel p-8 md:p-10 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                                <Sparkles size={20} />
                            </div>
                            <h2 className="text-2xl font-bold text-white">The Engineering Philosophy</h2>
                        </div>
                        <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                            I am a Senior Software Engineer with over a decade of experience architecting data platforms, distributed data pipelines, and production web applications.
                        </p>
                        <p className="text-[#94A3B8] text-lg leading-relaxed mb-6">
                            At <strong className="text-white">Kondor Plus Consulting</strong>, I spearhead the <span className="text-[#38BDF8] font-semibold">&ldquo;Pipeline to Pixel&rdquo;</span> standard. I believe enterprise data should never be trapped in unreachable warehouses or held back by prohibitive infrastructure overhead. 
                        </p>
                        <p className="text-[#94A3B8] text-lg leading-relaxed">
                            For growing businesses and modern digital platforms (like <span className="text-white font-medium">Sothis Therapeutic</span> and <span className="text-white font-medium">Coselat</span>), we deploy lean, ultra-fast architectures powered by <strong className="text-white">Vercel</strong>, <strong className="text-white">Supabase (PostgreSQL &amp; pgvector)</strong>, and <strong className="text-white">Google Gemini AI</strong>—delivering high-leverage data intelligence with zero server maintenance.
                        </p>
                    </div>

                    {/* Social links */}
                    <div className="flex flex-wrap gap-4 pt-8 mt-8 border-t border-white/10">
                        <a
                            href="https://linkedin.com/in/x-rojas-io"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all text-sm font-medium"
                        >
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a
                            href="https://github.com/x-rojas-io"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all text-sm font-medium"
                        >
                            <Github size={18} /> GitHub
                        </a>
                        <a
                            href="mailto:nestor.rojas@live.com"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all text-sm font-medium"
                        >
                            <Mail size={18} /> Direct Email
                        </a>
                    </div>
                </div>

                {/* Right Card: Quick Highlights & Telemetry */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                    <div className="glass-panel p-8">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF]">
                                <Cpu size={20} />
                            </div>
                            <h3 className="text-xl font-bold text-white">Career Milestones</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-[#2DD4BF] flex-shrink-0 mt-1" />
                                <span className="text-[#94A3B8] text-sm leading-relaxed">
                                    <strong className="text-white">7M+ Duplicate Identities Resolved:</strong> Engineered high-volume deduplication and record linkage algorithms across a national pension database.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-[#2DD4BF] flex-shrink-0 mt-1" />
                                <span className="text-[#94A3B8] text-sm leading-relaxed">
                                    <strong className="text-white">AI-Native Platforms:</strong> Architected Gemini RAG pipelines and vector search workflows for automated document intelligence.
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-[#2DD4BF] flex-shrink-0 mt-1" />
                                <span className="text-[#94A3B8] text-sm leading-relaxed">
                                    <strong className="text-white">Enterprise Microservices:</strong> Built resilient ASP.NET Core &amp; Python data ingestion engines processing millions of daily transactions.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="glass-panel p-8 bg-gradient-to-br from-[#38BDF8]/10 via-[#0B1120] to-[#2DD4BF]/10 border border-[#38BDF8]/30">
                        <h3 className="text-xl font-bold text-white mb-2">Have a project in mind?</h3>
                        <p className="text-[#94A3B8] text-sm mb-6 leading-relaxed">
                            Let&apos;s evaluate your current data workflows, design an AI-powered system, or build your custom client application.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] text-[#0B1120] font-bold rounded-xl transition-all hover:shadow-[0_0_25px_-5px_#38BDF8] group"
                        >
                            Schedule Consultation <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Technical Toolbelt & Stack */}
            <div className="mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-white mb-3">Core Technical Ecosystems</h2>
                    <p className="text-[#94A3B8] max-w-xl mx-auto">Production-tested tools and frameworks used across client engagements.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Column 1: Agile Data & AI Stack */}
                    <div className="glass-panel p-8">
                        <div className="w-12 h-12 bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] rounded-xl flex items-center justify-center mb-6">
                            <Layers size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Agile Data &amp; AI Stack</h3>
                        <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
                            Lean, high-speed architectures engineered for growing platforms and rapid time-to-market.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Supabase", "PostgreSQL", "pgvector", "Google Gemini", "Next.js 16", "React 19", "Vercel", "Tailwind CSS"].map((tech) => (
                                <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#38BDF8] text-xs font-semibold rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Distributed Data & Orchestration */}
                    <div className="glass-panel p-8">
                        <div className="w-12 h-12 bg-[#2DD4BF]/10 border border-[#2DD4BF]/30 text-[#2DD4BF] rounded-xl flex items-center justify-center mb-6">
                            <Database size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Distributed Data &amp; ETL</h3>
                        <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
                            Industrial-scale pipelines, data governance, and automated warehouse modeling.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Apache Airflow", "dbt", "Apache Spark", "Databricks", "Kafka", "ADLS Gen2", "Azure Synapse", "ADF"].map((tech) => (
                                <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#2DD4BF] text-xs font-semibold rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Column 3: Backend, ML & Cloud */}
                    <div className="glass-panel p-8">
                        <div className="w-12 h-12 bg-[#818CF8]/10 border border-[#818CF8]/30 text-[#818CF8] rounded-xl flex items-center justify-center mb-6">
                            <Code2 size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Systems &amp; DevOps</h3>
                        <p className="text-sm text-[#94A3B8] mb-6 leading-relaxed">
                            Resilient backend microservices, containerization, and automated CI/CD pipelines.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {["Python", "FastAPI", "C#", ".NET Core", "Docker", "Kubernetes", "Terraform", "GitHub Actions"].map((tech) => (
                                <span key={tech} className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#818CF8] text-xs font-semibold rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
