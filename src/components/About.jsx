const skillGroups = [
  {
    title: 'Requirements & Documentation',
    type: 'chip-accent',
    chips: ['BRD', 'FRD', 'Use Cases', 'User Stories', 'Acceptance Criteria', 'RTM', 'MoSCoW Prioritisation'],
  },
  {
    title: 'Methodologies',
    type: 'chip-amber',
    chips: ['Agile / Scrum', 'SDLC', 'UAT', 'Sprint Planning', 'Backlog Management', 'Change Management'],
  },
  {
    title: 'Technical & BI Tools',
    type: 'chip-green',
    chips: ['SQL (PostgreSQL, SQL Server)', 'Power BI', 'Advanced Excel', 'Postman', 'GitHub', 'JIRA'],
  },
  {
    title: 'Domain Knowledge',
    type: 'chip-muted',
    chips: ['IoT & CMMS Implementation', 'Blockchain & DApps Testing', 'Facility Management', 'ERP/CRM (Dynamics 365)'],
  },
]

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-label">About Me</div>
      <div className="about-grid">

        <div className="about-bio">
          <h2 className="section-title">
            Business Analyst with a{' '}
            <span className="grad">data-first mindset.</span>
          </h2>

          <p>
            I'm a Business Analyst and Implementation Lead with 3.2 years of experience
            in end-to-end requirements elicitation, stakeholder management, and SDLC
            delivery across IoT-enabled CMMS platforms, ERP/CRM implementations, and
            blockchain/DApps-driven enterprise applications.
          </p>
          <p>
            At Aptiv8 IT Solutions in Singapore, I led requirements and implementation
            for a CMMS &amp; IoT facility management platform across 10 Singapore
            Government and enterprise clients — including NUS, SIT, MOH, MHA, NTU, LTA,
            MTI, and Republic Plaza — producing BRDs, FRDs, and RTMs, and driving UAT
            to zero critical defects at go-live.
          </p>
          <p>
            Before that, I spent two years at Clarisco Pvt. Ltd. as a Business Analyst
            &amp; QA Analyst across blockchain/DApps, healthcare CRM, and HRMS/ERP
            engagements — translating complex, cross-functional requirements into
            structured BRDs, FRDs, and test plans.
          </p>

          <div className="about-highlight">
            <h4>🔬 Currently Building</h4>
            <p>
              Strengthening my BI toolkit through a Coursera Business Intelligence
              course — applying Power BI and SQL to real analysis work — alongside this
              portfolio, built to demonstrate practical BA + data analysis skills for
              Business Analyst and BI Analyst roles in Singapore.
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
