import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Kamada Arun</h1>
        <p>Student</p>
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
          <li>Spring Framework / Java</li>
          <li>Django・DRF / Python</li>
          <li>JavaScript</li>
          <li>Vue.js / Next.js</li>
          <li>Docker</li>
          <li>SQL</li>
        </ul>
      </section>
      <section className="portfolio-section certifications">
        <h2>Certifications</h2>
        <ul>
          <li>応用情報技術者</li>
          <li>情報処理安全確保支援士</li>
          <li>ネットワークスペシャリスト</li>
          <li>SEA/J Certified Security Basic Master</li>
          <li>Python3エンジニア認定基礎検定</li>
        </ul>
      </section>
      <section className="portfolio-section contact">
        <h2>Contact</h2>
        <p>Email: KamadaArun0327@gmail.com</p>
        <p>LinkedIn: https://www.linkedin.com/in/あるん-鎌田-8393372a2</p>
      </section>
    </div>
  )
}

export default App
