import { useEffect, useRef, useState } from 'react'

// ---------- Images ----------
import Me from './assets/images/Me.jpg'
import basc from './assets/images/basc.png'
import nub from './assets/images/NUB.png'
import vrshs from './assets/images/VRSHS.png'
import cbes from './assets/images/cbes.png'
import ipv4 from './assets/images/IPV4-cert.png'
import nubcert from './assets/images/NUB-cert.png'
import bsaucert from './assets/images/BSAU-cert.jpeg'
import vlan from './assets/images/VLan Fundamentals.png'
import Net from './assets/images/Networking.jpeg'
import ipv6 from './assets/images/IPv6.jpeg'
import outskill from './assets/images/Outskill.png'
import gsdc from './assets/images/GSDC.png'

// ---------- Edit your details here ----------
const PROFILE = {
  name: 'Lee Andrei',
  fullName: 'Lee Andrei Liwanag',
  email: 'ganawilandreilee@gmail.com',
  github: 'https://github.com/Ganawil60',
}

const PROJECTS = [
  {
    tag: 'Capstone Project',
    title: 'Hostel Management System with LMS Integration',
    tagline: '',
    desc: "Served as the Lead Front-End Developer for an enterprise-scale platform combining a Hostel Management System, Inventory, and an LMS for the Institute of Management. Built the first version of the user interfaces and interactive UI logic from scratch using Vanilla JavaScript, HTML5, and CSS3, then used AI-assisted development to refine the design, optimize performance, fix errors, and build out additional front-end features, ensuring seamless integration with the backend developer’s architecture.",
    role: 'Lead Front-End Developer',
    stack: ['HTML5', 'CSS3', 'Vanilla JavaScript'],
    extraLabel: 'Modules',
    extra: ['Hostel Management', 'Inventory', 'LMS'],
    links: [],    
  },
  {
    tag: 'Side Project',
    title: 'Fildr',
    tagline: 'Fill. Folder. Done.',
    desc: 'Stop sorting files by hand. Fildr is a free Windows app that previews where every file will go, sorts them into folders like Pictures, Videos, and Docs, and can watch a folder in the background to sort new files as they arrive. Includes Undo, a duplicate finder, and an activity log. Built with Python and CustomTkinter, packaged with PyInstaller and Inno Setup as a Windows installer.',
    role: 'Solo Developer',
    stack: ['Python', 'customtkinter', 'PyInstaller'],
    extraLabel: 'Platform',
    extra: ['Windows only'],
    links: [
      { label: 'GitHub', href: 'https://github.com/Ganawil60/Fildr' },
      { label: 'Watch Demo', href: 'https://youtu.be/3WlPHS4oxso' },
      { label: 'Download', href: 'https://ganawil60.github.io/Fildr-Website/' },
    ],
  },
  {
    tag: 'Side Project',
    title: 'Liwanag-Gallery',
    tagline: '',
    desc: "A home for my favorite photography. Liwanag Gallery is a gallery website where I share my best shots, built around a clean layout that lets the photos take center stage. Images are hosted on Cloudinary, which handles storage, resizing, and fast delivery. Designed and built by me as a personal side project.",
    role: 'Solo Developer',
    stack: ['Tailwind CSS', 'Next.js', 'React'],
    extraLabel: 'Image Library',
    extra: ['Claudinary'],
    links: [
      { label: 'Visit', href: 'https://liwanag-gallery.vercel.app/' },
    ],
  },
]

const NAV = [
  ['Home', '#home'],
  ['Skills', '#skills'],
  ['Projects', '#proj'],
  ['Certificates', '#cert'],
  ['Education', '#educ'],
  ['Contact', '#contact'],
]

const SKILL_GROUPS = [
  { title: 'AI-Assisted Development', skills: ['AI-Assisted Programming', 'AI-Driven Debugging', 'Prompt Engineering', 'Generative AI'] },
  { title: 'Front-End', skills: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'] },
  { title: 'Back-End', skills: ['PHP', 'Laravel', 'Java', 'Python'] },
  { title: 'Database', skills: ['MySQL'] },
]

const DESIGN_SKILLS = ['UI/UX Design', 'Wireframing', 'Prototyping', 'Responsive Layouts']

const CERTS = [
  { img: bsaucert, title: 'BSAU Certificate', desc: '1st Semester of Academic Year 2023-2024. Certificate of Appreciation / Academic Excellence Award.' },
  { img: nubcert, title: 'NUB Certificate', desc: 'Certificate of Attendance "THE END IS JUST THE START", 05/20/2022.' },
  { img: ipv4, title: 'IPv4 Fundamentals', desc: 'Certificate of Course Completion for IPv4 Fundamentals.' },
  { img: vlan, title: 'VLAN Fundamentals', desc: 'Certificate of Course Completion for VLAN Fundamentals.' },
  { img: Net, title: 'Networking Basics', desc: 'Certificate of Course Completion for Basic Networking.' },
  { img: ipv6, title: 'IPv6 Fundamentals', desc: 'Certificate of Course Completion for IPv6 Fundamentals.' },
  { img: outskill, title: 'OutSkill Certificate', desc: 'Certificate of Course Completion for Generative AI Mastermind.' },
  { img: gsdc, title: 'Google Developer Student Club', desc: 'Certificate of Membership, Google Developer Student Club, National University Baliwag, School Year 2022-2023.' },
]

// Leave desc as '' to hide it. Fill in whatever you like.
const EDUCATION = [
  { logo: basc, school: 'Bulacan State Agricultural University', years: '2023 - 2027', desc: 'Bachelor of Science in Information Technology.' },
  { logo: nub, school: 'National University Baliwag', years: '2021 - 2023', desc: 'Bachelor of Science in Information Technology.' },
  { logo: vrshs, school: 'Vedasto R. Santiago Highschool', years: '2016 - 2021', desc: 'STEM' },
  { logo: cbes, school: 'Cuayan Bugtong Elementary School', years: '2009 - 2016', desc: '' },
]

// ---------- Small helpers ----------
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  )
}

function SectionTitle({ eyebrow, title }) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#7ef0c0]">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-[#7ef0c0]" />
    </div>
  )
}

function Chip({ children }) {
  return (
    <span className="cursor-default select-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7ef0c0]/50 hover:bg-[#7ef0c0]/10 hover:text-[#7ef0c0]">
      {children}
    </span>
  )
}

// ---------- Navbar ----------
function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/10 bg-[#08110f]/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <a href="#home" className="rounded-lg border-2 border-[#7ef0c0] px-2.5 py-0.5 text-xl font-extrabold tracking-widest text-[#7ef0c0] transition-colors hover:bg-[#7ef0c0] hover:text-[#08110f]">
          LEE
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map(([label, href]) => (
            <li key={href}>
              <a href={href} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-[#7ef0c0]">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-slate-200 md:hidden"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" viewBox="0 0 24 24">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-4 md:hidden">
          {NAV.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-medium text-slate-200 hover:bg-white/5 hover:text-[#7ef0c0]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

// ---------- Hero ----------
function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#7ef0c0]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-5">
        {/* Photo (first on mobile) */}
        <div className="order-1 flex justify-center lg:order-2 lg:col-span-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-[#7ef0c0]/20 blur-2xl" />
            <img
              src={Me}
              alt={PROFILE.fullName}
              className="relative h-72 w-64 rounded-3xl border border-[#7ef0c0]/30 object-cover shadow-2xl sm:h-96 sm:w-80 lg:h-[30rem] lg:w-96"
            />
          </div>
        </div>

        {/* Text */}
        <div className="order-2 text-center lg:order-1 lg:col-span-3 lg:text-left">
          <p className="mb-4 font-mono text-base text-[#7ef0c0] sm:text-lg">Hi, I&apos;m {PROFILE.name}!</p>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#7ef0c0]/40 bg-[#7ef0c0]/10 px-4 py-1.5 text-sm font-semibold text-[#7ef0c0]">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2zm7 11l.9 2.6L22.5 16l-2.6.9L19 19.5l-.9-2.6-2.6-.9 2.6-.9L19 13zM6 15l.7 2.1L8.8 18l-2.1.7L6 20.8l-.7-2.1L3.2 18l2.1-.9L6 15z" />
            </svg>
            AI-Assisted Developer
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
            Front-End <span className="text-[#7ef0c0]">Developer</span>
          </h1>
          <p className="mt-3 text-xl font-semibold text-slate-400 sm:text-2xl">Software Developer · IT Student</p>
          <p className="mx-auto mt-6 max-w-xl text-slate-400 lg:mx-0">
            An aspiring front-end / software developer with a passion for beautiful design, creativity, and functionality.
            I build faster and smarter as an <span className="font-semibold text-[#7ef0c0]">AI-assisted developer</span>, using AI
            tools to speed up coding, debugging, and problem-solving. Currently studying BS in Information Technology.
          </p>
          <p className="mt-6 font-semibold italic tracking-wide text-[#7ef0c0]">&quot;Have any project in mind? Let&apos;s create it!&quot;</p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#proj" className="rounded-xl bg-[#7ef0c0] px-6 py-3 text-center font-bold text-[#08110f] shadow-lg shadow-[#7ef0c0]/20 transition-all hover:-translate-y-0.5 hover:bg-[#9ff5d3]">
              View Projects
            </a>
            <a href="#skills" className="rounded-xl border border-[#7ef0c0]/40 px-6 py-3 text-center font-semibold text-[#7ef0c0] transition-all hover:-translate-y-0.5 hover:bg-[#7ef0c0]/10">
              View More ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- Skills ----------
function Skills() {
  return (
    <section id="skills" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="What I use" title="My Toolbox" />

        <Reveal className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl sm:p-10">
          <div className="grid gap-10 md:grid-cols-5">
            <div className="flex flex-col gap-6 md:col-span-3">
              <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#7ef0c0]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#7ef0c0]" />
                Development &amp; Languages
              </h3>
              {SKILL_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="mb-3 text-sm font-semibold text-slate-500">{group.title}</p>
                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 md:col-span-2">
              <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#7ef0c0]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#7ef0c0]" />
                UI/UX &amp; Design
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {DESIGN_SKILLS.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ---------- Projects ----------
function Projects() {
  return (
    <section id="proj" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="My work" title="Projects" />

        <div className="flex flex-col gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="grid gap-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-xl transition-colors duration-300 hover:border-[#7ef0c0]/30 sm:p-10 lg:grid-cols-5"
            >
              <div className="lg:col-span-3">
                <span className="inline-block rounded-full border border-[#7ef0c0]/40 bg-[#7ef0c0]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7ef0c0]">
                  {p.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
                {p.tagline && <p className="mt-1 font-mono text-sm text-[#7ef0c0]">{p.tagline}</p>}
                <p className="mt-4 leading-relaxed text-slate-400 sm:text-justify">{p.desc}</p>

                {p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-[#7ef0c0]/40 px-5 py-2.5 text-sm font-semibold text-[#7ef0c0] transition-all hover:-translate-y-0.5 hover:bg-[#7ef0c0]/10"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#08110f]/60 p-6 lg:col-span-2">
                <div>
                  <p className="mb-1 font-mono text-xs uppercase tracking-widest text-slate-500">Role</p>
                  <p className="font-semibold text-[#7ef0c0]">{p.role}</p>
                </div>
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span key={s} className="rounded-lg bg-white/5 px-3 py-1.5 text-sm text-slate-200">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">{p.extraLabel}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.extra.map((m) => (
                      <span key={m} className="rounded-lg bg-[#7ef0c0]/10 px-3 py-1.5 text-sm text-[#7ef0c0]">{m}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Certificates ----------
function Certificates({ onOpen }) {
  return (
    <section id="cert" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Achievements" title="Certificates" />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {CERTS.map((c, i) => (
            <Reveal key={c.title} delay={(i % 4) * 80} className="h-full">
              <button
                onClick={() => onOpen(c)}
                className="group flex h-full w-full cursor-zoom-in flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#7ef0c0]/50 hover:shadow-xl hover:shadow-[#7ef0c0]/10"
              >
                <img src={c.img} alt={c.title} className="h-44 w-full shrink-0 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="flex grow flex-col p-4">
                  <h3 className="font-bold text-white">{c.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{c.desc}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Education ----------
function Education() {
  return (
    <section id="educ" className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Background" title="Education" />

        <div className="relative flex flex-col gap-6 sm:border-l sm:border-[#7ef0c0]/30 sm:pl-10">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.school} delay={i * 80}>
              <div className="relative flex flex-col items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center sm:flex-row sm:text-left">
                <span className="absolute -left-[3.05rem] top-1/2 hidden h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-[#08110f] bg-[#7ef0c0] sm:block" />
                <img src={e.logo} alt={`${e.school} logo`} className="h-24 w-24 shrink-0 rounded-2xl bg-white/5 object-contain p-2" />
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">{e.school}</h3>
                  <p className="mt-1 font-mono text-sm font-semibold text-[#7ef0c0]">{e.years}</p>
                  {e.desc && <p className="mt-2 text-sm text-slate-400">{e.desc}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------- Contact + Footer ----------
function Contact() {
  return (
    <section id="contact" className="px-5 py-20 md:py-28">
      <Reveal className="mx-auto max-w-3xl rounded-3xl border border-[#7ef0c0]/20 bg-gradient-to-br from-[#7ef0c0]/10 to-transparent p-8 text-center sm:p-12">
        <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#7ef0c0]">Get in touch</p>
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Have a project in mind?</h2>
        <p className="mx-auto mt-4 max-w-md text-slate-400">I&apos;m open to internships and collaborations. Let&apos;s build something great together.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href={`mailto:${PROFILE.email}`} className="rounded-xl bg-[#7ef0c0] px-6 py-3 font-bold text-[#08110f] transition-all hover:-translate-y-0.5 hover:bg-[#9ff5d3]">
            Email Me
          </a>
          <a href={PROFILE.github} target="_blank" rel="noreferrer" className="rounded-xl border border-[#7ef0c0]/40 px-6 py-3 font-semibold text-[#7ef0c0] transition-all hover:-translate-y-0.5 hover:bg-[#7ef0c0]/10">
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.
    </footer>
  )
}

// ---------- Lightbox ----------
function Lightbox({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [cert, onClose])

  if (!cert) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
    >
      <div className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-[#0d1a17] p-2 shadow-2xl">
        <img
          src={cert.img}
          alt={cert.title}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[82vh] max-w-full rounded-xl object-contain"
        />
        <p className="px-2 pb-1 pt-2 text-center text-sm text-slate-300">{cert.title}</p>
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black/60 text-xl font-bold text-white transition-colors hover:bg-[#7ef0c0] hover:text-[#08110f]"
        >
          ✕
        </button>
      </div>
    </div>
  )
}

// ---------- App ----------
function App() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <div className="min-h-screen scroll-smooth bg-[#08110f] font-sans text-slate-200 antialiased selection:bg-[#7ef0c0] selection:text-[#08110f]">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Certificates onOpen={setActiveCert} />
      <Education />
      <Contact />
      <Footer />
      <Lightbox cert={activeCert} onClose={() => setActiveCert(null)} />
    </div>
  )
}

export default App
