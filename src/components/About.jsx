const skillGroups = [
  {
    title: 'Analytics & BI',
    type: 'chip-accent',
    chips: ['Power BI', 'DAX', 'Power Query', 'SQL · PostgreSQL', 'Excel (Advanced)', 'Tableau', 'KPI Dashboard Design'],
  },
  {
    title: 'Data Engineering',
    type: 'chip-amber',
    chips: ['Data Cleaning', 'Bulk Data Management', 'Python · Pandas', 'Data Profiling', 'Trend Analysis'],
  },
  {
    title: 'Product & Delivery',
    type: 'chip-green',
    chips: ['Requirements Analysis', 'User Story Definition', 'Product Backlog', 'UAT', 'Agile · Scrum', 'JIRA', 'Stakeholder Mgmt'],
  },
  {
    title: 'IoT & CMMS',
    type: 'chip-muted',
    chips: ['Milesight UC300', 'HF2411', 'RS485', 'Energy Sensors', 'IAQ Monitoring', 'Asset Management'],
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-label">About Me</div>
      <div className="about-grid">

        <div className="about-bio">
          <h2 className="section-title">
            Product Analyst with a{' '}
            <span className="grad">data-first mindset.</span>
          </h2>

          <p>
            I'm a Product Analyst and Implementation Lead with 4 years of experience
            spanning IoT, CMMS, and B2B SaaS platforms. My work sits at the intersection
            of data analysis, product thinking, and stakeholder communication.
          </p>
          <p>
            At Aptiv8 IT Solutions in Singapore, I led end-to-end implementations for
            government and enterprise clients — translating messy operational datasets
            into Power BI dashboards that drive real facility management decisions.
          </p>
          <p>
            Before that, I spent nearly three years as a QA &amp; Software Tester at a
            blockchain SaaS company, which gave me a strong foundation in product
            quality, Agile delivery, and cross-functional collaboration.
          </p>

          <div className="about-highlight">
            <h4>🔬 Currently Building</h4>
            <p>
              End-to-end Finance &amp; Fraud Detection analytics on a 1M+ row Kaggle
              dataset — PostgreSQL database, Python (Pandas) profiling, Power BI
              dashboard with DAX, and this portfolio website. Aimed at demonstrating
              production-level data pipeline skills for Product &amp; Data Analyst roles.
            </p>
          </div>
        </div>

        <div className="skills-panel">
          {skillGroups.map(group => (
            <div key={group.title}>
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-chips">
                {group.chips.map(chip => (
                  <span key={chip} className={`chip ${group.type}`}>{chip}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
