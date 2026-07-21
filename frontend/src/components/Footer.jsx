import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="footer__brand">
            <span>🦷</span> SS Dental Health
          </div>
          <p className="footer__tagline">friendly clinic</p>
          <p>
            Warm, gentle, modern dentistry for every smile in the family — from
            your first checkup to your brightest one yet.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/appointment">Book Appointment</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Clinic Hours</h4>
          <ul className="footer__hours">
            <li>
              <span>Mon – Sat</span>
              <span>9:00 AM – 5:00 PM</span>
            </li>
            <li>
              <span>Sunday</span>
              <span>10:00 AM – 2:00 PM</span>
            </li>
          </ul>
        </div>

        <div>
          <h4>Reach Us</h4>
          <ul className="footer__contact">
            <li>
              📍 2nd floor, Shasi Niketan, near Gyan Ganga, Kadamkuan, Patna,
              Bihar 800001
            </li>
            <li>📞 +91 93343 31889</li>
            <li>✉️ hello@ssdentalhealth.in</li>
          </ul>
        </div>
      </div>

      <div className="footer__social">
        <h4>Follow Us</h4>

        <div className="footer__social-links">
          <a
            href="https://www.instagram.com/your_username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            href="https://www.youtube.com/@your_channel"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <i className="fab fa-youtube"></i>
          </a>

          <a href="mailto:hello@ssdentalhealth.in" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} SS Dental Health. All rights reserved.
        </span>
        <span>Made with care, one smile at a time.</span>
      </div>
    </footer>
  );
}
