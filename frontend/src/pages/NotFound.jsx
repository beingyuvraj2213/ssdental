import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: "center", padding: "140px 24px" }}>
      <div style={{ fontSize: "4rem", marginBottom: 16 }}>🦷</div>
      <h1>Page not found</h1>
      <p style={{ maxWidth: 420, margin: "0 auto 24px" }}>
        Looks like this page wandered off. Let's get you back to a familiar smile.
      </p>
      <Link to="/" className="btn btn-primary">Back to Home</Link>
    </section>
  );
}
