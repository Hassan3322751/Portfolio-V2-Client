import React from "react";

import { socials } from "../../data/portfolio";

const icons = {
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21h-4z" />
    </svg>
  ),
  WhatsApp: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3 3z" />
      <path d="M9 9c.5 2 2 3.5 4 4l1.2-1.2 2 1-.4 1.6c-3.5.3-7.5-3.7-7.2-7.2l1.6-.4 1 2z" />
    </svg>
  ),
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  ),
};

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <span>© 2026 Hassan Raza. All rights reserved.</span>
        <div className="socials">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
            >
              {icons[social.label]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
