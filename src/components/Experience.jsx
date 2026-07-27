const jobs = [
  {
    role: 'Business Analyst & Implementation Lead',
    company: 'Aptiv8 IT Solutions',
    location: 'UBI Techpark, Singapore',
    date: 'Nov 2024 – Feb 2026',
    bullets: [
      'Elicited and documented requirements from 10 Singapore government and enterprise clients (NUS, SIT, SUPCT, MOH, MHA, NTU, LTA, MTI, Republic Plaza, ST Logistics) via stakeholder interviews, workshops, and JAD sessions — producing BRDs, FRDs, use cases, user stories, and acceptance criteria, reducing requirement change requests by ~30% post-sign-off.',
      'Maintained a Requirements Traceability Matrix (RTM) across the full SDLC, achieving 100% requirement coverage and zero missed deliverables across all client engagements.',
      'Managed 2 parallel implementation streams (CMMS and IoT-enabled CMMS) covering maintenance workflows, purchase orders, and asset/location management — delivered on time for all 10 clients.',
      'Facilitated sprint planning and backlog grooming across Agile sprints, contributing to a 20% reduction in sprint carry-overs through clear acceptance criteria.',
      'Executed SQL-based bulk data uploads and cleaning for asset and location datasets across 10 client environments, reducing data migration errors by ~40%.',
      'Delivered IoT deployments covering energy, water, BTU, and IAQ monitoring — onboarded Milesight UC300, HF2411, and RS485 gateways at LTA Buildings, Republic Plaza, and MTI.',
      'Led end-to-end UAT for all 10 clients; authored test cases and acceptance criteria resulting in zero critical defects at go-live, with sign-off on first submission in 8 of 10 projects.',
      'Conducted competitor benchmarking across 5+ CMMS platforms, producing insights that directly informed 3 product roadmap decisions.',
    ],
    tags: ['BRD/FRD', 'RTM', 'Agile', 'SQL', 'Power BI', 'IoT', 'CMMS', 'Stakeholder Management', 'UAT'],
  },
  {
    role: 'Business Analyst & QA Analyst — Blockchain Product Division',
    company: 'Clarisco Pvt. Ltd.',
    location: 'Madurai, India',
    date: 'Nov 2022 – Oct 2024',
    bullets: [
      'Blockchain & DApps Platform: analysed requirements for 2 blockchain platforms (centralised exchange + DApps), translating business needs into structured test cases and acceptance criteria covering 200+ scenarios; reduced defect leakage to production by ~35%.',
      'Patient Support Program (Healthcare CRM): translated complex clinical workflows into BRDs/FRDs and user stories; reduced turnaround time by 18% while maintaining healthcare data privacy compliance and 100% requirement coverage via RTM.',
      'HRMS (ERP): gathered cross-functional HR requirements into BRDs, FRDs, and process flow diagrams; reduced HR processing time by 30% through workflow optimisation and process re-engineering.',
      'Coordinated stakeholder sign-off and defect resolution via JIRA and Postman, maintaining traceability across 15+ releases with bug-free delivery on all major milestones.',
      'Conducted competitor benchmarking across Binance, Polygon, and Ethereum, identifying 10+ feature gaps that informed backlog prioritisation.',
    ],
    tags: ['BRD/FRD', 'RTM', 'MoSCoW', 'JIRA', 'SQL', 'Agile', 'UAT', 'Healthcare', 'HRMS'],
    variant: 'cb',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-label">Career</div>
      <h2 className="section-title">Professional Experience</h2>
      <p className="section-sub">
        3.2+ years across CMMS/IoT platforms, blockchain SaaS, healthcare CRM, and HRMS — from requirements to UAT and go-live.
      </p>

      <div className="timeline">
        {jobs.map((job, i) => (
          <div key={i} className={`timeline-item ${job.variant || ''}`}>
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
