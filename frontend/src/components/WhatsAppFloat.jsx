import "../styles/WhatsAppFloat.css";

export default function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/919876543210?text=Hi%20SS%20Dental%20Health%2C%20I%27d%20like%20to%20know%20more!"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="wa-float__ring" />
      <span className="wa-float__icon">💬</span>
    </a>
  );
}
