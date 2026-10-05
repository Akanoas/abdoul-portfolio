/*
Design direction: Editorial developer portfolio for recruiters. A left-weighted hero introduces verified experience, then projects move from real commercial work to full-stack academic depth.
*/
import { ArrowUpRight, Code2, GraduationCap, Layers3, Mail, MapPin, Menu, ServerCog, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import heroArtwork from "@/assets/software-engineer-editorial.png";

interface HomeProps { targetSection?: string; }

const projects = [
  {
    title: "CandidateFlow",
    role: "Full-Stack Recruiting Platform",
    type: "Backend & React",
    description: "A full-stack recruiting operations platform with candidate/job CRUD and pipeline reporting. Secured with JWT authentication. (Demo Login: fake-email@gmail.com | Pass: 123456)",
    stack: ["React/Vite", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
    demoLink: "https://d424-software-engineering-capstone-1-bye1.onrender.com/",
    githubLink: "https://github.com/Akanoas/CandidateFlow",
    tone: "ink",
  },
  {
    title: "Taniti Tourism",
    role: "Front-End Web UI",
    type: "UX/UI Development",
    description: "A highly visual, responsive front-end web application for a tropical island destination. Focused on modern UI/UX principles, mobile-first design, and clear navigation flows.",
    stack: ["HTML/CSS", "JavaScript", "UX Design"],
    demoLink: "https://taniti-tourism-prototype-alpha.vercel.app/",
    githubLink: "https://github.com/Akanoas/taniti-tourism-prototype",
    tone: "cobalt",
  },
  {
    title: "Akano Electronics Inventory",
    role: "Java API",
    type: "Backend Architecture",
    description: "A Java and Spring Boot web application to manage electronic parts and product bundles. Implemented full CRUD functionality, search filtering, and inventory tracking.",
    stack: ["Java", "Spring Boot", "Thymeleaf", "MVC"],
    demoLink: "https://d287-java-frameworks-jwxb.onrender.com/mainscreen",
    githubLink: "https://github.com/Akanoas/Akano-electronics-inventory-system-spring-boot",
    tone: "paper",
  },
  {
    title: "Akano Phone Store",
    role: "Founder and Web Developer",
    type: "Live E-Commerce",
    description: "A public technology storefront for phones, computers, tablets, and accessories. The site includes catalog browsing, accounts, cart functionality, installment-plan information, and WhatsApp support.",
    stack: ["React", "WooCommerce", "Hostinger", "Render"],
    demoLink: "https://www.akanostore.com/",
    githubLink: "https://github.com/Akanoas",
    tone: "paper",
  },
  {
    title: "Vacation Scheduler",
    role: "Native Android App",
    type: "Mobile Development",
    description: "A comprehensive travel itinerary planning app using local SQLite persistence, background notifications, and multi-screen navigation.",
    stack: ["Java", "Android SDK", "SQLite"],
    demoLink: "https://appetize.io/app/b_ag66q5yoiu63mk66hqmf7cu2na",
    githubLink: "https://github.com/Akanoas",
    tone: "paper",
  }
];

const skills = [
  "Java", "JavaScript", "Python", "SQL", "React", "Spring Boot", "PostgreSQL", "Docker", "Git/GitLab", "REST APIs", "JWT", "Android"
];

export default function Home({ targetSection }: HomeProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (targetSection) document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
  }, [targetSection]);

  const closeMenu = () => setOpen(false);

  return (
    <main className="min-h-[100dvh] overflow-x-hidden bg-[#f6f2e9] text-[#172033]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-10 md:py-7">
        <a href="#top" className="flex items-center gap-3 font-bold tracking-[-0.03em]" aria-label="Go to top">
          <span className="grid h-9 w-9 place-items-center bg-[#2456d6] text-sm font-black text-white">AA</span>
          <span>Abdoul Akano</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex" aria-label="Primary navigation">
          <a className="hover:text-[#2456d6]" href="#work">Work</a>
          <a className="hover:text-[#2456d6]" href="#skills">Skills</a>
          <a className="hover:text-[#2456d6]" href="#education">Education</a>
          <a className="hover:text-[#2456d6]" href="#contact">Contact</a>
        </nav>
        <a href="https://github.com/Akanoas" target="_blank" rel="noreferrer" className="hidden items-center gap-2 border border-[#172033] px-4 py-2 text-sm font-bold transition hover:bg-[#172033] hover:text-white md:inline-flex">
          GitHub <ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <button className="grid h-10 w-10 place-items-center border border-[#172033] md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {open && (
        <nav className="mx-5 mb-4 grid border border-[#172033] bg-[#fdfbf6] p-4 text-sm font-semibold md:hidden" aria-label="Mobile navigation">
          {["work", "skills", "education", "contact"].map((item) => <a key={item} href={`#${item}`} className="border-b border-[#172033]/15 py-3 capitalize last:border-0" onClick={closeMenu}>{item}</a>)}
        </nav>
      )}

      <section id="top" className="mx-auto grid max-w-7xl items-stretch gap-7 px-5 pb-16 pt-7 md:grid-cols-[1.05fr_.95fr] md:px-10 md:pb-24 md:pt-12">
        <div className="flex min-h-[500px] flex-col justify-between border-l-4 border-[#2456d6] pl-5 md:min-h-[560px] md:pl-9">
          <div>
            <p className="reveal mb-5 text-sm font-bold uppercase tracking-[0.15em] text-[#2456d6]">Software Engineer</p>
            <h1 className="reveal reveal-delay max-w-3xl text-5xl font-black leading-[.96] tracking-[-0.07em] sm:text-6xl lg:text-7xl">I build software that moves from coursework to production.</h1>
            <p className="reveal reveal-delay-2 mt-7 max-w-xl text-lg leading-8 text-[#4a5261]">Full-stack developer focused on React, Java, Spring Boot, and practical systems that people can use.</p>
          </div>
          <div className="reveal reveal-delay-3 flex flex-wrap gap-3 pt-8">
            <a href="#work" className="inline-flex items-center gap-2 bg-[#2456d6] px-5 py-3 font-bold text-white transition hover:bg-[#193fa1]">View selected work <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/in/abdoul-assirou-akano" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-[#172033] px-5 py-3 font-bold transition hover:bg-[#172033] hover:text-white">LinkedIn <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <div className="relative overflow-hidden bg-[#172033] p-4 md:p-6">
          <img src={heroArtwork} alt="Abstract cobalt and graphite composition representing connected software systems" className="h-full min-h-[390px] w-full object-cover object-center" />
          <div className="absolute bottom-4 left-4 right-4 bg-[#f6f2e9] p-4 md:bottom-6 md:left-6 md:right-6">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#2456d6]">Available for early-career software roles</p>
            <p className="mt-2 text-sm font-semibold">B.S. Software Engineering expected December 2026</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#172033]/15 bg-[#e8edf9] py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-x-7 gap-y-3 px-5 text-sm font-bold text-[#364157] md:px-10">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#2456d6]">Selected work</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Practical projects, not placeholder concepts.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4a5261]">My portfolio includes a live e-commerce site, a deployed full-stack recruiting platform, and engineering coursework across web, backend, and Android development.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.35fr_.85fr]">
          {projects.map((project, index) => (
            <article key={project.title} className={`project-card ${index === 0 ? "lg:row-span-2" : ""} border border-[#172033]/20 p-6 md:p-8 ${project.tone === "ink" ? "!bg-[#172033] !text-[#f6f2e9]" : "bg-[#fdfbf6]"}`}>
              <div className="flex items-start justify-between gap-5">
                <span className={`text-xs font-bold uppercase tracking-[0.12em] ${project.tone === "ink" ? "text-[#a9c1ff]" : "text-[#2456d6]"}`}>{project.type}</span>
                <div className="flex gap-2">
                  {project.demoLink && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" title="Live Demo" className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border transition ${project.tone === "ink" ? "border-[#f6f2e9]/40 hover:bg-[#f6f2e9] hover:text-[#172033]" : "border-[#172033] hover:bg-[#172033] hover:text-white"}`}>Demo <ArrowUpRight size={14} /></a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noreferrer" title="GitHub Code" className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border transition ${project.tone === "ink" ? "border-[#f6f2e9]/40 hover:bg-[#f6f2e9] hover:text-[#172033]" : "border-[#172033] hover:bg-[#172033] hover:text-white"}`}>Code <Code2 size={14} /></a>
                  )}
                </div>
              </div>
              <h3 className="mt-12 text-3xl font-black tracking-[-0.04em]">{project.title}</h3>
              <p className={`mt-2 text-sm font-bold ${project.tone === "ink" ? "text-[#c7d5fa]" : "text-[#566074]"}`}>{project.role}</p>
              <p className={`mt-6 max-w-xl leading-7 ${project.tone === "ink" ? "text-[#e6eaf5]" : "text-[#4a5261]"}`}>{project.description}</p>
              <div className="mt-7 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className={`border px-3 py-1.5 text-xs font-bold ${project.tone === "ink" ? "border-[#f6f2e9]/30 text-[#e6eaf5]" : "border-[#172033]/25 text-[#364157]"}`}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="bg-[#172033] py-20 text-[#f6f2e9] md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[.72fr_1.28fr] md:px-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#a9c1ff]">Technical focus</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">A practical stack for full-stack work.</h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2">
            <SkillGroup icon={<Code2 size={24} />} title="Build interfaces" content="React, Vite, JavaScript, HTML/CSS, Bootstrap, Angular, UI/UX wireframing and usability testing." />
            <SkillGroup icon={<ServerCog size={24} />} title="Design services" content="Java, Spring Boot, Spring Framework, REST APIs, JPA/Hibernate, JWT authentication, SQL." />
            <SkillGroup icon={<Layers3 size={24} />} title="Ship and operate" content="PostgreSQL, MySQL, SQLite/Room, Docker, Git/GitLab, Render, Hostinger, WooCommerce." />
            <SkillGroup icon={<GraduationCap size={24} />} title="Keep learning" content="WGU software engineering coursework in data structures, Java, security, design, quality assurance, mobile, and cloud foundations." />
          </div>
        </div>
      </section>

      <section id="education" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#2456d6]">Education</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Engineering depth, built course by course.</h2>
          </div>
          <div className="border-l-2 border-[#2456d6] pl-6">
            <h3 className="text-2xl font-black">Western Governors University</h3>
            <p className="mt-2 font-bold text-[#4a5261]">B.S. Software Engineering. Expected December 2026.</p>
            <p className="mt-5 leading-7 text-[#4a5261]">Completed coursework includes Data Structures and Algorithms I, Java Frameworks, Advanced Data Management, UI Design, UX Design, Back-End Programming, Advanced Java, Software Security and Testing, Software Design and Quality Assurance, Software Engineering, and Mobile Application Development.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="bg-[#e8edf9] p-5"><p className="font-black">Back-End Developer Certificate</p><p className="mt-2 text-sm text-[#4a5261]">Western Governors University, issued September 2026</p></div>
              <div className="bg-[#e8edf9] p-5"><p className="font-black">Front-End Developer Certificate</p><p className="mt-2 text-sm text-[#4a5261]">Western Governors University, issued June 2026</p></div>
              <div className="bg-[#e8edf9] p-5 sm:col-span-2"><p className="font-black">Web Developer Certified</p><p className="mt-2 text-sm text-[#4a5261]">Fullstack Academy, issued October 2023. Credential expiration December 2030.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#2456d6] px-5 py-20 text-white md:px-10 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.15em] text-[#dce7ff]">Contact</p><h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">Let’s discuss your next software project.</h2></div>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.linkedin.com/in/abdoul-assirou-akano" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white px-5 py-3 font-bold transition hover:bg-white hover:text-[#2456d6]"><ArrowUpRight size={18} /> LinkedIn</a>
            <a href="https://github.com/Akanoas" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-white px-5 py-3 font-bold transition hover:bg-white hover:text-[#2456d6]"><Code2 size={18} /> GitHub</a>
            <a href="mailto:akano1nassirou@gmail.com" className="inline-flex items-center gap-2 border border-[#172033] bg-[#172033] px-5 py-3 font-bold text-white transition hover:bg-[#f6f2e9] hover:text-[#172033]"><Mail size={18} /> Email</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-[#4a5261] md:flex-row md:items-center md:justify-between md:px-10">
        <p>© 2026 Abdoul Assirou Akano</p>
        <p className="inline-flex items-center gap-2"><MapPin size={15} /> Hamden, Connecticut</p>
      </footer>
    </main>
  );
}

function SkillGroup({ icon, title, content }: { icon: ReactNode; title: string; content: string }) {
  return <article className="border-l border-[#f6f2e9]/35 pl-5"><div className="text-[#a9c1ff]">{icon}</div><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-[#d9deea]">{content}</p></article>;
}
