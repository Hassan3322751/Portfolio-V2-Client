import React, { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Reviews" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="wrap">
        <div className="bar">
          <a className="logo" href="#home" onClick={close}>
            Hassan<span>.</span>
          </a>
          <nav className={`links ${open ? "open" : ""}`} aria-label="Main">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              type="button"
              className="nav-toggle"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
            <a className="btn btn-primary btn-sm" href="#contact" onClick={close}>
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
