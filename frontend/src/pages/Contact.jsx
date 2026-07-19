import Reveal from "../components/Reveal";
import "../styles/Contact.css";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Get in Touch</span>
            <h1>We'd love to hear from you</h1>
            <p>Questions, feedback, or just want to say hi? Reach out anytime.</p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-section" style={{ background: "#fff" }}>
        <div className="container contact-grid">
          <Reveal className="contact-cards">
            <div className="contact-card">
              <span>📍</span>
              <div>
                <strong>Visit Us</strong>
                <p>2nd floor, Shasi Niketan, near Gyan Ganga, Kadamkuan, Patna, Bihar 800001</p>
              </div>
            </div>
            <div className="contact-card">
              <span>📞</span>
              <div>
                <strong>Call Us</strong>
                <p>+91 93343 31889</p>
              </div>
            </div>
            <div className="contact-card">
              <span>✉️</span>
              <div>
                <strong>Email Us</strong>
                <p>hello@ssdentalhealth.in</p>
              </div>
            </div>
            <div className="contact-card">
              <span>🕒</span>
              <div>
                <strong>Clinic Hours</strong>
                <p>Mon – Sat: 9 AM – 5 PM<br />Sunday: 10 AM – 2 PM</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={1} className="contact-map">
            <iframe
              title="SS Dental Health location"
              src="https://www.google.com/maps?q=25.607869,85.1487467&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
