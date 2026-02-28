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
        <div className="container mx-auto px-4 py-16">
            <div className="section-title mb-16 relative">
                <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4">Our Work</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explore our case studies spanning Data Engineering, AI Solutions, internal .NET platforms, and commercial web applications.
                </p>
                <div className="w-24 h-1 bg-[#3498db] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-2 transition-transform duration-300">
                        <div className="relative h-48 w-full">
                            {/* Note: since unoptimized is used, ensure these images exist in /public/images */}
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2.5 py-1 bg-[#e0f2fe] text-[#2980b9] text-xs font-semibold rounded-md flex-shrink-0">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-[#2c3e50] mb-3">{project.title}</h3>
                            <p className="text-gray-600 flex-grow mb-6">{project.description}</p>

                            {project.link !== "#" && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-gray-50 hover:bg-[#3498db] text-[#2c3e50] hover:text-white font-medium rounded-lg transition-colors border border-gray-200 hover:border-transparent group"
                                >
                                    {project.isExternal ? (
                                        <>Visit Link <ExternalLink size={16} className="ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /></>
                                    ) : (
                                        <>View Repository <Github size={16} className="ml-2" /></>
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
