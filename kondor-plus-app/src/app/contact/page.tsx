"use client";

import { useState } from "react";
import { 
    Send, 
    CheckCircle, 
    AlertCircle, 
    ChevronRight, 
    ChevronLeft, 
    Database, 
    Bot, 
    BarChart3, 
    TrendingUp, 
    Sparkles, 
    Globe, 
    GitMerge, 
    Settings
} from "lucide-react";
import Image from "next/image";

type FocusArea = 
    | "Data Migration & Centralization (Spreadsheets/SaaS)"
    | "AI Process Automation (Google Gemini)"
    | "Actionable Realtime Analytics & Dashboards"
    | "Predictive ML & Decision Pipelines"
    | "Customer-Facing RAG Knowledge Systems"
    | "Custom Web App / Client Portal (Next.js)"
    | "";

type ProjectStage = 
    | "Starting Fresh / Building New Product"
    | "Unifying Fragmented Spreadsheets & SaaS Apps"
    | "Automating Operations & Scaling with AI"
    | "";

export default function ContactWizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "" as FocusArea,
        stage: "" as ProjectStage,
        details: ""
    });

    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleNext = () => setCurrentStep(prev => Math.min(prev + 1, 3));
    const handleBack = () => setCurrentStep(prev => Math.max(prev - 1, 1));

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSelectService = (service: FocusArea) => {
        setFormData(prev => ({ ...prev, service }));
        setTimeout(handleNext, 300); // Auto-advance for smooth UX
    };

    const handleSelectStage = (stage: ProjectStage) => {
        setFormData(prev => ({ ...prev, stage }));
        setTimeout(handleNext, 300); // Auto-advance for smooth UX
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
                    subject: `New Consultation Request from ${formData.name}`,
                    from_name: formData.name,
                    ...formData,
                }),
            });

            const result = await response.json();

            if (response.status === 200) {
                setStatus("success");
            } else {
                console.error("Web3Forms error:", result);
                setStatus("error");
            }
        } catch (error) {
            console.error("Submission failed:", error);
            setStatus("error");
        }
    };

    return (
        <div className="min-h-screen bg-[#0B1120] flex flex-col md:flex-row pt-16 md:pt-0">
            {/* Left Side: Visual Narrative (Pipeline to Pixel) */}
            <div className="w-full md:w-5/12 lg:w-1/2 relative min-h-[40vh] md:min-h-screen flex items-center justify-center border-r border-white/5 overflow-hidden">
                <Image
                    src="/images/kondor-data-pipeline.jpg"
                    alt="Kondor Plus Data Pipeline Visualization"
                    fill
                    className="object-cover opacity-60 mix-blend-screen"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120]/80 via-[#0B1120]/40 to-transparent md:bg-gradient-to-t md:from-[#0B1120] md:via-transparent md:to-transparent"></div>

                <div className="relative z-10 p-8 md:p-12 self-end md:self-center text-left w-full mt-auto mb-0 md:mt-0 md:mb-0 bg-[#0B1120]/50 md:bg-transparent backdrop-blur-md md:backdrop-blur-none">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                        Custom Data Architecture
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                        Turn Your Data <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF]">Into Business Growth</span>
                    </h1>
                    <p className="text-lg md:text-xl text-[#94A3B8] max-w-md">
                        Tell us about your business goals and current data sources. We&apos;ll engineer a lean, intelligent data system that automates workflows, uncovers customer patterns, and closes the technology cost gap.
                    </p>
                </div>
            </div>

            {/* Right Side: The Consultation Wizard */}
            <div className="w-full md:w-7/12 lg:w-1/2 flex items-center justify-center p-6 md:p-12 relative overflow-y-auto">
                <div className="w-full max-w-2xl relative">

                    {/* Progress Indicator */}
                    {status === "idle" && (
                        <div className="mb-10 flex items-center justify-center space-x-4">
                            {[1, 2, 3].map((step) => (
                                <div key={step} className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${currentStep === step ? "bg-[#38BDF8] text-[#0B1120] shadow-[0_0_15px_rgba(56,189,248,0.5)]" : currentStep > step ? "bg-[#2DD4BF] text-[#0B1120]" : "bg-white/5 text-[#94A3B8] border border-white/10"}`}>
                                        {currentStep > step ? <CheckCircle size={16} /> : step}
                                    </div>
                                    {step < 3 && (
                                        <div className={`w-12 h-1 mx-2 rounded-full transition-all duration-300 ${currentStep > step ? "bg-[#2DD4BF]" : "bg-white/5"}`}></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="glass-panel p-8 md:p-10 relative overflow-hidden">

                        {/* Status Messages overlaying form */}
                        {status === "success" && (
                            <div className="text-center py-10 fade-in">
                                <div className="w-20 h-20 bg-[#2DD4BF]/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_-5px_rgba(45,212,191,0.5)]">
                                    <CheckCircle size={40} className="text-[#2DD4BF]" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-4">Transmission Received</h3>
                                <p className="text-[#94A3B8] text-lg mb-8">
                                    Your architecture requirements have been logged. An engineer will reach out to schedule your technical consultation shortly.
                                </p>
                                <button
                                    onClick={() => {
                                        setStatus("idle");
                                        setCurrentStep(1);
                                        setFormData({ name: "", email: "", service: "" as FocusArea, stage: "" as ProjectStage, details: "" });
                                    }}
                                    className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all w-full sm:w-auto"
                                >
                                    Start New Inquiry
                                </button>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="text-center py-10">
                                <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <AlertCircle size={40} className="text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">System Error</h3>
                                <p className="text-[#94A3B8] mb-8">
                                    We encountered a routing error. Please reach out manually via <a href="mailto:contact@kondorplus.net" className="text-[#38BDF8] hover:underline">contact@kondorplus.net</a>
                                </p>
                                <button onClick={() => setStatus("idle")} className="px-6 py-2 bg-white/10 rounded-xl text-white hover:bg-white/20">Try Again</button>
                            </div>
                        )}

                        {/* Wizard Step 1: Focus Area (6 Pillars) */}
                        {status === "idle" && currentStep === 1 && (
                            <div className="slide-enter">
                                <h2 className="text-2xl font-bold text-white mb-2">What is the primary focus of your project?</h2>
                                <p className="text-[#94A3B8] mb-6 text-sm">Select the core technical domain you want to solve.</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 auto-rows-fr">
                                    {/* 1. Data Migration */}
                                    <button 
                                        onClick={() => handleSelectService("Data Migration & Centralization (Spreadsheets/SaaS)")} 
                                        className={`h-full text-left p-4 rounded-xl border flex items-start gap-3.5 transition-all duration-300 ${formData.service === "Data Migration & Centralization (Spreadsheets/SaaS)" ? "bg-[#38BDF8]/10 border-[#38BDF8] shadow-[0_0_15px_-3px_rgba(56,189,248,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 text-[#38BDF8] flex-shrink-0 mt-0.5">
                                            <Database size={20} />
                                        </div>
                                        <div>
                                            <div className={`font-semibold text-sm ${formData.service.includes("Migration") ? "text-white" : "text-[#94A3B8]"}`}>Data Migration &amp; Hubs</div>
                                            <div className="text-xs text-[#94A3B8]/70 mt-0.5 leading-relaxed">Centralize spreadsheets, Stripe, QuickBooks, &amp; PDFs into Supabase.</div>
                                        </div>
                                    </button>

                                    {/* 2. AI Process Automation */}
                                    <button 
                                        onClick={() => handleSelectService("AI Process Automation (Google Gemini)")} 
                                        className={`h-full text-left p-4 rounded-xl border flex items-start gap-3.5 transition-all duration-300 ${formData.service === "AI Process Automation (Google Gemini)" ? "bg-[#2DD4BF]/10 border-[#2DD4BF] shadow-[0_0_15px_-3px_rgba(45,212,191,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 text-[#2DD4BF] flex-shrink-0 mt-0.5">
                                            <Bot size={20} />
                                        </div>
                                        <div>
                                            <div className={`font-semibold text-sm ${formData.service.includes("Automation") ? "text-white" : "text-[#94A3B8]"}`}>AI Process Automation</div>
                                            <div className="text-xs text-[#94A3B8]/70 mt-0.5 leading-relaxed">Automate repetitive back-office tasks &amp; documents with Gemini.</div>
                                        </div>
                                    </button>

                                    {/* 3. Actionable Realtime Analytics */}
                                    <button 
                                        onClick={() => handleSelectService("Actionable Realtime Analytics & Dashboards")} 
                                        className={`h-full text-left p-4 rounded-xl border flex items-start gap-3.5 transition-all duration-300 ${formData.service === "Actionable Realtime Analytics & Dashboards" ? "bg-[#818CF8]/10 border-[#818CF8] shadow-[0_0_15px_-3px_rgba(129,140,248,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 text-[#818CF8] flex-shrink-0 mt-0.5">
                                            <BarChart3 size={20} />
                                        </div>
                                        <div>
                                            <div className={`font-semibold text-sm ${formData.service.includes("Analytics") ? "text-white" : "text-[#94A3B8]"}`}>Actionable Analytics</div>
                                            <div className="text-xs text-[#94A3B8]/70 mt-0.5 leading-relaxed">Embedded business dashboards without recurring BI seat fees.</div>
                                        </div>
                                    </button>

                                    {/* 4. Predictive ML Pipelines */}
                                    <button 
                                        onClick={() => handleSelectService("Predictive ML & Decision Pipelines")} 
                                        className={`h-full text-left p-4 rounded-xl border flex items-start gap-3.5 transition-all duration-300 ${formData.service === "Predictive ML & Decision Pipelines" ? "bg-[#F59E0B]/10 border-[#F59E0B] shadow-[0_0_15px_-3px_rgba(245,158,11,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 text-[#F59E0B] flex-shrink-0 mt-0.5">
                                            <TrendingUp size={20} />
                                        </div>
                                        <div>
                                            <div className={`font-semibold text-sm ${formData.service.includes("Predictive") ? "text-white" : "text-[#94A3B8]"}`}>Predictive ML Pipelines</div>
                                            <div className="text-xs text-[#94A3B8]/70 mt-0.5 leading-relaxed">Forecast demand, customer churn, and score high-intent leads.</div>
                                        </div>
                                    </button>

                                    {/* 5. Customer-Facing RAG Systems */}
                                    <button 
                                        onClick={() => handleSelectService("Customer-Facing RAG Knowledge Systems")} 
                                        className={`h-full text-left p-4 rounded-xl border flex items-start gap-3.5 transition-all duration-300 ${formData.service === "Customer-Facing RAG Knowledge Systems" ? "bg-[#EC4899]/10 border-[#EC4899] shadow-[0_0_15px_-3px_rgba(236,72,153,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 text-[#EC4899] flex-shrink-0 mt-0.5">
                                            <Sparkles size={20} />
                                        </div>
                                        <div>
                                            <div className={`font-semibold text-sm ${formData.service.includes("RAG") ? "text-white" : "text-[#94A3B8]"}`}>On-Demand RAG Systems</div>
                                            <div className="text-xs text-[#94A3B8]/70 mt-0.5 leading-relaxed">24/7 AI assistants grounded in your verified company data.</div>
                                        </div>
                                    </button>

                                    {/* 6. Custom Web App / Client Portal */}
                                    <button 
                                        onClick={() => handleSelectService("Custom Web App / Client Portal (Next.js)")} 
                                        className={`h-full text-left p-4 rounded-xl border flex items-start gap-3.5 transition-all duration-300 ${formData.service === "Custom Web App / Client Portal (Next.js)" ? "bg-white/10 border-white shadow-[0_0_15px_-3px_rgba(255,255,255,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}
                                    >
                                        <div className="p-2 rounded-lg bg-white/5 text-white flex-shrink-0 mt-0.5">
                                            <Globe size={20} />
                                        </div>
                                        <div>
                                            <div className={`font-semibold text-sm ${formData.service.includes("Portal") ? "text-white" : "text-[#94A3B8]"}`}>Custom Web Portals</div>
                                            <div className="text-xs text-[#94A3B8]/70 mt-0.5 leading-relaxed">Turnkey client platforms (like Sothis &amp; Coselat) on Vercel.</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Wizard Step 2: Project Stage */}
                        {status === "idle" && currentStep === 2 && (
                            <div className="slide-enter">
                                <h2 className="text-2xl font-bold text-white mb-2">Where are you in your data journey?</h2>
                                <p className="text-[#94A3B8] mb-6 text-sm">This helps us allocate the right engineering resources for your consultation.</p>

                                <div className="flex flex-col gap-4">
                                    <button onClick={() => handleSelectStage("Starting Fresh / Building New Product")} className={`text-left p-5 rounded-xl border flex items-center gap-4 transition-all duration-300 ${formData.stage === "Starting Fresh / Building New Product" ? "bg-[#2DD4BF]/10 border-[#2DD4BF] shadow-[0_0_15px_-3px_rgba(45,212,191,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}>
                                        <GitMerge className={formData.stage === "Starting Fresh / Building New Product" ? "text-[#2DD4BF]" : "text-[#94A3B8]"} size={24} />
                                        <div>
                                            <div className={`font-bold ${formData.stage === "Starting Fresh / Building New Product" ? "text-white" : "text-[#94A3B8]"}`}>Starting Fresh / Building New Product</div>
                                            <div className="text-sm text-[#94A3B8]/70 mt-1">Launching a new digital product, membership portal, or MVP.</div>
                                        </div>
                                    </button>

                                    <button onClick={() => handleSelectStage("Unifying Fragmented Spreadsheets & SaaS Apps")} className={`text-left p-5 rounded-xl border flex items-center gap-4 transition-all duration-300 ${formData.stage === "Unifying Fragmented Spreadsheets & SaaS Apps" ? "bg-[#2DD4BF]/10 border-[#2DD4BF] shadow-[0_0_15px_-3px_rgba(45,212,191,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}>
                                        <Settings className={formData.stage === "Unifying Fragmented Spreadsheets & SaaS Apps" ? "text-[#2DD4BF]" : "text-[#94A3B8]"} size={24} />
                                        <div>
                                            <div className={`font-bold ${formData.stage === "Unifying Fragmented Spreadsheets & SaaS Apps" ? "text-white" : "text-[#94A3B8]"}`}>Unifying Fragmented Spreadsheets &amp; SaaS Apps</div>
                                            <div className="text-sm text-[#94A3B8]/70 mt-1">Migrating spreadsheets/legacy tools into a centralized Supabase database.</div>
                                        </div>
                                    </button>

                                    <button onClick={() => handleSelectStage("Automating Operations & Scaling with AI")} className={`text-left p-5 rounded-xl border flex items-center gap-4 transition-all duration-300 ${formData.stage === "Automating Operations & Scaling with AI" ? "bg-[#2DD4BF]/10 border-[#2DD4BF] shadow-[0_0_15px_-3px_rgba(45,212,191,0.3)]" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}>
                                        <TrendingUp className={formData.stage === "Automating Operations & Scaling with AI" ? "text-[#2DD4BF]" : "text-[#94A3B8]"} size={24} />
                                        <div>
                                            <div className={`font-bold ${formData.stage === "Automating Operations & Scaling with AI" ? "text-white" : "text-[#94A3B8]"}`}>Automating Operations &amp; Scaling with AI</div>
                                            <div className="text-sm text-[#94A3B8]/70 mt-1">Deploying Gemini AI agents, real-time analytics, and scaling infrastructure.</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Wizard Step 3: Contact Details */}
                        {status === "idle" && currentStep === 3 && (
                            <div className="slide-enter">
                                <h2 className="text-2xl font-bold text-white mb-2">Initialize Handshake</h2>
                                <p className="text-[#94A3B8] mb-8">How should we transmit our response?</p>

                                <form id="consultation-form" onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label htmlFor="name" className="text-sm font-medium text-[#94A3B8]">Name / Alias</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0B1120]/50 text-white focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all outline-none placeholder-[#94A3B8]/30"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="email" className="text-sm font-medium text-[#94A3B8]">Secure Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0B1120]/50 text-white focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all outline-none placeholder-[#94A3B8]/30"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="details" className="text-sm font-medium text-[#94A3B8]">Project Telemetry &amp; Current Data Sources (Optional)</label>
                                        <textarea
                                            id="details"
                                            name="details"
                                            rows={4}
                                            value={formData.details}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0B1120]/50 text-white focus:ring-2 focus:ring-[#38BDF8] focus:border-transparent transition-all outline-none resize-y placeholder-[#94A3B8]/30 text-sm"
                                            placeholder="Current data sources (Excel, Google Sheets, Stripe, QuickBooks, PDFs) or key operational bottlenecks."
                                        />
                                    </div>

                                    {/* Hidden fields capturing the previous steps for Web3Forms */}
                                    <input type="hidden" name="Service Selected" value={formData.service} />
                                    <input type="hidden" name="Project Stage" value={formData.stage} />
                                </form>
                            </div>
                        )}

                        {/* Navigation Footer */}
                        {status === "idle" && (
                            <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                                <button
                                    onClick={handleBack}
                                    disabled={currentStep === 1}
                                    className={`flex items-center gap-2 px-4 py-2 font-medium transition-colors ${currentStep === 1 ? "text-transparent cursor-default pointer-events-none" : "text-[#94A3B8] hover:text-white"}`}
                                >
                                    <ChevronLeft size={18} /> Back
                                </button>

                                {currentStep < 3 ? (
                                    <button
                                        onClick={handleNext}
                                        disabled={(currentStep === 1 && !formData.service) || (currentStep === 2 && !formData.stage)}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/10 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                                    >
                                        Next <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        form="consultation-form"
                                        disabled={!formData.name || !formData.email}
                                        className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#38BDF8] to-[#2DD4BF] hover:opacity-90 text-[#0B1120] font-bold rounded-xl transition-all shadow-[0_0_20px_-5px_#38BDF8] group disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                                    >
                                        Initiate Handshake <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
}
