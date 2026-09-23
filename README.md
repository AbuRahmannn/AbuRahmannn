<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>Abdul Rahman — Software Developer Portfolio | Python, DSA & Full-Stack</title>
  <meta name="description" content="Personal portfolio of Abdul Rahman - B.Tech Information Technology student at ALIET focused on Python, Data Structures & Algorithms, Django, SQL, MySQL, Firebase, and Software Development.">

  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Lucide Icons -->
  <script src="https://unpkg.com/lucide@latest"></script>
  <!-- Custom CSS (inlined from styles.css) -->
  <style>
/* Sleek Developer Portfolio Styles - Vercel & GitHub Inspired */

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

html, body {
  overflow-x: hidden;
  max-width: 100vw;
}

body {
  font-family: var(--font-sans);
  letter-spacing: -0.01em;
  line-height: 1.6;
  transition: background-color 0.25s ease, color 0.25s ease;
}

code, pre, .font-mono {
  font-family: var(--font-mono);
}

/* Custom smooth scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(148, 163, 184, 0.5);
}

/* Sleek Developer Card Component */
.dev-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 4px 12px rgba(0, 0, 0, 0.02);
  transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.dark .dev-card {
  background-color: rgba(15, 23, 42, 0.85);
  border-color: #1e293b;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.dev-card:hover {
  border-color: #38bdf8;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(56, 189, 248, 0.12);
}

.dark .dev-card:hover {
  border-color: #38bdf8;
  box-shadow: 0 8px 25px rgba(56, 189, 248, 0.18);
}

/* Sleek Developer Tags */
.dev-tag {
  background-color: #f1f5f9;
  border: 1px solid #cbd5e1;
  color: #334155;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.65rem;
  border-radius: 0.375rem;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
}

.dark .dev-tag {
  background-color: #1e293b;
  border-color: #334155;
  color: #cbd5e1;
}

/* Sleek Buttons */
.dev-btn-primary {
  background-color: #0284c7;
  color: #ffffff;
  font-weight: 600;
  border-radius: 0.75rem;
  padding: 0.6rem 1.25rem;
  min-height: 42px;
  box-shadow: 0 4px 14px rgba(2, 132, 199, 0.25);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dev-btn-primary:hover {
  background-color: #0369a1;
  transform: translateY(-1px);
  box-shadow: 0 6px 18px rgba(2, 132, 199, 0.35);
}

.dev-btn-secondary {
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  color: #1e293b;
  font-weight: 500;
  border-radius: 0.75rem;
  padding: 0.6rem 1.25rem;
  min-height: 42px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.dark .dev-btn-secondary {
  background-color: #0f172a;
  border-color: #1e293b;
  color: #f8fafc;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.dev-btn-secondary:hover {
  border-color: #0284c7;
  color: #0284c7;
  transform: translateY(-1px);
}

.dark .dev-btn-secondary:hover {
  border-color: #38bdf8;
  color: #38bdf8;
}

/* Theme Icon Hover Effect */
#theme-icon {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

#theme-toggle:hover #theme-icon {
  transform: rotate(20deg) scale(1.1);
}

/* Mobile Nav Menu Dropdown Animation */
#mobile-menu {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
}

#mobile-menu.open {
  max-height: 480px;
  opacity: 1;
}

/* Toast notification */
#toast {
  visibility: hidden;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  opacity: 0;
  transform: translateY(12px);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

#toast.show {
  visibility: visible;
  opacity: 1;
  transform: translateY(0);
}

/* Mobile Responsiveness Overrides */
@media (max-width: 639px) {
  .dev-card {
    padding: 1.15rem !important;
    border-radius: 0.875rem !important;
  }

  #toast {
    left: 16px;
    right: 16px;
    bottom: 16px;
    text-align: center;
    justify-content: center;
  }
}

/* Print Overrides */
@media print {
  body {
    background: #ffffff !important;
    color: #000000 !important;
  }
  header, footer, button, .no-print {
    display: none !important;
  }
}
  </style>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            slate: {
              850: '#151e2e',
              950: '#090d16',
            }
          }
        }
      }
    }
  </script>
</head>
<body class="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 font-sans antialiased selection:bg-sky-500 selection:text-white transition-colors duration-300">

  <!-- Fixed Navigation Header -->
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 no-print transition-colors">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-1.5 font-mono font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 hover:text-sky-600 dark:hover:text-sky-400 transition-colors shrink-0">
        <span class="text-sky-600 dark:text-sky-400">&lt;</span><span class="bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400 text-transparent bg-clip-text font-extrabold">AbdulRahman</span> <span class="text-sky-600 dark:text-sky-400">/&gt;</span>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-400">
        <a href="#about" class="hover:text-slate-900 dark:hover:text-white transition-colors">About</a>
        <a href="#projects" class="hover:text-slate-900 dark:hover:text-white transition-colors">Projects</a>
        <a href="#skills" class="hover:text-slate-900 dark:hover:text-white transition-colors">Skills</a>
        <a href="#experience" class="hover:text-slate-900 dark:hover:text-white transition-colors">Experience</a>
        <a href="#education" class="hover:text-slate-900 dark:hover:text-white transition-colors">Education</a>
      </nav>

      <!-- Header Action Buttons -->
      <div class="flex items-center gap-2 sm:gap-2.5">
        <!-- Theme Toggle Button -->
        <button id="theme-toggle" class="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-slate-100 transition-colors" title="Toggle Light/Dark Theme">
          <i id="theme-icon" data-lucide="sun" class="w-4 h-4"></i>
        </button>

        <!-- GitHub Header Link -->
        <a href="https://github.com/AbuRahmannn" target="_blank" rel="noopener" class="dev-btn-secondary hidden lg:inline-flex items-center gap-1.5 text-xs font-medium" title="GitHub: github.com/AbuRahmannn">
          <i data-lucide="github" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"></i> GitHub
        </a>

        <!-- LinkedIn Header Link -->
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="dev-btn-secondary hidden lg:inline-flex items-center gap-1.5 text-xs font-medium" title="LinkedIn Profile">
          <i data-lucide="linkedin" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"></i> LinkedIn
        </a>

        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" class="md:hidden p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100">
          <i data-lucide="menu" class="w-4 h-4"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div id="mobile-menu" class="md:hidden px-4 text-sm text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md">
      <a href="#about" class="block py-3 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors border-b border-slate-100 dark:border-slate-800">
        <i data-lucide="user" class="w-4 h-4 inline mr-2 text-sky-600 dark:text-sky-400"></i> About
      </a>
      <a href="#projects" class="block py-3 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors border-b border-slate-100 dark:border-slate-800">
        <i data-lucide="folder-git-2" class="w-4 h-4 inline mr-2 text-sky-600 dark:text-sky-400"></i> Projects
      </a>
      <a href="#skills" class="block py-3 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors border-b border-slate-100 dark:border-slate-800">
        <i data-lucide="code-2" class="w-4 h-4 inline mr-2 text-sky-600 dark:text-sky-400"></i> Skills
      </a>
      <a href="#experience" class="block py-3 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors border-b border-slate-100 dark:border-slate-800">
        <i data-lucide="briefcase" class="w-4 h-4 inline mr-2 text-sky-600 dark:text-sky-400"></i> Experience
      </a>
      <a href="#education" class="block py-3 hover:text-sky-600 dark:hover:text-sky-400 font-medium transition-colors">
        <i data-lucide="graduation-cap" class="w-4 h-4 inline mr-2 text-sky-600 dark:text-sky-400"></i> Education
      </a>

      <div class="pt-3 pb-4 flex flex-col gap-2.5 border-t border-slate-200 dark:border-slate-800">
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="dev-btn-secondary w-full py-3 text-xs font-medium flex items-center justify-center gap-2">
          <i data-lucide="linkedin" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> LinkedIn Profile
        </a>
        <a href="https://github.com/AbuRahmannn" target="_blank" rel="noopener" class="dev-btn-secondary w-full py-3 text-xs font-medium flex items-center justify-center gap-2">
          <i data-lucide="github" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> GitHub Profile
        </a>
      </div>
    </div>
  </header>

  <!-- Main Content Container -->
  <main class="max-w-5xl mx-auto px-4 sm:px-6 pt-24 sm:pt-28 pb-20 sm:pb-24 space-y-16 sm:space-y-24">

    <!-- About / Hero Section -->
    <section id="about" class="pt-2">
      <div class="flex flex-col-reverse md:flex-row md:items-center justify-between gap-8 sm:gap-10">

        <!-- Text & Info -->
        <div class="space-y-5 sm:space-y-6 flex-1">

          <!-- Recruiter Availability Badge -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-medium shadow-sm">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span> Open for Software Developer & Python/DSA Roles (B.Tech IT '27)
          </div>

          <!-- Name & Primary Title -->
          <div>
            <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Abdul Rahman
            </h1>
            <p class="text-sky-600 dark:text-sky-400 text-sm sm:text-lg font-bold mt-1.5">
              Software Developer & B.Tech Information Technology Undergrad
            </p>
          </div>

          <!-- Comprehensive Bio Paragraph -->
          <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-base leading-relaxed">
            I am a B.Tech Information Technology student at Andhra Loyola Institute of Engineering and Technology, Vijayawada (<span class="font-bold text-slate-900 dark:text-slate-100">CGPA: 7.78/10</span>). I specialize in <span class="font-semibold text-slate-900 dark:text-slate-100">Python, Data Structures & Algorithms (DSA), and software development</span>. I build practical, scalable applications using <span class="font-semibold text-slate-900 dark:text-slate-100">Django, SQL, MySQL, Firebase, and REST API integration</span>, backed by strong CS fundamentals in <span class="font-semibold text-slate-900 dark:text-slate-100">OOP, DBMS, Operating Systems, Computer Networks, Network Security, and Cryptography</span>.
          </p>

          <!-- Current Focus Box -->
          <div class="dev-card p-4 sm:p-5 text-xs sm:text-sm leading-relaxed flex items-start gap-3 sm:gap-3.5">
            <span class="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5 border border-sky-200 dark:border-sky-800">
              <i data-lucide="zap" class="w-4 h-4"></i>
            </span>
            <div>
              <span class="font-bold text-slate-900 dark:text-slate-100">Currently:</span> Strengthening Python + DSA, building full-stack applications with Django, MySQL & Firebase, and preparing for software developer opportunities.
            </div>
          </div>

          <!-- CTA Button Group -->
          <div class="space-y-3 pt-1">
            <!-- Row 1: Primary Actions -->
            <div class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
              <!-- Secondary Action: GitHub Profile -->
              <a href="https://github.com/AbuRahmannn" target="_blank" rel="noopener" class="dev-btn-secondary inline-flex items-center justify-center gap-2 text-xs">
                <i data-lucide="github" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> github.com/AbuRahmannn
              </a>

              <!-- Secondary Action: LinkedIn Profile Button -->
              <a href="https://linkedin.com" target="_blank" rel="noopener" class="dev-btn-secondary inline-flex items-center justify-center gap-2 text-xs">
                <i data-lucide="linkedin" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> LinkedIn Profile
              </a>
            </div>

            <!-- Row 2: Email Actions -->
            <div class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a href="mailto:23HP1A1249@gmail.com" class="dev-btn-secondary inline-flex items-center justify-center gap-2 text-xs break-all sm:break-normal">
                <i data-lucide="mail" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0"></i> <span>Email: 23HP1A1249@gmail.com</span>
              </a>

              <button onclick="copyText('23HP1A1249@gmail.com', 'Email')" class="dev-btn-secondary inline-flex items-center justify-center gap-1.5 text-xs">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i> Copy Email
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Recruiter Snapshot Metrics Grid (4 Metric Boxes Fully Covered & Richly Detailed) -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-800">

        <!-- Box 1: Target Role -->
        <div class="dev-card p-4 sm:p-5 space-y-1.5 sm:space-y-2">
          <div class="flex items-center gap-2 text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
            <i data-lucide="target" class="w-4 h-4"></i> Target Role
          </div>
          <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Software Developer / Python</div>
          <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Specializing in Data Structures, Algorithms, Django Web Applications & REST API Development.
          </p>
        </div>

        <!-- Box 2: Degree & Rank -->
        <div class="dev-card p-4 sm:p-5 space-y-1.5 sm:space-y-2">
          <div class="flex items-center gap-2 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
            <i data-lucide="award" class="w-4 h-4"></i> Degree & Academic Rank
          </div>
          <div class="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">B.Tech IT • 7.78 / 10 CGPA</div>
          <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Andhra Loyola Institute of Engineering & Technology (2023 – 2027 Graduating).
          </p>
        </div>

        <!-- Box 3: Core Stack -->
        <div class="dev-card p-4 sm:p-5 space-y-1.5 sm:space-y-2">
          <div class="flex items-center gap-2 text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
            <i data-lucide="code" class="w-4 h-4"></i> Core Tech Stack
          </div>
          <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Python, DSA, Django & SQL</div>
          <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            MySQL, Firebase Auth, Cloud Firestore, Leaflet.js, Chart.js & Git/GitHub.
          </p>
        </div>

        <!-- Box 4: Location & Mobility -->
        <div class="dev-card p-4 sm:p-5 space-y-1.5 sm:space-y-2">
          <div class="flex items-center gap-2 text-xs font-mono font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
            <i data-lucide="map-pin" class="w-4 h-4"></i> Location & Mobility
          </div>
          <div class="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Vijayawada, AP (Relocate OK)</div>
          <p class="text-[11px] sm:text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Available for Onsite, Hybrid & Remote engineering roles across India & globally.
          </p>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section id="projects" class="space-y-6">
      <div class="border-b border-slate-200 dark:border-slate-800 pb-4">
        <div class="flex items-center gap-3">
          <div class="p-2 sm:p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
            <i data-lucide="folder-git-2" class="w-5 h-5"></i>
          </div>
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">Featured Technical Projects</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Real-world applications built with Python, Django, SQL & Cloud APIs</p>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-5 sm:gap-6">

        <!-- Project 1: AgriSetu -->
        <div class="dev-card p-5 sm:p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-mono font-semibold border border-amber-200 dark:border-amber-500/20">
                Smart India Hackathon
              </span>
              <a href="https://github.com/AbuRahmannn" target="_blank" rel="noopener" class="dev-btn-secondary inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono" title="View Source on GitHub">
                <i data-lucide="github" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"></i> Code Source
              </a>
            </div>

            <div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                AgriSetu – AI-Powered Smart Crop Advisory Platform
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Full-stack agri-advisory web platform providing crop recommendation algorithms, disease detection, live weather insights, and soil analysis for farmers.
              </p>
            </div>

            <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <li class="flex items-start gap-2">
                <span class="text-sky-600 dark:text-sky-400 font-bold">•</span>
                <span>Implemented Firebase Auth & Cloud Firestore (NoSQL) for secure real-time session management and data synchronization.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-sky-600 dark:text-sky-400 font-bold">•</span>
                <span>Built geospatial farmer-buyer proximity matching using interactive <strong>Leaflet.js</strong> maps and distance calculation logic.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-sky-600 dark:text-sky-400 font-bold">•</span>
                <span>Supported multi-language localization in English, Hindi, and Telugu (i18n).</span>
              </li>
            </ul>
          </div>

          <div class="mt-5 sm:mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
            <span class="dev-tag">Python</span>
            <span class="dev-tag">Firebase</span>
            <span class="dev-tag">Firestore</span>
            <span class="dev-tag">Leaflet.js</span>
            <span class="dev-tag">JavaScript</span>
            <span class="dev-tag">i18n</span>
          </div>
        </div>

        <!-- Project 2: AQI Tester -->
        <div class="dev-card p-5 sm:p-6 flex flex-col justify-between">
          <div class="space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-3 py-1 rounded-full bg-sky-50 dark:bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-mono font-semibold border border-sky-200 dark:border-sky-500/20">
                Environmental Analytics
              </span>
              <a href="https://github.com/AbuRahmannn" target="_blank" rel="noopener" class="dev-btn-secondary inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono" title="View Source on GitHub">
                <i data-lucide="github" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"></i> Code Source
              </a>
            </div>

            <div>
              <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                AQI Tester – Real-Time Air Quality Monitoring System
              </h3>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                Django (Python) web application that collects, cleans, and analyzes live air quality metrics from external APIs for city-level safety comparisons.
              </p>
            </div>

            <ul class="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              <li class="flex items-start gap-2">
                <span class="text-sky-600 dark:text-sky-400 font-bold">•</span>
                <span>Processed pollutant metrics (PM2.5, PM10, CO, O3, NO2) using Python data parsing for multi-city comparisons.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-sky-600 dark:text-sky-400 font-bold">•</span>
                <span>Designed interactive <strong>Chart.js</strong> analytics dashboards & relational SQL/MySQL storage.</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-sky-600 dark:text-sky-400 font-bold">•</span>
                <span>Integrated REST API endpoints and Leaflet.js for geospatial visualization across regions.</span>
              </li>
            </ul>
          </div>

          <div class="mt-5 sm:mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
            <span class="dev-tag">Python</span>
            <span class="dev-tag">Django</span>
            <span class="dev-tag">SQL</span>
            <span class="dev-tag">MySQL</span>
            <span class="dev-tag">Chart.js</span>
            <span class="dev-tag">REST API</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Technical Focus & Skills Section -->
    <section id="skills" class="space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div class="p-2 sm:p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
          <i data-lucide="code-2" class="w-5 h-5"></i>
        </div>
        <div>
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">Technical Skills & Competencies</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Core computer science fundamentals and development tools</p>
        </div>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 sm:gap-5">

        <div class="dev-card p-4 sm:p-5 space-y-3.5">
          <div class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="terminal" class="w-4 h-4"></i> Languages & Logic
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="dev-tag font-semibold text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-600">Python (DSA Focus)</span>
            <span class="dev-tag">Java</span>
            <span class="dev-tag">SQL</span>
            <span class="dev-tag">JavaScript</span>
          </div>
        </div>

        <div class="dev-card p-4 sm:p-5 space-y-3.5">
          <div class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="layers" class="w-4 h-4"></i> Web & Backend Frameworks
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="dev-tag font-semibold text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-600">Django</span>
            <span class="dev-tag">RESTful APIs</span>
            <span class="dev-tag">Chart.js</span>
            <span class="dev-tag">Leaflet.js</span>
            <span class="dev-tag">HTML5 / CSS3</span>
          </div>
        </div>

        <div class="dev-card p-4 sm:p-5 space-y-3.5">
          <div class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="database" class="w-4 h-4"></i> Databases & Cloud Storage
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="dev-tag font-semibold text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-600">MySQL & SQL</span>
            <span class="dev-tag">Firebase Auth</span>
            <span class="dev-tag">Cloud Firestore</span>
            <span class="dev-tag">JDBC</span>
          </div>
        </div>

        <div class="dev-card p-4 sm:p-5 space-y-3.5">
          <div class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="wrench" class="w-4 h-4"></i> Developer Tools
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="dev-tag">Git & GitHub</span>
            <span class="dev-tag">Linux / Bash</span>
            <span class="dev-tag">VS Code</span>
          </div>
        </div>

        <div class="dev-card p-4 sm:p-5 space-y-3.5 sm:col-span-2">
          <div class="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider flex items-center gap-2">
            <i data-lucide="cpu" class="w-4 h-4"></i> Core Computer Science Foundations
          </div>
          <div class="flex flex-wrap gap-2">
            <span class="dev-tag font-bold text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-600">Data Structures & Algorithms</span>
            <span class="dev-tag">Object-Oriented Programming (OOP)</span>
            <span class="dev-tag">DBMS</span>
            <span class="dev-tag">Operating Systems</span>
            <span class="dev-tag">Computer Networks</span>
            <span class="dev-tag text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-600">Network Security</span>
            <span class="dev-tag text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-600">Cryptography</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Experience Section -->
    <section id="experience" class="space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div class="p-2 sm:p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
          <i data-lucide="briefcase" class="w-5 h-5"></i>
        </div>
        <div>
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">Work Experience</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Industry internships and practical security training</p>
        </div>
      </div>

      <div class="dev-card p-5 sm:p-7 space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3.5">
          <div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white">Cyber Security Intern</h3>
            <p class="text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold mt-0.5">Datavalley India Pvt. Ltd. & APSCHE Program</p>
          </div>
          <span class="px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono shrink-0 self-start sm:self-auto">
            May 2026 – Jun 2026 (8 Weeks)
          </span>
        </div>

        <ul class="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <li class="flex items-start gap-2.5">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"></i>
            <span>Completed an intensive 8-week cyber security internship program covering network security fundamentals, threat assessment, authentication protocols, and cryptography.</span>
          </li>
          <li class="flex items-start gap-2.5">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"></i>
            <span>Performed risk assessments, vulnerability scans, and hands-on system troubleshooting tasks using analytical problem-solving methodologies.</span>
          </li>
          <li class="flex items-start gap-2.5">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5"></i>
            <span>Researched and applied secure software development practices to real-world application architectures and database integrations.</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Certifications & Education Section -->
    <section id="education" class="space-y-6">
      <div class="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div class="p-2 sm:p-2.5 rounded-xl bg-sky-100 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">
          <i data-lucide="graduation-cap" class="w-5 h-5"></i>
        </div>
        <div>
          <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">Certifications & Education</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Academic degrees, verified credentials, and specialized coursework</p>
        </div>
      </div>

      <div class="grid md:grid-cols-2 gap-5 sm:gap-6">

        <!-- Certifications List -->
        <div class="space-y-4">
          <h3 class="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-1.5">
            <i data-lucide="award" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> Verified Certifications
          </h3>

          <div class="dev-card p-4.5 sm:p-5 space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Oracle Cloud Infrastructure (OCI) AI Foundations</h4>
                <p class="text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold mt-0.5">Oracle Certified Associate</p>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-[11px] font-mono font-semibold shrink-0 border border-sky-200 dark:border-sky-800">
                2025
              </span>
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Certified foundational knowledge in Machine Learning (ML), Deep Learning architectures, Generative AI models, Large Language Models (LLMs), and cloud AI infrastructure services.
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
              <span class="dev-tag">Artificial Intelligence</span>
              <span class="dev-tag">Generative AI & LLMs</span>
              <span class="dev-tag">Oracle Cloud</span>
            </div>
          </div>

          <div class="dev-card p-4.5 sm:p-5 space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Oracle Certified Java Foundations</h4>
                <p class="text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold mt-0.5">Oracle Junior Associate</p>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-[11px] font-mono font-semibold shrink-0 border border-sky-200 dark:border-sky-800">
                2024
              </span>
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Certified core Java programming fundamentals, Object-Oriented Programming principles (Abstraction, Inheritance, Polymorphism, Encapsulation), data structures, algorithms, and exception handling.
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
              <span class="dev-tag">Java Core</span>
              <span class="dev-tag">OOP Design</span>
              <span class="dev-tag">Algorithms</span>
            </div>
          </div>

          <div class="dev-card p-4.5 sm:p-5 space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Data Analytics Virtual Experience</h4>
                <p class="text-xs text-sky-600 dark:text-sky-400 font-mono font-semibold mt-0.5">Deloitte Australia (Forage)</p>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 text-[11px] font-mono font-semibold shrink-0 border border-sky-200 dark:border-sky-800">
                2024
              </span>
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Completed practical simulation tasks involving data preparation, statistical metrics analysis, dashboard visualization, SQL database querying, and business intelligence reporting.
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
              <span class="dev-tag">Data Analytics</span>
              <span class="dev-tag">SQL Queries</span>
              <span class="dev-tag">Data Visualization</span>
            </div>
          </div>
        </div>

        <!-- Education Timeline -->
        <div class="space-y-4">
          <h3 class="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 tracking-wider flex items-center gap-1.5">
            <i data-lucide="book-open" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> Academic History
          </h3>

          <div class="dev-card p-4.5 sm:p-5 space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">B.Tech in Information Technology</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">Andhra Loyola Institute of Engineering & Tech (ALIET)</p>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-bold shrink-0 border border-emerald-200 dark:border-emerald-500/20">
                2023 – 2027
              </span>
            </div>

            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
              <i data-lucide="award" class="w-3.5 h-3.5"></i> CGPA: 7.78 / 10.0
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Specializing in software engineering, Data Structures & Algorithms, database management, and cloud integrations. Active participant in national hackathons and developer communities.
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1 border-t border-slate-100 dark:border-slate-800">
              <span class="dev-tag">DSA</span>
              <span class="dev-tag">OOP</span>
              <span class="dev-tag">DBMS & SQL</span>
              <span class="dev-tag">Operating Systems</span>
              <span class="dev-tag">Networks & Security</span>
            </div>
          </div>

          <div class="dev-card p-4.5 sm:p-5 space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Intermediate (Class XII - MPC)</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">Sri Chaitanya Junior College | BIEAP</p>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-mono shrink-0">
                2020 – 2022
              </span>
            </div>

            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-mono font-semibold">
              Score: 64% | Mathematics, Physics & Chemistry
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Focused on higher secondary mathematics, linear algebra, calculus, physics problem solving, and analytical logic foundational to computer engineering.
            </p>
          </div>

          <div class="dev-card p-4.5 sm:p-5 space-y-3">
            <div class="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h4 class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Secondary School Certificate (SSC)</h4>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">St. John’s E.M. High School | Board of Secondary Education AP</p>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[11px] font-mono shrink-0">
                2009 – 2020
              </span>
            </div>

            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-mono font-bold">
              <i data-lucide="trophy" class="w-3.5 h-3.5"></i> Score: 100% (10.0 GPA Perfect Score)
            </div>

            <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Completed secondary education with a perfect 10.0 GPA score, demonstrating academic excellence, mathematics proficiency, and foundational computer studies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Footer Card -->
    <section id="contact" class="dev-card p-6 sm:p-10 text-center space-y-5 sm:space-y-6 no-print">
      <div class="max-w-xl mx-auto space-y-2.5">
        <h2 class="text-xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Let's Connect & Build Great Software</h2>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          I am actively seeking entry-level software developer roles, Python/DSA engineering positions, and developer internships. Feel free to reach out directly via email!
        </p>
      </div>

      <div class="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-center gap-3 sm:gap-3.5 pt-2">
        <a href="mailto:23HP1A1249@gmail.com" class="dev-btn-primary text-xs inline-flex items-center justify-center gap-2">
          <i data-lucide="mail" class="w-4 h-4"></i> Email Me: 23HP1A1249@gmail.com
        </a>

        <button onclick="copyText('23HP1A1249@gmail.com', 'Email')" class="dev-btn-secondary text-xs inline-flex items-center justify-center gap-2">
          <i data-lucide="copy" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> Copy Email
        </button>

        <a href="https://github.com/AbuRahmannn" target="_blank" rel="noopener" class="dev-btn-secondary text-xs inline-flex items-center justify-center gap-2">
          <i data-lucide="github" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> GitHub Profile
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noopener" class="dev-btn-secondary text-xs inline-flex items-center justify-center gap-2">
          <i data-lucide="linkedin" class="w-4 h-4 text-sky-600 dark:text-sky-400"></i> LinkedIn Profile
        </a>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="border-t border-slate-200 dark:border-slate-800 py-6 sm:py-8 text-center text-xs text-slate-500 dark:text-slate-400 no-print">
    <div class="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="font-medium">Abdul Rahman — Software Developer Portfolio</div>
      <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
        <a href="mailto:23HP1A1249@gmail.com" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1">
          <i data-lucide="mail" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"></i> Email
        </a>
        <a href="https://github.com/AbuRahmannn" target="_blank" rel="noopener" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1">
          <i data-lucide="github" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"></i> GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener" class="hover:text-sky-600 dark:hover:text-sky-400 transition-colors flex items-center gap-1">
          <i data-lucide="linkedin" class="w-3.5 h-3.5 text-sky-600 dark:text-sky-400"></i> LinkedIn
        </a>
      </div>
    </div>
  </footer>

  <script>
// Premium Developer Portfolio Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  initLucideIcons();

  // 1. Theme Toggle (Light Default, Dark Option via .dark class)
  initThemeToggle();

  // 2. Project Category Filtering
  initProjectFilters();

  // 3. Mobile Navigation Menu Toggle & Auto-Close
  initMobileNav();

});

function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// ----------------------------------------------------
// 1. Theme Toggle Logic (Light Mode by Default)
// ----------------------------------------------------
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    if (themeIcon) themeIcon.setAttribute('data-lucide', 'moon');
  } else {
    document.documentElement.classList.remove('dark');
    if (themeIcon) themeIcon.setAttribute('data-lucide', 'sun');
  }
  initLucideIcons();

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      if (themeIcon) {
        themeIcon.setAttribute('data-lucide', isDark ? 'moon' : 'sun');
        initLucideIcons();
      }
      showToast(isDark ? 'Switched to Dark Theme' : 'Switched to Light Theme');
    });
  }
}

// ----------------------------------------------------
// 2. Project Filtering Logic
// ----------------------------------------------------
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        if (filterVal === 'all' || categories.includes(filterVal)) {
          card.classList.remove('is-hidden');
        } else {
          card.classList.add('is-hidden');
        }
      });
    });
  });
}

// ----------------------------------------------------
// 3. Mobile Navigation Menu
// ----------------------------------------------------
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!menuBtn || !menu) return;

  const menuIcon = menuBtn.querySelector('[data-lucide]');

  function toggleMenu(forceClose = false) {
    const isOpening = forceClose ? false : !menu.classList.contains('open');

    if (isOpening) {
      menu.classList.add('open');
      if (menuIcon) menuIcon.setAttribute('data-lucide', 'x');
    } else {
      menu.classList.remove('open');
      if (menuIcon) menuIcon.setAttribute('data-lucide', 'menu');
    }
    initLucideIcons();
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Auto-close menu when clicking any nav link
  menu.querySelectorAll('a, button').forEach(item => {
    item.addEventListener('click', () => {
      toggleMenu(true);
    });
  });

  // Close when clicking outside header
  document.addEventListener('click', (e) => {
    const header = document.querySelector('header');
    if (header && !header.contains(e.target) && menu.classList.contains('open')) {
      toggleMenu(true);
    }
  });
}

// ----------------------------------------------------
// 4. Toast & Clipboard Copy
// ----------------------------------------------------
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.className = 'px-4 py-2.5 rounded-xl shadow-lg border text-xs font-semibold flex items-center gap-2 bg-slate-900 text-slate-100 border-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:border-slate-200';
  toast.innerHTML = `<i data-lucide="check-circle-2" class="w-4 h-4 text-sky-400 dark:text-sky-600"></i> <span>${msg}</span>`;
  initLucideIcons();

  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

function copyText(text, label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`${label} copied to clipboard!`);
    }).catch(() => {
      fallbackCopyText(text, label);
    });
  } else {
    fallbackCopyText(text, label);
  }
}

function fallbackCopyText(text, label) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(`${label} copied to clipboard!`);
  } catch (err) {
    showToast(`Failed to copy ${label}`);
  }
  document.body.removeChild(textArea);
}
  </script>
</body>
</html>
