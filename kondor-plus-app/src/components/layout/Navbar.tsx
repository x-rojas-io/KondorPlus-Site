"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Our Work", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300",
                isScrolled || isMobileMenuOpen
                    ? "bg-[#0B1120]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5">
                        <img src="/images/kondor-logo.jpg" alt="Kondor Plus Icon" className="w-8 h-8 object-cover rounded-md drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
                        <span className="text-2xl font-bold tracking-tight text-white hover:text-[#38BDF8] transition-colors">
                            Kondor Plus
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-[15px] font-medium transition-colors hover:text-[#38BDF8]",
                                        isActive ? "text-[#38BDF8]" : "text-[#94A3B8]"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-[#94A3B8] hover:text-[#38BDF8] focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={cn(
                    "md:hidden transition-all duration-300 overflow-hidden",
                    isMobileMenuOpen ? "max-h-60 border-t border-white/10" : "max-h-0"
                )}
            >
                <div className="px-4 py-3 space-y-1 bg-[#0B1120] shadow-xl">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium transition-colors",
                                    isActive
                                        ? "text-[#38BDF8] bg-[#38BDF8]/10"
                                        : "text-[#94A3B8] hover:text-white hover:bg-white/5"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
