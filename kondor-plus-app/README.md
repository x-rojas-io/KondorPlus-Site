# Kondor Plus Next.js Web Application

Frontend and web application layer for **Kondor Plus Consulting** ([kondorplus.net](https://kondorplus.net)), built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

---

## Architecture & 6-Pillar Overview

1. **Data Migration & Centralization**: Extracting data from Excel, Google Sheets, Stripe, QuickBooks, POS, and PDF archives into Supabase PostgreSQL.
2. **AI Process Automation**: Google Gemini AI agents for automating document extraction and repetitive workflows.
3. **Actionable Realtime Analytics**: Embedded telemetry and business dashboards without recurring BI license fees.
4. **Predictive ML Pipelines**: Inference-ready machine learning models for forecasting churn, demand, and decision support.
5. **Customer-Facing RAG Systems**: 24/7 AI assistants and semantic search grounded in verified business data.
6. **Bespoke Web Portals**: High-performance client platforms deployed globally on Vercel (e.g. Sothis, Coselat, Nouriva).

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Ensure `.env.local` contains your Web3Forms access key:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build Production Bundle
```bash
npm run build
npm run start
```

---

## Available Scripts

- `npm run dev` - Starts development server with Turbopack on port 3000
- `npm run build` - Generates an optimized static/server production build
- `npm run start` - Runs the compiled production build
- `npm run lint` - Runs ESLint checks

For full architectural documentation and case studies, see the [Root README.md](../README.md).
