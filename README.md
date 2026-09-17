# Kondor Plus Consulting

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Google Gemini](https://img.shields.io/badge/Google_Gemini-AI_Agents-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

**Agile Data Platforms, Gemini AI Intelligence & Bespoke Web Applications**

*Operated by Nestor Rojas | 14707761 CANADA INC.*

[🌐 Live Website](https://kondorplus.net) • [💼 Explore Case Studies](https://kondorplus.net/projects) • [📬 Schedule a Consultation](https://kondorplus.net/contact)

</div>

---

## 🚀 Overview

**Kondor Plus Consulting** is an agile data and product studio. We bridge the gap between lean data infrastructure and modern web experiences with our core philosophy: **"From Pipeline to Pixel"**.

We empower growing businesses and platforms (e.g., **Sothis Therapeutic**, **Coselat**, **Nouriva Club**) to deploy enterprise-grade data intelligence without the excessive cost and complexity of heavyweight distributed systems. Our modern architecture unites **Vercel edge hosting**, **Supabase (managed PostgreSQL & pgvector)**, and **Google Gemini AI agents** into fast, scalable, and self-managing platforms.

---

## 🛠️ Core Pillars & Technical Expertise

```
+-----------------------------------------------------------------------------------+
|                                FROM PIPELINE TO PIXEL                             |
+------------------------------------+----------------------------------------------+
| [1] Modern Cloud Data Hubs         | [2] Gemini AI & Smart Automation             |
| - Supabase & Managed PostgreSQL    | - Google Gemini 2.0 / Flash / Pro Models     |
| - Row-Level Security & Auth        | - RAG & pgvector Semantic Search             |
| - Realtime Subscriptions & Storage | - Autonomous Workflow & Document Agents      |
+------------------------------------+----------------------------------------------+
| [3] Actionable Realtime Analytics  | [4] Custom Portals & Web Apps                |
| - Embedded Operational Metrics     | - Next.js 16 (App Router), React 19, TS      |
| - Zero-License Custom Dashboards   | - Vercel Global Edge Network Deployment      |
| - High-Volume Data Aggregations    | - Bespoke Client & Membership Portals        |
+------------------------------------+----------------------------------------------+
```

1. **Modern Cloud Data Hubs (Supabase & Postgres)**: Centralizing operational data in secure, managed PostgreSQL instances with built-in Auth, Row-Level Security, instant REST/GraphQL APIs, and zero DevOps overhead.
2. **Gemini AI & Smart Automation**: Architecting AI workflows, intelligent document extraction, customer assistants, and semantic search powered by Google Gemini and `pgvector` embeddings.
3. **Actionable Realtime Analytics**: Delivering real-time business telemetry and embedded operational dashboards directly inside client applications without expensive BI licensing.
4. **Custom Portals & Web Applications**: Developing blazing-fast, responsive web platforms and client management portals deployed on Vercel's global edge network.

---

## ✨ Featured Platforms & Case Studies

- **Sothis Therapeutic**: Full-featured therapeutic practice platform with secure client management, appointment scheduling, and real-time records on Supabase and Next.js.
- **Coselat Platform**: Data-driven operations platform streamlining client onboarding, service delivery, and automated communications.
- **Nouriva Club**: Member lifestyle platform with real-time community engagement, events, and responsive mobile-first UI.
- **Gemini Knowledge & RAG Assistant**: Intelligent semantic search and question-answering system using Google Gemini and vector embeddings.
- **Enterprise .NET Core Platforms**: High-throughput backend systems and microservices for large-scale enterprise clients.

---

## 📂 Repository Structure

```text
KondorPlus-Site/
├── README.md                      # Root repository documentation
└── kondor-plus-app/               # Next.js 16 web application
    ├── public/                    # Static media, icons, and hero video
    │   ├── images/                # High-resolution project imagery & logos
    │   └── videos/                # Background video assets (landing_background.mp4)
    ├── src/
    │   ├── app/                   # Next.js App Router
    │   │   ├── contact/           # Interactive 3-step consultation wizard
    │   │   │   ├── layout.tsx     # Route-specific metadata
    │   │   │   └── page.tsx       # Dynamic wizard logic & Web3Forms integration
    │   │   ├── projects/          # Case studies & portfolio showcase
    │   │   │   └── page.tsx
    │   │   ├── globals.css        # Tailwind v4 theme, CSS variables & animations
    │   │   ├── layout.tsx         # Root layout with global navbar & footer
    │   │   ├── page.tsx           # Hero landing page & technical domains
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
- **GitHub**: [@nestorojas](https://github.com/nestorojas)
- **LinkedIn**: [Nestor Rojas](https://linkedin.com)

---

<div align="center">
  <sub>&copy; Kondor Plus Consulting. All rights reserved.</sub>
</div>
