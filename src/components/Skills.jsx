const cards = [
  {
    icon: '📊',
    title: 'Analytics & BI',
    chips: ['Power BI', 'DAX', 'Power Query', 'Tableau', 'KPI Dashboard Design', 'Data Visualization'],
  },
  {
    icon: '🗄️',
    title: 'SQL & Databases',
    chips: ['SQL · PostgreSQL', 'DBeaver', 'Bulk Data Management', 'Data Cleaning', 'Query Optimisation'],
  },
  {
    icon: '🐍',
    title: 'Python & Data',
    chips: ['Python', 'Pandas', 'Data Profiling', 'Statistical Analysis', 'Jupyter Notebooks'],
  },
  {
    icon: '📋',
    title: 'Product Management',
    chips: ['Requirements Analysis', 'User Story Definition', 'Product Backlog', 'UAT', 'Competitor Research'],
  },
  {
    icon: '⚡',
    title: 'Agile & Delivery',
    chips: ['Agile', 'Scrum', 'JIRA', 'Sprint Planning', 'Retrospectives', 'Stakeholder Management'],
  },
  {
    icon: '🌡️',
    title: 'IoT & CMMS',
    chips: ['Milesight UC300', 'HF2411', 'RS485 Gateways', 'LoRa Sensors', 'IAQ Monitoring', 'Asset Management'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-label">Capabilities</div>
      <h2 className="section-title">Skills &amp; Expertise</h2>
      <p className="section-sub">
        A full-stack product analyst toolkit — from IoT sensor hardware to executive Power BI dashboards.
      </p>

      <div className="skills-grid">
        {cards.map((card, i) => (
          <div key={i} className="skill-card">
            <div className="skill-icon">{card.icon}</div>
            <div className="skill-card-title">{card.title}</div>
            <div className="skill-card-chips">
              {card.chips.map(chip => (
                <span key={chip} className="chip chip-accent">{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
