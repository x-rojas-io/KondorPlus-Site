"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
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
                    ? "bg-white shadow-md py-3"
                    : "bg-white/95 backdrop-blur-sm py-4"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        {/* Replace this div with an actual image once uploaded */}
                        <span className="text-2xl font-bold tracking-tight text-[#2c3e50]">
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
                                        "text-[15px] font-medium transition-colors hover:text-[#3498db]",
                                        isActive ? "text-[#3498db]" : "text-gray-700"
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
                            className="text-gray-700 hover:text-[#3498db] focus:outline-none"
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
                    isMobileMenuOpen ? "max-h-60 border-t border-gray-100" : "max-h-0"
                )}
            >
                <div className="px-4 py-3 space-y-1 bg-white shadow-lg">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "block px-3 py-2 rounded-md text-base font-medium transition-colors hover:bg-gray-50",
                                    isActive
                                        ? "text-[#3498db] bg-[#e0f2fe]"
                                        : "text-gray-700"
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
