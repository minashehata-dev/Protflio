# 🚀 Next-Gen Modern Developer Portfolio

A futuristic, high-performance developer portfolio engineered with **React 18**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed inspired by Awwwards-winning websites with buttery smooth animations and sleek micro-interactions.

---

## ✨ Features & Animations

- **🌌 Interactive Universe Canvas**: Real-time particles and constellations reacting to mouse movement at 60 FPS.
- **⚡ Lenis Inertia Scroll**: Ultra-smooth inertia scrolling across the entire page.
- **🎯 Dynamic Magnetic Cursor**: Smooth trailing cursor that expands and reacts to interactive elements.
- **⌨️ Command Palette (`⌘K` / `Ctrl+K`)**: Raycast/VSCode style quick navigation modal to jump to sections, trigger confetti, copy email, or download CV.
- **🍱 Bento Grid Architecture**: Modular cards with dynamic mouse spotlight gradient (`radial-gradient`), real-time Cairo clock, live stats, and focus audio preview.
- **🃏 3D Tilt Project Cards**: Perspective tilt on hover with metrics badges, tech pills, and live demo links.
- **⏳ Git-Commit Career Roadmap**: Interactive timeline with glowing pulse nodes.
- **📬 Interactive Contact Hub**: Direct email copy with confetti burst + functional contact form.
- **🎨 Glassmorphism & Cyberpunk Dark Aesthetic**: Deep obsidian theme with neon cyan and violet accents.

---

## 📁 Project Structure

```text
Protflio/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── canvas/
│   │   │   └── InteractiveStars.tsx  # Interactive particle canvas
│   │   ├── common/
│   │   │   ├── CustomCursor.tsx      # Smooth trailing cursor
│   │   │   ├── CommandMenu.tsx       # Cmd+K / Ctrl+K interactive palette
│   │   │   ├── Navbar.tsx            # Floating glassmorphism navbar
│   │   │   └── Footer.tsx            # Minimalist modern footer
│   │   └── sections/
│   │       ├── Hero.tsx              # Kinetic typography & status badge
│   │       ├── TechMarquee.tsx       # Infinite scrolling tech marquee
│   │       ├── BentoGrid.tsx         # Bento cards with mouse spotlight & live clock
│   │       ├── Projects.tsx          # 3D Tilt cards & category filters
│   │       ├── Experience.tsx        # Career milestones & timeline
│   │       └── Contact.tsx           # Contact form & confetti trigger
│   ├── data/
│   │   └── portfolioData.ts          # Central configuration for all personal data
│   ├── types/
│   │   └── portfolio.ts              # TypeScript interfaces
│   ├── lib/
│   │   └── utils.ts                  # Class merge utility
│   ├── App.tsx                       # Root application with Lenis scroll
│   ├── main.tsx                      # Entry point
│   └── index.css                     # Tailwind & custom glow utilities
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🛠️ How to Customize Your Info

All personal information, projects, career experience, and links are located in one single file:

👉 **[`src/data/portfolioData.ts`](file:///c:/Users/MinaS/Documents/Protflio/src/data/portfolioData.ts)**

You can update:
- Your name, title, bio, and social links (`personalInfo`)
- Your statistics (`stats`)
- Your tech stack (`marqueeTech`)
- Your projects, screenshots, and live links (`featuredProjects`)
- Your career milestones (`experiences`)

---

## 🚀 Getting Started

### 1. Run Development Server:
```bash
npm run dev
```

### 2. Build for Production:
```bash
npm run build
```

### 3. Preview Production Build:
```bash
npm run preview
```
