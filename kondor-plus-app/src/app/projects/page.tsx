import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Work",
    description: "Explore our case studies spanning modern data platforms, Gemini AI integrations, and bespoke client web applications.",
};

const projects = [
    {
        title: "Sothis Therapeutic",
        description: "A high-performance therapeutic platform with secure client management, appointment scheduling, and real-time workflows powered by Supabase and Next.js on Vercel.",
        image: "/images/react.jpg",
        link: "https://sothistherapeutic.com",
        tags: ["Next.js", "Supabase", "Vercel", "Client Portal"],
        isExternal: true,
    },
    {
        title: "Coselat Platform",
        description: "Modern data-driven operational platform streamlining service delivery, member onboarding, and automated client workflows on lean cloud infrastructure.",
        image: "/images/kondor-data-pipeline.jpg",
        link: "#",
        tags: ["Next.js", "Supabase", "Gemini AI", "Operations"],
        isExternal: false,
    },
    {
        title: "Nouriva Club",
        description: "A wellness and lifestyle platform tailored for member engagement, real-time community interaction, and seamless cross-device performance.",
        image: "/images/yellowrubik.jpg",
        link: "https://nouriva.club",
        tags: ["Next.js", "Vercel", "Community Hub"],
        isExternal: true,
    },
    {
        title: "Gemini Knowledge & RAG Assistant",
        description: "Intelligent question-answering and document semantic search engine powered by Google Gemini, Python, and pgvector embeddings.",
        image: "/images/rag_sys.jpg",
        link: "https://github.com/nestorojas/rag-system",
        tags: ["Google Gemini", "pgvector", "RAG", "AI Automation"],
        isExternal: true,
    },
    {
        title: "Enterprise .NET Core Platforms",
        description: "Scalable backend systems, high-throughput microservices, and cloud integration pipelines built for enterprise clients under NDA.",
        image: "/images/di.jpg",
        link: "#",
        tags: ["C#", ".NET Core", "Cloud Architecture"],
        isExternal: false,
    },
    {
        title: "Interactive UI & Component Labs",
        description: "A laboratory of reusable, dynamic UI architectures, real-time state management, and bespoke dashboard widgets.",
        image: "/images/react.jpg",
        link: "https://github.com/nestorojas/React_Labs",
        tags: ["React 19", "TypeScript", "Tailwind CSS"],
        isExternal: true,
    }
];

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="section-title mb-16 relative">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                    Case Studies & Platforms
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Work</h1>
                <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
                    Explore our deployed platforms spanning modern data hubs, Gemini-powered AI workflows, and bespoke web applications.
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="glass-panel flex flex-col group overflow-hidden">
                        <div className="relative h-48 w-full border-b border-white/10 overflow-hidden">
                            <div className="absolute inset-0 bg-[#38BDF8]/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                unoptimized
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/10 text-[#38BDF8] text-xs font-semibold rounded-md flex-shrink-0">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">{project.title}</h3>
                            <p className="text-[#94A3B8] flex-grow mb-6 leading-relaxed">{project.description}</p>

                            {project.link !== "#" && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center justify-center w-full py-3 px-4 bg-white/5 hover:bg-[#38BDF8] text-white font-medium rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent hover:shadow-[0_0_20px_-5px_#38BDF8] group/btn"
                                >
                                    {project.isExternal ? (
                                        <>Visit Deployment <ExternalLink size={18} className="ml-2 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" /></>
                                    ) : (
                                        <>View Repository <Github size={18} className="ml-2" /></>
                                    )}
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
