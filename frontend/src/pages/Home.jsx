import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SmileDivider from "../components/SmileDivider";
import { services, offers, testimonials, stats, doctors } from "../data/clinicData";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <Reveal>
              <span className="eyebrow">🦷 SS Dental Health</span>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="hero__title">
                Dental care that actually feels <span className="hero__title-accent">friendly.</span>
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="hero__subtitle">
                From routine checkups to complete smile makeovers, our team treats every
                patient like family — gentle hands, honest advice, zero judgement.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <div className="hero__actions">
                <Link to="/appointment" className="btn btn-primary">
                  Book an Appointment
                </Link>
                <Link to="/services" className="btn btn-ghost">
                  Explore Services
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={2} className="hero__art-wrap">
            <div className="hero__art">
              <div className="hero__blob" />
              <div className="hero__tooth">🦷</div>
              <div className="hero__badge hero__badge--1">
                <span>✨</span> Painless treatments
              </div>
              <div className="hero__badge hero__badge--2">
                <span>⭐</span> 4.9/5 patient rating
              </div>
            </div>
          </Reveal>
        </div>

        <div className="hero__stats container">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={(i % 4) + 1} className="hero__stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <SmileDivider color="#ffffff" />

      {/* ---------- OFFERS / CAMP ---------- */}
      <section className="section offers">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Happening Now</span>
            <h2>Offers &amp; Free Checkup Camps</h2>
            <p>Because good dental care shouldn't be out of reach.</p>
          </Reveal>

          <div className="offers__grid">
            {offers.map((o, i) => (
              <Reveal key={o.title} delay={(i % 3) + 1} className="offer-card">
                <div className="offer-card__icon">{o.icon}</div>
                <span className="offer-card__tag">{o.tag}</span>
                <h3>{o.title}</h3>
                <p>{o.desc}</p>
                <Link to="/appointment" className="offer-card__link">
                  Claim this offer →
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY CHOOSE US ---------- */}
      <section className="section why">
        <div className="container why__grid">
          <Reveal className="why__copy">
            <span className="eyebrow">Why Patients Choose Us</span>
            <h2>Expert care, without the clinical coldness</h2>
            <p>
              We've built SS Dental Health around one belief — feeling comfortable is
              part of getting better care. That shows up in everything, from how we
              greet you to how we explain your treatment.
            </p>
            <ul className="why__list">
              <li>🩺 Modern, sterilized equipment for every procedure</li>
              <li>🗣️ Doctors who explain, not just diagnose</li>
              <li>⏱️ On-time appointments, minimal waiting</li>
              <li>👨‍👩‍👧 Friendly for kids, seniors and everyone in between</li>
            </ul>
            <Link to="/about" className="btn btn-primary">Meet Our Team</Link>
          </Reveal>

          <Reveal delay={2} className="why__doctors">
            {doctors.slice(0, 3).map((d) => (
              <div className="why__doctor-card" key={d.name}>
                <img src={d.photo} alt={d.name} />
                <div>
                  <strong>{d.name}</strong>
                  <span>{d.role}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <SmileDivider flip color="#ffffff" />

      {/* ---------- SERVICES PREVIEW ---------- */}
      <section className="section services-preview" style={{ background: "#fff" }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What We Treat</span>
            <h2>Complete dental care, under one roof</h2>
          </Reveal>

          <div className="services-preview__grid">
            {services.slice(0, 8).map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) + 1} className="service-mini-card">
                <div className="service-mini-card__icon">{s.icon}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="services-preview__cta">
            <Link to="/services" className="btn btn-outline btn-outline--dark">
              View All Services
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- TESTIMONIALS ---------- */}
      <section className="section testimonials">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Patient Stories</span>
            <h2 style={{ color: "#fff" }}>Smiles we've helped along the way</h2>
          </Reveal>

          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) + 1} className="testimonial-card">
                <div className="testimonial-card__stars">{"★".repeat(t.rating)}</div>
                <p>"{t.text}"</p>
                <strong>— {t.name}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="section final-cta">
        <div className="container final-cta__inner">
          <Reveal>
            <h2>Your friendliest dental visit starts here.</h2>
            <p>Book in under a minute — we'll call to confirm your slot.</p>
            <Link to="/appointment" className="btn btn-primary">
              Book an Appointment
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
