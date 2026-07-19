import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { services } from "../data/clinicData";
import "../styles/Services.css";

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Our Services</span>
            <h1>Complete dental care, done gently</h1>
            <p>
              Every treatment is explained before we start, and every step is done at a
              pace that keeps you comfortable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div className="container services-grid">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) + 1} className="service-card">
              <div className="service-card__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to="/appointment" className="service-card__link">
                Book this service →
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta__inner">
          <Reveal>
            <h2>Not sure which treatment you need?</h2>
            <p>Book a checkup and let our doctors guide you — no pressure, honest advice.</p>
            <Link to="/appointment" className="btn btn-primary">Book an Appointment</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
