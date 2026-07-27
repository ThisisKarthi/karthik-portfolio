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
          Business Analyst · Singapore · Open to Opportunities
        </span>

        <h1>
          Turning <span className="grad">complex requirements</span>
          <br />into delivered products.
        </h1>

        <p className="hero-desc">
          Business Analyst &amp; Implementation Lead with 3.2+ years across IoT-enabled
          CMMS platforms, ERP/CRM, and blockchain/DApps applications for Singapore
          Government bodies and global enterprise clients — from requirements
          elicitation and BRDs/FRDs through UAT, delivery, and BI reporting.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">
            View My Work <FiArrowRight size={15} />
          </a>
          <a href="/Karthikeyan_BusinessAnalyst_Resume.pdf" download className="btn-outline">
            <FiDownload size={15} /> Download Resume
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <span className="stat-num">3.2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div>
            <span className="stat-num">10+</span>
            <span className="stat-label">Government &amp; Enterprise Clients</span>
          </div>
          <div>
            <span className="stat-num">100%</span>
            <span className="stat-label">Requirement Coverage (RTM)</span>
          </div>
          <div>
            <span className="stat-num">15+</span>
            <span className="stat-label">Releases Delivered</span>
          </div>
        </div>
      </div>
    </section>
  )
}
