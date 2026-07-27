import { FiAward, FiExternalLink } from 'react-icons/fi'

const certs = [
  {
    title: 'SQL (Basic)',
    issuer: 'HackerRank',
    date: '21 Jul 2026',
    id: 'FF4C49D53976',
    url: 'https://www.hackerrank.com/certificates/ff4c49d53976',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <div className="section-label">Credentials</div>
      <h2 className="section-title">Certifications</h2>
      <p className="section-sub">
        Verified skill certifications backing up the SQL and BI work shown across this portfolio.
      </p>

      <div className="skills-grid">
        {certs.map((cert, i) => (
          <a
            key={i}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card"
          >
            <div className="cert-icon"><FiAward size={20} /></div>
            <div className="cert-title">{cert.title}</div>
            <div className="skill-card-chips">
              <span className="chip chip-amber">{cert.issuer}</span>
              <span className="chip chip-amber">{cert.date}</span>
            </div>
            <div className="cert-verify">
              Verify certificate <FiExternalLink size={12} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
