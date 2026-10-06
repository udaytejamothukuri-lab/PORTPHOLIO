# Mothukuri Uday Teja — Engineering Portfolio

A **production-grade, dark-themed, recruiter-ready developer portfolio website** engineered for **Uday Teja Mothukuri (Mothukuri Uday Teja)**, a B.Tech Computer Science & Engineering (Data Science) undergraduate at NXT Wave Institute of Advanced Technology at Malla Reddy Vishwavidyapeeth passionate about Artificial Intelligence, Data Science, and modern software development.

---

## 🌟 Key Features & Highlights

- **Aesthetics & UI/UX**: Deep charcoal/black obsidian theme with indigo, cyan, and violet ambient glow accents, glassmorphic panels, and smooth scroll effects.
- **Theme Modes**: Supports **Dark**, **Light**, and **System** themes with persistence in `localStorage`.
- **Modular Data Architecture**: All personal information, credentials, social handles, projects, and skills live cleanly in `src/data/portfolioData.ts`.
- **Hero & Profile**: Headline, "Open to Internship Opportunities" live ping badge, quick actions, and an avatar container with graceful fallback to an initials monogram (`UT`) when no image is provided.
- **Project Exploration Modal**: Interactive project inspection dialog powered by **Framer Motion**, breaking down Problem, Solution, Key Features, Tech Stack, Challenges, and Future Roadmap.
- **Learning & Technical Experience**: Highlights self-directed AI/ML explorations, full-stack development, and computer vision projects rather than fabricated corporate experience.
- **Building in Public (GitHub)**: Live integration readiness with automatic fallback to local project showcases if a placeholder username is active.
- **Validated Contact Form**: Client-side field validations with a pre-configured `mailto` generator, direct email copying, and clear status notifications.
- **Accessibility & SEO**: Semantic HTML5 tags, full keyboard navigation, ARIA dialog accessibility, reduced-motion compatibility, and Open Graph meta tags.

---

## 🏗️ Project Architecture

```
Uday teja's protfolio/
├── public/
│   ├── favicon.svg            # Custom SVG monogram favicon (UT)
│   ├── robots.txt             # Search engine crawler instructions
│   ├── profile.jpg            # (Optional) Drop your photo here
│   └── resume.pdf             # (Optional) Drop your resume PDF here
├── src/
│   ├── components/            # Reusable UI & Layout Components
│   │   ├── AnimatedBackground.tsx  # Ambient mesh & subtle grid
│   │   ├── BackToTop.tsx           # Floating smooth scroll to top
│   │   ├── Footer.tsx              # Minimalist copyright & links
│   │   ├── Navbar.tsx              # Blur navbar with mobile drawer
│   │   ├── ProjectModal.tsx        # Framer Motion project deep-dive
│   │   ├── ScrollProgress.tsx      # Top reading depth indicator
│   │   ├── SectionHeading.tsx      # Consistent section headers
│   │   ├── SocialIcons.tsx         # Crisp SVG icons for GitHub & LinkedIn
│   │   └── ThemeToggle.tsx         # Dark / Light / System selector
│   ├── data/
│   │   └── portfolioData.ts   # ★ CENTRAL CONFIGURATION FILE ★
│   ├── hooks/
│   │   ├── useScrollSpy.ts         # Active navbar section detector
│   │   └── useTheme.ts             # Theme state & localStorage sync
│   ├── sections/              # Page Content Sections
│   │   ├── AboutSection.tsx        # Bio & authentic statistics
│   │   ├── AchievementsSection.tsx # Bootcamps, workshops, hackathons
│   │   ├── CertificationsSection.tsx# BITS Pilani bootcamp & credentials
│   │   ├── ContactSection.tsx      # Validated message form & socials
│   │   ├── EducationSection.tsx    # B.Tech timeline & curriculum
│   │   ├── ExperienceSection.tsx   # Hands-on learning experience
│   │   ├── GithubSection.tsx       # "Building in Public" repo showcase
│   │   ├── HeroSection.tsx         # Headline, badges & CTA buttons
│   │   ├── ProjectsSection.tsx     # Filterable project showcase cards
│   │   └── ResumeSection.tsx       # Download/View resume triggers
│   ├── types/
│   │   └── portfolio.ts       # Strict TypeScript type definitions
│   ├── App.tsx                # Master composition component
│   ├── index.css              # Tailwind directives & glassmorphic utilities
│   └── main.tsx               # Application mount entrypoint
├── .env.example               # Environment variables template
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Theme tokens & dark-mode configuration
├── tsconfig.json              # TypeScript compilation rules
├── vercel.json                # Vercel deployment settings & rewrites
└── vite.config.ts             # Vite build configuration
```

---

## 🛠️ Technologies Used

- **Frontend Core**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build System**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) & custom SVG vectors
- **Typography**: Plus Jakarta Sans & JetBrains Mono (via Google Fonts)

---

## 🚀 How to Run Locally

### 1. Prerequisites
Ensure you have **Node.js** (v18+ or v20+) installed on your machine.

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 4. Create Production Build
```bash
npm run build
```

### 5. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ How to Customize & Replace Information

All your personal details, links, projects, and achievements are organized in a single file:
👉 **`src/data/portfolioData.ts`**

### 1. Update Personal Info & Social Links
Open `src/data/portfolioData.ts` and edit:
```typescript
export const GITHUB_USERNAME = "udaytejamothukuri-lab";

export const portfolioConfig = {
  name: "Mothukuri Uday Teja",
  displayName: "Uday Teja Mothukuri",
  githubUrl: "https://github.com/udaytejamothukuri-lab",
  linkedinUrl: "https://www.linkedin.com/in/uday-teja-mothukuri-797919373",
  location: "Hyderabad, Telangana, India",
  // ...
};
```

### 2. How to Add or Edit Projects
Add a new object inside the `projects` array in `src/data/portfolioData.ts`:
```typescript
{
  id: "new-project-id",
  title: "Your Project Name",
  shortDescription: "A one or two sentence summary of the project.",
  problemSolved: "What specific bottleneck or problem did this solve?",
  solution: "How did you build it and what approach was taken?",
  keyFeatures: [
    "Feature 1 description",
    "Feature 2 description",
  ],
  technologies: ["Python", "PyTorch", "FastAPI"],
  challenges: ["Handling concurrency", "Data normalization"],
  futureImprovements: ["Deploy to edge hardware"],
  githubUrl: "https://github.com/your-username/repo-name",
  liveUrl: "https://your-demo-url.com",
  badge: "AI & ML",
}
```

### 3. How to Add Your Profile Photo
1. Rename your photo to `profile.jpg`.
2. Place it directly inside the `public/` directory (`public/profile.jpg`).
3. If no image exists or if the file cannot be loaded, the website will automatically display an elegant **UT monogram card** as a graceful fallback.

### 4. How to Add Your Resume PDF
1. Save your resume PDF as `resume.pdf`.
2. Place it in the `public/` directory (`public/resume.pdf`).
3. Visitors who click **Download Resume** or **View Resume in Browser** will immediately access the file. If the file is not yet present, a helpful notice prompts them to email you directly.

### 5. How to Add Certificates & Workshops
Add a certificate entry in the `certifications` array in `src/data/portfolioData.ts`:
```typescript
{
  name: "Machine Learning Specialization",
  organization: "DeepLearning.AI / Coursera",
  date: "2025",
  credentialId: "ABC123XYZ",
  credentialUrl: "https://coursera.org/verify/YOUR_ID",
  description: "Comprehensive coursework on supervised learning, deep networks, and recommender systems.",
  skillsGained: ["Supervised Learning", "Loss Optimization", "TensorFlow"],
  status: "Completed",
}
```

---

## 🚢 Deployment Guide

### Deploying to Vercel (Recommended)

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/udaytejamothukuri-lab/PORTPHOLIO.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with GitHub.
3. Click **Add New Project** and select your portfolio repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Vercel will build the project using the pre-configured `vercel.json` file.

### Deploying to GitHub Pages

1. In `vite.config.ts`, add the `base` property with your repository name:
   ```typescript
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   })
   ```
2. In `package.json`, add the `gh-pages` deployment script or use the official GitHub Actions workflow for static pages.

---

## 📄 License
Created for **Mothukuri Uday Teja**. Open for personal portfolio usage and customization.
