"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#0B1120] text-white pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
            {/* Subtle glow effect behind footer */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#38BDF8]/10 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 relative z-10">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Kondor Plus</h3>
                        <p className="text-[#94A3B8] leading-relaxed mb-4">
                            Leading the way in Full-Stack Data Engineering, Machine Learning, and Custom Product Solutions.
                        </p>
                        <p className="text-sm font-medium text-white/50">
                            Operated by 14707761 CANADA INC.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    href="/"
                                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                                >
                                    Our Work
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/nestorojas"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#38BDF8]/20 hover:border-[#38BDF8]/50 hover:text-[#38BDF8] transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 text-center relative z-10">
                    <p className="text-white/50 text-sm">
                        &copy; {currentYear} Kondor Plus Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
