
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import "./globals.css"



export default function Home() {

  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero">
          <h1>My Portfolio</h1>
          <p>
            Welcome to Marco's little show room!
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </section>

        <section style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          <div className="glass-card">
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Programming Languages</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              C, C++, Assembly, Java, HTML, CSS, Javascript, SQL, and Python.
            </p>
          </div>
          <div className="glass-card1" style={{ animationDelay: '0.6s' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#a78bfa' }}>Education</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              Bachelor of Science in Computer Science
              <br />
              Visayas State University - Main Campus
              <br />
              Music enjoyer lol.
            </p>
          </div>
          <div className="glass-card" style={{ animationDelay: '0.8s' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#34d399' }}>Achievements</h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
              - 2nd Place in DCST 2026 CSWeek Hackathon
              <br />
              - 4th Place DCST C/C++ Programming Competition 2026
              <br />
              -Tekken Undisputed back to back CHAMPION!!! RAHHH!!!!
            </p>
          </div>
        </section>

        <div style={{ marginTop: '50vh' }}>
          <Skills />
        </div>


      </main>
    </>
  );
}
