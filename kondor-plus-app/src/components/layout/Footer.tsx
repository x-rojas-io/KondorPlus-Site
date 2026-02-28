"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#2c3e50] text-white pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Kondor Plus</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Leading the way in Data Engineering, Machine Learning, and AI Solutions.
                        </p>
                        <p className="text-sm font-medium text-gray-400">
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
                                    className="text-gray-300 hover:text-[#3498db] transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="text-gray-300 hover:text-[#3498db] transition-colors"
                                >
                                    Our Work
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-300 hover:text-[#3498db] transition-colors"
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
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3498db] hover:text-white transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://github.com/nestorojas"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3498db] hover:text-white transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3498db] hover:text-white transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-white/10 text-center">
                    <p className="text-gray-400 text-sm">
                        &copy; {currentYear} Kondor Plus Consulting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
