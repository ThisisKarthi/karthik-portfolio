const jobs = [
  {
    role: 'Product Analyst & Implementation Lead',
    company: 'Aptiv8 IT Solutions',
    location: 'UBI Techpark, Singapore',
    date: 'Nov 2024 – Feb 2026',
    bullets: [
      'Managed end-to-end CMMS and IoT implementations for ~10 enterprise and Singapore government clients including NUS, SIT, MOH, MHA, NTU, LTA, and MTI.',
      'Built Power BI dashboards using DAX measures and Power Query to track fault trends, SLA compliance, and operational KPIs — enabling data-driven facility management.',
      'Executed SQL-based bulk data uploads and data cleaning operations for asset, location, and operational datasets across multiple client environments.',
      'Delivered IoT deployments covering energy, water, BTU, and IAQ monitoring — onboarded Milesight UC300, HF2411, and RS485 gateways at LTA Buildings, Republic Plaza, and MTI.',
      'Translated complex stakeholder requirements into structured product specifications; coordinated delivery, operations, and engineering teams for on-time, on-scope delivery.',
      'Conducted competitor research on CMMS and facility management platforms to benchmark product features and inform roadmap discussions.',
    ],
    tags: ['Power BI', 'DAX', 'SQL', 'PostgreSQL', 'IoT', 'CMMS', 'Agile', 'JIRA', 'Stakeholder Management'],
  },
  {
    role: 'Software Tester & QA Analyst',
    company: 'Clarisco Pvt. Ltd.',
    location: 'Madurai, India',
    date: 'Jan 2022 – Nov 2024',
    bullets: [
      'Designed and executed test plans, test cases, and regression scenarios for centralised and decentralised cryptocurrency SaaS platforms.',
      'Performed functional testing across login flows, token purchase workflows, and smart contract deployments for blockchain-based products.',
      'Collaborated in Agile/Scrum sprints including sprint planning, standups, retrospectives, and backlog grooming to resolve defects efficiently.',
      'Conducted competitor benchmarking across Binance, Polygon, and Ethereum platforms to identify feature gaps and support product decisions.',
      'Delivered post-release client walkthroughs, validated acceptance criteria, and maintained requirement documentation aligned to business specs.',
    ],
    tags: ['QA Testing', 'Test Plans', 'Regression Testing', 'Blockchain SaaS', 'Agile', 'Scrum', 'JIRA'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-label">Career</div>
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-sub">
        4 years across IoT deployments, CMMS platforms, and blockchain SaaS — from QA to Product implementation lead.
      </p>

      <div className="timeline">
        {jobs.map((job, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-card">
              <div className="timeline-header">
                <div>
                  <div className="timeline-role">{job.role}</div>
                  <div className="timeline-company">{job.company}</div>
                </div>
                <div className="timeline-meta">
                  <span className="timeline-date">{job.date}</span>
                  <span className="timeline-loc">📍 {job.location}</span>
                </div>
              </div>
              <ul className="timeline-bullets">
                {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
              <div className="timeline-tags">
                {job.tags.map(t => <span key={t} className="chip chip-accent">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
