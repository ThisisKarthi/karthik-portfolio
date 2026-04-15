const sectors = [
  {
    title: 'Singapore Government Agencies',
    type: 'govt',
    clients: [
      'Ministry of Health (MOH)',
      'Ministry of Home Affairs (MHA)',
      'Land Transport Authority (LTA)',
      'Ministry of Trade & Industry (MTI)',
    ],
  },
  {
    title: 'Universities & Research Institutions',
    type: 'edu',
    clients: [
      'National University of Singapore (NUS)',
      'Nanyang Technological University (NTU)',
      'Singapore Institute of Technology (SIT)',
      'SUTD',
    ],
  },
  {
    title: 'Enterprise & Commercial',
    type: 'ent',
    clients: [
      'ST Logistics',
      'SAESL',
      'Republic Plaza',
      'MASERS',
      'SMITECH',
      'Society for the Aged Sick',
    ],
  },
]

export default function Clients() {
  return (
    <section id="clients" className="clients">
      <div className="section-label">Clients</div>

      <div className="clients-hero">
        <span className="clients-big">13+</span>
        <div>
          <h2 className="section-title">Enterprise &amp; Government Clients</h2>
          <p className="section-sub" style={{ marginBottom: 0 }}>
            Delivered end-to-end CMMS and IoT implementations across Singapore's
            public sector, leading universities, and private enterprise — covering
            requirement gathering, configuration, UAT, and post-delivery demos.
          </p>
        </div>
      </div>

      <div className="clients-sectors">
        {sectors.map(sector => (
          <div key={sector.title}>
            <div className="sector-label">{sector.title}</div>
            <div className="client-cards">
              {sector.clients.map(client => (
                <div key={client} className={`client-card ${sector.type}`}>
                  {client}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
