import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SmileDivider from "../components/SmileDivider";
import { owner, doctors, interns } from "../data/clinicData";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <section className="page-hero page-hero--about">
        <div className="container">
          <Reveal>
            <span className="eyebrow">About SS Dental Health</span>
            <h1>The friendly clinic behind your best smile</h1>
            <p>
              What started as a single-chair practice has grown into a full dental team —
              but our promise hasn't changed: every patient leaves feeling cared for, not
              just treated.
            </p>
          </Reveal>
        </div>
      </section>

      <SmileDivider color="#ffffff" />

      {/* ---------- STORY ---------- */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container story__grid">
          <Reveal className="story__art">
            <div className="story__frame">🦷</div>
          </Reveal>
          <Reveal delay={1} className="story__copy">
            <span className="eyebrow">Our Story</span>
            <h2>Built on one simple belief</h2>
            <p>
              SS Dental Health was founded to remove the fear from dentistry. We invested
              early in modern, low-discomfort equipment and — just as importantly — in a
              team that communicates clearly and treats every patient like a neighbour,
              not a case number.
            </p>
            <p>
              Today we run monthly free checkup camps, train the next generation of
              dentists through our internship programme, and treat everyone from
              first-time toddlers to long-time regulars under one friendly roof.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- OWNER ---------- */}
      <section className="section owner-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Founder</span>
            <h2>Meet the person behind the practice</h2>
          </Reveal>

          <Reveal delay={1} className="owner-card">
            <img src={owner.photo} alt={owner.name} />
            <div className="owner-card__body">
              <h3>{owner.name}</h3>
              <span className="owner-card__role">{owner.role}</span>
              <span className="owner-card__quals">{owner.qualifications}</span>
              <p>{owner.bio}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <SmileDivider flip color="#ffffff" />

      {/* ---------- DOCTORS ---------- */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Our Doctors</span>
            <h2>Specialists who genuinely enjoy what they do</h2>
          </Reveal>

          <div className="team-grid">
            {doctors.map((d, i) => (
              <Reveal key={d.name} delay={(i % 4) + 1} className="team-card">
                <div className="team-card__photo">
                  <img src={d.photo} alt={d.name} />
                </div>
                <h4>{d.name}</h4>
                <span className="team-card__role">{d.role}</span>
                <span className="team-card__quals">{d.qualifications}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- INTERNS ---------- */}
      <section className="section interns-section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Current Interns</span>
            <h2>Training tomorrow's gentle dentists</h2>
            <p>Our interns work directly under senior doctors on every case they assist.</p>
          </Reveal>

          <div className="team-grid team-grid--interns">
            {interns.map((it, i) => (
              <Reveal key={it.name} delay={(i % 3) + 1} className="team-card team-card--intern">
                <div className="team-card__photo">
                  <img src={it.photo} alt={it.name} />
                </div>
                <h4>{it.name}</h4>
                <span className="team-card__role">{it.role}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta__inner">
          <Reveal>
            <h2>Ready to meet the team in person?</h2>
            <p>Book a slot and experience the friendly-clinic difference.</p>
            <Link to="/appointment" className="btn btn-primary">Book an Appointment</Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
