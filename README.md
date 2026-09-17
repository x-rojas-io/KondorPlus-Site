# Kondor Plus Consulting

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI_Agents-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

**Custom Data Systems, Applied AI Automations & Bespoke Web Platforms**

*Operated by Nestor Rojas | 14707761 CANADA INC.*

[🌐 Live Website](https://kondorplus.net) • [💼 Explore Case Studies](https://kondorplus.net/projects) • [📬 Schedule a Consultation](https://kondorplus.net/contact)

</div>

---

## 🚀 Overview

**Kondor Plus Consulting** is an agile data and product studio. We close the gap between expensive enterprise technology and growing businesses with our core philosophy: **"From Pipeline to Pixel"**.

We engineer custom systems directly around your business data—migrating fragmented spreadsheets (Excel, Google Sheets), siloed SaaS tools (Stripe, QuickBooks, POS), and PDF archives into clean, structured PostgreSQL (Supabase) data hubs. We then layer **Google Gemini AI agents** and **Next.js 16 web applications** on top to uncover customer patterns, automate back-office operations, and drive revenue growth with zero server maintenance.

---

## 🛠️ The 6 Core Service Pillars

```
┌────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                       WHAT WE DO AT KONDOR PLUS                                        │
├───────────────────────────────────┬───────────────────────────────────┬────────────────────────────────┤
│ [1] DATA MIGRATION & UNIFICATION  │ [2] AI PROCESS AUTOMATION         │ [3] ACTIONABLE REALTIME METRICS│
│ Migrating disconnected Google     │ Reviewing business bottlenecks    │ Custom operational dashboards  │
│ Sheets, Excel, Stripe, QuickBooks,│ and deploying Google Gemini agents│ tracking customer retention,   │
│ & PDF archives into Supabase hubs.│ to automate repetitive workflows. │ revenue velocity, & unit ROI.  │
├───────────────────────────────────┼───────────────────────────────────┼────────────────────────────────┤
│ [4] PREDICTIVE ML & DECISION LOGIC│ [5] ON-DEMAND RAG KNOWLEDGE       │ [6] BESPOKE MISSION WEB PORTALS│
│ Inference-ready ML pipelines to   │ 24/7 intelligent AI assistants    │ Turnkey, high-speed platforms  │
│ forecast customer churn, demand,  │ and semantic search grounded in   │ (like Sothis & Coselat)        │
│ and optimize critical decisions.  │ your verified business data.      │ deployed globally on Vercel.   │
└───────────────────────────────────┴───────────────────────────────────┴────────────────────────────────┘
```

1. **Data Migration & Centralization**: Extracting data from Excel, Google Sheets, Stripe, QuickBooks, POS, and PDF invoices into clean, managed PostgreSQL (Supabase) data hubs with strict data integrity.
2. **AI-Driven Process Automation**: Auditing business operations and implementing Google Gemini AI agents to eliminate manual data entry and repetitive back-office tasks.
3. **Actionable Realtime Analytics**: Embedded operational dashboards that track sales velocity, customer churn, and inventory without expensive monthly BI software licenses.
4. **Predictive Machine Learning Pipelines**: Deploying inference-ready ML pipelines to anticipate customer behavior, forecast demand, and score leads.
5. **Customer-Facing RAG & Knowledge Systems**: 24/7 intelligent AI conversational assistants and semantic search grounded in your verified company data.
6. **Bespoke Web Applications & Portals**: Custom, branded client management portals, membership platforms (like *Sothis Therapeutic*, *Coselat*, *Nouriva Club*), and internal tools deployed on Vercel's global edge network.

---

## ✨ Featured Platforms & Case Studies

- **Sothis Therapeutic**: Custom therapeutic practice portal centralizing intake forms, client history, and real-time scheduling on Supabase + Next.js.
- **Coselat Platform**: Operational data hub uncovering service delivery patterns and automating member onboarding.
- **Nouriva Club**: Member lifestyle platform built around wellness engagement data, community interaction, and real-time event updates.
- **Gemini Knowledge & RAG Assistant**: Intelligent document lookup and customer inquiry semantic search engine.
- **National Pension Data Quality & Deduplication**: High-volume record linkage and identity resolution pipelines (7M+ duplicate identities resolved).
- **Enterprise .NET Core Platforms**: Robust microservices and cloud infrastructure handling high-volume transaction data.

---

## 📂 Repository Structure

```text
KondorPlus-Site/
├── README.md                      # Root repository documentation
├── x-rojas-io.md                  # GitHub profile README
└── kondor-plus-app/               # Next.js 16 web application
    ├── public/                    # Static media, icons, and hero video
    │   ├── images/                # High-resolution project imagery & logos
    │   └── videos/                # Background video assets (landing_background.mp4)
    ├── src/
    │   ├── app/                   # Next.js App Router
    │   │   ├── about/             # Founder story, philosophy & tech stack
    │   │   ├── contact/           # Interactive 3-step consultation wizard
    │   │   ├── projects/          # Case studies & portfolio showcase
    │   │   ├── globals.css        # Tailwind v4 theme, CSS variables & animations
    │   │   ├── layout.tsx         # Root layout with global navbar & footer
    │   │   ├── page.tsx           # Hero landing page & 6-pillar service domains
    │   │   ├── robots.ts          # Dynamic search engine crawler instructions
    │   │   └── sitemap.ts         # Dynamic XML sitemap generator
    │   ├── components/
    │   │   └── layout/            # Reusable Navigation Bar & Footer components
    │   │       ├── Navbar.tsx
    │   │       └── Footer.tsx
    │   └── lib/
    │       └── utils.ts           # Class merging utilities (clsx + tailwind-merge)
    ├── .env.local                 # Environment configuration (Web3Forms API key)
    ├── next.config.ts             # Next.js runtime configuration
    ├── package.json               # Dependencies & build scripts
    ├── postcss.config.mjs         # PostCSS configuration for Tailwind v4
    └── tsconfig.json              # TypeScript compiler configuration
```

---

## 💻 Tech Stack & Dependencies

| Layer | Technologies |
|---|---|
| **Frontend & UX** | [Next.js 16 (App Router)](https://nextjs.org/), [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/), [Tailwind CSS v4](https://tailwindcss.com/) |
| **Data & Storage** | [Supabase](https://supabase.com/) (PostgreSQL, Row-Level Security, Realtime, Storage) |
| **AI & Search** | [Google Gemini](https://ai.google.dev/), [pgvector](https://github.com/pgvector/pgvector), LangChain / Python RAG |
| **Hosting & Edge** | [Vercel](https://vercel.com) (Edge network, Serverless functions) |
| **Telemetry & Ingestion** | [Web3Forms API](https://web3forms.com/) |

---

## ⚙️ Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### 1. Clone the Repository
```bash
git clone https://github.com/nestorojas/KondorPlus-Site.git
cd KondorPlus-Site/kondor-plus-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the `kondor-plus-app` directory:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_access_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 🌐 Deployment (Vercel)

This application is deployed and optimized on [Vercel](https://vercel.com).

To deploy your own instance:
1. Import the Git repository in Vercel.
2. Set the **Root Directory** to `kondor-plus-app`.
3. Add `NEXT_PUBLIC_WEB3FORMS_KEY` in **Environment Variables**.
4. Click **Deploy**.

---

## 📬 Contact & Inquiries

- **Author**: Nestor Rojas
- **Company**: Kondor Plus Consulting (14707761 CANADA INC.)
- **Website**: [kondorplus.net](https://kondorplus.net)
- **Direct Email**: [contact@kondorplus.net](mailto:contact@kondorplus.net)
- **GitHub**: [@x-rojas-io](https://github.com/x-rojas-io)
- **LinkedIn**: [Nestor Rojas](https://linkedin.com/in/x-rojas-io)

---

<div align="center">
  <sub>&copy; Kondor Plus Consulting. All rights reserved.</sub>
</div>
