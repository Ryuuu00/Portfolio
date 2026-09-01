import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero">
          <h1>Hi, I&apos;m Marco</h1>
          <p>
            Welcome to my personal showroom! A 3rd-year Computer Science student passionate about systems programming, web technologies, and competitive coding.
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
            <a href="#about" className="btn">About Me</a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
        </section>


        <section id="about" className="about-section">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Get to Know Me</h2>
          <p className="section-subtitle">A brief look into who I am, what I study, and what drives me.</p>

          <div className="about-grid">

            <div className="glass-card">
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--accent)' }}>
                Quick Facts
              </h3>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-label">Full Name</span>
                  <span className="info-value">Marco Antonio P. Polo</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Year Level & Program</span>
                  <span className="info-value">3rd Year, BS in Computer Science</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Institution & Dept</span>
                  <span className="info-value">Visayas State University — FOC — DCST</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Interests</span>
                  <div>
                    <span className="interest-tag">Low Level Language</span>
                    <span className="interest-tag">Electronics</span>
                    <span className="interest-tag">Music</span>
                    <span className="interest-tag">Online Games</span>
                    <span className="interest-tag">Competitive Programming</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: '#a78bfa' }}>
                  Short Introduction
                </h3>
                <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '1rem', marginBottom: '1.5rem' }}>
                  Hello! I&apos;m a third-year Computer Science student at Visayas State University under the Department of Computer Science and Technology (DCST). I love problem solving math and algorithms. I also enjoy joining and competing in high-nerve-wracking competitions.
                </p>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#34d399' }}>
                  My Goals
                </h3>
                <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '0.95rem' }}>
                  My goal is to become a respectable software engineer. Efficient and reliable in every aspect of work. And also, to always remember where I started and who helped me along the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <Skills />
          <Education />

          <div className="glass-card" style={{ animationDelay: '0.8s' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#34d399' }}>Achievements</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              - 2nd Place in DCST 2026 CSWeek Hackathon
              <br />
              - 4th Place DCST C/C++ Programming Competition 2026
            </p>
          </div>
        </section>

        <div style={{ marginTop: '4rem' }}>
          <Projects />
        </div>
        <div style={{ marginTop: '4rem' }}>
          <Contacts />
        </div>
      </main>
    </>
  );
}
