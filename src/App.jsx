import React, { useState } from 'react';
import {
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  Database, 
  Activity, 
  Code2, 
  GraduationCap, 
  Briefcase, 
  Check
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const contactInfo = {
    name: "Siyavuya Magobiana",
    title: "Software Engineer (NQF Level 6)",
    location: "Cape Town, Western Cape (willing to relocate to Gauteng Province)",
    phone: "064 901 2026",
    email: "siyamaggs.dev@gmail.com",
    linkedin: "https://www.linkedin.com/in/siyavuya-magobiana/",
    github: "https://github.com/Siya-Maggs"
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  };

  const skills = [
    { name: "Retrieval-Augmented Generation (RAG)", category: "ai", icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
    { name: "LLM Orchestration & Agents", category: "ai", icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
    { name: "Prompt Chaining & Workflows", category: "ai", icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
    { name: "Java (Spring Boot)", category: "backend", icon: <Layers className="w-5 h-5 text-indigo-400" /> },
    { name: "Python (Flask)", category: "backend", icon: <Layers className="w-5 h-5 text-indigo-400" /> },
    { name: "Node.js", category: "backend", icon: <Layers className="w-5 h-5 text-indigo-400" /> },
    { name: "REST API Architecture", category: "backend", icon: <Layers className="w-5 h-5 text-indigo-400" /> },
    { name: "React.js & Tailwind CSS", category: "frontend", icon: <Code2 className="w-5 h-5 text-cyan-400" /> },
    { name: "PostgreSQL & Database Design", category: "data", icon: <Database className="w-5 h-5 text-blue-400" /> },
    { name: "Systems Integration", category: "logic", icon: <Activity className="w-5 h-5 text-rose-400" /> },
    { name: "Signal Flow Mastery", category: "logic", icon: <Activity className="w-5 h-5 text-rose-400" /> },
    { name: "Test-Driven Development (TDD)", category: "process", icon: <CheckCircle2 className="w-5 h-5 text-amber-400" /> }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10 pointer-events-none" />

      {/* Hero Section */}
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-12 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-slate-800/80 pb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              NQF Level 6 Accredited
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
              {contactInfo.name}
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-medium tracking-wide">
              Junior Software Developer (Java, Python, React) | AI Automation & Agents Engineer
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-slate-400 pt-2">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-500" />{contactInfo.location}</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-slate-500" />{contactInfo.phone}</span>
            </div>
          </div>

          {/* Social Routing Callouts */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 min-w-[200px]">
            <button 
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold transition-all duration-200 shadow-lg shadow-emerald-500/15"
            >
              {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
              {copied ? "Email Copied!" : "Contact Email"}
            </button>
            <a 
              href={contactInfo.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all text-slate-300 font-medium"
            >
              <Linkedin className="w-4 h-4 text-slate-400" />
              LinkedIn Profile
            </a>
            <a 
              href={contactInfo.github} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 transition-all text-slate-300 font-medium"
            >
              <Github className="w-4 h-4 text-slate-400" />
              GitHub Portfolio
            </a>
          </div>
        </div>
      </header>

      {/* Main Structural Portfolio Data */}
      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">

        {/* Profile Summary */}
        <section className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-1 bg-gradient-to-b from-emerald-500 to-indigo-500 rounded" />
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">
              Professional Summary
            </h2>
          </div>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-4xl">
            Highly analytical and disciplined Software Engineer Alumnus from <strong className="text-emerald-400 font-semibold">WeThinkCode_ (NQF Level 6)</strong>, specializing in <strong className="text-emerald-400 font-semibold">System Integration</strong> and <strong className="text-white font-semibold">AI Automation</strong>. Leverages a unique technical background in Sound Engineering to approach software architecture with an advanced understanding of systems thinking, complex signal flow mastery, and structural, logical problem-solving. Proven capability to translate intricate operational workflows into clean, automated, and scalable software solutions.
          </p>
        </section>

        {/* Dynamic Skill Filtration Grid */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/60 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-6 w-1 bg-gradient-to-b from-emerald-500 to-indigo-500 rounded" />
              <h2 className="text-xl font-bold tracking-tight text-white">
                Technical Capabilities
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['all', 'ai', 'backend', 'frontend', 'data', 'logic', 'process'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === tab 
                      ? 'bg-slate-800 border border-emerald-500/40 text-emerald-400 shadow-md' 
                      : 'bg-transparent border border-transparent text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSkills.map((skill, index) => (
              <div 
                key={index}
                className="group flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900 hover:border-slate-800 hover:bg-slate-900 transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-slate-950 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold block mt-1">
                    {skill.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise S.I.A. Framework Block */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-emerald-500 to-indigo-500 rounded" />
            <h2 className="text-xl font-bold tracking-tight text-white">
              Enterprise Deployments & Core Frameworks
            </h2>
          </div>
          
          <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Active Orchestration Architecture</span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">S.I.A. Framework (Mothership Design Pattern)</h3>
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-3 py-1 rounded-md">
                Project Sentinel Target Deployment
              </div>
            </div>
            
            <p className="text-sm md:text-base text-slate-300 leading-relaxed max-w-4xl">
              An enterprise-grade, multi-agent RAG tracking pipeline structured around a unified <strong>Mothership Architectural Design</strong>. The framework strictly isolates cognitive artificial intelligence processes from backend state machines, ensuring low-latency communication, deterministic workflow processing, and complete inter-service data tracking.
            </p>

            {/* Agent Grid Distribution */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {/* Seneca */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-900 space-y-3 hover:border-emerald-500/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono text-emerald-400 uppercase bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10">Thinker Core</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Python / Flask</span>
                </div>
                <h4 className="text-base font-bold text-slate-200">S.I.A. Seneca</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Orchestrates advanced LLM tasks, semantic data retrieval, high-density prompt chaining, and asynchronous vector synchronization layers utilizing the Claude API.
                </p>
              </div>

              {/* Invictus */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-900 space-y-3 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono text-indigo-400 uppercase bg-indigo-500/5 px-2 py-0.5 rounded border border-indigo-500/10">Executor Core</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Java / Spring Boot</span>
                </div>
                <h4 className="text-base font-bold text-slate-200">S.I.A. Invictus</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Enforces strict microservice business conditions, constructs deterministic API gate paths, governs inter-service payload validation, and handles database routing.
                </p>
              </div>

              {/* Argus */}
              <div className="p-5 rounded-xl bg-slate-950 border border-slate-900 space-y-3 hover:border-rose-500/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold font-mono text-rose-400 uppercase bg-rose-500/5 px-2 py-0.5 rounded border border-rose-500/10">Observer Core</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">React / Vite</span>
                </div>
                <h4 className="text-base font-bold text-slate-200">S.I.A. Argus</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tracks continuous component execution parameters, displays active middleware message paths, and intercepts telemetry charts with precision sound-signal fidelity.
                </p>
              </div>
            </div>

            <div className="text-xs text-slate-500 pt-2 font-mono flex flex-wrap gap-x-6 gap-y-2">
              <span>• Database Matrix: Supabase Integration</span>
              <span>• Elective Standard: Systems Integration Core</span>
              <span>• Middleware Scope: Secure REST Gateways</span>
            </div>
          </div>
        </section>

        {/* Education Timeline */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-emerald-500 to-indigo-500 rounded" />
            <h2 className="text-xl font-bold tracking-tight text-white">
              Education & Academics
            </h2>
          </div>

          <div className="space-y-8">
            <div className="relative pl-6 md:pl-8 border-l-2 border-slate-800/80 space-y-4">
              <div className="absolute -left-[9px] top-1.5 p-1 rounded-full bg-slate-950 border border-emerald-500">
                <GraduationCap className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    Occupational Certificate: Software Engineer (NQF Level 6)
                  </h3>
                  <p className="text-sm text-slate-400">
                    WeThinkCode_ | Cape Town, Western Cape
                  </p>
                </div>
                <div className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 w-fit">
                  Graduation: 2026 (240 National Credits)
                </div>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Specialization:</strong> Custom System Integration logic and AI Automation architecture.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Core Curriculum:</strong> Rigorous peer-to-peer, project-driven software development pipeline simulating standard developer lifecycles.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span><strong>Key Achievements:</strong> Achieved 100% competency scores in advanced Java Object-Oriented Programming (OOP), Encapsulation, and Algorithmic Data Structures.</span>
                </li>
              </ul>
            </div>

            <div className="relative pl-6 md:pl-8 border-l-2 border-slate-800/80 space-y-4">
              <div className="absolute -left-[9px] top-1.5 p-1 rounded-full bg-slate-950 border border-indigo-500">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-extrabold text-white">
                    Higher Certificate in Sound Engineering (NQF Level 5)
                  </h3>
                  <p className="text-sm text-slate-400">
                    College of Audio Engineering | Cape Town, Western Cape
                  </p>
                </div>
                <div className="text-xs font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 w-fit">
                  Completed: 2022
                </div>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                  <span><strong>Core Focus:</strong> Complete mastery of hardware and software interfacing, complex acoustic signal routing, active troubleshooting, and diagnostic architecture.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
            <div className="h-6 w-1 bg-gradient-to-b from-emerald-500 to-indigo-500 rounded" />
            <h2 className="text-xl font-bold tracking-tight text-white">
              Professional History & Experience
            </h2>
          </div>

          <div className="relative pl-6 md:pl-8 border-l-2 border-slate-800/80 space-y-4">
            <div className="absolute -left-[9px] top-1.5 p-1 rounded-full bg-slate-950 border border-slate-800">
              <Briefcase className="w-4 h-4 text-slate-500" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg font-extrabold text-white">
                  Historical Operational Timeline
                </h3>
                <p className="text-sm text-slate-400">
                  Waiter Trainee | Spur Restaurant
                </p>
              </div>
              <div className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 w-fit">
                2021
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
              Managed fast-paced floor logistics, high-volume customer communication, and daily operations management, establishing a strong foundation in collaborative teamwork and execution excellence under pressure.
            </p>
          </div>
        </section>

        {/* Licensing & Languages */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-900 pt-12">
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['English (Fluent)', 'Afrikaans (Intermediate)', 'Xhosa (Native)', 'Tswana (Conversational)'].map((lang, index) => (
                <span key={index} className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Licensing</h3>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium">
              South African Driver's License: Code 10 / C1
            </span>
          </div>
        </section>

      </main>

      {/* Footer System Stamp */}
      <footer className="max-w-5xl mx-auto px-6 py-12 border-t border-slate-900 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Siyavuya Magobiana. All rights reserved.</p>
      </footer>
    </div>
  );
}
