import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Kondor Plus Consulting for your next Data Engineering, AI, or Enterprise .NET project.",
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
