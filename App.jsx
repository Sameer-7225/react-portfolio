import { useState } from "react";
import "./App.css";

/* ================= NAVBAR ================= */
function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Sameer Ali </h2>

      <ul className="menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">
        <button
          className="icon-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>

        <button
          className="icon-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ⋮
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hi, I'm Sameer 👋</h1>
        <h2 className="accent">Student Frontend Developer</h2>

        <p>
          I am a student learning frontend development with a focus on React.
          I enjoy building clean, structured, and user-friendly interfaces.
        </p>

        <p>
          This portfolio shows my understanding of React fundamentals like
          components, props, state, and UI logic.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a
            href= "mailto:sambgmi160@gmail.com"
            className="btn secondary"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img
          src="myimage.jpeg"
          alt="Developer Illustration"
        />
      </div>
    </section>
  );
}

/* ================= ABOUT ================= */
function About() {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <p>
        Hi! I’m a passionate student learning Full Stack Web Development.
        I enjoy creating responsive websites and web applications using technologies like HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB & MySQL.
        I love building projects, solving problems, and exploring new tools to improve my coding skills.
        This portfolio showcases some of the projects I’ve worked on while learning and practicing web development.
      </p>
      <p>
        This portfolio is a practical project created to apply my learning and
        understand how real-world web applications are structured.
      </p>
    </section>
  );
}

/* ================= SKILLS ================= */
function SkillCard({ name, darkMode }) {
  return (
    <div className={`skill-card ${darkMode ? "dark-card" : "light-card"}`}>
      {name}
    </div>
  );
}

function Skills({ darkMode }) {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React (Basics)",
    "Git & GitHub",
    "VS Code",
    "MongoDB",
    "MYSQL",
    "Browser DevTools"
  ];

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <p>
        Below are the technologies and tools I am currently learning and
        practicing.
      </p>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            name={skill}
            darkMode={darkMode}
          />
        ))}
      </div>
    </section>
  );
}

/* ================= PROJECTS ================= */
function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <h3>React Portfolio Website</h3>
      <p>
        A single-page portfolio built using React. It focuses on understanding
        components, props, state management, conditional rendering, and theme
        handling.
      </p>
      <p>Status: In Progress 🚧</p>
    </section>
  );
}

/* ================= CONTACT ================= */
function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>

      <p>
        If you would like to connect with me or view my work, feel free to
        reach out using the details below.
      </p>

      <p>Email: sambghi106@gmail.com</p>
      <p>GitHub: https://github.com/sameer-7225</p>

      <a
        href= "mailto: sambgmi160@gmail.com"
        className="btn primary contact-btn"
      >
        Contact Me
      </a>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="footer">
      © 2026 Sameer Ali | Built with React
    </footer>
  );
}

/* ================= APP ================= */
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills darkMode={darkMode} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}