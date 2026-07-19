import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <span className="navbar__logo">🦷</span>
          <span className="navbar__brand-text">
            SS Dental Health
            <small>friendly clinic</small>
          </span>
        </Link>

        <nav className={`navbar__links ${open ? "navbar__links--open" : ""}`}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) => `navbar__link ${isActive ? "is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/appointment" className="btn btn-primary navbar__cta" onClick={() => setOpen(false)}>
            Book Appointment
          </Link>
        </nav>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
