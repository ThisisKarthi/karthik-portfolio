import { FiArrowRight, FiDownload } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid" />
      <div className="hero-orb1" />
      <div className="hero-orb2" />

      <div className="hero-content">
        <span className="hero-tag">
          <span className="hero-dot" />
          Product Analyst · Singapore · Open to Opportunities
        </span>

        <h1>
          Turning <span className="grad">IoT &amp; SaaS data</span>
          <br />into product decisions.
        </h1>

        <p className="hero-desc">
          Product Analyst &amp; Implementation Lead with 4+ years delivering end-to-end
          implementations for Singapore government and enterprise clients. I bridge
          raw operational data and strategic decisions — through Power BI dashboards,
          SQL analysis, and product thinking.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            View My Work <FiArrowRight size={15} />
          </a>
          <a href="/Karthikeyan_ProductAnalyst_Resume_2.pdf" download className="btn-outline">
            <FiDownload size={15} /> Download Resume
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <span className="stat-num">4+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div>
            <span className="stat-num">13+</span>
            <span className="stat-label">Enterprise Clients</span>
          </div>
          <div>
            <span className="stat-num">22K+</span>
            <span className="stat-label">Data Points Analysed</span>
          </div>
          <div>
            <span className="stat-num">10+</span>
            <span className="stat-label">Dashboards Built</span>
          </div>
        </div>
      </div>
    </section>
  )
}
