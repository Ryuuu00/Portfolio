export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Crafting Digital Experiences</h1>
        <p>
          I am a passionate developer focusing on modern, performant, and beautifully designed web applications. Welcome to my portfolio.
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', animation: 'fadeInUp 1s ease-out 0.4s both' }}>
          <a href="#projects" className="btn">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </section>

      <section style={{ marginTop: '5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        <div className="glass-card">
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>Frontend Excellence</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
            Building pixel-perfect, highly interactive interfaces using React, Next.js, and modern custom CSS techniques without relying on heavy frameworks.
          </p>
        </div>
        <div className="glass-card" style={{ animationDelay: '0.6s' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#a78bfa' }}>UI/UX Design</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
            Creating intuitive user experiences with a focus on rich aesthetics, accessibility, seamless animations, and engaging micro-interactions.
          </p>
        </div>
        <div className="glass-card" style={{ animationDelay: '0.8s' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#34d399' }}>Performant Backends</h3>
          <p style={{ color: '#94a3b8', lineHeight: '1.7' }}>
            Developing robust and scalable server-side solutions, ensuring that the applications are not only beautiful but extremely fast and reliable.
          </p>
        </div>
      </section>
    </main>
  );
}
