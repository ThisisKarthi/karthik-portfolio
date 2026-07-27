const cards = [
  {
    icon: '📝',
    title: 'Requirements & Documentation',
    chips: ['BRD', 'FRD', 'Use Cases', 'User Stories', 'Acceptance Criteria', 'RTM', 'MoSCoW Prioritisation'],
  },
  {
    icon: '🔁',
    title: 'Business Analysis',
    chips: ['Requirements Elicitation', 'Gap Analysis', 'As-Is / To-Be Analysis', 'Business Process Re-engineering', 'Root Cause Analysis'],
  },
  {
    icon: '⚡',
    title: 'Methodologies & Delivery',
    chips: ['Agile / Scrum', 'SDLC', 'UAT', 'Sprint Planning', 'Backlog Management', 'Change Management'],
  },
  {
    icon: '🗄️',
    title: 'Technical Tools',
    chips: ['SQL · PostgreSQL', 'SQL Server', 'Postman', 'GitHub', 'JIRA'],
  },
  {
    icon: '📊',
    title: 'Data & BI',
    chips: ['Power BI', 'Advanced Excel', 'Data Analysis', 'Data Cleaning', 'KPI Tracking', 'Competitor Research'],
  },
  {
    icon: '🌡️',
    title: 'IoT & CMMS / ERP',
    chips: ['Milesight UC300', 'HF2411', 'RS485 Gateways', 'IAQ Monitoring', 'Dynamics 365 CRM & ERP', 'Power Apps', 'Power Automate'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-label">Capabilities</div>
      <h2 className="section-title">Skills &amp; Expertise</h2>
      <p className="section-sub">
        A full-stack Business Analyst toolkit — from stakeholder requirements to IoT/CMMS delivery and BI reporting.
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
