import { FiMail, FiLinkedin, FiDownload } from 'react-icons/fi'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-inner">
        <span className="contact-avail">Available for New Roles in Singapore</span>

        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Let&apos;s work together.
        </h2>

        <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.8, marginTop: '0.5rem' }}>
          I&apos;m actively seeking <strong style={{ color: 'var(--text)' }}>Product Analyst</strong> and{' '}
          <strong style={{ color: 'var(--text)' }}>Data Analyst</strong> roles in Singapore.
          If you&apos;re building data-driven products and need someone who turns complex datasets into
          clear, actionable decisions — let&apos;s talk.
        </p>

        <div className="contact-links">
          <a href="mailto:thisiskarthi08@gmail.com" className="c-link primary">
            <FiMail size={15} /> thisiskarthi08@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/karthikeyan-m-3803a4252"
            target="_blank"
            rel="noopener noreferrer"
            className="c-link"
          >
            <FiLinkedin size={15} /> LinkedIn Profile
          </a>
          <a href="/Karthikeyan_ProductAnalyst_Resume_2.pdf" download className="c-link">
            <FiDownload size={15} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}
