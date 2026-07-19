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
            Warm, gentle, modern dentistry for every smile in the family — from your
            first checkup to your brightest one yet.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/appointment">Book Appointment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Clinic Hours</h4>
          <ul className="footer__hours">
            <li><span>Mon – Sat</span><span>9:00 AM – 8:00 PM</span></li>
            <li><span>Sunday</span><span>10:00 AM – 2:00 PM</span></li>
          </ul>
        </div>

        <div>
          <h4>Reach Us</h4>
          <ul className="footer__contact">
            <li>📍 123 MG Road, Patna, Bihar</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ hello@ssdentalhealth.in</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>© {new Date().getFullYear()} SS Dental Health. All rights reserved.</span>
        <span>Made with care, one smile at a time.</span>
      </div>
    </footer>
  );
}
