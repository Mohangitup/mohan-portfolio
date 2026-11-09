
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  BrainCircuit,
  Globe,
  Send,
  Sparkles,
  Terminal,
  Layers,
} from "lucide-react";

import "./App.css";

/* Social icons */
const Github = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.31-3.76-1.31-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.13 3.1 1.63.1-.72.39-1.21.7-1.49-2.47-.28-5.06-1.24-5.06-5.5 0-1.21.43-2.2 1.15-2.97-.12-.28-.5-1.41.11-2.94 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.66.12 2.94.71.77 1.14 1.76 1.14 2.97 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.03.75 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
  </svg>
);

const Linkedin = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.96V9.04h2.97v9.41ZM6.44 7.75a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.01 10.7h-2.97v-4.58c0-1.09-.02-2.49-1.52-2.49-1.52 0-1.75 1.19-1.75 2.41v4.66H9.24V9.04h2.85v1.29h.04c.4-.75 1.37-1.53 2.82-1.53 3.02 0 3.58 1.99 3.58 4.58v5.37Z" />
  </svg>
);

/* Portfolio projects */
const projects = [
  {
    number: "01",
    title: "Customer Churn Prediction",
    category: "MACHINE LEARNING · DATA SCIENCE",
    description:
      "A machine learning solution that analyzes customer behavior and predicts customer churn using a Random Forest model.",
    stack: ["Python", "Pandas", "Scikit-learn", "Flask"],
    color: "purple",
    icon: BrainCircuit,
    github: "https://github.com/Mohangitup/Customer_Chunk_Prediction.git",
    demo: "#",
  },
  {
    number: "02",
    title: "Customer Management System",
    category: "FULL STACK DEVELOPMENT",
    description:
      "A customer management application designed to organize customer records and simplify business workflows.",
    stack: ["Java", "MySQL", "Web Development"],
    color: "cyan",
    icon: Database,
    github: "#",
    demo: "#",
  },
  {
    number: "03",
    title: "Developer Portfolio",
    category: "FRONTEND · PERSONAL BRAND",
    description:
      "An interactive developer portfolio showcasing projects, technical skills, and professional contact information.",
    stack: ["React", "Vite", "CSS", "Framer Motion"],
    color: "pink",
    icon: Code2,
    github: "#",
    demo: "#",
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive UI"],
  },
  {
    icon: Terminal,
    title: "Programming",
    skills: ["Python", "Java", "OOP", "Data Structures"],
  },
  {
    icon: Database,
    title: "Database & Tools",
    skills: ["MySQL", "MongoDB", "Git", "GitHub", "Postman"],
  },
  {
    icon: BrainCircuit,
    title: "Data & AI",
    skills: ["Machine Learning", "Pandas", "Scikit-learn", "Data Analysis"],
  },
];

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Animated network background */
function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let width = 0;
    let height = 0;
    let particles = [];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        65,
        Math.max(28, Math.floor((width * height) / 19000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        radius: Math.random() * 1.5 + 0.6,
        color: Math.random() > 0.5 ? "168, 85, 247" : "6, 182, 212",
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > height) particle.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(${particle.color}, 0.85)`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = `rgba(${particle.color}, 0.5)`;
        ctx.fill();
        ctx.shadowBlur = 0;

        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 125) {
            const opacity = (1 - distance / 125) * 0.2;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      });

      if (!reducedMotion) {
        animationId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
}

function SectionHeading({ label, title, accent }) {
  return (
    <motion.div
      className="section-heading"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {label}
      </span>
      <h2>
        {title} <span>{accent}</span>
      </h2>
    </motion.div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFormStatus("Sending your message...");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Unable to send message.");
      }

      setFormStatus("Message sent successfully! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setFormStatus(
        error.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-orb orb-one" />
        <div className="ambient-orb orb-two" />
        <div className="ambient-orb orb-three" />
        <div className="grid-overlay" />
        <NetworkBackground />
      </div>

      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-mark">M</span>
          <span>
            Mohan kumar C
            {/* MOHAN<span className="brand-accent">.DEV</span> */}
          </span>
        </a>

        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"}>
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero section-container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.15 },
              },
            }}
          >
            <motion.div className="hero-status" variants={reveal}>
              <span className="status-indicator" />
              AVAILABLE FOR INTERNSHIPS & FREELANCE
            </motion.div>

            <motion.p className="hero-intro" variants={reveal}>
              Hello, I'm Mohan Kumar C
            </motion.p>

            <motion.h1 variants={reveal}>
              I BUILD
              <br />
              <span className="hero-gradient">DIGITAL</span>
              <br />
              EXPERIENCES<span className="hero-period">.</span>
            </motion.h1>

            <motion.p className="hero-description" variants={reveal}>
              Computer Science Engineering student and aspiring software
              developer. I transform ideas into modern, functional, and
              engaging digital experiences.
            </motion.p>

            <motion.div className="hero-actions" variants={reveal}>
              <a href="#projects" className="button-primary">
                Explore My Work <ArrowUpRight size={18} />
              </a>
              <a href="#contact" className="button-secondary">
                Let's Collaborate <Send size={16} />
              </a>

              <a
                href="/Mohan-Kumar-C-Resume.pdf"
                download="Mohan-Kumar-C-Resume.pdf"
                className="button-secondary resume-button"
              >
                <ArrowDown size={17} />
                Download Resume
              </a>
            </motion.div>

            <motion.div className="hero-socials" variants={reveal}>
              <a
                href="https://github.com/Mohangitup"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohan-kumar-c-/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a href="#contact" aria-label="Email">
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <div className="visual-ring ring-one" />
            <div className="visual-ring ring-two" />
            <div className="visual-ring ring-three" />

            <motion.div
              className="developer-card glass-panel"
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="code-card-top">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
                <span className="code-file">developer.js</span>
              </div>
              <div className="code-content">
                <p><span className="code-purple">const</span> developer = {"{"}</p>
                <p className="code-indent">name: <span className="code-green">"Mohan kumar C"</span>,</p>
                <p className="code-indent">role: <span className="code-green">"Software Developer"</span>,</p>
                <p className="code-indent">passion: <span className="code-green">"Building ideas"</span>,</p>
                <p className="code-indent">focus: <span className="code-green">"Full Stack"</span></p>
                <p>{"};"}</p>
                <p className="code-comment">// Always learning. Always building.</p>
              </div>
              <div className="code-card-footer">
                <span><i /> Available to collaborate</span>
                <span>2027</span>
              </div>
            </motion.div>

            <motion.div
              className="floating-badge badge-react"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity }}
            >
              <Code2 size={20} /> React
            </motion.div>

            <motion.div
              className="floating-badge badge-ai"
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <BrainCircuit size={20} /> AI / ML
            </motion.div>

            <motion.div
              className="floating-badge badge-web"
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Globe size={19} /> Web
            </motion.div>
          </motion.div>

          <motion.a
            href="#about"
            className="scroll-indicator"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </motion.a>
        </section>

        {/* ABOUT */}
        <section id="about" className="section-container section-block">
          <SectionHeading
            label="WHO I AM"
            title="A developer with"
            accent="purpose."
          />

          <motion.div
            className="about-grid glass-panel"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="about-main">
              <span className="about-number">01 / ABOUT</span>
              <h3>
                Turning concepts into{" "}
                <span>real-world solutions.</span>
              </h3>
              <p>
                I'm Mohan kumar C, a final-year Computer Science Engineering
                student graduating in 2027. I enjoy building applications,
                exploring technologies, and solving problems through code.
              </p>
              <p>
                My focus is on creating clean user interfaces, useful software,
                and practical solutions that deliver value to people and
                businesses.
              </p>
              <a href="#contact" className="text-link">
                Have a project in mind? <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="about-side">
              <div className="about-stat">
                <span className="stat-number">2027</span>
                <span className="stat-label">Graduation Year</span>
              </div>
              <div className="about-stat">
                <span className="stat-number">CSE</span>
                <span className="stat-label">Computer Science</span>
              </div>
              <div className="about-stat">
                <span className="stat-number">∞</span>
                <span className="stat-label">Curiosity to Learn</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section-container section-block">
          <SectionHeading
            label="MY TOOLKIT"
            title="Skills that"
            accent="create."
          />

          <motion.p
            className="section-description"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Technologies and tools I use to turn ideas into working solutions.
          </motion.p>

          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <motion.div
                  className="skill-card glass-panel"
                  key={group.title}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ y: -7, scale: 1.015 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <div className="skill-card-icon">
                    <Icon size={24} />
                  </div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section-container section-block">
          <SectionHeading
            label="SELECTED WORK"
            title="Ideas made"
            accent="real."
          />

          <motion.p
            className="section-description"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            A selection of projects demonstrating my approach to development
            and problem-solving.
          </motion.p>

          <div className="projects-list">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;

              return (
                <motion.article
                  className={`project-card project-${project.color}`}
                  key={project.number}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  whileHover={{ y: -8, scale: 1.008 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <div className="project-number">{project.number}</div>

                  <div className="project-art">
                    <div className="project-art-grid" />
                    <div className="project-art-inner">
                      <ProjectIcon size={48} strokeWidth={1.5} />
                      <span>{project.category}</span>
                    </div>
                    <div className="project-art-glow" />
                    <span className="project-art-label">PROJECT / {project.number}</span>
                  </div>

                  <div className="project-info">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-stack">
                      {project.stack.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={16} /> GitHub <ArrowUpRight size={15} />
                      </a>
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live Demo <ArrowUpRight size={15} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="section-container cta-section">
          <motion.div
            className="cta-panel glass-panel"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Sparkles className="cta-sparkle" size={30} />
            <span className="eyebrow">LET'S BUILD SOMETHING</span>
            <h2>
              Have an idea?
              <br />
              <span>Let's make it happen.</span>
            </h2>
            <p>
              I'm open to internships, freelance opportunities, and
              collaborations with people building meaningful products.
            </p>
            <a href="#contact" className="button-primary">
              Start a Conversation <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="section-container section-block contact-section"
        >
          <SectionHeading
            label="GET IN TOUCH"
            title="Let's create"
            accent="together."
          />

          <div className="contact-grid glass-panel">
            <div className="contact-copy">
              <h3>Let's talk about your next project.</h3>
              <p>
                Whether you're hiring, looking for a developer, or have a
                project idea, send me a message. I'd love to hear from you.
              </p>
              <div className="contact-detail">
                <Mail size={19} />
                <span>Available for professional opportunities</span>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                Your Name
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                />
              </label>

              <label>
                Your Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                />
              </label>

              <button
                className="button-primary form-submit"
                type="submit"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
                <Send size={17} />
              </button>

              {formStatus && (
                <p className="form-status" role="status">
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-mark">M</span>
          <span>
            Mohan kumar C
            {/* MOHAN<span className="brand-accent">.DEV</span> */}
          </span>
        </a>

        <p>Designed & built with passion by Mohan Kumar C.</p>

        <div className="footer-socials">
          <a
            href="https://github.com/Mohangitup"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mohan-kumar-c-/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a href="#contact" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;