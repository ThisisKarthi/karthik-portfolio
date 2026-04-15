const projects = [
  {
    color: 'ca',
    status: 'Completed',
    statusCls: 'chip-green',
    name: 'Cold Storage IoT Analytics',
    desc: 'Analysed 30 days of Milesight LoRa sensor data from a cold-chain storage facility. Identified temperature anomalies, door-access patterns, battery health risks, and delivered 6 product-level recommendations using PostgreSQL and Python.',
    metrics: [
      { val: '22,866', lbl: 'Sensor Readings', cls: '' },
      { val: '5,678',  lbl: 'Alerts Detected', cls: 'am' },
      { val: '6',      lbl: 'Sensors Analysed', cls: 'gr' },
    ],
    tags: ['PostgreSQL', 'Python · Pandas', 'SQL Analytics', 'Chart.js', 'IoT · LoRa'],
  },
  {
    color: 'cb',
    status: 'In Progress',
    statusCls: 'chip-amber',
    name: 'Finance & Fraud Detection Analytics',
    desc: 'Building an end-to-end analytics pipeline on a 1M+ row Kaggle fraud detection dataset. Phases: PostgreSQL database setup, SQL analysis, Python data profiling with Pandas, Power BI dashboard with DAX measures, and portfolio presentation.',
    metrics: [
      { val: '1M+',  lbl: 'Dataset Rows',    cls: '' },
      { val: '6',    lbl: 'Project Phases',   cls: 'am' },
      { val: '2025', lbl: 'Active Build',     cls: 'gr' },
    ],
    tags: ['PostgreSQL', 'Python · Pandas', 'Power BI', 'DAX', 'DBeaver', 'Kaggle'],
  },
  {
    color: 'cc',
    status: 'Professional',
    statusCls: 'chip-accent',
    name: 'CMMS Power BI Dashboards',
    desc: 'Built operational KPI dashboards for enterprise and government clients across Singapore. Tracked fault trends, SLA compliance, and maintenance metrics using DAX measures and Power Query transformations. Clients include NUS, LTA, MOH, MHA, and NTU.',
    metrics: [
      { val: '10+', lbl: 'Dashboards',   cls: '' },
      { val: '7+',  lbl: 'Clients',      cls: 'am' },
      { val: 'SG',  lbl: 'Gov & Enterprise', cls: 'gr' },
    ],
    tags: ['Power BI', 'DAX', 'Power Query', 'Excel', 'CMMS', 'Facility Management'],
  },
  {
    color: 'cd',
    status: 'Professional',
    statusCls: 'chip-accent',
    name: 'IoT Sensor Network Deployments',
    desc: 'Deployed and commissioned Milesight IoT gateway networks at LTA Buildings, Republic Plaza, and MTI. Covered energy, water, BTU, and IAQ monitoring with full RS485 and LoRa sensor configuration, hardware onboarding, and on-site installation.',
    metrics: [
      { val: '3+', lbl: 'Sites Deployed',  cls: '' },
      { val: '4',  lbl: 'Sensor Types',    cls: 'am' },
      { val: 'SG', lbl: 'Gov Projects',    cls: 'gr' },
    ],
    tags: ['Milesight UC300', 'HF2411', 'RS485', 'LoRa Sensors', 'IAQ', 'BTU Monitoring'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-label">Work</div>
      <h2 className="section-title">Projects &amp; Case Studies</h2>
      <p className="section-sub">
        Personal analytics projects and professional delivery highlights — real data, real clients, real outcomes.
      </p>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <div key={i} className={`project-card ${p.color}`}>
            <div className="project-top">
              <h3 className="project-name">{p.name}</h3>
              <span className={`chip ${p.statusCls}`}>{p.status}</span>
            </div>

            <p className="project-desc">{p.desc}</p>

            <div className="project-metrics">
              {p.metrics.map((m, j) => (
                <div key={j}>
                  <span className={`metric-val ${m.cls}`}>{m.val}</span>
                  <span className="metric-lbl">{m.lbl}</span>
                </div>
              ))}
            </div>

            <div className="project-tags">
              {p.tags.map(t => <span key={t} className="chip chip-muted">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
