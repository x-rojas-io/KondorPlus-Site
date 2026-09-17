# Kondor Plus Next.js Web Application

Frontend and web application layer for **Kondor Plus Consulting** ([kondorplus.net](https://kondorplus.net)), built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4.

---

## Architecture Overview

- **Hosting & Edge Delivery**: [Vercel](https://vercel.com)
- **Data & Realtime Hub**: [Supabase](https://supabase.com) (PostgreSQL, Row-Level Security, pgvector)
- **AI Intelligence**: [Google Gemini](https://ai.google.dev/) (RAG, agent workflows, document processing)
- **Client Portals & UI**: Next.js 16 + React 19 + Tailwind CSS v4

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
