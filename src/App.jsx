import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>John Doe</h1>
        <p>Full Stack Engineer</p>
      </header>
      <section className="portfolio-section about">
        <h2>About Me</h2>
        <p>
          Passionate engineer with experience in building modern web applications. Always eager to learn new technologies and solve challenging problems.
        </p>
      </section>
      <section className="portfolio-section skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Docker / CI/CD</li>
          <li>SQL / NoSQL</li>
        </ul>
      </section>
      <section className="portfolio-section certifications">
        <h2>Certifications</h2>
        <ul>
          <li>AWS Certified Solutions Architect</li>
          <li>Oracle Certified Java Programmer</li>
          <li>Certified Scrum Master</li>
        </ul>
      </section>
      <section className="portfolio-section contact">
        <h2>Contact</h2>
        <p>Email: johndoe@example.com</p>
        <p>LinkedIn: linkedin.com/in/johndoe</p>
      </section>
    </div>
  )
}

export default App
