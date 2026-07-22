import { useState, useEffect, useRef } from "react";
import {
  Mail,
  FileText,
  ExternalLink,
  Code2,
  Menu,
  X,
  ChevronRight,
  Briefcase,
  GraduationCap,
  Send,
  MapPin,
  Sparkles,
} from "lucide-react";

/* ─── SVG Icons ─── */

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 .5C5.73.5.67 5.56.67 11.83c0 5.01 3.25 9.26 7.76 10.76.57.1.78-.25.78-.55v-2.13c-3.16.69-3.83-1.36-3.83-1.36-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.52-.29-5.18-1.26-5.18-5.62 0-1.24.44-2.26 1.17-3.05-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.17a10.96 10.96 0 0 1 5.73 0c2.19-1.48 3.15-1.17 3.15-1.17.62 1.57.23 2.73.11 3.02.73.79 1.17 1.81 1.17 3.05 0 4.37-2.66 5.32-5.2 5.6.41.35.77 1.05.77 2.12v3.14c0 .31.21.66.79.55 4.51-1.5 7.75-5.75 7.75-10.76C23.33 5.56 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

/* ─── Typewriter Effect ─── */

function Typewriter({ texts = [], delay = 90, pause = 1600 }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;
    const current = texts[textIndex];
    let timeout;
    if (!isDeleting) {
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setCurrentText((p) => p + current[charIndex]);
          setCharIndex((p) => p + 1);
        }, delay);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setCurrentText((p) => p.slice(0, -1));
          setCharIndex((p) => p - 1);
        }, delay / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((p) => (p + 1) % texts.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, delay, pause]);

  return (
    <span className="text-cyan-400">
      {currentText}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}

/* ─── Reveal-on-scroll hook ─── */

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── Animated wrapper ─── */

function Reveal({ children, delay = 0 }) {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ─── Section Heading ─── */

function SectionHeading({ index, title }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="font-mono text-lg text-cyan-400">{index}.</span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
        {title}
      </h2>
      <div className="ml-4 hidden h-px flex-1 bg-slate-800 sm:block" />
    </div>
  );
}

/* ─── Data ─── */

const skills = [
  { name: "HTML", image: "/HTML.png" },
  { name: "CSS", image: "/CSS.png" },
  { name: "JavaScript", image: "/JS.png" },
  { name: "React", image: "/React.png" },
  { name: "Tailwind CSS", image: "/Tailwind.png" },
  { name: "Python", image: "/Python.png" },
  { name: "Flask", image: "/Flask.png" },
  { name: "Jinja", image: "/Jinja.png" },
  { name: "SQLite", image: "/SQLite.png" },
];

const experiences = [
  {
    role: "Software Development Student",
    company: "Access Creative College",
    period: "2024 — Present",
    description:
      "Studying Level 3 Software Development, covering full-stack fundamentals including front-end frameworks, back-end services, databases, version control, and agile methodologies. Building real-world projects to solidify skills.",
    tags: ["React", "Python", "Flask", "SQLite", "Git"],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 — 2023",
    description:
      "Designed and developed responsive websites for small businesses and personal clients. Focused on clean UI, fast load times, and mobile-first design using modern CSS and JavaScript frameworks.",
    tags: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
  },
  {
    role: "Web and Game Developer",
    company: "TechEd",
    period: "2026",
    description:
      "Contributed bug fixes, documentation improvements, and small features to various open-source repositories. Collaborated with developers to create a `Phising Game` to educate kids on how to stay safe online .",
    tags: ["Git", "GitHub", "Collaboration", "Code Review", "Godot "],
  },
];

const projects = [
  {
    title: "Gluca",
    description:
      "A full-stack web application that helps people with diabetes make informed meal choices by recommending recipes tailored to their blood sugar levels and dietary needs.",
    tech: ["React", "Flask", "SQLite", "Tailwind"],
    github: "https://github.com/eyi-tuoyo/gluca",
  },
  {
    title: "Phishing Game",
    description:
      "An educational fishing game where players catch safe fish while avoiding malicious ones, learning to recognize common cybersecurity threats such as phishing, malware, and social engineering attacks.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/eyi-tuoyo/Norfolk-Show",
  },
  {
    title: "Database VLE",
    description:
      "A virtual learning environment (VLE) dashboard that provides students, parents, and teachers with role-based access to academic information, progress tracking, and educational resources.",
    tech: ["Python", "Flask", "Jinja", "SQLite"],
    github: "https://github.com/eyituoyo/Database-vle",
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/* ─── Main App Component ─── */

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      const anchor = e.target.closest("a[href^='#']");
      if (!anchor) return;
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300 antialiased selection:bg-cyan-400/20 selection:text-cyan-100">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute top-[60%] -right-40 h-[400px] w-[600px] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="group flex items-center gap-2 font-mono text-sm font-semibold"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-cyan-400/10 text-cyan-400 transition group-hover:bg-cyan-400/20">
              <Code2 className="h-4 w-4" />
            </span>
            <span className="text-slate-100">
              eyituoyo<span className="text-cyan-400">.dev</span>
            </span>
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex items-center gap-2 font-mono text-sm text-slate-400 transition hover:text-cyan-400"
                >
                  <span className="text-xs text-cyan-400">0{i + 1}.</span>
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 px-5 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
              >
                <FileText className="h-5 w-5"/>
                View CV
              </a>
            </li>
          </ul>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden text-slate-200"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-lg md:hidden">
            <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2 font-mono text-sm text-slate-300 hover:bg-slate-900"
                  >
                    <span className="text-xs text-cyan-400">0{i + 1}.</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg border border-cyan-400 px-5 py-3 text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-900"
                >
                  <FileText className="h-3 w-5"/>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section
          id="top"
          className="flex min-h-screen flex-col justify-center py-24"
        >
          <Reveal>
            <p className="mb-4 font-mono text-sm text-cyan-400">
              Hi, my name is
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="text-5xl font-extrabold tracking-tight text-slate-100 sm:text-6xl md:text-7xl">
              Eyituoyo Besidonne.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-400 sm:text-4xl md:text-5xl">
              I build things for the web.
            </h2>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-6 h-8 font-mono text-lg text-slate-300 sm:text-xl">
              &gt;{" "}
              <Typewriter
                texts={[
                  "Software Student",
                  "Full-Stack Developer",
                  "Problem Solver",
                ]}
              />
            </div>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              I'm a Level 3 Software Development student passionate about
              building clean, functional web applications. I enjoy turning ideas
              into real products — from responsive front-ends in{" "}
              <span className="text-slate-200">React</span> to back-end services
              in <span className="text-slate-200">Flask</span>.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md border border-cyan-400/60 bg-cyan-400/5 px-6 py-3 font-mono text-sm text-cyan-400 transition hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                View My Work
                <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 font-mono text-sm text-slate-300 transition hover:text-cyan-400"
              >
                Get in touch <Send className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </section>

          {/* ABOUT */}
          <section id="about" className="scroll-mt-24 py-24">
            <Reveal>
              <SectionHeading index="01" title="About Me" />
            </Reveal>

            <div className="mt-12 grid items-start gap-12 lg:grid-cols-[2fr_1fr]">

              {/* Text */}
              <Reveal delay={100}>
                <div>
                  <div className="space-y-6 text-slate-400 leading-8">
                    <p>
                      Hello! I'm{" "}
                      <span className="font-semibold text-slate-200">
                        Eyituoyo
                      </span>
                      , a software development student passionate about building clean,
                      responsive web applications and solving real-world problems through
                      technology.
                    </p>

                    <p>
                      My journey began with curiosity about how websites work and has
                      grown into hands-on experience across the full stack—from creating
                      modern user interfaces using{" "}
                      <span className="font-medium text-cyan-400">
                        React & Tailwind CSS
                      </span>{" "}
                      to developing APIs with{" "}
                      <span className="font-medium text-cyan-400">
                        Flask & SQLite
                      </span>.
                    </p>

                    <p>
                      I'm constantly improving my skills by building projects, exploring
                      new technologies, and learning modern software development
                      practices. My goal is to become a full-stack software engineer who
                      creates applications that people genuinely enjoy using.
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-10">
                    <h3 className="mb-5 text-lg font-semibold text-slate-200">
                      Technologies I've been working with
                    </h3>

                    <div className="grid grid-cols-3 gap-y-4">
                      {[
                        "React",
                        "Python",
                        "Flask",
                        "Tailwind CSS",
                        "SQLite",
                        "JavaScript",
                      ].map((tech) => (
                        <div key={tech} className="flex items-center gap-2">
                          <ChevronRight className="h-4 w-4 text-cyan-400" />
                          <span className="text-slate-300">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Photo */}
              <Reveal delay={200}>
                <div className="flex justify-center lg:justify-end">
                  <div className="group relative">
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 opacity-30 blur transition group-hover:opacity-60" />

                    <div className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-slate-900 p-2">
                      <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950">
                        <span className="select-none bg-gradient-to-r from-cyan-300 via-cyan-400 to-indigo-400 bg-clip-text text-8xl 
                        font-extrabold tracking-tight text-transparent transition duration-500 group-hover:scale-110">
                          EB
                        </span>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.12),transparent_60%)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

            </div>
          </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 py-20">
          <Reveal>
            <SectionHeading index="02" title="Skills & Tools" />
          </Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {skills.map((skill, i) => (
              <Reveal key={skill.name} delay={i * 40}>
                <div className="group flex flex-col items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-6 text-center transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-slate-800/60">
                  {skill.image ? (
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`font-mono text-lg font-bold ${skill.color}`}>
                      {"{ }"}
                    </div>
                  )}
                </div>

                <span className="text-sm font-semibold tracking-wide text-slate-200 transition-colors duration-300 group-hover:text-cyan-400">
                  {skill.name}
                </span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24 py-20">
          <Reveal>
            <SectionHeading index="03" title="Experience" />
          </Reveal>
          <div className="relative space-y-6 border-l border-slate-800 pl-6 md:pl-8">
            {experiences.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 100}>
                <div className="relative">
                  <div className="absolute -left-[29px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-400 bg-slate-950 md:-left-[33px]">
                    <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  </div>
                  <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-cyan-400/30 hover:bg-slate-900/70">
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-slate-100">
                        {exp.role}{" "}
                        <span className="text-cyan-400">@ {exp.company}</span>
                      </h3>
                      <span className="font-mono text-xs text-slate-500">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-cyan-400/10 px-2.5 py-1 font-mono text-xs text-cyan-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats */}
          <Reveal delay={200}>
            <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: Briefcase, value: "10+", label: "Projects Built" },
                { icon: Code2, value: "12", label: "Technologies" },
                { icon: GraduationCap, value: "L3", label: "Software Dev" },
                { icon: Sparkles, value: "24/7", label: "Learning" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-5 text-center transition hover:border-cyan-400/40"
                >
                  <s.icon className="mx-auto mb-2 h-5 w-5 text-cyan-400" />
                  <div className="text-2xl font-bold text-slate-100">
                    {s.value}
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 py-20">
          <Reveal>
            <SectionHeading index="04" title="Projects I've Built" />
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 80}>
                <div className="group flex h-full flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-slate-900/80 hover:shadow-xl hover:shadow-cyan-500/5">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-400/10">
                        <Code2 className="h-5 w-5 text-cyan-400" />
                      </div>
                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label="GitHub"
                          className="text-slate-400 transition hover:text-cyan-400"
                        >
                          <GithubIcon className="h-5 w-5" />
                        </a>
                        <a
                          href={project.demo}
                          aria-label="Live demo"
                          className="text-slate-400 transition hover:text-cyan-400"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-slate-100 transition group-hover:text-cyan-400">
                      {project.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-800 pt-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <a
                href="https://github.com/eyi-tuoyo"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-cyan-400/60 bg-cyan-400/5 px-6 py-3 font-mono text-sm text-cyan-400 transition hover:bg-cyan-400/10"
              >
                <GithubIcon className="h-4 w-4" />
                See more on GitHub
              </a>
            </div>
          </Reveal>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 py-24">
          <Reveal>
            <SectionHeading index="05" title="Get In Touch" />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-lg leading-relaxed text-slate-400">
                I'm currently open to internships, entry-level developer roles,
                and interesting collaborations. Whether you have a question, a
                project idea, or just want to say hi — my inbox is always open.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="mailto:eyituoyo117@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-md bg-cyan-400 px-6 py-3 font-mono text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  <Mail className="h-4 w-4" />
                  Say Hello
                  <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href="/CV.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-slate-700 px-6 py-3 font-mono text-sm text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-400"
                >
                  <FileText className="h-4 w-4" />
                  Download CV
                </a>
              </div>

              <div className="mt-10 flex items-center justify-center gap-5">
                <a
                  href="https://github.com/eyi-tuoyo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  <GithubIcon className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/Elijah Besidonne"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </a>
                <a
                  href="mailto:eyituoyo117@gmail.com"
                  aria-label="Email"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-4 py-2 font-mono text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                Open to opportunities • UK 
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-slate-800/60 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="font-mono text-xs text-slate-500">
              © {new Date().getFullYear()} Eyituoyo Besidonne. Built with React
              &amp; Tailwind.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
