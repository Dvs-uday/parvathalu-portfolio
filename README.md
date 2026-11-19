# Damarla Parvathalu — Personal Portfolio Website
### Senior Sales Manager | Star Health & Allied Insurance Co. Ltd., India

A modern, high-conversion personal portfolio and branch showcase website designed for **Damarla Parvathalu**, Senior Sales Manager at Star Health Insurance.

---

## 🚀 Live Demo & Key Highlights

- **Executive Personal Brand**: Hero section featuring executive portrait, trust badges, career highlights, and quick advisory action buttons.
- **Animated Statistics**: Counter animations showcasing 15+ years of experience, 5,000+ customers guided, 1,000+ families protected, and 100+ advisors mentored.
- **Interactive Career Timeline**: Visual chronology tracking the career journey from 2009 financial advisory to Senior Sales Manager at Star Health.
- **Star Health Regional Branch Showcase**: Somajiguda Regional Center highlights, address, direct hotline, 14,000+ cashless network hospitals, and in-house claims desk.
- **Interactive Health Coverage Calculator**: Tailored need-estimation tool factoring family size, age brackets, and treatment city tiers with direct quotation prompts.
- **Full-Screen Photo Gallery & Lightbox**: Editorial grid showcasing branch lounges, advisor training sessions, award summits, and community health camps.
- **Mobile-First Priority Design**: Touch-optimized layouts, swipeable testimonial carousel, bottom sticky quick-contact bar (`Call | WhatsApp | Advisory`), and floating WhatsApp prompt.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom corporate blue & navy palette
- **Icons**: Lucide React
- **Typography**: Plus Jakarta Sans & Inter (Google Fonts)

---

## 📁 Project Structure

```
starHealth/
├── index.html                   # HTML entry point with metadata & SEO tags
├── package.json                 # Dependencies and npm scripts
├── tailwind.config.js           # Custom corporate palette & typography
├── vite.config.ts               # Vite configuration
└── src/
    ├── main.tsx                 # App mount
    ├── App.tsx                  # Master page integrating all 12 sections & modals
    ├── index.css                # Global Tailwind directives & custom scrollbars
    ├── types/
    │   └── index.ts             # TypeScript interfaces for portfolio data
    ├── data/
    │   └── portfolioData.ts     # Centralized, easily editable content data
    └── components/
        ├── Navbar.tsx           # Glassmorphism sticky navbar with mobile drawer
        ├── Hero.tsx             # Executive hero with badges & CTAs
        ├── ProfessionalImpact.tsx # Animated number counters
        ├── AboutMe.tsx          # Personal story, quote & core values
        ├── CareerJourney.tsx    # Interactive milestone timeline
        ├── Expertise.tsx        # 8 specialized insurance competency cards
        ├── BranchShowcase.tsx   # Somajiguda Star Health branch hub
        ├── InsuranceAwareness.tsx # Consumer literacy & myth-busting guides
        ├── CoverageCalculatorModal.tsx # Interactive health coverage calculator
        ├── TeamShowcase.tsx     # Branch team profiles & mentorship invite
        ├── Achievements.tsx     # Filterable awards & recognition showcase
        ├── Testimonials.tsx     # Policyholder testimonials slider
        ├── PhotoGallery.tsx     # Editorial gallery with Lightbox modal
        ├── ContactConnect.tsx   # Contact channels, maps & inquiry form
        ├── ConsultationModal.tsx# Fast callback & advisory request modal
        ├── MobileStickyBar.tsx  # Mobile-only sticky bottom quick-action bar
        ├── FloatingWhatsApp.tsx # Floating WhatsApp pulse button
        └── Footer.tsx           # Regulatory disclaimer, sitemap & copyright
```

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ Customizing Content

All data (phone numbers, WhatsApp numbers, branch addresses, images, milestones, awards, and team members) is centralized in:
👉 `src/data/portfolioData.ts`

Simply update the values in `portfolioData.ts` to reflect updated contact information, real awards, or new team members.
