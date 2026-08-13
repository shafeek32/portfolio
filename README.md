# Shafeek Latheef — Software Engineer & Full-Stack Developer Portfolio

A modern, high-performance developer portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**, featuring an interactive **Linux Terminal Simulator**, live particle network background, dynamic project modals, and a printable resume.

🌐 **Live Demo:** [portfolio-shafeek.vercel.app](https://github.com/shafeek32/portfolio) *(Update with your deployed URL)*

---

## ⚡ Features

- **Interactive Linux Terminal Simulator**: Fully functional interactive in-browser terminal with a custom virtual file system, tab auto-completion, history navigation (Up/Down arrow), and portfolio commands (`neofetch`, `skills`, `projects`, `cat about.txt`, `whoami`, etc.).
- **Living Particle Constellation Background**: Smooth canvas-based particle network with interactive cursor attraction and velocity physics.
- **Projects Showcase & Architectural Deep-Dives**: Filterable project gallery with live previews, GitHub source links, and detailed modal views detailing system architecture.
- **Skills Matrix**: Categorized tech stack matrix (Frontend, Backend, AI/ML, Databases, DevOps, Security) with live search and proficiency ratings.
- **Cybersecurity & TryHackMe Highlights**: Showcasing Linux navigation, OWASP Top 10 awareness, and security labs.
- **Printable / Downloadable Interactive CV**: On-demand resume modal with one-click print-to-PDF formatting.
- **Interactive Contact Form & Quick Actions**: Copy email/phone in one click, plus contact form with celebratory particle animations.
- **Responsive & Accessible**: High contrast dark theme, semantic HTML5, and responsive across all device breakpoints.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & Canvas API
- **Effects**: [canvas-confetti](https://www.npmjs.com/package/canvas-confetti)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shafeek32/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```
src/
├── components/          # UI Components (Hero, LiveTerminal, Projects, Skills, etc.)
├── data/                # Static data models (projects, skills, experience, certs)
├── terminal/            # Virtual File System & interactive terminal command parser
│   ├── commands/        # Terminal command handlers (filesystem, system, portfolio)
│   ├── filesystem.ts    # VFS directory tree & path resolution
│   └── parser.ts        # Command interpreter & autocompletion engine
├── types/               # TypeScript interfaces and type definitions
├── utils/               # Helper utilities
├── App.tsx              # Main application root
├── main.tsx             # React DOM entry point
└── index.css            # Custom CSS animations & Tailwind utilities
```

---

## 📬 Contact & Connect

- **Portfolio / GitHub:** [@shafeek32](https://github.com/shafeek32)
- **LinkedIn:** [Shafeek Latheef](https://www.linkedin.com/in/shafeek-latheef/)
- **WhatsApp:** [Chat on WhatsApp](https://wa.me/qr/Z73NBLC5WL7FO1)
- **Email:** [shafeekl2002@gmail.com](mailto:shafeekl2002@gmail.com)
- **Phone:** [+91 7593936350](tel:+917593936350)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
