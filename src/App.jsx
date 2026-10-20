
import './App.css'

const learningPaths = [
  {
    number: '01',
    symbol: '</>',
    title: 'Programming',
    description:
      'Learn to code, solve problems, and turn ideas into real projects.',
    tag: 'BUILD YOUR SKILLS',
  },
  {
    number: '02',
    symbol: '✳',
    title: 'Technology',
    description:
      'Explore modern technology and understand the digital world.',
    tag: 'EXPLORE THE FUTURE',
  },
  {
    number: '03',
    symbol: '↗',
    title: 'Creative Thinking',
    description:
      'Develop new perspectives, question assumptions, and think independently.',
    tag: 'THINK DIFFERENTLY',
  },
]

function App() {
  return (
    <div className="app" id="home">
      <header className="navbar">
        <a className="brand" href="#home">
          Qelviora<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#learning">Learning</a>
          <a href="#about">About</a>
        </nav>

        <a className="nav-cta" href="#learning">
          Get Started <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="announcement">
              <span className="announcement-dot" />
              YOUR NEXT CHAPTER STARTS HERE
            </div>

            <h1>
              Learn deeply.
              <br />
              <span>Think differently.</span>
            </h1>

            <p className="hero-description">
              A space to explore technology, develop practical
              skills, and turn your curiosity into knowledge.
              Discover what you can create with Qelviora.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#learning">
                Explore Learning <span>→</span>
              </a>

              <a className="button-secondary" href="#about">
                Discover Qelviora
              </a>
            </div>

            <div className="hero-footnote">
              <span className="footnote-line" />
              Built for the curious minds of tomorrow.
            </div>
          </div>

          <div className="hero-art" aria-label="Qelviora brand illustration">
            <div className="art-glow" />
            <div className="art-orbit orbit-outer" />
            <div className="art-orbit orbit-inner" />

            <div className="brand-emblem">
              <span>Q</span>
              <small>QELVIORA</small>
            </div>

            <div className="art-card art-card-top">
              <div className="art-icon">✳</div>
              <div>
                <strong>Stay curious</strong>
                <p>Ideas become possibilities.</p>
              </div>
            </div>

            <div className="art-card art-card-bottom">
              <div className="art-icon">↗</div>
              <div>
                <strong>Keep growing</strong>
                <p>Progress starts with learning.</p>
              </div>
            </div>

            <span className="art-star star-one">✳</span>
            <span className="art-star star-two">✦</span>
          </div>
        </section>

        <section className="learning-section" id="learning">
          <div className="section-top">
            <div>
              <span className="section-label">YOUR POSSIBILITIES</span>
              <h2>
                Curiosity is your
                <br />
                <span>greatest advantage.</span>
              </h2>
            </div>

            <p className="section-description">
              Start exploring the ideas and skills that
              can shape your future.
            </p>
          </div>

          <div className="learning-grid">
            {learningPaths.map((path) => (
              <article className="learning-card" key={path.number}>
                <div className="card-topline">
                  <span className="card-number">{path.number}</span>
                  <span className="card-symbol">{path.symbol}</span>
                </div>

                <span className="card-tag">{path.tag}</span>
                <h3>{path.title}</h3>
                <p>{path.description}</p>

                <a href="#about" className="card-link">
                  Discover more <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <span className="section-label">THE QELVIORA PHILOSOPHY</span>

          <h2>
            Knowledge opens doors.
            <br />
            <span>Curiosity takes you further.</span>
          </h2>

          <p>
            We are building a place where learning meets
            creativity, technology meets possibility, and
            every new idea can become a starting point.
          </p>

          <a className="button-primary" href="#home">
            Back to the beginning <span>↑</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          Qelviora<span>.</span>
        </a>

        <p>Learn deeply. Think differently.</p>

        <span className="copyright">
          © {new Date().getFullYear()} Qelviora
        </span>
      </footer>
    </div>
  )
}

export default App
