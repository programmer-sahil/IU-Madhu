# CGIT Exam Master

**Corporate Governance of IT, Compliance, and Law — Complete Exam Revision Platform**

- **Course:** Corporate Governance of IT, Compliance, and Law (`DLMIGCR01-01_E`)
- **Institution:** IU International University of Applied Sciences
- **Tutor:** SK SAHIL
- **Target Audience:** Master's-level students preparing for the final examination

---

## 🌟 Overview

**CGIT Exam Master** is a high-yield, static exam-revision single page web application engineered in React 18, TypeScript, Vite, and Tailwind CSS. It is specifically designed to be the primary study resource for mastering all six course units with university exam-standard precision.

### Key Capabilities

1. **Complete 6-Unit Curriculum Coverage:**
   - **Unit 1:** IT Governance: Motivation and Challenges (Why-What-How, COSO, SOX, PDCA, ISO 38500, Board vs Executive responsibilities)
   - **Unit 2:** COBIT 2019 (6 System & 3 Framework Principles, 7 Components, Core Model EDM/APO/BAI/DSS/MEA, 40 Objectives, Target Cascade, 11 Design Factors, Capability Levels 0–5)
   - **Unit 3:** IT Compliance (Risk Formula, Appetite/Tolerance/Threshold, Inherent vs Residual Risk, 6 Control Types, 3 Control Categories, ISO 31000, ISO 27001/2/5, SOC 2, NIST 800-53)
   - **Unit 4:** Basic IT Protection According to BSI (IT-Grundschutz Compendium, BSI 200-1/2/3, BSI 100-4/200-4, 6-Step Grundschutz Process, Maximum Principle, Accumulation & Distribution Effects)
   - **Unit 5:** IT Service Management (ITIL V4 SVS, 6 Service Value Chain activities, 34 Practices, 4 Dimensions, ISO/IEC 20000-1:2018, TOGAF, FitSM, Six Sigma)
   - **Unit 6:** IT Law (German E-Commerce Impressum § 5 TMG/DDG, 14-day Withdrawal, IP 20/10/70 years, Cybersquatting vs Typosquatting, Contracts & SLAs, GDPR Art. 28/33/34/83, BDSG § 38)

2. **230+ Master's-Level MCQs Across 6 Modes:**
   - *Learn Mode:* Immediate green/red visual validation, detailed academic explanation, and high-yield *"Remember"* memory tip.
   - *Exam Mode:* Answers hidden until submission with complete grading summary.
   - *Weak Questions:* Automatically queues questions previously answered incorrectly.
   - *Rapid Fire:* 10 random high-priority questions.
   - *Unit Test:* 20 random questions from a selected unit.
   - *Full Course Test:* 48 questions matching final exam weighting.

3. **2 Full 90-Mark Mock Examinations:**
   - 120-minute countdown timer with Pause / Resume / Submit.
   - Section A: 48 MCQs (48 marks)
   - Section B: 1 × 20 Marks Master's Comprehensive Case Study
   - Section C: 2 × 8 Marks Structured Governance & Compliance Questions
   - Section D: 1 × 6 Marks Short Technical Question
   - Post-submission model answers, marking rubrics, keyword badges, and self-scoring checklists.

4. **Interactive Flashcards:**
   - 3D CSS perspective card flip animations.
   - "Know It" vs "Need Revision" tracking that updates personal revision queues.

5. **18 Interactive Visual Diagrams:**
   - Pure responsive SVG/HTML diagrams including Governance vs Management, Why-What-How, PDCA Cycle, COBIT Cascade, Risk Formula, Inherent vs Residual Risk, BSI Grundschutz Process, ITIL Service Value System, GDPR Breach Flowchart, etc.

6. **16 Master Comparison Tables:**
   - Head-to-head analytical comparisons for frequently confused exam concepts with instant keyword search.

7. **Exam Traps & Numbers You Must Remember:**
   - Common student pitfalls, examiner mark deductions, and 20 mandatory high-yield numerical facts (e.g., 72h breach notification, €20M/4% max fine, 34 practices, 40 objectives).

8. **30-Minute Final Revision & Night-Before Checklist:**
   - 5-minute timed sprint cards per unit and practical pre-exam mental checks.

9. **Global Search (⌘K / Ctrl+K) & Bookmarking:**
   - Universal search indexing concepts, questions, MCQs, numbers, and comparisons.
   - Persistent `localStorage` bookmark vault and readiness progress calculation.

10. **Dark & Light Mode:**
    - Fully styled with smooth transitions between deep navy/slate dark mode and crisp white/slate light mode.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation & Execution
```bash
# Clone or navigate to the project root
cd /path/to/madhu

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser at:
`http://localhost:5173/`

### Production Build
```bash
npm run build
```
This generates a static production bundle in `dist/` ready to be served by any web server or deployed to hosting providers.

---

## 🌐 Deploying Directly

Because **CGIT Exam Master** is 100% static with zero backend dependencies, you can deploy it in seconds:

### Deploy to Vercel
```bash
npx vercel deploy --prod
```
Or connect your GitHub repository directly to Vercel (Build Command: `npm run build`, Output Directory: `dist`).

### Deploy to Netlify
```bash
npx netlify deploy --prod --dir=dist
```
Or drag-and-drop the `dist/` folder onto the Netlify dashboard.

### Deploy to GitHub Pages
Add `"base": "/<repository-name>/"` in `vite.config.ts`, build with `npm run build`, and publish the `dist/` folder to `gh-pages`.

---

## 📚 Academic Grounding & Credits

- **Course:** Corporate Governance of IT, Compliance, and Law (`DLMIGCR01-01_E`)
- **Institution:** IU International University of Applied Sciences
- **Tutor:** SK SAHIL
- **Pedagogical Model:** *Learn → Recall → Practice → Correct → Repeat*
