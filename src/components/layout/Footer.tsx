import { site } from '../../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-links">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noreferrer noopener' : undefined}
            >
              {social.label}
            </a>
          ))}
        </div>
        <p className="footer-note">
          © {year} {site.name} — built with React, Three.js and too much coffee
        </p>
      </div>
    </footer>
  )
}
