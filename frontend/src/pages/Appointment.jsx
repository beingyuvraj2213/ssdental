import { useState } from "react";
import Reveal from "../components/Reveal";
import { services } from "../data/clinicData";
import "../styles/Appointment.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: services[0].title,
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function Appointment() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`${API_URL}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Could not book appointment");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again or call us directly.");
    }
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Book an Appointment</span>
            <h1>Let's find you a friendly time slot</h1>
            <p>Fill in your details below — we'll call you shortly to confirm.</p>
          </Reveal>
        </div>
      </section>

      <section className="section appointment-section" style={{ background: "#fff" }}>
        <div className="container appointment-grid">
          <Reveal className="appointment-info">
            <h2>What happens next?</h2>
            <ol className="appointment-steps">
              <li>
                <span className="appointment-steps__num">1</span>
                <div>
                  <strong>You submit the form</strong>
                  <p>Takes less than a minute — no login required.</p>
                </div>
              </li>
              <li>
                <span className="appointment-steps__num">2</span>
                <div>
                  <strong>We get notified instantly</strong>
                  <p>Our front desk receives your request right away on WhatsApp.</p>
                </div>
              </li>
              <li>
                <span className="appointment-steps__num">3</span>
                <div>
                  <strong>We call to confirm</strong>
                  <p>Expect a call within a few hours during clinic hours to lock your slot.</p>
                </div>
              </li>
            </ol>

            <div className="appointment-info__contact">
              <p>Prefer to talk right away?</p>
              <a href="tel:+919876543210" className="btn btn-ghost btn-block">📞 Call +91 98765 43210</a>
            </div>
          </Reveal>

          <Reveal delay={1} className="appointment-form-wrap">
            {status === "success" ? (
              <div className="appointment-success">
                <div className="appointment-success__check">
                  <svg viewBox="0 0 52 52">
                    <circle cx="26" cy="26" r="24" fill="none" />
                    <path fill="none" d="M14 27l7 7 16-16" />
                  </svg>
                </div>
                <h3>Appointment request received!</h3>
                <p>Thank you — you'll soon get a call from our team to confirm your slot.</p>
                <button className="btn btn-primary" onClick={() => setStatus("idle")}>
                  Book another appointment
                </button>
              </div>
            ) : (
              <form className="appointment-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <label>
                    Full Name*
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                    />
                  </label>
                  <label>
                    Phone Number*
                    <input
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9+ ]{7,15}"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="98765 43210"
                    />
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Email (optional)
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </label>
                  <label>
                    Service Needed*
                    <select name="service" required value={form.service} onChange={handleChange}>
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className="form-row">
                  <label>
                    Preferred Date*
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      min={todayStr}
                      value={form.preferredDate}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Preferred Time*
                    <input
                      type="time"
                      name="preferredTime"
                      required
                      value={form.preferredTime}
                      onChange={handleChange}
                    />
                  </label>
                </div>

                <label>
                  Anything we should know? (optional)
                  <textarea
                    name="message"
                    rows="3"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="e.g. tooth pain since 2 days, previous X-rays, etc."
                  />
                </label>

                {status === "error" && <p className="appointment-form__error">{errorMsg}</p>}

                <button className="btn btn-primary btn-block" type="submit" disabled={status === "loading"}>
                  {status === "loading" ? <span className="spinner" /> : "Book Appointment"}
                </button>

                <p className="appointment-form__note">
                  By booking, you agree to receive a confirmation call from SS Dental Health.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
