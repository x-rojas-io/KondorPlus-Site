import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Work",
    description: "Explore our case studies spanning Data Engineering, AI Solutions, internal .NET platforms, and commercial web applications.",
};

const projects = [
    {
        title: "Sothis Therapeutic",
        description: "A comprehensive web application for therapeutic services and client management.",
        image: "/images/react.jpg", // Using a placeholder since we don't have the real image yet
        link: "https://sothistherapeutic.com",
        tags: ["Web App", "Client Management"],
        isExternal: true,
    },
    {
        title: "Nouriva Club",
        description: "A wellness and lifestyle platform tailored for member engagement and seamless user experience.",
        image: "/images/react.jpg",
        link: "https://nouriva.club",
        tags: ["Web App", "Wellness Platform"],
        isExternal: true,
    },
    {
        title: "RAG Q&A System",
        description: "Building a Q&A System for YouTube Videos with Python, LangChain, and GPT-3.5.",
        image: "/images/rag_sys.jpg",
        link: "https://github.com/nestorojas/rag-system",
        tags: ["Python", "LLMs", "RAG"],
        isExternal: true,
    },
    {
        title: "Enterprise .NET Core Platforms",
        description: "Scalable backend systems and microservices built with ASP.NET Core for enterprise clients under NDA.",
        image: "/images/di.jpg",
        link: "#",
        tags: ["C#", ".NET Core", "Architecture"],
        isExternal: false,
    },
    {
        title: "ReactJS Interactive Web Apps",
        description: "Mastering the art of building dynamic and interactive web applications.",
        image: "/images/react.jpg",
        link: "https://github.com/nestorojas/React_Labs",
        tags: ["React", "JavaScript", "Frontend"],
        isExternal: true,
    }
];

export default function Projects() {
    return (
        <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="section-title mb-16 relative">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                    Case Studies
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Work</h1>
                <p className="text-xl text-[#94A3B8] max-w-2xl mx-auto">
                    Explore our case studies spanning Data Engineering, AI Solutions, internal .NET platforms, and commercial web applications.
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
