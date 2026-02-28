"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "Azure Data Engineering",
        details: ""
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        const web3formsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

        if (!web3formsKey) {
            console.error("Web3Forms access key is missing");
            alert("Contact form configuration is missing. Please contact us directly at contact@kondorplus.net");
            setStatus("error");
            return;
        }

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: web3formsKey,
                    subject: `New Inquiry from ${formData.name}`,
                    from_name: formData.name,
                    ...formData,
                }),
            });

            const result = await response.json();

            if (response.status === 200) {
                setStatus("success");
                setFormData({ name: "", email: "", service: "Azure Data Engineering", details: "" });
            } else {
                console.error("Web3Forms error:", result);
                setStatus("error");
            }

            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            console.error("Submission failed:", error);
            setStatus("error");
        }
    };

    return (
        <div className="container mx-auto px-4 py-16">
            <div className="section-title mb-16 relative">
                <h1 className="text-4xl md:text-5xl font-bold text-[#2c3e50] mb-4">Let&apos;s Get in Touch</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Discuss your next Azure Data Engineering project, RAG Application, or Enterprise Platform.
                </p>
                <div className="w-24 h-1 bg-[#3498db] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="p-8 md:p-12">
                    {status === "success" && (
                        <div className="mb-8 p-4 bg-green-50 rounded-lg flex items-start gap-3 text-green-800 border border-green-200 fade-in visible">
                            <CheckCircle className="flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold">Message Sent!</h3>
                                <p className="text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                            </div>
                        </div>
                    )}

                    {status === "error" && (
                        <div className="mb-8 p-4 bg-red-50 rounded-lg flex items-start gap-3 text-red-800 border border-red-200">
                            <AlertCircle className="flex-shrink-0 mt-0.5" />
                            <div>
                                <h3 className="font-bold">Something went wrong</h3>
                                <p className="text-sm">We couldn&apos;t process your request. Please try again or email us directly at contact@kondorplus.net.</p>
                            </div>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-colors bg-gray-50 focus:bg-white outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-colors bg-gray-50 focus:bg-white outline-none"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="service" className="text-sm font-medium text-gray-700">Service Interested In</label>
                            <select
                                id="service"
                                name="service"
                                required
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-colors bg-gray-50 focus:bg-white outline-none appearance-none"
                            >
                                <option value="Azure Data Engineering">Azure Data Engineering</option>
                                <option value="RAG Application Development">RAG Application Development</option>
                                <option value="Enterprise .NET App">Enterprise .NET Application</option>
                                <option value="Custom Software Solutions">Custom Software Solutions</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="details" className="text-sm font-medium text-gray-700">Project Details</label>
                            <textarea
                                id="details"
                                name="details"
                                required
                                rows={5}
                                value={formData.details}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#3498db] focus:border-transparent transition-colors bg-gray-50 focus:bg-white outline-none resize-y"
                                placeholder="Tell us about your project requirements, timeline, etc."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full sm:w-auto px-8 py-3.5 bg-[#2c3e50] hover:bg-[#1a252f] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? (
                                "Processing..."
                            ) : (
                                <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
